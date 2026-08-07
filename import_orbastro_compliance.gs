// ============================================================================
// ONE-OFF IMPORT: OrbAstro Microsat VCM compliance -> VyomIC Google Sheet.
//
// HOW TO RUN:
//   1. Open the Apps Script project that contains apps_script.gs (it defines
//      SHEET_ID, readCompliance, writeCompliance, readSheet, writeSheet).
//   2. Paste this file into the project (new .gs file).
//   3. Run `importOrbAstroCompliance()` from the editor.
//
// It MERGES with existing compliance (never wipes other companies) and also
// updates the Orbital Astronautics bus row with real Microsat specs.
// ============================================================================

function importOrbAstroCompliance() {
  const ss = SpreadsheetApp.openById(SHEET_ID);

  // ── 1) Compliance: merge into 'compliance' tab (key | data) ────────────────
  const KEY = 'Orbital Astronautics|Microsat';
  const compliance = readCompliance(ss);
  compliance[KEY] = {
    // Payload Support Capability (0-7)
    "0": "yes",      "0_remark": "2 kW",
    "1": "yes",      "1_remark": "Nominal 29.6 V (25.2 to 33 V) - ICD pg 13",
    "2": "yes",      "2_remark": "350 W with spacecraft interface temp limit of 35C",
    "3": "yes",      "3_remark": "100 kg (ICD pg 13)",
    "4": "yes",      "4_remark": "16,000 channels",
    "5": "yes",      "5_remark": "Up to 32",
    "6": "yes",      "6_remark": "Requires additional payload heaters (ICD pg 48)",
    "7": "yes",      "7_remark": "Standard isolation on data lines, TVS + filters on power lines (ICD pg 48)",
    // Satellite Bus Capability (8-24)
    "8": "partial",  "8_remark": "Need avg payload power to size/budget accordingly",
    "9": "partial",  "9_remark": "Need avg payload power to size/budget accordingly",
    "10": "partial", "10_remark": "Need avg payload power to size/budget accordingly",
    "11": "partial", "11_remark": "Standard OrbAstro S-band omni link up to 20 Mbps",
    "12": "yes",     "12_remark": "Bus/payload interface options per ICD pg 32-39",
    "13": "yes",     "13_remark": "Baseline pointing knowledge 0.001, pointing accuracy 0.01 (ICD pg 10)",
    "14": "yes",
    "15": "yes",
    "16": "yes",
    "17": "yes",
    "18": "yes",     "18_remark": "95 kg lift-off mass budget",
    "19": "yes",     "19_remark": "15-inch interface, compatible with SpaceX, PSLV",
    "20": "partial", "20_remark": "To be discussed",
    "21": "yes",     "21_remark": "Satellite also operates in S Band",
    "22": "yes",
    "23": "yes",     "23_remark": "GS locations per ICD pg 21",
    "24": "yes",
    // Satellite Bus Hardware & Heritage (25-28)
    "25": "yes",     "25_remark": "All subsystems developed/manufactured/assembled/tested/operated by OrbAstro; retains stock of LLIs (reaction wheel motors, solar cells, ICs)",
    "26": "yes",
    "27": "yes",     "27_remark": "See flight heritage table",
    "28": "yes",     "28_remark": "12 satellite missions; 21 OBC; 45 reaction wheels; 1400 Wh battery packs; 700 W solar arrays; 16 thrusters; 60 magrods; 19 star trackers",
    // AIT Phase Support (29-34)
    "29": "yes",     "29_remark": "Standard process, compatible for IOD and constellation missions",
    "30": "yes",     "30_remark": "Standard process",
    "31": "yes",     "31_remark": "Standard process",
    "32": "yes",     "32_remark": "Standard process",
    "33": "yes",     "33_remark": "Standard process",
    "34": "yes",     "34_remark": "Platform software internal to OrbAstro; payload software internal to customer; OrbAstro supports mission-specific command sequences for day-to-day ops",
    // Deliverables (35-39)
    "35": "yes",     "35_remark": "Part of standard MCS",
    "36": "yes",     "36_remark": "Part of standard MCS",
    "37": "yes",     "37_remark": "Part of standard MCS",
    "38": "yes",     "38_remark": "Part of standard MCS",
    "39": "yes",     "39_remark": "Part of standard MCS"
  };
  writeCompliance(ss, compliance);

  // ── 2) Buses: update Orbital Astronautics row with Microsat specs ──────────
  const buses = readSheet(ss, 'buses');
  const NEW_ROW = {
    company: 'Orbital Astronautics',
    country: 'England',
    platform: 'Microsat',
    platformMass: '95 kg',
    payloadPower: 'Up to 2 kW peak; up to 500 W avg',
    payloadMass: 'Up to 100 kg',
    orbit: 'LEO',
    lifetime: '6 years',
    pointingAcc: '0.01 deg',
    pointingKnowledge: '0.001 deg',
    pointingControl: '3-axis stabilized',
    propulsion: 'Propulsion configuration available',
    dataInterface: 'Standard bus/payload interfaces (ICD pg 32-39)',
    downlink: 'S-band (satellite also operates in S Band)',
    tcTm: 'S-band TT&C omni up to 20 Mbps; 16,000 TM/TC channels',
    powerVoltage: '29.6 V nominal (25.2-33 V) regulated',
    solarArray: 'Deployable solar wing option',
    rideshare: '15-inch interface; compatible with SpaceX, PSLV',
    heritage: '12 satellite missions; 21 OBC; 45 reaction wheels; 19 star trackers; 16 thrusters',
    remarks: 'OrbAstro Microsat per ICD OA-ICD-ORB-M-01-1.2; 350 W payload thermal @ 35C interface'
  };
  let updated = false;
  for (let i = 0; i < buses.length; i++) {
    if (buses[i].company === 'Orbital Astronautics') {
      buses[i] = Object.assign({}, NEW_ROW);
      updated = true;
      break;
    }
  }
  if (!updated) buses.push(Object.assign({}, NEW_ROW));

  // writeSheet uses Object.keys(data[0]) as headers, so ensure the first row
  // carries the union of ALL keys to avoid dropping columns on rewrite.
  const union = {};
  buses.forEach(b => Object.keys(b).forEach(k => union[k] = true));
  Object.keys(union).forEach(k => { if (buses[0][k] === undefined) buses[0][k] = ''; });
  writeSheet(ss, 'buses', buses);

  Logger.log('Imported OrbAstro Microsat compliance. Total compliance keys: ' + Object.keys(compliance).length);
  Logger.log('Bus rows: ' + buses.length + ' (Orbital Astronautics updated)');
}
