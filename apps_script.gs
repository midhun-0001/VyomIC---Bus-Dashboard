// ============================================================================
// VYOMIC Platform Comparator — Google Sheets REST API
// ============================================================================
// Deploy as Web App:  Run → Deploy → New deployment → Web app
// Set: Execute as "Me", Access "Anyone"
// Copy the Web App URL and paste into app.js as GSHEET_URL
// ============================================================================

const SHEET_ID = '1DP1f4O8XdoU1OgE-Me61ytI7bqQA9XBaQp8dC4Q2xeA';

// ── doGet / doPost ──────────────────────────────────────────────────────────

function doGet(e) {
  const tab = e.parameter.tab || 'all';
  const callback = e.parameter.callback || '';
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const result = { success: true };

  try {
    if (tab === 'buses' || tab === 'all') {
      result.buses = readSheet(ss, 'buses');
    }
    if (tab === 'compliance' || tab === 'all') {
      result.compliance = readCompliance(ss);
    }
    if (tab === 'interactions' || tab === 'all') {
      result.interactions = readSheet(ss, 'interactions');
    }
  } catch (e) {
    result.success = false;
    result.error = e.message;
  }

  const output = JSON.stringify(result);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + output + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const tab = e.parameter.tab || 'all';
  var raw = e.parameter.data || (e.postData ? e.postData.contents : '{}');
  const data = JSON.parse(raw);
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const result = { success: true };

  try {
    if ((tab === 'buses' || tab === 'all') && data.buses) {
      writeSheet(ss, 'buses', data.buses);
    }
    if ((tab === 'compliance' || tab === 'all') && data.compliance) {
      writeCompliance(ss, data.compliance);
    }
    if ((tab === 'interactions' || tab === 'all') && data.interactions) {
      writeSheet(ss, 'interactions', data.interactions);
    }
  } catch (e) {
    result.success = false;
    result.error = e.message;
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Sheet helpers ───────────────────────────────────────────────────────────

function ensureSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers) sheet.appendRow(headers);
  }
  return sheet;
}

function readSheet(ss, name) {
  const sheet = ss.getSheetByName(name);
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];
  const headers = rows[0].map(h => normalizeHeader_(h));
  const result = [];
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (row.every(c => c === '' || c === null || c === undefined)) continue;
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    result.push(obj);
  }
  return result;
}

function normalizeHeader_(header) {
  var map = {
    "company": "company", "country": "country", "platform": "platform",
    "mass": "platformMass", "volume": "platformVolume",
    "power": "payloadPower", "power (oap)": "payloadPower",
    "payload mass": "payloadMass", "payload volume": "payloadVolume",
    "orbit": "orbit", "lifetime": "lifetime",
    "pointing acc": "pointingAcc", "pointing accuracy": "pointingAcc",
    "pointing stability": "pointingStability",
    "pointing knowledge": "pointingKnowledge",
    "position knowledge": "positionKnowledge",
    "pointing control": "pointingControl",
    "slewing": "slewing", "propulsion": "propulsion",
    "data interface": "dataInterface", "encryption": "encryption",
    "downlink": "downlink", "tc/tm": "tcTm",
    "voltage": "powerVoltage", "voltage / power ava": "powerVoltage",
    "rideshare adp": "rideshare", "rideshare": "rideshare",
    "solar array": "solarArray", "storage": "storage",
    "lead time": "leadTime", "cost": "cost",
    "data sheet": "datasheet", "datasheet": "datasheet",
    "heritage": "heritage", "remarks": "remarks"
  };
  var key = String(header).toLowerCase().trim();
  if (map[key]) return map[key];
  return key.replace(/[^a-z0-9]+(.)/g, function(_, c) { return c.toUpperCase(); })
            .replace(/^[a-z]/, function(c) { return c; });
}

function writeSheet(ss, name, data) {
  if (!Array.isArray(data) || !data.length) return;
  const headers = Object.keys(data[0]);
  const sheet = ensureSheet_(ss, name, headers);
  sheet.clearContents();
  const rows = [headers];
  data.forEach(item => {
    rows.push(headers.map(h => item[h] !== undefined ? item[h] : ''));
  });
  const range = sheet.getRange(1, 1, rows.length, headers.length);
  range.setValues(rows);
}

function readCompliance(ss) {
  const sheet = ss.getSheetByName('compliance');
  if (!sheet) return {};
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return {};
  const obj = {};
  for (let r = 1; r < rows.length; r++) {
    const key = rows[r][0];
    const val = rows[r][1];
    if (key) {
      try { obj[key] = JSON.parse(val); } catch (_) { obj[key] = val || {}; }
    }
  }
  return obj;
}

function writeCompliance(ss, data) {
  if (!data || typeof data !== 'object') return;
  const sheet = ensureSheet_(ss, 'compliance', ['key', 'data']);
  sheet.clearContents();
  const rows = [['key', 'data']];
  Object.keys(data).forEach(key => {
    rows.push([key, JSON.stringify(data[key])]);
  });
  const range = sheet.getRange(1, 1, rows.length, 2);
  range.setValues(rows);
}

// ── Company Map (from sheet) ────────────────────────────────────────────────
// Read the "company_map" tab: columns = domain | company
// e.g.  rocketlab.com | Rocket Lab

function readCompanyMap_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('company_map');
  if (!sheet) return {};
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return {};
  var map = {};
  for (var r = 1; r < rows.length; r++) {
    var domain = String(rows[r][0]).toLowerCase().trim();
    var company = String(rows[r][1]).trim();
    if (domain && company) {
      map[domain] = company;
    }
  }
  return map;
}

function matchCompany_(from, subject, companyMap) {
  var text = (from + ' ' + subject).toLowerCase();
  var domains = Object.keys(companyMap);
  for (var d = 0; d < domains.length; d++) {
    if (text.indexOf(domains[d]) !== -1) return companyMap[domains[d]];
  }
  return '';
}

// ── Gemini AI Summary ───────────────────────────────────────────────────────

function summarizeEmail_(from, subject, body) {
  var apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!apiKey) return '(AI summary unavailable — set GEMINI_API_KEY in Script Properties)';

  var prompt = 'Summarize this email in 2-3 short sentences. Focus on what the sender wants and any action items. Email from: ' + from + '\nSubject: ' + subject + '\nBody: ' + (body || '').substring(0, 1500);

  var payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { maxOutputTokens: 200, temperature: 0.3 }
  };

  try {
    var response = UrlFetchApp.fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey,
      {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      }
    );
    var json = JSON.parse(response.getContentText());
    if (json.candidates && json.candidates[0] && json.candidates[0].content && json.candidates[0].content.parts) {
      return json.candidates[0].content.parts[0].text.trim();
    }
    return '(no summary returned)';
  } catch (err) {
    Logger.log('Gemini error: ' + err.message);
    return '(AI summary failed: ' + err.message + ')';
  }
}

// ── Email Inbox Automation ──────────────────────────────────────────────────

/**
 * Main entry point for the hourly trigger.
 * Runs checkEmails then processInbox independently so one failure
 * doesn't block the other.
 */
function hourlySync() {
  var scanned = 0;
  var processed = 0;
  try { scanned = checkEmails(); } catch (e) { Logger.log('checkEmails error: ' + e.message); }
  try { processed = processInbox(); } catch (e) { Logger.log('processInbox error: ' + e.message); }
  Logger.log('hourlySync done — scanned: ' + scanned + ', processed: ' + processed);
}

/**
 * Scan Gmail for new emails from known companies, save to mail_inbox tab.
 * Only calls Gemini for company-matched emails (cost guard).
 * Returns number of new emails found.
 */
function checkEmails() {
  var companyMap = readCompanyMap_();
  if (!Object.keys(companyMap).length) {
    Logger.log('No company_map entries found — skipping Gmail scan.');
    return 0;
  }

  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ensureSheet_(ss, 'mail_inbox', ['id', 'date', 'from', 'email', 'subject', 'snippet', 'company', 'processed', 'summary']);

  // Collect existing email IDs to avoid duplicates
  var existing = sheet.getDataRange().getValues();
  var existingIds = {};
  for (var r = 1; r < existing.length; r++) {
    if (existing[r][0]) existingIds[existing[r][0]] = true;
  }

  // Search Gmail (last 30 days, up to 50 threads)
  var threads = GmailApp.search('in:inbox newer_than:30d', 0, 50);
  var newRows = [];

  for (var t = 0; t < threads.length; t++) {
    var msgs = threads[t].getMessages();
    for (var m = 0; m < msgs.length; m++) {
      var msg = msgs[m];
      var id = msg.getId();
      if (existingIds[id]) continue;

      var from = msg.getFrom();
      var email = extractEmail_(from);
      var subject = msg.getSubject();
      var body = msg.getPlainBody() || '';
      var snippet = body.substring(0, 250).replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
      var date = Utilities.formatDate(msg.getDate(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
      var company = matchCompany_(from, subject, companyMap);

      // Only call Gemini for company-matched emails (cost/rate guard)
      var summary = '';
      if (company) {
        summary = summarizeEmail_(from, subject, body);
      }

      newRows.push([id, date, from, email, subject, snippet, company, false, summary]);
    }
  }

  if (newRows.length) {
    var range = sheet.getRange(existing.length + 1, 1, newRows.length, 9);
    range.setValues(newRows);
  }

  Logger.log('checkEmails: ' + newRows.length + ' new emails found');
  return newRows.length;
}

/**
 * Process unprocessed inbox rows: create interaction entries in the interactions tab.
 * Uses Gemini summary if available, else raw snippet.
 * Returns number of interactions created.
 */
function processInbox() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const inboxSheet = ss.getSheetByName('mail_inbox');
  if (!inboxSheet) return 0;
  const inboxRows = inboxSheet.getDataRange().getValues();
  if (inboxRows.length < 2) return 0;

  const h = inboxRows[0];
  var idIdx = -1, dateIdx = -1, fromIdx = -1, subjIdx = -1, snipIdx = -1, coIdx = -1, procIdx = -1, summIdx = -1;
  for (var i = 0; i < h.length; i++) {
    var hl = String(h[i]).toLowerCase().trim();
    if (hl === 'id') idIdx = i;
    else if (hl === 'date') dateIdx = i;
    else if (hl === 'from') fromIdx = i;
    else if (hl === 'subject' || hl === 'subj') subjIdx = i;
    else if (hl === 'snippet') snipIdx = i;
    else if (hl === 'company') coIdx = i;
    else if (hl === 'processed') procIdx = i;
    else if (hl === 'summary') summIdx = i;
  }
  if (idIdx < 0 || coIdx < 0 || procIdx < 0) return 0;

  var unprocessed = [];
  for (var r = 1; r < inboxRows.length; r++) {
    var row = inboxRows[r];
    var processed = row[procIdx];
    var isProcessed = processed === true || processed === 'TRUE' || processed === 'Yes';
    if (!isProcessed && row[coIdx]) {
      unprocessed.push({
        row: r,
        id: String(row[idIdx]),
        date: row[dateIdx],
        from: row[fromIdx],
        subject: row[subjIdx],
        snippet: row[snipIdx],
        company: row[coIdx],
        summary: summIdx >= 0 ? row[summIdx] : ''
      });
    }
  }
  if (!unprocessed.length) return 0;

  // Read existing interactions to merge
  var intSheet = ensureSheet_(ss, 'interactions', ['id', 'company', 'date', 'time', 'type', 'subject', 'notes', 'followUp', 'followUpDone']);
  var intData = intSheet.getDataRange().getValues();
  var existing = [];
  for (var r = 1; r < intData.length; r++) {
    var obj = {};
    for (var c = 0; c < intData[r].length && c < intData[0].length; c++) {
      obj[String(intData[0][c]).toLowerCase()] = intData[r][c];
    }
    existing.push(obj);
  }

  // Build a set of existing IDs to prevent duplicates
  var existingIds = {};
  for (var x = 0; x < existing.length; x++) {
    if (existing[x].id) existingIds[existing[x].id] = true;
  }

  // Add new interactions from unprocessed emails
  var now = new Date();
  var added = 0;
  for (var u = 0; u < unprocessed.length; u++) {
    var em = unprocessed[u];
    var intId = 'email_' + em.id.replace(/[^a-zA-Z0-9_-]/g, '_');
    if (existingIds[intId]) continue;

    // Use Gemini summary if available, else fall back to raw snippet
    var notes;
    if (em.summary && em.summary.indexOf('AI summary unavailable') === -1 && em.summary.indexOf('AI summary failed') === -1) {
      notes = '📧 AI Summary:\n' + em.summary + '\n\nFrom: ' + (em.from || '');
    } else {
      notes = '📧 Email from: ' + (em.from || '') + '\n' + ((em.snippet || '').substring(0, 300));
    }

    existing.push({
      id: intId,
      company: em.company,
      date: em.date || Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd'),
      time: '',
      type: 'Email',
      subject: em.subject || '(no subject)',
      notes: notes,
      followup: '',
      followupdone: false
    });
    added++;
  }

  // Write back all interactions
  var newHeaders = ['id', 'company', 'date', 'time', 'type', 'subject', 'notes', 'followUp', 'followUpDone'];
  intSheet.clearContents();
  var outRows = [newHeaders];
  for (var x = 0; x < existing.length; x++) {
    var eo = existing[x];
    outRows.push(newHeaders.map(function(hh) {
      var val = eo[hh.toLowerCase()];
      return val !== undefined && val !== null ? val : '';
    }));
  }
  intSheet.getRange(1, 1, outRows.length, newHeaders.length).setValues(outRows);

  // Mark processed in inbox
  for (var u = 0; u < unprocessed.length; u++) {
    inboxSheet.getRange(unprocessed[u].row + 1, procIdx + 1).setValue(true);
  }

  Logger.log('processInbox: ' + added + ' interactions created');
  return added;
}

function extractEmail_(from) {
  var match = from.match(/<([^>]+)>/);
  return match ? match[1] : from;
}

// ── Trigger Setup ───────────────────────────────────────────────────────────

/**
 * Run this ONCE in the Apps Script editor to set up hourly auto-sync.
 * It scans Gmail and files matched emails as interactions every hour.
 */
function setupTrigger() {
  // Remove existing hourlySync / processInbox / checkEmails triggers (avoid duplicates)
  var triggers = ScriptApp.getProjectTriggers();
  var targets = ['hourlySync', 'processInbox', 'checkEmails'];
  for (var i = 0; i < triggers.length; i++) {
    var fn = triggers[i].getHandlerFunction();
    if (targets.indexOf(fn) !== -1) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  // Create hourly trigger pointing at hourlySync
  ScriptApp.newTrigger('hourlySync')
    .timeBased()
    .everyHours(1)
    .create();
  Logger.log('Hourly trigger created for hourlySync()');
}

// ── Bulk interaction setup ──────────────────────────────────────────────────

/**
 * Run this ONCE to seed initial interactions for all companies.
 * European companies get a 17 Jul interaction, American companies get 21 Jul.
 * Skips companies that already have interactions.
 */
function setupInteractions() {
  var ss = SpreadsheetApp.openById(SHEET_ID);

  // Read companies from buses sheet
  var busSheet = ss.getSheetByName('buses');
  if (!busSheet) { Logger.log('No buses sheet found'); return; }
  var busData = busSheet.getDataRange().getValues();
  if (busData.length < 2) { Logger.log('No bus data'); return; }

  // Find company and country column indices
  var headers = busData[0];
  var coIdx = -1, countryIdx = -1;
  for (var i = 0; i < headers.length; i++) {
    var h = String(headers[i]).toLowerCase().trim();
    if (h === 'company') coIdx = i;
    if (h === 'country') countryIdx = i;
  }
  if (coIdx < 0) { Logger.log('No company column'); return; }

  // Collect unique companies with their countries
  var companies = {};
  for (var r = 1; r < busData.length; r++) {
    var name = String(busData[r][coIdx]).trim();
    var country = countryIdx >= 0 ? String(busData[r][countryIdx]).trim() : '';
    if (name && !companies[name]) companies[name] = country;
  }

  // European countries
  var euroCountries = [
    'uk', 'united kingdom', 'belgium', 'luxembourg', 'lithuania', 'romania',
    'spain', 'italy', 'france', 'germany', 'netherlands', 'switzerland',
    'sweden', 'denmark', 'norway', 'finland', 'russia', 'czech republic',
    'bulgaria', 'ireland', 'portugal', 'austria', 'poland', 'hungary',
    'croatia', 'estonia', 'latvia', 'slovakia', 'slovenia', 'cyprus',
    'malta', 'greece', 'serbia', 'montenegro', 'bosnia', 'albania',
    'macedonia', 'moldova', 'ukraine', 'belarus', 'georgia', 'armenia',
    'azerbaijan', 'kazakhstan', 'uzbekistan', 'turkmenistan', 'tajikistan',
    'kyrgyzstan'
  ];

  function isEuropean(country) {
    var c = country.toLowerCase().trim();
    for (var i = 0; i < euroCountries.length; i++) {
      if (c === euroCountries[i] || c.includes(euroCountries[i])) return true;
    }
    return false;
  }

  function isAmerican(country) {
    var c = country.toLowerCase().trim();
    return c === 'usa' || c === 'us' || c === 'united states' || c.includes('usa') ||
           c === 'canada' || c === 'mexico' || c.includes('united states');
  }

  // Read existing interactions to avoid duplicates
  var intSheet = ensureSheet_(ss, 'interactions', ['id', 'company', 'date', 'time', 'type', 'subject', 'notes', 'followUp', 'followUpDone']);
  var intData = intSheet.getDataRange().getValues();
  var existingCompanies = {};
  for (var r = 1; r < intData.length; r++) {
    var co = String(intData[r][1]).trim();
    if (co) existingCompanies[co] = true;
  }

  // Build new interaction rows
  var newRows = [];
  var names = Object.keys(companies).sort();
  for (var n = 0; n < names.length; n++) {
    var name = names[n];
    var country = companies[name];

    // Skip if already has interactions
    if (existingCompanies[name]) {
      Logger.log('Skipping ' + name + ' (already has interactions)');
      continue;
    }

    if (isEuropean(country)) {
      newRows.push([
        'seed_' + Date.now() + '_' + n,
        name,
        '2025-07-17',
        '18:20',
        'Call',
        'Initial Discussion',
        'Initiated the contact',
        '',
        false
      ]);
      Logger.log('Added European interaction for ' + name);
    } else if (isAmerican(country)) {
      newRows.push([
        'seed_' + Date.now() + '_' + n,
        name,
        '2025-07-21',
        '21:00',
        'Call',
        'Initial Discussion',
        'Initiated the contact',
        '',
        false
      ]);
      Logger.log('Added American interaction for ' + name);
    } else {
      Logger.log('Skipping ' + name + ' (country "' + country + '" not recognized as European or American)');
    }
  }

  // Append to interactions sheet
  if (newRows.length) {
    var startRow = intData.length + 1;
    intSheet.getRange(startRow, 1, newRows.length, 9).setValues(newRows);
  }

  Logger.log('setupInteractions done — added ' + newRows.length + ' interactions');
}
