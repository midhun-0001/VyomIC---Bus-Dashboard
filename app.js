// ============================================================================
// VYOMIC PLATFORM COMPARATOR
// ============================================================================

// Real satellite bus data extracted from spreadsheet
const BUILTIN_DATA = [
  {company:"Astro Digital",country:"USA",platform:"Corvus-6U",platformMass:"Up to 12 kg",platformVolume:"100 × 200 × 300 mm",payloadPower:"15 W Average Orbit Power; 100 W Peak Payload Power",payloadMass:"Up to 4 kg",payloadVolume:"Up to 4U",orbit:"LEO",lifetime:"5 years",pointingAcc:"<360 arcsec (3σ) Nominal; <250/<180/<80 arcsec (Fine/Advanced)",pointingKnowledge:"<300 arcsec (3σ) Nominal; <200/<140/<60 arcsec (Fine/Advanced)",positionKnowledge:"<10 m; <1 m/s",pointingControl:"3-axis ADCS",dataInterface:"Ethernet, UART, USB, I²C, SPI",downlink:"X-Band 98 Mbps; Ka-Band 400 Mbps",tcTm:"S-Band TT&C 120 kbps (Uplink/Downlink); UHF Downlink 38 kbps; S-Band Mission Uplink 5.4 Mbps",powerVoltage:"4 V Unregulated; Configurable Rails up to 17 V",rideshare:"Industry Standard 6U CubeSat Deployer",solarArray:"Body-mounted Solar Panels",storage:"70 Wh",datasheet:"Data Sheet",heritage:"On-orbit Heritage since 2017",remarks:"Longest-running production platform at Astro Digital; 40 W sun-pointing power generation; Configurable Harwin Datamate M80/M83 connectors; Flexible internal/external configurations."},
  {company:"Astro Digital",country:"USA",platform:"Corvus-16U",platformMass:"Up to 24 kg",platformVolume:"200 × 200 × 400 mm",payloadPower:"42 W Average Orbit Power; 200 W Peak Payload Power",payloadMass:"Up to 18 kg",payloadVolume:"Up to 12U",orbit:"LEO",lifetime:"5 years",pointingAcc:"<360 arcsec (3σ) Nominal; <250/<180/<80 arcsec (Fine/Advanced)",pointingKnowledge:"<300 arcsec (3σ) Nominal; <200/<140/<60 arcsec (Fine/Advanced)",positionKnowledge:"<10 m; <1 m/s",pointingControl:"3-axis ADCS",dataInterface:"Ethernet, UART, USB, I²C, SPI",downlink:"X-Band 98 Mbps; Ka-Band 400 Mbps",tcTm:"S-Band TT&C 120 kbps (Uplink/Downlink); UHF Downlink 38 kbps; S-Band Mission Uplink 5.4 Mbps",powerVoltage:"4 V Unregulated; Configurable Rails up to 17 V",rideshare:"Industry Standard 16U CubeSat Deployer",solarArray:"Body-mounted & Deployable Solar Panels",storage:"240 Wh",datasheet:"Data Sheet",heritage:"On-orbit Heritage since 2019; First 16U CubeSat launched",remarks:"First 16U CubeSat platform ever launched; 120 W sun-pointing power generation; Configurable Harwin Datamate M80/M83 connectors; Flexible internal/external configurations."},
  {company:"Astro Digital",country:"USA",platform:"Corvus-Micro",platformMass:"Up to 60 kg",platformVolume:"400 × 400 × 600 mm",payloadPower:"70 W Average Orbit Power; 1 kW Peak Payload Power",payloadMass:"Up to 30 kg",payloadVolume:"Up to 350 × 350 × 400 mm",orbit:"LEO",lifetime:"5 years",pointingAcc:"<360 arcsec (3σ) Nominal; <250/<180/<80 arcsec (Fine/Advanced)",pointingKnowledge:"<300 arcsec (3σ) Nominal; <200/<140/<60 arcsec (Fine/Advanced)",positionKnowledge:"<10 m; <1 m/s",pointingControl:"3-axis ADCS",dataInterface:"Ethernet, UART, USB, I²C, SPI, CAN",downlink:"X-Band 98 Mbps; Ka-Band 400 Mbps",tcTm:"S-Band TT&C 120 kbps (Uplink/Downlink); UHF Downlink 38 kbps; S-Band Mission Uplink 5.4 Mbps",powerVoltage:"28–36 V Unregulated; Configurable Rails as Required",rideshare:"8\", 11.7\", or 15\" Ring Deployment Mechanism",solarArray:"Body-mounted & Optional Single/Double/Tri-fold Deployable Solar Panels",storage:"450 Wh",datasheet:"Data Sheet",heritage:"On-orbit Heritage since 2021",remarks:"Over 50% of platform volume available for payload; 130 W sun-pointing power generation; Configurable Harwin Datamate M80/M83 connectors; Additional battery packs and deployable solar panel options available."},
  {company:"Astro Digital",country:"USA",platform:"Corvus-XL",platformMass:"Up to 200 kg",platformVolume:"500 × 500 × 1000 mm",payloadPower:"300 W Average Orbit Power; 4 kW Peak Payload Power",payloadMass:"Up to 100 kg",payloadVolume:"Up to 500 × 500 × 700 mm",orbit:"LEO",lifetime:"5 years",pointingAcc:"<360 arcsec (3σ) Nominal; <250/<180/<80 arcsec (Fine/Advanced)",pointingKnowledge:"<300 arcsec (3σ) Nominal; <200/<140/<60 arcsec (Fine/Advanced)",positionKnowledge:"<10 m; <1 m/s",pointingControl:"3-axis ADCS",dataInterface:"Ethernet, UART, USB, I²C, SPI, CAN",downlink:"X-Band 98 Mbps; Ka-Band 400 Mbps",tcTm:"S-Band TT&C 120 kbps (Uplink/Downlink); UHF Downlink 38 kbps; S-Band Mission Uplink 5.4 Mbps",powerVoltage:"28–36 V Unregulated",rideshare:"15\" Ring Deployment Mechanism; 4-point Separation",solarArray:"Optional Single/Double/Tri-fold Deployable",storage:"960 Wh",datasheet:"Data Sheet",heritage:"On-orbit Heritage since 2021",remarks:"Largest flight-heritage Astro Digital platform; 500 W sun-pointing generation; configurable battery packs & solar arrays."},
  {company:"Astro Digital",country:"USA",platform:"Raven",platformMass:"Up to 400 kg",platformVolume:"1000 × 1000 × 1350 mm",payloadPower:"1 kW Average Orbit Power; 4 kW Peak Payload Power",payloadMass:"Up to 250 kg",payloadVolume:"Up to 800 × 800 × 900 mm",orbit:"GEO, Deep Space, LEO",lifetime:"5 years",pointingAcc:"<360 arcsec (3σ) Nominal; <250/<180/<80 arcsec (Fine/Advanced)",pointingKnowledge:"<300 arcsec (3σ) Nominal; <200/<140/<60 arcsec (Fine/Advanced)",positionKnowledge:"<10 m; <1 m/s",pointingControl:"3-axis ADCS",propulsion:"Optional Radiation-Tolerant Electric Propulsion",dataInterface:"Ethernet, UART, USB, I²C, SPI, CAN",downlink:"X-Band 98 Mbps; Ka-Band 400 Mbps",tcTm:"S-Band TT&C 120 kbps (Uplink/Downlink); UHF Downlink 38 kbps; S-Band Mission Uplink 5.4 Mbps",powerVoltage:"36 V Unregulated",rideshare:"24\" Ring Deployment or 4-point Release",solarArray:"Optional Single/Double/Tri-fold Deployable",storage:"960 Wh",datasheet:"Data Sheet",heritage:"First GEO missions under contract (Q4 2025)",remarks:"Optional radiation-tolerant architecture for GEO & Deep Space; 1.5 kW sun-pointing power generation; configurable battery packs & solar arrays."},
  {company:"BAE Systems /INSPACE",country:"United Kingdom",platform:"Summit",platformVolume:"2 × 1 × 0.4–0.75 m",payloadPower:"400–850 W (Orbit Average, EOL, 28 VDC)",payloadMass:"Up to 225 kg",payloadVolume:"2 × 1 × 0.4–0.75 m",orbit:"400–1000 km; 40° Inclination to Sun-Synchronous Orbit (SSO)",lifetime:"5 years",pointingAcc:"<7 arcsec (1σ)",pointingStability:"<1 arcsec/sec (1σ)",pointingKnowledge:"<4 arcsec (1σ)",propulsion:"Electric Propulsion (>380 m/s ΔV)",encryption:"NSA Type-1, AES-256",downlink:"X-Band Mission Communications",tcTm:"S-Band TT&C",powerVoltage:"28 VDC",rideshare:"Designed for Rideshare; Compatible with Dedicated Launch",leadTime:"18 months (ATP to First Bus Delivery)",datasheet:"Data Sheet - offline",remarks:"In-house BAE Systems avionics; Single-string architecture with selective redundancy; Mission accommodation packages available for increased mission flexibility."},
  {company:"BAE Systems /INSPACE",country:"United Kingdom",platform:"Trek",payloadPower:"Up to 1900 W (Orbit Average, EOL, 28 VDC)",payloadMass:"Up to 1000 kg",orbit:"LEO: 400–1000 km; 40° Inclination to SSO; MEO Option",lifetime:"5 years",pointingAcc:"<10 arcsec (1σ)",pointingStability:"1 arcsec/sec (1σ)",pointingKnowledge:"<5 arcsec (1σ)",propulsion:"Chemical (>200 m/s ΔV) or Electric Propulsion (>550 m/s ΔV)",encryption:"NSA Type-1, AES-256",downlink:"X-Band, Ka-Band, Optical Mission Communications",tcTm:"S/L-Band TT&C",powerVoltage:"28 VDC",rideshare:"Dedicated Launch or Multi-launch (Up to 6 Trek Spacecraft)",leadTime:"18 months (ATP to First Bus Delivery)",datasheet:"Data Sheet - offline",remarks:"In-house BAE Systems avionics; Single-string architecture with selective redundancy; MEO-compatible; Supports payload thermal isolation or heat dissipation up to 650 W; Designed for EMI-quiet operation; Mission accommodation packages available."},
  {company:"BAE Systems /INSPACE",country:"United Kingdom",platform:"Ascent",platformVolume:"1.7 × 1.8 × 3.0 m",payloadPower:"Up to 2700 W (Orbit Average, EOL, 28 VDC)",payloadMass:"Up to 2200 kg",payloadVolume:"1.7 × 1.8 × 3.0 m",orbit:"LEO, MEO, GEO, Cislunar",lifetime:"5 years",pointingAcc:"<20 arcsec (1σ)",pointingStability:"1 arcsec/sec (1σ)",slewing:"6DOF",propulsion:"Refuellable Chemical Propulsion (Up to 1500 m/s ΔV)",encryption:"NSA Type-1, AES-256",downlink:"X-Band, Ka-Band, Optical Mission Communications",tcTm:"S/L-Band TT&C",powerVoltage:"28 VDC",rideshare:"Dedicated Launch; Up to 2 Spacecraft per Standard Fairing",datasheet:"Data Sheet - offline",remarks:"High-thrust, refuellable spacecraft for dynamic space operations; Supports multiple hosted payloads; Multi-mission mobility; Multi-manifest launch; Rendezvous, Proximity Operations & Docking (RPOD); Block redundant to disposal with selective redundancy; Modular packages available for increased ΔV and secondary payload accommodation."},
  {company:"Blue Canyon Technologies",country:"USA",platform:"12U CubeSat",platformMass:"Up to 24 kg",platformVolume:"12U CubeSat",payloadPower:"100 W (Typical Orbit Average); Up to 200 W Peak Payload",payloadMass:"Up to 12 kg",payloadVolume:"8U (Typical); Up to 12U Configurable",orbit:"LEO; SSO",lifetime:"5 years",pointingAcc:"±0.002° (1σ)",pointingStability:"1 arcsec over 1 sec",pointingKnowledge:"10 m Orbit Knowledge; 0.15 m/s Velocity Knowledge (1σ)",positionKnowledge:"10 m; 0.15 m/s",pointingControl:"3-axis ADCS; Dual Star Trackers",slewing:">5°/s",propulsion:"Multiple Electric & Chemical Propulsion Options",dataInterface:"UART (3.3V), LVDS, RS-422, RS-485, SpaceWire",downlink:"X-Band up to 10 Mbps",tcTm:"S-Band TT&C 2 Mbps; Uplink 100 kbps (CCSDS)",powerVoltage:"3.3V, 5V, 12V, 28V",rideshare:"Standard 12U CubeSat Deployer",solarArray:"Deployable Solar Arrays",storage:"4 GB (Expandable via High-Speed Data Recorder)",datasheet:"Data Sheet",heritage:"Flight Proven",remarks:"12U spacecraft based on Blue Canyon Technologies' CubeSat family; Dual star trackers; Energy storage 6.8–20.4 Ah; Payload power available at 3.3V, 5V, 12V & 28V; Compatible with multiple electric and chemical propulsion systems."},
  {company:"Blue Canyon Technologies",country:"USA",platform:"XB16 (16U CubeSat)",platformMass:"Up to 24 kg",platformVolume:"16U CubeSat",payloadPower:"92–108 W",payloadVolume:"12U (Typical)",orbit:"LEO; GEO/Lunar/Deep Space",lifetime:"LEO >5 years; GEO/Lunar/Deep Space >2 years",pointingAcc:"±0.002° (1σ)",pointingStability:"1 arcsec over 1 sec",pointingKnowledge:"10 m Orbit Knowledge; 0.15 m/s Velocity Knowledge (1σ)",positionKnowledge:"10 m; 0.15 m/s",pointingControl:"3-axis ADCS, Dual Star Trackers",slewing:">3°/s",propulsion:"Multiple Electric & Chemical Propulsion Systems",dataInterface:"UART (3.3 V), 2.5 V LVDS, RS-422, RS-485, SpaceWire, 3.3 V In/Out",downlink:"S-Band 2 Mbps Standard; X-Band up to 10 Mbps",tcTm:"S-Band Uplink 100 kbps (CCSDS)",powerVoltage:"3.3 V, 5 V, 12 V, 28 V",rideshare:"Standard 16U CubeSat Deployer",solarArray:"Deployable Solar Arrays",storage:"4 GB (Expandable via High-Speed Data Recorder)",datasheet:"Data Sheet",heritage:"Flight Proven",remarks:"Energy Storage: 6.8–20.4 Ah; Dual star trackers; Expandable onboard storage; Multiple propulsion options; Designed for LEO, GEO, Lunar & Deep Space missions."},
  {company:"Blue Canyon Technologies",country:"USA",platform:"Venus-100",platformMass:"100 kg Class",platformVolume:"ESPA-Standard or Larger; 15\" Launch Interface",payloadPower:"444 W (BOL Solar Array Power)",payloadMass:"Up to 70 kg",payloadVolume:"20.5 × 16.4 × 27.0 in (1 Array); 17.0 × 16.4 × 27.0 in (2 Arrays)",orbit:"LEO; GEO; Deep Space",lifetime:"LEO >5 years; GEO >2 years; Deep Space >2 years",pointingAcc:"±0.002° (1σ)",pointingControl:"3-axis ADCS; Dual Star Trackers",propulsion:"Multiple Electric & Chemical Propulsion Systems",encryption:"Hardware Encryption Available",rideshare:"ESPA-Standard or Larger; 15\" Launch Interface",solarArray:"One-Wing: 222 W; Two-Wing: 444 W",storage:"13.6 Ah",datasheet:"Data Sheet",heritage:"Flight Proven",remarks:"Microsatellite platform; Configurable one- or two-wing solar arrays; Larger payload volume available depending on launch vehicle; Designed for LEO, GEO & Deep Space missions."},
  {company:"Blue Canyon Technologies",country:"USA",platform:"Saturn-200",platformMass:"191 kg (Bus Dry Mass)",platformVolume:"30 × 30 × 40 in (Typical Payload Volume); 40 × 40 × 45 in (Objective)",payloadPower:"500 W (Orbit Average, EOL)",payloadMass:"200 kg (Standard Rideshare); Up to 350 kg (Specialty Applications)",payloadVolume:"30 × 30 × 40 in (Typical); 40 × 40 × 45 in (Objective)",orbit:"LEO (>5 years); GEO (>2 years); Deep Space (>2 years)",lifetime:"LEO >5 years; GEO >2 years; Deep Space >2 years",pointingAcc:"±0.002° (1σ), 3-axis, Dual Star Trackers",pointingStability:"2 arcsec/sec",pointingKnowledge:"<5 arcsec",pointingControl:"<5 arcsec",slewing:">1.5°/s (Dependent on Mass Properties)",propulsion:"Multiple Electric & Chemical Propulsion Systems (Option: EP Xenon, ΔV up to 760 m/s)",encryption:"Hardware Encryption Available",downlink:"X-Band Up to 20 Mbps (Optional); S-Band Up to 2 Mbps",tcTm:"S-Band TT&C",powerVoltage:"28–34 V",rideshare:"ESPA-Grande / Equivalent 24\" Launch Interface; Other Options Available",solarArray:"600–1200 W (BOL)",storage:"400,000 Mbit (≈50 GB)",leadTime:"18 months (ATP to Payload I&T); 24 months (ATP to Launch)",datasheet:"Data Sheet",heritage:"Flight Proven (DARPA Blackjack, NASA Pandora)",remarks:"3-axis control with up to 4 reaction wheels; Dual Star Trackers; 54.4 Ah Li-ion battery; Supports standard rideshare and specialty missions up to 350 kg payload; SpaceX compatible and other launch vehicles available."},
  {company:"Lockheed Martin",country:"USA",platform:"LM 50 Curio™",platformMass:"45–100 kg (dry); 50–220 kg (wet)",platformVolume:"ESPA-Class",payloadPower:"10–500 W",payloadMass:"≤100 kg",payloadVolume:"Integrated",orbit:"Deep Space; Cislunar; Lunar; Earth Orbits",lifetime:"1–5 years",slewing:"Various",propulsion:"≤1000 m/s ΔV",powerVoltage:"28 V",rideshare:"ESPA-Class",datasheet:"https://www.lockheedmartin.com/content/dam/lockheed-martin/space/documents/lm400/LM400-LM2100_LM50_Product_Card_Final_Web.pdf",remarks:"Science platform; Single-string redundancy"},
  {company:"Lockheed Martin",country:"USA",platform:"LM 50 LM LINUSS™",platformMass:"20–60 kg (wet)",platformVolume:"CubeSat-Class",payloadPower:"10 W avg; 50 W peak",payloadMass:"≤12 kg",payloadVolume:"Integrated",orbit:"GEO; LEO",lifetime:"3 years (GEO)",pointingControl:"High Agility",propulsion:"≤200 m/s ΔV",powerVoltage:"12 V",rideshare:"CubeSat-Class",datasheet:"https://www.lockheedmartin.com/content/dam/lockheed-martin/space/documents/lm400/LM400-LM2100_LM50_Product_Card_Final_Web.pdf",heritage:"Flight proven since 2021",remarks:"Communications & ISR; Partially redundant"},
  {company:"Lockheed Martin",country:"USA",platform:"LM 50 Fleet",platformMass:"380–540 kg (wet)",platformVolume:"ESPA-Class",payloadPower:"200–900 W avg; 500–1500 W peak",payloadMass:"≤250 kg",payloadVolume:"Bolt-On / Palletized",orbit:"LEO",lifetime:"5 years",pointingAcc:"Low Precision / High Precision",slewing:"Low Agility",propulsion:"150–520 m/s ΔV",encryption:"NSA Type-1; AES-256",downlink:"S-band TT&C; X-band mission comms",tcTm:"S-band TT&C",powerVoltage:"28 V; 66 V payload option",rideshare:"Designed for rideshare & dedicated launch",datasheet:"https://www.lockheedmartin.com/content/dam/lockheed-martin/space/documents/lm400/LM400-LM2100_LM50_Product_Card_Final_Web.pdf",heritage:"First flight 2025",remarks:"Communications & ISR"},
  {company:"Lockheed Martin",country:"USA",platform:"LM 400-H",platformMass:"1100 kg (dry);1220 kg (wet)",platformVolume:"H-Frame",payloadPower:"≤7500 W avg; ≤10000 W peak",payloadMass:"≤1100 kg",payloadVolume:"Bolt-On / Palletized / Integrated",orbit:"GEO; MEO; LEO",lifetime:"Up to 0.9 @ 5 years",pointingAcc:"Low to High Precision",propulsion:"60–500 m/s ΔV",powerVoltage:"28 V",datasheet:"https://www.lockheedmartin.com/content/dam/lockheed-martin/space/documents/lm400/LM400-LM2100_LM50_Product_Card_Final_Web.pdf",heritage:"Flight proven",remarks:"Earth & Astro Sciences; Communications & PNT"},
  {company:"Lockheed Martin",country:"USA",platform:"LM 400-X",platformMass:"1101 kg (dry);1220 kg (wet)",platformVolume:"Hexagonal",payloadPower:"≤3000 W avg; ≤10000 W peak",payloadMass:"≤800 kg",payloadVolume:"Bolt-On / Palletized / Integrated",orbit:"GEO; MEO; LEO",lifetime:"Up to 0.9 @ 5 years",pointingAcc:"Low to High Precision",propulsion:"60–500 m/s ΔV",powerVoltage:"28 V",datasheet:"https://www.lockheedmartin.com/content/dam/lockheed-martin/space/documents/lm400/LM400-LM2100_LM50_Product_Card_Final_Web.pdf",heritage:"Flight proven",remarks:"ISR (EO)"},
  {company:"Lockheed Martin",country:"USA",platform:"LM 400-F",platformMass:"1650 kg dry; 1740 kg wet",platformVolume:"Flat",payloadPower:"≤7500 W avg; ≤16000 W peak",payloadMass:"≤1100 kg",payloadVolume:"Bolt-On / Palletized / Integrated",orbit:"GEO; MEO; LEO",lifetime:"Up to 0.9 @ 5 years",pointingAcc:"Low to High Precision",propulsion:"Various",slewing:"Various",powerVoltage:"28 V / 100 V option",datasheet:"https://www.lockheedmartin.com/content/dam/lockheed-martin/space/documents/lm400/LM400-LM2100_LM50_Product_Card_Final_Web.pdf",heritage:"Flight proven",remarks:"ISR (Non-EO); Communications & PNT"},
  {company:"Lockheed Martin",country:"USA",platform:"LM 2100",platformMass:"4000 kg dry; 7500 kg wet",platformVolume:"Scalable Structure",payloadPower:"3500–16000 W avg; ≤16000 W peak",payloadMass:"≤2000 kg",payloadVolume:"Bolt-On / Palletized / Integrated",orbit:"MEO; GEO",lifetime:"15 years",pointingAcc:"Low to High Precision",slewing:"Low Agility",propulsion:"2200 m/s ΔV",powerVoltage:"70 V / 28 V",datasheet:"https://www.lockheedmartin.com/content/dam/lockheed-martin/space/documents/lm400/LM400-LM2100_LM50_Product_Card_Final_Web.pdf",heritage:"Fully redundant",remarks:"Communications; PNT; ISR & Science"},
  {company:"Loft Orbital",country:"USA",platform:"Longbow Satellite Platform",platformMass:"Up to 250 kg",payloadPower:"Up to 200 W Avg; Up to 1100 W Peak",payloadMass:"Up to 85 kg",orbit:"LEO",lifetime:"8 years",pointingAcc:"<0.03° (3σ)",pointingKnowledge:"<0.03° (3σ)",slewing:">1°/s",propulsion:"Electric Propulsion (ΔV up to 600 m/s)",dataInterface:"RS-422; RS-485; Ethernet; SpaceWire; CAN; LVDS",downlink:"X-band up to 1.12 Gbps",tcTm:"S-band TT&C (Primary & Backup Omnidirectional)",powerVoltage:"32–37 V Unregulated; 5 V; 9 V; 12 V Regulated",datasheet:"Data Sheet",heritage:"600+ satellites in orbit",remarks:"Flight-proven off-the-shelf LEO platform; supports a wide range of hosted payload missions."},
  {company:"Loft Orbital",country:"USA",platform:"500kg Class Space Vehicle Platform",platformMass:"Up to 550 kg",payloadPower:"Up to 1000 W Avg; Up to 2000 W Peak",payloadMass:"Up to 300 kg",orbit:"LEO",lifetime:"7 years",pointingAcc:"<0.02° (3σ)",pointingKnowledge:"<0.01° (3σ)",slewing:"Up to 1°/s",propulsion:"Electric Propulsion (ΔV up to 800 m/s)",dataInterface:"RS-422; RS-485; Ethernet; SpaceWire; CAN; LVDS",downlink:"X-band up to 1.12 Gbps",tcTm:"S-band TT&C (Primary & Backup Omnidirectional)",powerVoltage:"32–37 V Unregulated; 5 V; 9 V; 12 V Regulated",datasheet:"Data Sheet",heritage:"Off-the-shelf platform",remarks:"High-power, high-performance hosted payload platform with common Loft electrical and ground interfaces."},
  {company:"Moog",country:"USA",platform:"METEORITE",platformMass:"120 kg (Bus Dry Mass)",platformVolume:"22 × 28 × 23.65 in (~559 × 711 × 601 mm)",payloadPower:"~150 W OAP; 2 kW Peak",payloadMass:"220 kg",payloadVolume:"22 × 28 in Flat Deck; Up to 30 in Height (ESPA)",orbit:"LEO (500–1200 km); GEO capable (modified); Beyond GEO",lifetime:"2–5 years",pointingAcc:"<60 arc-sec (1σ)",pointingStability:"Jitter <10 arc-sec",pointingKnowledge:"<40 arc-sec (1σ)",positionKnowledge:"<4 m",slewing:"2.5°/s",propulsion:"Green Propulsion (>175 m/s ΔV @ 200 kg dry mass)",dataInterface:"2× SpaceWire; 4× Discretes; GPS 1PPS (LVDS)",powerVoltage:"28 VDC Unregulated (25–33 V)",rideshare:"ESPA; Dedicated Small Launch",solarArray:"Expandable Modular Solar Power System",datasheet:"Datasheet",heritage:"Flight Proven",remarks:"ESPA-class satellite bus; 3-axis stabilized using reaction wheels & torque rods; Supports High LEO (1000–1200 km); GEO capable with modifications; Flexible mission software; Rad-hard BRE440 CPU."},
  {company:"Moog",country:"USA",platform:"Meteor",platformMass:"650 kg (Dry)",platformVolume:"Ø62\" × 47\" Tall",payloadPower:"~750 W OAP Payload Power; 2kW Peak Power",payloadMass:"750 kg",payloadVolume:"Ø62\" Top Mounted / Multiple 42\" × 46\" × 56\" Side Mounted",orbit:"LEO (500–1200 km), MEO, GEO",lifetime:"2–5 years",pointingAcc:"<60 arcsec (1σ)",pointingStability:"<10 arcsec Jitter",pointingKnowledge:"<40 arcsec (1σ)",positionKnowledge:"<4 m",pointingControl:"3-Axis Stabilized",slewing:">0.6°/s",propulsion:"High-Thrust Hydrazine",dataInterface:"2× SpaceWire, 4× Discretes, GPS 1PPS (LVDS)",powerVoltage:"28 [25/33] VDC Unregulated Bus Voltage (multiple 1.2 A switches)",rideshare:"NSSL-Class / ESPA-Grande",solarArray:"Expandable Modular Power System",datasheet:"Datasheet",remarks:"LEO, MEO & GEO capable; BRE440 Rad-Hard CPU; Flexible mission software; Payload power expandable to 2 kW; Delta-V >400 m/s with 750 kg payload; Radiation: 25.5 kRad TID, >99% SEU availability"},
  {company:"Muon Space",country:"USA",platform:"Condor",platformMass:"100 kg",payloadPower:"200 W+",payloadMass:"Up to 60 kg",orbit:"475–1100 km LEO (Inclination ≥45°, All Beta Angles)",lifetime:"5+ years",pointingAcc:"15 arcsec (1σ)",pointingKnowledge:"5 arcsec (1σ)",pointingControl:"3-Axis Stabilized",propulsion:"Orbital Mobility (ΔV 3 km/s)",dataInterface:"30 Gbps",downlink:"5 TB/day (RF), 50 TB/day (Optical)",datasheet:"Datasheet",heritage:"Flight Proven",remarks:"Integrated SpaceX Mini Laser Terminal (Starlink); Payload Peak Power 500 W+; Supports all beta angles"},
  {company:"Muon Space",country:"USA",platform:"Condor-M",platformMass:"250 kg",payloadPower:"1 kW+",payloadMass:"Up to 300 kg",orbit:"475–1100 km LEO (Inclination ≥45°, All Beta Angles)",lifetime:"5+ years",pointingAcc:"15 arcsec (1σ)",pointingKnowledge:"5 arcsec (1σ)",pointingControl:"3-Axis Stabilized",propulsion:"Orbital Mobility (ΔV 2 km/s)",dataInterface:"30 Gbps",downlink:"5 TB/day (RF), 100 TB/day (Optical)",datasheet:"Datasheet",heritage:"Flight Proven",remarks:"Integrated SpaceX Mini Laser Terminal (Starlink); Payload Peak Power 4 kW+; Supports all beta angles"},
  {company:"Muon Space",country:"USA",platform:"Condor-XL",platformMass:"1500 kg",payloadPower:"5 kW+",payloadMass:"350 kg+",orbit:"475–1100 km LEO (Inclination ≥45°, All Beta Angles)",lifetime:"8+ years",pointingAcc:"100 arcsec (1σ)",pointingKnowledge:"5 arcsec (1σ)",pointingControl:"3-Axis Stabilized",propulsion:"Orbital Mobility (ΔV 0.6 km/s)",dataInterface:"100 Gbps",downlink:"5 TB/day (RF), 100 TB/day (Optical)",datasheet:"Datasheet",heritage:"Flight Proven",remarks:"Integrated SpaceX Mini Laser Terminal (Starlink); Payload Peak Power 20 kW+; Supports all beta angles"},
  {company:"Redwire",country:"USA",platform:"Thresher",platformMass:"Up to 320 kg",payloadPower:"Up to 3000 W",payloadMass:"Up to 120 kg",payloadVolume:"Interior: 52 × 52 × 62 cm; Exterior: 60 × 60 × 70 cm",orbit:"LEO",lifetime:"3–5 years",pointingControl:"Software-defined 3-axis platform",propulsion:"Electric Propulsion",encryption:"NSA Type-1 (TSAB)",rideshare:"ESPA / ESPA-Grande / Rideshare Compatible",datasheet:"Datasheet",heritage:"Tactically Responsive LEO Platform",remarks:"Designed & built in USA; Rapid design-to-launch; AI/ML capable; Digital engineering & simulation; On-orbit software reconfiguration; Missions include Surveillance, Space Domain Awareness & TacRS"},
  {company:"Redwire",country:"USA",platform:"SabreSat",platformMass:"~400 kg",platformVolume:"Modular",payloadPower:"Up to 5000 W OAP (EOL)",payloadMass:"~200 kg",payloadVolume:"100 × 80 × 40 cm",orbit:"VLEO (>150 km)",lifetime:"Up to 7 years",propulsion:"Electric or Air-Breathing (Optional)",datasheet:"Datasheet",remarks:"Built in USA; Modular VLEO platform; Designed for large constellations; Optional air-breathing propulsion; Digital engineering support; Mission applications: ISR, Communications, Navigation, Earth Science; DARPA Otter mission platform"},
  {company:"Redwire",country:"USA",platform:"Mako (ESPA)",platformMass:"Up to 320 kg",payloadPower:"Up to 3000 W",payloadMass:"Up to 120 kg",payloadVolume:"Interior: 52 × 52 × 62 cm; Exterior: 60 × 60 × 70 cm",orbit:"GEO, MEO",lifetime:"3–5 years",pointingControl:"Precision Pointing",propulsion:"Dynamic Space Operations (ΔV 250–800 m/s)",encryption:"NSA Type-1 (TSAB)",rideshare:"ESPA",datasheet:"Datasheet",heritage:"Vetted Class C Rad-Hard Design",remarks:"Built in USA; High agility GEO/MEO platform; Precision RPO & Docking; Software-defined; Autonomous; AI/ML capable; Cybersecure communications; Space Domain Awareness; Dynamic Space Operations"},
  {company:"Redwire",country:"USA",platform:"Mako (ESPA-Grande)",platformMass:"Up to 700 kg",payloadPower:"Up to 8000 W",payloadMass:"More than 200 kg",payloadVolume:"Interior: 100 × 110 × 40 cm; Exterior: 110 × 120 × 50 cm",orbit:"GEO, MEO",lifetime:"3–5 years",pointingControl:"Precision Pointing",propulsion:"Dynamic Space Operations (ΔV 800–1200 m/s)",encryption:"NSA Type-1 (TSAB)",rideshare:"ESPA-Grande",datasheet:"Datasheet",heritage:"Vetted Class C Rad-Hard Design",remarks:"Built in USA; High agility GEO/MEO platform; Precision RPO & Docking; Software-defined; Autonomous; AI/ML capable; Cybersecure communications; Space Domain Awareness; Dynamic Space Operations"},
  {company:"Redwire",country:"USA",platform:"Phantom",platformMass:"<300 kg",platformVolume:"1.8 × 1.3 × 1.3 m",payloadPower:">25 W OAP (EOL)",payloadMass:"50 kg",payloadVolume:"40 × 40 × 60 cm (Launcher-dependent)",orbit:"VLEO (<300 km)",lifetime:"Up to 5 years",propulsion:"Electric",rideshare:"Compatible with Small Satellite Launchers",datasheet:"Datasheet",remarks:"Built in Belgium; Budget-friendly design; Aerodynamic design reduces propellant usage; Standardized off-the-shelf components; No fuel required for deorbit; Optimized for high-resolution Earth observation; Mission applications: Earth Science, ISR, SDA, RF Signal Monitoring, Communications"},
  {company:"Redwire",country:"USA",platform:"Hammerhead",platformMass:"~130 kg",platformVolume:"800 × 800 × 1200 mm",payloadPower:"120 W (Orbit Dependent)",payloadMass:"Up to 120 kg",payloadVolume:"External: 650 × 770 × 490–1872 mm (Launcher Dependent); Internal: 180 × 290 × 180 mm",orbit:"LEO",lifetime:"7 years",pointingAcc:"6 arcsec (2σ)",pointingStability:"1.5 arcsec/s",pointingKnowledge:"2 arcsec (2σ)",slewing:"60 deg/min",propulsion:"ΔV 85 m/s",dataInterface:"200 Mbps Standard (Up to 400 Mbps)",downlink:"200 Mbps (Up to 400 Mbps)",storage:"256 Gbit (1 Tbit Optional)",datasheet:"Datasheet",heritage:"PROBA-1, PROBA-2, PROBA-V (40+ years cumulative flight heritage)",remarks:"European LEO platform; Aluminium honeycomb structure; Rad-hard LEON-3 SPARC processor (cold redundant); RTEMS flight software; Autonomous operations with FDIR; Next-generation PROBA platform."},
  {company:"Sierra Space",country:"USA",platform:"Io Half ESPA Nanosat (LEO)",platformMass:"50 kg",platformVolume:"½ ESPA",payloadPower:"40 W",payloadMass:"20 kg",payloadVolume:"27 × 27 × 9.7 cm",orbit:"LEO",lifetime:"3 years",pointingAcc:"0.02°",pointingControl:"6-DOF ADCS",propulsion:"ΔV 270 m/s",rideshare:"½ ESPA",datasheet:"Datasheet",heritage:"Flight-Proven Avionics & Power Systems",remarks:"Purpose-built mission solution; High-rate production spacecraft; Scalable design; 6-DOF high delta-V capability"},
  {company:"Sierra Space",country:"USA",platform:"Io Half ESPA Nanosat (GEO)",platformMass:"50 kg",platformVolume:"½ ESPA",payloadPower:"40 W",payloadMass:"20 kg",payloadVolume:"27 × 27 × 9.7 cm",orbit:"GEO",lifetime:"3 years",pointingAcc:"0.02°",pointingControl:"6-DOF ADCS",propulsion:"ΔV 140 m/s",rideshare:"½ ESPA",datasheet:"Datasheet",heritage:"Flight-Proven Avionics & Power Systems",remarks:"Designed for GEO missions; Purpose-built mission solution; High-rate production spacecraft; Scalable design; 6-DOF high delta-V capability"},
  {company:"Sierra Space",country:"USA",platform:"HORIZON Multi-Manifest Microsat",platformMass:"400 kg",platformVolume:"Multi-Manifest Stack",payloadPower:"1500+ W OAP",payloadMass:"65–250 kg",payloadVolume:"100+ × 100+ × 20+ cm",orbit:"LEO (All Orbits & Inclinations)",lifetime:"3–7 years",pointingAcc:"0.001°",propulsion:"Ion Propulsion (ΔV 400+ m/s)",rideshare:"ESPA Compatible (Available Upon Request)",solarArray:"Scalable Power System",datasheet:"Datasheet",heritage:"SDA Tracking Layer Tranche 2",remarks:"Modular architecture; High-throughput production; Reconfigurable payload interfaces; Multi-tier fault protection; Scalable power systems; Supports LEO through GEO constellations; Designed for large constellation deployments and technology demonstration missions."},
  {company:"Sierra Space",country:"USA",platform:"VELOCITY ESPA Grande Class Microsat",platformMass:"115–700 kg",payloadPower:"400–1500 W OAP",payloadMass:"150–500 kg",payloadVolume:">69 × >97 × >71 cm",orbit:"LEO, MEO, GEO",lifetime:"3–7 years (MEO)",pointingAcc:"0.001°",pointingKnowledge:"Better than 10 arcsec",pointingControl:"3-Axis Reaction Wheel Control",propulsion:"ΔV 175–800+ m/s",encryption:"Secure Mesh Networking (Link 16 Optional)",downlink:"Optical ISL (Optional)",tcTm:"Configurable Uplink/Downlink",rideshare:"ESPA Grande through Primary",solarArray:"Scalable Power System",datasheet:"Datasheet",heritage:"ORBCOMM Generation 2 (OG2), STPSat-5",remarks:"Flight-proven modular ESPA Grande platform; Supports payloads up to 500 kg; Optical Inter-Satellite Links (OISL) optional; High-speed processor; Optional proximity operations sensor suite; Optional high-thrust divert thrusters; Compatible with LEO/MEO/GEO missions; Applications: M2M Communications, Space Weather Monitoring, Special Purpose Communications, Technology Demonstration."},
  {company:"Sidus Space",country:"USA",platform:"LizzieSat®",platformMass:"100 kg",platformVolume:"Octagonal Prism (29.0 in Flat-to-Flat × 17.2 in Height; 188U)",payloadPower:"400 W",payloadMass:"35 kg (Without Propulsion); 20 kg (With Propulsion)",payloadVolume:"27U (Without Propulsion); 18U (With Propulsion)",orbit:"LEO (300–650 km; Inclinations: 30°, 45°, 51.6°, 63.4°, 92°, 98.6°)",pointingAcc:"0.01° (3σ)",pointingStability:"High Frequency Jitter: 1.0e-6°/s (3σ); Low Frequency Vibration: 5.8e-6°/s (3σ)",pointingKnowledge:"0.01° (3σ)",pointingControl:"3-Axis ADCS",propulsion:"Optional Bi-propellant (N2O/C3H6), ΔV 1115 m/s",downlink:"X-Band 150 Mbps",tcTm:"S-Band TT&C (2 Mbps Tx, 256 kbps Rx)",powerVoltage:"24.0–33.6 V",solarArray:"8 Deployable + 1 Body-Mounted Solar Panel",storage:"1100 Wh Li-Ion",datasheet:"Datasheet",remarks:"Multi-mission microsatellite; Triple-junction GaInP/GaAs/Ge solar cells; CCSDS-compliant S-band TT&C; DVB-S2 X-band payload downlink; Optional propulsion provides 1115 m/s ΔV."},
  {company:"SNC (Sierra Nevada Corporation)",country:"USA",platform:"SN-30L",platformMass:"50 kg",payloadPower:"40 W",payloadMass:"20 kg",payloadVolume:"27 × 27 × 9.7 cm",orbit:"LEO",lifetime:"1–3 years",pointingAcc:"0.02° (1σ)",propulsion:"ΔV 270 m/s",rideshare:"½ Std. ESPA",datasheet:"Datasheet",remarks:"LEO platform; Flight-proven baseline bus"},
  {company:"SNC (Sierra Nevada Corporation)",country:"USA",platform:"SN-50L",platformMass:"80 kg",payloadPower:"150 W",payloadMass:"50 kg",payloadVolume:"46 × 49 × 25.4 cm",orbit:"LEO",lifetime:"3 years",pointingAcc:"0.02° (1σ)",propulsion:"ΔV 125 m/s",rideshare:"Std. ESPA",datasheet:"Datasheet",heritage:"STPSat-5",remarks:"STPSat-5 spacecraft bus; Multiple-payload hosting platform"},
  {company:"SNC (Sierra Nevada Corporation)",country:"USA",platform:"SN-100L",platformMass:"115 kg",payloadPower:"350 W",payloadMass:"100 kg",payloadVolume:"69 × 97 × 71 cm",orbit:"LEO",lifetime:"5 years",pointingAcc:"0.01° (1σ)",propulsion:"ΔV 175 m/s",rideshare:"ESPA Grande",datasheet:"Datasheet",heritage:"ORBCOMM Generation 2 (OG2)",remarks:"OG2 constellation heritage; 18 satellites manufactured"},
  {company:"SNC (Sierra Nevada Corporation)",country:"USA",platform:"SN-200L",platformMass:"200 kg",payloadPower:"500 W",payloadMass:"150 kg",payloadVolume:"69 × 97 × 71 cm",orbit:"LEO",lifetime:"5+ years",pointingAcc:"0.01° (1σ)",propulsion:"ΔV 180 m/s",rideshare:"ESPA Grande / Dedicated Launch",datasheet:"Datasheet",heritage:"TacSat-2",remarks:"Flight-proven on TacSat-2; Three-axis stabilized free-flyer"},
  {company:"Terran Orbital",country:"USA",platform:"Triumph",platformMass:"Up to 14 kg",platformVolume:"6U",payloadPower:"100 W",payloadMass:"5 kg",orbit:"LEO (400-1200 km)",pointingAcc:"30-75 arcsec (higher available)",pointingControl:"None standard (options available)",dataInterface:"-",downlink:"X-band 50 Mbps; S-band 2 Mbps; UHF 9.6 kbps",tcTm:"S-band 125 kbps UL; UHF 9.6 kbps",powerVoltage:"12V Unregulated; 3.3V & 5V rails",rideshare:"Compatible with rail dispensers",solarArray:"Tri-fold deployable",datasheet:"Yes",heritage:"Most flown Terran platform (formerly Trestles)",remarks:"Technology demonstrator platform"},
  {company:"Terran Orbital",country:"USA",platform:"Renegade",platformMass:"Up to 25 kg",platformVolume:"12U (16U option)",payloadPower:"100 W",payloadMass:"10 kg",orbit:"LEO (400-1200 km)",pointingAcc:"30-75 arcsec (higher available)",pointingControl:"None standard (options available)",dataInterface:"-",downlink:"X-band 50 Mbps; S-band 2 Mbps; UHF 9.6 kbps",tcTm:"S-band 125 kbps UL; UHF 9.6 kbps",powerVoltage:"12V Unregulated; 3.3V & 5V rails",rideshare:"Compatible with rail dispensers",solarArray:"Tri-fold deployable",datasheet:"Yes",heritage:"Based on Trestles heritage",remarks:"Can accommodate 19 cm optical payload"},
  {company:"Terran Orbital",country:"USA",platform:"Voyager",platformMass:"Up to 30 kg",platformVolume:"16U",payloadPower:"100 W",payloadMass:"8 kg",orbit:"GEO, MEO, Cislunar (>30,000 km)",pointingAcc:"30-75 arcsec (higher available)",pointingControl:"None standard (options available)",propulsion:"200 s Isp Hydrazine",dataInterface:"-",downlink:"Deep Space X-band",tcTm:"Deep Space X-band",powerVoltage:"12V Unregulated; 3.3V & 5V rails",rideshare:"Compatible with rail dispensers",solarArray:"Tri-fold deployable",datasheet:"Yes",heritage:"CAPSTONE heritage",remarks:"Deep-space platform, dual-string avionics"},
  {company:"Terran Orbital",country:"USA",platform:"Excelsior",platformMass:"Up to 125 kg",platformVolume:"Half-ESPA",payloadPower:"500 W",payloadMass:"50 kg",orbit:"LEO (400-1200 km)",pointingAcc:"10-50 arcsec (higher available)",slewing:"400 s Isp standard",propulsion:"-",dataInterface:"-",downlink:"X-band 650 Mbps; S-band 2 Mbps",tcTm:"S-band 125 kbps UL",powerVoltage:"66V system; 28V, 12V & 9V rails",rideshare:"Half-ESPA",solarArray:"Deployable",datasheet:"Yes",heritage:"Flight heritage",remarks:"Supports EP/Hydrazine propulsion bay"},
  {company:"Terran Orbital",country:"USA",platform:"Nebula",platformMass:"Up to 250 kg",platformVolume:"82 × 58 × 39 cm",payloadPower:"1 kW",payloadMass:"Up to 130 kg",payloadVolume:"Open deck",orbit:"LEO (400-1200 km)",pointingAcc:"10-50 arcsec (higher available)",propulsion:"2150 s Hall Effect (options available)",encryption:"Optional Type-1",downlink:"X-band 650 Mbps; S-band 2 Mbps",tcTm:"S-band 125 kbps UL",powerVoltage:"66V system; 28V,12V,9V rails",rideshare:"ESPA / ESPA Grande",solarArray:"Deployable",datasheet:"Yes",heritage:"SDA Tranche-0",remarks:"1.1 mN thrust; odd-shaped payload support"},
  {company:"Terran Orbital",country:"USA",platform:"Ambassador",platformMass:"Up to 500 kg",platformVolume:"104 × 112 cm payload deck",payloadPower:"1.5 kW",payloadMass:"Up to 200 kg",payloadVolume:"Large payload deck",orbit:"LEO (400-1200 km)",pointingAcc:"10-50 arcsec (higher available)",propulsion:"1150 s Hall Effect (options available)",encryption:"Optional Type-1",downlink:"X-band 650 Mbps; S-band 2 Mbps",tcTm:"S-band 125 kbps UL",powerVoltage:"66V system; 12V & 9V rails",rideshare:"ESPA-Grande",solarArray:"Deployable",datasheet:"Yes",heritage:"SDA Tranche-1",remarks:"Designed for DoD & large rideshare payloads"},
  {company:"Terran Orbital",country:"USA",platform:"Enterprise A",platformMass:"500 kg",platformVolume:"100 × 200 cm payload deck",payloadPower:"Up to 2 kW",payloadMass:"Up to 200 kg",payloadVolume:"40 × 20 × 20 cm electronics volume",orbit:"LEO (400-1200 km)",pointingAcc:"10-50 arcsec",dataInterface:"-",downlink:"X-band 650 Mbps; S-band 2 Mbps; Ka optional",tcTm:"S-band 125 kbps UL",powerVoltage:"66V, 28V, 12V & 9V rails",rideshare:"Flat packing",solarArray:"Deployable",datasheet:"Yes",heritage:"SmallSat heritage",remarks:"Flat packing, OISL capable"},
  {company:"Turion Space",country:"USA",platform:"DROID.alpha Mini",platformVolume:"0.50 × 0.51 × 0.22 m",payloadPower:"240 W (Peak)",payloadMass:"70 kg",payloadVolume:"0.54 × 0.51 × 0.22 m (Payload Envelope); Stowed Height with Payload: 0.63 m",lifetime:"5+ years",pointingKnowledge:"<15 arcsec",slewing:"5°/s",propulsion:"2 × FEEP Thrusters (0.01–0.08 mN)",powerVoltage:"28 V",leadTime:"12 months",datasheet:"Data sheet",remarks:"Peak power specified (240 W); precision pointing knowledge <15 arcsec; designed with FEEP electric propulsion."},
  {company:"York Space Systems",country:"USA",platform:"S-Class Space Vehicle",platformVolume:"24 × 24 × LV Height*",payloadPower:"274 W (Peak)",payloadMass:"85 kg+",payloadVolume:"24 × 24 × LV Height* (Stowed)",orbit:"LEO, GEO, Cislunar",lifetime:"5+ years (LEO); 2+ years (GEO & Cislunar)",dataInterface:"Flexible Open Standard Interfaces",rideshare:"ESPA-Class",datasheet:"Data sheet",heritage:"Flight Proven",remarks:"Commercial ESPA-class modular spacecraft bus; complete space segment delivery; in production; York flight & ground software; regulatory licensing and launch services; mission operations software; autonomous tasking; secure cloud-based mission data distribution; ground station services available; mission operations as a service."},
  {company:"York Space Systems",country:"USA",platform:"LX-Class Space Vehicle",platformVolume:"36 × 36 × LV Height*",payloadPower:"1500 W (Peak)",payloadMass:"300 kg+",payloadVolume:"36 × 36 × LV Height* (Stowed)",lifetime:"5+ years (LEO); 2+ years (GEO & Cislunar)",dataInterface:"Flexible Open Standard Interfaces",rideshare:"ESPA Grande-Class",datasheet:"Data sheet",heritage:"Flight Proven",remarks:"Commercial ESPA Grande-class modular platform; designed for communications and imaging missions; complete space segment delivery; regulatory licensing and launch services; mission operations software; autonomous tasking; secure cloud-based mission data distribution; ground station services available; mission operations as a service."},
  // ARGOTEC (Italy)
  {company:"Argotec",country:"Italy",platform:"HAWK PLUS",platformMass:"75-130 kg",platformVolume:"575 × 644 × 739 mm (Stowed)",payloadPower:"20-100 W OAP",payloadMass:"30 kg",payloadVolume:"540 × 540 × 300 mm (+310 × 310 × 372 mm internal)",orbit:"LEO (MEO/GEO & Beyond on request)",lifetime:">5 years",pointingAcc:"<±10 arcsec (1σ)",pointingKnowledge:"<±10 arcsec (1σ)",positionKnowledge:"<±10 m",pointingControl:"3-Axis Stabilized",propulsion:"Chemical (65-170 m/s ΔV) / Electric (140 m/s-1.05 km/s ΔV)",dataInterface:"SpaceWire, RS-422, CAN, SPI, PPS, GPIO",downlink:"Up to 218 Mbps (X-Band)",tcTm:"Up to 128 kbps (S-Band)",powerVoltage:"5V (20/40 W), 12V (48/144 W), 28V (240/400 W)",solarArray:"Deployable Solar Arrays (Up to 240 W / 440 W)",storage:"240 GB Expandable (OBC:16 GB)",datasheet:"Data sheet",remarks:"Modular, constellation-ready platform with cold gas thrusters; supports up to 7-year SSO missions; electric propulsion option available."},
  {company:"Argotec",country:"Italy",platform:"HAWK LITE (6U)",platformMass:"7 kg",platformVolume:"≤200 × ≤266 × ≤366 mm",payloadPower:"5-12 W OAP",payloadMass:"3 kg",payloadVolume:"170 × 170 × 100 mm internal",orbit:"LEO, Interplanetary",lifetime:"Up to 5 years",pointingAcc:"<±10 arcsec (1σ)",pointingKnowledge:"<±10 arcsec (1σ)",positionKnowledge:"<±10 m",pointingControl:"3-Axis Stabilized",propulsion:"Chemical (25 m/s-105 m/s ΔV) / Electric (130 m/s-700 m/s ΔV)",dataInterface:"SPI, PPS",downlink:"Up to 15 Mbps (X-Band)",tcTm:"UHF (Up to 1 Mbps)",powerVoltage:"5V (12 W), 12V (24 W)",solarArray:"Body Mounted Solar Panels (12 W) / Deployable Solar Arrays (19 W)",storage:"OBC:2 GB",datasheet:"Data sheet",remarks:"Ultra-compact platform; LEO and interplanetary capable."},
  {company:"Argotec",country:"Italy",platform:"HAWK LITE (12U LEO)",platformMass:"16 kg",platformVolume:"≤200 × ≤266 × ≤366 mm",payloadPower:"5-12 W OAP",payloadMass:"8 kg",payloadVolume:"260 × 200 × 100 mm internal",orbit:"LEO",lifetime:"Up to 5 years",pointingAcc:"<±10 arcsec (1σ)",pointingKnowledge:"<±10 arcsec (1σ)",positionKnowledge:"<±10 m",pointingControl:"3-Axis Stabilized",propulsion:"Chemical (25 m/s-105 m/s ΔV) / Electric (130 m/s-700 m/s ΔV)",dataInterface:"SPI, PPS",downlink:"Up to 15 Mbps (X-Band)",tcTm:"UHF (Up to 1 Mbps)",powerVoltage:"5V (12 W), 12V (24 W)",solarArray:"Body Mounted Solar Panels (12 W) / Deployable Solar Arrays (38 W)",storage:"OBC:16 GB",datasheet:"Data sheet",remarks:"12U LEO platform optimized for Earth observation and communications."},
  {company:"Argotec",country:"Italy",platform:"HAWK LITE (12U Deep Space)",platformMass:"16 kg",platformVolume:"≤200 × ≤266 × ≤366 mm",payloadPower:"5-12 W OAP",payloadMass:"8 kg",payloadVolume:"260 × 200 × 100 mm internal",orbit:"GEO, Cislunar, Interplanetary",lifetime:"Up to 5 years",pointingAcc:"<±10 arcsec (1σ)",pointingKnowledge:"<±10 arcsec (1σ)",positionKnowledge:"<±10 m",pointingControl:"3-Axis Stabilized",propulsion:"Chemical (25 m/s-105 m/s ΔV) / Electric (130 m/s-700 m/s ΔV)",dataInterface:"SPI, PPS",downlink:"Up to 15 Mbps (X-Band)",tcTm:"UHF (Up to 1 Mbps)",powerVoltage:"5V (12 W), 12V (24 W)",solarArray:"Deployable Solar Arrays (87 W)",storage:"OBC:16 GB",datasheet:"Data sheet",remarks:"Deep-space rated platform for GEO, cislunar, and interplanetary missions."},
  // AEROSPACELAB (Belgium)
  {company:"Aerospacelab",country:"Belgium",platform:"VSP-50",platformVolume:"~0.6 × 0.6 × 0.4 m (stowed)",payloadPower:"50-100 W OAP",payloadMass:"~15-30 kg",payloadVolume:"0.2 × 0.3 × 0.2 m to 0.4 × 0.3 × 0.3 m",orbit:"LEO (SSO)",lifetime:"~3 years",pointingAcc:"< 30 arcsec (1σ)",pointingStability:"< 1.0 arcsec/s",pointingKnowledge:"< 20 arcsec (1σ)",positionKnowledge:"< 10 m",pointingControl:"3-axis",slewing:"2°/s at 50 kg",propulsion:"Electric Propulsion (Hall Effect, 300-800 s Isp)",downlink:"X-band (Up to 200 Mbps)",tcTm:"UHF (Up to 1 Mbps up/down)",powerVoltage:"12 V, 5 V regulated",solarArray:"Body mounted + deployable solar arrays (100-160 W BOL)",datasheet:"Data sheet",remarks:"Versatile small satellite platform with electric propulsion."},
  // ENDUROSAT (Bulgaria)
  {company:"EnduroSat",country:"Bulgaria",platform:"The Frame",platformMass:"up to 12 kg",payloadPower:"20-60 W OAP",payloadMass:"up to 6 kg",orbit:"LEO",lifetime:"5+ years",pointingAcc:"< 30 arcsec",pointingKnowledge:"< 10 arcsec",positionKnowledge:"< 10 m",pointingControl:"3-axis",propulsion:"Electric (Hall Effect, optional)",downlink:"S-band up to 10 Mbps",tcTm:"UHF/S-band",powerVoltage:"5V, 12V, 28V",solarArray:"Deployable solar arrays (60-120 W)",datasheet:"Data Sheet",remarks:"Modular CubeSat platform; configurable 6U/12U/16U form factor."},
  {company:"EnduroSat",country:"Bulgaria",platform:"16U CubeSat Platform",platformMass:"up to 30 kg",payloadPower:"50-100 W OAP",payloadMass:"up to 12 kg",orbit:"LEO",lifetime:"5+ years",pointingAcc:"< 10 arcsec",pointingKnowledge:"< 10 arcsec",positionKnowledge:"< 10 m",pointingControl:"3-axis",propulsion:"Electric (Hall Effect, standard)",downlink:"S-band up to 10 Mbps, X-band up to 200 Mbps",tcTm:"UHF/S-band",powerVoltage:"5V, 12V, 28V",solarArray:"Deployable solar arrays (100-200 W)",datasheet:"Data Sheet",heritage:"Flight Proven",remarks:"16U modular platform with flight heritage."},
  // GOMSPACE (Denmark)
  {company:"GomSpace",country:"Denmark",platform:"Medium MicroSat (70kg)",payloadMass:"10 kg",orbit:"LEO",pointingControl:"3-axis",downlink:"S-band",remarks:"70 kg class microsat platform."},
  {company:"GomSpace",country:"Denmark",platform:"Medium MicroSat (150kg)",payloadMass:"25 kg",orbit:"LEO",pointingControl:"3-axis",downlink:"S-band",remarks:"150 kg class microsat platform."},
  {company:"GomSpace",country:"Denmark",platform:"12U Platform",payloadMass:"6 kg",orbit:"LEO",remarks:"12U CubeSat platform."},
  // HEMERIA (France)
  {company:"Hemeria",country:"France",platform:"SPECTRA-L40",payloadMass:"40 kg",orbit:"LEO",remarks:"Earth observation platform."},
  {company:"Hemeria",country:"France",platform:"SPRINT L60",payloadMass:"60 kg",orbit:"LEO",remarks:"Agile Earth observation platform."},
  {company:"Hemeria",country:"France",platform:"SPARTA G70",payloadMass:"70 kg",orbit:"LEO",remarks:"High-agility satellite platform."},
  // OHB LUXSPACE (Luxembourg)
  {company:"OHB LuxSpace",country:"Luxembourg",platform:"TRITON-X Heavy",platformMass:"up to 100 kg",platformVolume:"570 × 570 × 780 mm (1.0 × 0.6 × 0.6 m Stowed)",payloadPower:"30-80 W avg, 200-300 W peak",payloadMass:"up to 50 kg",payloadVolume:"570 × 570 × 200 mm (half-height)",orbit:"LEO (others on request)",lifetime:">5 years",pointingControl:"3-axis stabilized",propulsion:"Electric Propulsion (Gridded Ion, HET)",encryption:"AES-256 (optional payload relay)",downlink:"X-band (Up to 300 Mbps)",tcTm:"S-band (TT&C 4 kbps up to 100 kbps downlink)",powerVoltage:"28V ± 6V for main bus, 5V regulated",solarArray:"Deployable Solar Arrays (300-500 W)",storage:"2 TB SSD",datasheet:"Data Sheet",remarks:"Scalable platform for LEO missions with electric propulsion and optional encryption."},
  // PLACEHOLDER - No data in spreadsheet
  {company:"NanoAvionics",country:"Lithuania",platform:"TBD"},
  {company:"Orbital Astronautics",country:"England",platform:"TBD"},
  {company:"Reflex Aerospace",country:"Germany",platform:"TBD"},
  {company:"Space Inventor",country:"Denmark",platform:"TBD"},
  {company:"U-Space",country:"France",platform:"TBD"},
  {company:"Surrey Satellite Technology Ltd",country:"England",platform:"TBD"},
];

// Paste your Google Apps Script Web App URL here (or leave empty to use localStorage only)
const GSHEET_URL = 'https://script.google.com/a/macros/vyomic.space/s/AKfycbwMPDibe-2NeBaL7ZJSjLOUKChzcqNJeAqFKvJFGyEtwpHPECgUcR7FPj40ABo9eSv5/exec';
const COMPANY_COUNTRY_MAP = {
  "Glavkosmos": "Russia",
  "Exobotics": "UK"
};

function guessCountry(company, fallback) {
  if (COMPANY_COUNTRY_MAP[company]) return COMPANY_COUNTRY_MAP[company];
  // Try to extract country from company string like "Aero Space Lab - Belgium"
  const match = company.match(/[-\u2013]\s*([A-Za-z\s]+)$/);
  if (match) {
    const c = match[1].trim();
    const known = ["Belgium","USA","US","Italy","Germany","South Africa","France","UK","England","Canada","Denmark","Russia","Czech Republic","Australia","Japan","India","Israel","China","Spain","Netherlands","Switzerland","Sweden","Norway","Finland","Brazil","Luxembourg","UAE","Singapore","Bulgaria","Lithuania"];
    for (const k of known) {
      if (c.toLowerCase() === k.toLowerCase() || c.toLowerCase().includes(k.toLowerCase())) return k;
    }
  }
  return fallback || "Unknown";
}

function classifyMass(val) {
  if (!val) return "";
  const m = parseFloat(val);
  if (Number.isNaN(m)) return "";
  if (m < 10) return "Nano (<10 kg)";
  if (m <= 100) return "Micro (10-100 kg)";
  if (m <= 500) return "Mini (100-500 kg)";
  if (m <= 1000) return "Medium (500-1000 kg)";
  return "Large (>1000 kg)";
}

function parseMass(val) {
  if (!val) return 0;
  const m = parseFloat(val);
  return Number.isNaN(m) ? 0 : m;
}

// Normalise GSheet column headers to internal field names
function normalizeBusKeys(obj) {
  const fieldMap = {
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
  const out = {};
  for (const [key, val] of Object.entries(obj)) {
    const mapped = fieldMap[key.toLowerCase().trim()] || key;
    out[mapped] = val;
  }
  return out;
}

const COMPLIANCE_QUESTIONS = [
  // Payload Support Capability (20%) — indices 0-7
  { q: "Maximum payload DC power support", cat: "Payload Support Capability", weight: 3 },
  { q: "Regulated power supply for payload", cat: "Payload Support Capability", weight: 2 },
  { q: "Payload thermal dissipation handling capacity", cat: "Payload Support Capability", weight: 3 },
  { q: "Maximum payload mass support", cat: "Payload Support Capability", weight: 3 },
  { q: "Number of telemetry & telecommand channels support for payload", cat: "Payload Support Capability", weight: 2 },
  { q: "Possible number of temperature sensor allocation for payload", cat: "Payload Support Capability", weight: 1 },
  { q: "Guaranteed temperature limits for payload packages", cat: "Payload Support Capability", weight: 3 },
  { q: "Electrical protection support", cat: "Payload Support Capability", weight: 3 },
  // Satellite Bus Capability (40%) — indices 8-24
  { q: "Overall power generation at beginning/end of life in defined orbit", cat: "Satellite Bus Capability", weight: 3 },
  { q: "Battery Support and margin during eclipse", cat: "Satellite Bus Capability", weight: 2 },
  { q: "Power budget of bus at end of life", cat: "Satellite Bus Capability", weight: 2 },
  { q: "TTC module specification and configuration", cat: "Satellite Bus Capability", weight: 2 },
  { q: "Bus payload interface options and flexibility in configuration", cat: "Satellite Bus Capability", weight: 2 },
  { q: "ADCS configuration", cat: "Satellite Bus Capability", weight: 4 },
  { q: "On-board failure detection and isolation recovery", cat: "Satellite Bus Capability", weight: 3 },
  { q: "On-board software for subsystem management in nominal and backup mode", cat: "Satellite Bus Capability", weight: 3 },
  { q: "Bus platform pointing budget", cat: "Satellite Bus Capability", weight: 4 },
  { q: "Bus platform propulsion configuration", cat: "Satellite Bus Capability", weight: 3 },
  { q: "Lift off mass budget considering <60kg payload mass and 6 years in-orbit life", cat: "Satellite Bus Capability", weight: 2 },
  { q: "Bus Interface and LV fairing compatibility with commercially available LV providers", cat: "Satellite Bus Capability", weight: 2 },
  { q: "Overall product Assurance plan", cat: "Satellite Bus Capability", weight: 3 },
  { q: "Alternate configuration of satellite bus suitable to this payload", cat: "Satellite Bus Capability", weight: 1 },
  { q: "Satellite grounding scheme details", cat: "Satellite Bus Capability", weight: 1 },
  { q: "Ground control systems support for LEOP operations", cat: "Satellite Bus Capability", weight: 1 },
  { q: "Single Upset event and radiation protection in defined orbit", cat: "Satellite Bus Capability", weight: 2 },
  // Satellite Bus Hardware & Heritage (15%) — indices 25-28
  { q: "BOM with corresponding supplier", cat: "Satellite Bus Hardware & Heritage", weight: 3 },
  { q: "Supply chain redundancy for components", cat: "Satellite Bus Hardware & Heritage", weight: 4 },
  { q: "Space heritage of components", cat: "Satellite Bus Hardware & Heritage", weight: 5 },
  { q: "Previous customer details for similar usage", cat: "Satellite Bus Hardware & Heritage", weight: 3 },
  // AIT Phase Support (15%) — indices 29-34
  { q: "Production & Test facility support", cat: "AIT Phase Support", weight: 3 },
  { q: "Product assurance", cat: "AIT Phase Support", weight: 3 },
  { q: "Participation of VyomIC team in all phases of program", cat: "AIT Phase Support", weight: 3 },
  { q: "Participation from VyomIC in design test and reviews", cat: "AIT Phase Support", weight: 2 },
  { q: "In-Orbit Operation services and support", cat: "AIT Phase Support", weight: 2 },
  { q: "Satellite mission software development and support", cat: "AIT Phase Support", weight: 2 },
  // Deliverables (10%) — indices 35-39
  { q: "Real time monitoring & control software", cat: "Deliverables", weight: 3 },
  { q: "TM/TC database management", cat: "Deliverables", weight: 2 },
  { q: "Flight Operation Procedure", cat: "Deliverables", weight: 2 },
  { q: "Flight dynamic operations", cat: "Deliverables", weight: 2 },
  { q: "Satellite simulator", cat: "Deliverables", weight: 1 },
];

// Category definitions with weights and question ranges
const COMPLIANCE_CATEGORIES = [
  { key: "payload", label: "Payload Support Capability", pct: 20, start: 0, end: 7 },
  { key: "bus", label: "Satellite Bus Capability", pct: 40, start: 8, end: 24 },
  { key: "heritage", label: "Hardware & Heritage", pct: 15, start: 25, end: 28 },
  { key: "ait", label: "AIT Phase Support", pct: 15, start: 29, end: 34 },
  { key: "deliverables", label: "Deliverables", pct: 10, start: 35, end: 39 },
];

// Mission-critical requirement indices (even if overall score is high, gaps here are red flags)
const MISSION_CRITICAL = [13, 15, 18, 21, 25, 26, 8, 9]; // ADCS, Pointing, Power gen, Propulsion, BOM, Heritage, Prod Assurance, Radiation

function autoCompliance(bus) {
  const a = {};
  COMPLIANCE_QUESTIONS.forEach((_, i) => { a[i] = ""; });
  // Payload Support Capability
  if (bus.payloadPower) a[0] = "yes";
  if (bus.payloadMass) a[3] = "yes";
  // Satellite Bus Capability
  if (bus.payloadPower || bus.solarArray) a[8] = "yes";
  if (bus.tcTm) a[11] = "yes";
  if (bus.dataInterface) a[12] = "yes";
  if (bus.pointingControl) a[13] = "yes";
  if ((bus.remarks || "").toLowerCase().includes("fdir") || (bus.remarks || "").toLowerCase().includes("redundan")) a[14] = "yes";
  if ((bus.remarks || "").toLowerCase().includes("software") || (bus.remarks || "").toLowerCase().includes("autonomous")) a[15] = "yes";
  if (bus.pointingAcc) a[16] = "yes";
  if (bus.propulsion) a[17] = "yes";
  if (bus.payloadMass && parseMass(bus.payloadMass) <= 60) a[18] = "yes";
  // Satellite Bus Hardware & Heritage
  if (bus.heritage) a[27] = "yes";
  return a;
}

// ============================================================================
// COMPLIANCE SCORING ENGINE
// ============================================================================

function scoreAnswer(val) {
  if (val === "yes") return 1.0;
  if (val === "partial") return 0.5;
  return 0.0;
}

function computeCompanyScore(complianceData) {
  // complianceData = { 0: "yes", 1: "partial", ... } for this company
  var result = { categories: {}, overall: 0, totalWeightedScore: 0, totalMaxWeight: 0, strengths: [], weaknesses: [], criticalGaps: [] };

  COMPLIANCE_CATEGORIES.forEach(function(cat) {
    var catScore = 0;
    var catMax = 0;
    for (var i = cat.start; i <= cat.end; i++) {
      var w = COMPLIANCE_QUESTIONS[i].weight;
      var s = scoreAnswer((complianceData && complianceData[i]) || "");
      catScore += s * w;
      catMax += w;
    }
    var catPct = catMax > 0 ? (catScore / catMax) * 100 : 0;
    result.categories[cat.key] = {
      label: cat.label,
      pct: cat.pct,
      score: catScore,
      max: catMax,
      pctScore: catPct,
      weightedContrib: (catPct / 100) * cat.pct
    };
    result.totalWeightedScore += catScore;
    result.totalMaxWeight += catMax;
  });

  result.overall = result.totalMaxWeight > 0 ? Math.round((result.totalWeightedScore / result.totalMaxWeight) * 100) : 0;

  // Strengths: questions answered "yes" with highest weight
  var strengths = [];
  var weaknesses = [];
  COMPLIANCE_QUESTIONS.forEach(function(q, i) {
    var val = (complianceData && complianceData[i]) || "";
    var s = scoreAnswer(val);
    if (s === 1.0) strengths.push({ idx: i, q: q.q, weight: q.weight, cat: q.cat });
    if (s < 1.0) weaknesses.push({ idx: i, q: q.q, weight: q.weight, cat: q.cat, val: val });
  });
  strengths.sort(function(a, b) { return b.weight - a.weight; });
  weaknesses.sort(function(a, b) { return b.weight - a.weight; });
  result.strengths = strengths.slice(0, 5);
  result.weaknesses = weaknesses.slice(0, 5);

  // Mission-critical gaps: if a critical requirement is "no" or empty
  MISSION_CRITICAL.forEach(function(idx) {
    var val = (complianceData && complianceData[idx]) || "";
    if (val !== "yes") {
      result.criticalGaps.push({ idx: idx, q: COMPLIANCE_QUESTIONS[idx].q, val: val || "unanswered", weight: COMPLIANCE_QUESTIONS[idx].weight });
    }
  });

  return result;
}

function getRecommendation(score) {
  if (score >= 90) return { label: "Excellent", color: "#27ae60" };
  if (score >= 80) return { label: "Very Good", color: "#2ecc71" };
  if (score >= 70) return { label: "Good", color: "#f39c12" };
  if (score >= 60) return { label: "Acceptable", color: "#e67e22" };
  return { label: "Not Recommended", color: "#e74c3c" };
}

// ============================================================================
// APPLICATION
// ============================================================================

const APP = {

  buses: [],
  interactions: [],
  
  editingInteractionId: null,
  compliance: {},
  selectedDashCompany: null,
  compareVisible: null,
  compareMode: "compliance", // "compliance" | "specs"
  stageOverrides: {}, // { [company]: "lane key" }
  stageLabels: { "new": "New (No Activity)", "1st": "1st Response", "2nd": "2nd Response", "3rd": "3rd+ Response", "nda": "NDA", "meeting": "Meeting", "eoi": "EOI", "tech": "Technical Discussion", "eval_started": "Evaluation Started", "eval_one": "Evaluation One", "eval_two": "Evaluation Two", "shortlisted": "Shortlisted", "selected": "Selected" },
  goStatus: {}, // { [company]: "go" | "nogo" }
  timelineFilters: { country: "", go: "" },

  el: {},

  // ========== GOOGLE SHEETS SYNC ==========

  gsheetFetch(tab) {
    if (!GSHEET_URL) return Promise.reject(new Error('No GSHEET_URL configured'));
    return new Promise((resolve, reject) => {
      const cb = '_gs_cb_' + Date.now() + '_' + Math.random().toString(36).slice(2);
      window[cb] = function(data) {
        delete window[cb];
        resolve(data);
      };
      const s = document.createElement('script');
      s.src = GSHEET_URL + '?tab=' + tab + '&callback=' + cb;
      s.onerror = function() { delete window[cb]; reject(new Error('Script load failed')); };
      document.head.appendChild(s);
    });
  },

  gsheetPost(tab, payload) {
    if (!GSHEET_URL) return;
    try {
      var name = 'gs_post_' + tab + '_' + Date.now();
      var iframe = document.createElement('iframe');
      iframe.name = name;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      var form = document.createElement('form');
      form.method = 'POST';
      form.action = GSHEET_URL + '?tab=' + tab;
      form.target = name;
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'data';
      input.value = JSON.stringify(payload);
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      setTimeout(function() {
        if (document.body.contains(form)) document.body.removeChild(form);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }, 5000);
    } catch(e) { console.warn('gsheetPost error:', e); }
  },

  async loadAllFromGSheet() {
    const j = await this.gsheetFetch('all');
    console.log('GSheet raw response:', j);
    let changed = false;
    if (j.buses && j.buses.length) {
      this.buses = j.buses.map(b => {
        b = normalizeBusKeys(b);
        b._massVal = parseMass(b.payloadMass || b.platformMass);
        b._massClass = classifyMass(b.payloadMass || b.platformMass);
        b.country = guessCountry(b.company, b.country);
        return b;
      });
      localStorage.setItem("satbus_data", JSON.stringify(this.buses));
      changed = true;
    }
    if (j.compliance) {
      this.compliance = j.compliance;
      changed = true;
    } else {
      this.compliance = this.compliance || {};
    }
    if (j.interactions && j.interactions.length) {
      this.interactions = j.interactions;
      changed = true;
    }
    return changed;
  },

  async init() {
    this.cacheDOM();
    this.bindEvents();
    this.setStatus('Loading data...', 'info');
    let gsheetLoaded = false;
    if (GSHEET_URL) {
      try {
        gsheetLoaded = await this.loadAllFromGSheet();
        console.log('GSheet loaded:', gsheetLoaded, 'buses:', this.buses.length);
      } catch (e) {
        console.error('GSheet error:', e);
      }
    }
    if (!gsheetLoaded) {
      const stored = localStorage.getItem("satbus_data");
      if (stored) {
        try { this.buses = JSON.parse(stored); } catch (_) { this.buses = []; }
      }
      if (!this.buses.length) {
        const seen = new Set();
        this.buses = BUILTIN_DATA.filter(b => {
          if (seen.has(b.company)) return false;
          seen.add(b.company);
          return true;
        }).map(b => ({
          ...b,
          _massVal: parseMass(b.payloadMass || b.platformMass),
          _massClass: classifyMass(b.payloadMass || b.platformMass),
          country: guessCountry(b.company, b.country)
        }));
        this.save();
      }
      this.compliance = {};
    }
    // Always load interactions & compliance from localStorage (merges GSheet data)
    this.loadInteractions();
    this.loadCompliance();
    this.loadStageOverrides();
    this.loadGoStatus();
    this.loadMilestoneLabels();
    if (!gsheetLoaded) {
      const hadCompliance = localStorage.getItem("satbus_compliance") !== null;
      if (!hadCompliance && !Object.keys(this.compliance).length) {
        this.buses.forEach(b => {
          const k = b.company + "|" + b.platform;
          if (!this.compliance[k]) this.compliance[k] = autoCompliance(b);
        });
        this.saveCompliance();
      }
    }
    this.initTheme();
    this.renderDashCompanyList();
    this.renderComparison();
    this.setStatus('', '');
  },

  cacheDOM() {
    const g = id => document.getElementById(id);
    this.el = {
      status: g("statusMessage"),
      themeToggle: g("themeToggle"),
      dashCards: g("dashCards"),
      dashCompanyDetail: g("dashCompanyDetail"),
      dashDetailBody: g("dashDetailBody"),
      dashDetailTitle: g("dashDetailTitle"),
      dashBackBtn: g("dashBackBtn"),
      compareBody: g("compareBody"),
      compareTitle: g("compareTitle"),
      specsBody: g("specsBody"),
      dashSearch: g("dashSearch"),
      specsSearch: g("specsSearch"),
      specsModal: g("specsModal"),
      specsModalTitle: g("specsModalTitle"),
      specsModalBody: g("specsModalBody"),
      specsModalClose: g("specsModalClose"),
      tabs: document.querySelectorAll(".tab"),
      panels: document.querySelectorAll(".panel"),
      intModal: g("interactionModal"),
      intModalTitle: g("interactionModalTitle"),
      intCompany: g("intCompany"),
      intDate: g("intDate"),
      intTime: g("intTime"),
      intType: g("intType"),
      intSubject: g("intSubject"),
      intNotes: g("intNotes"),
      intFollowUp: g("intFollowUp"),
      intFollowUpDone: g("intFollowUpDone"),
      intSaveBtn: g("intSaveBtn"),
      intCancelBtn: g("intCancelBtn"),
      intDeleteBtn: g("intDeleteBtn"),
      detailAddInteractionBtn: null,
      detailCrmList: null,
      detailCrmEmpty: null
    };
  },

  bindEvents() {
    if (this.el.themeToggle) {
      this.el.themeToggle.addEventListener("click", () => this.toggleTheme());
    }
    this.el.dashBackBtn.addEventListener("click", () => this.showDashCompanyList());
    this.el.intCancelBtn.addEventListener("click", () => this.closeInteractionModal());
    this.el.intSaveBtn.addEventListener("click", () => this.saveInteraction());
    this.el.intDeleteBtn.addEventListener("click", () => this.deleteInteraction());

    this.el.intModal.addEventListener("click", e => { if (e.target === e.currentTarget) this.closeInteractionModal(); });
    this.el.specsModal.addEventListener("click", e => { if (e.target === e.currentTarget) this.closeSpecsModal(); });
    if (this.el.specsModalClose) {
      this.el.specsModalClose.addEventListener("click", () => this.closeSpecsModal());
    }

    if (this.el.dashSearch) {
      this.el.dashSearch.addEventListener("input", () => this.renderDashCompanyList());
    }
    if (this.el.specsSearch) {
      this.el.specsSearch.addEventListener("input", () => this.renderBusSpecs());
    }

    this.el.tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        this.el.tabs.forEach(t => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        this.el.panels.forEach(p => p.classList.remove("is-active"));
        const panel = document.getElementById(tab.dataset.tab + "Panel");
        if (panel) panel.classList.add("is-active");
        if (tab.dataset.tab === "compare") this.renderComparison();
        if (tab.dataset.tab === "specs") this.renderBusSpecs();
        if (tab.dataset.tab === "analysis") this.renderAnalysis();
        if (tab.dataset.tab === "timeline") this.renderTimeline();
      });
    });

    document.querySelectorAll(".compare-mode-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".compare-mode-btn").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        this.compareMode = btn.dataset.mode;
        this.renderComparison();
      });
    });
  },

  save() {
    localStorage.setItem("satbus_data", JSON.stringify(this.buses));
    this.gsheetPost('buses', { buses: this.buses });
  },

  // ========== CRM INTERACTIONS ==========

  loadInteractions() {
    var local = null;
    try { var raw = localStorage.getItem("satbus_crm"); if (raw) local = JSON.parse(raw); } catch (_) {}
    if (local && local.length) {
      // Merge: local overrides sheet by ID, sheet-only entries are kept
      var byId = {};
      (this.interactions || []).forEach(function(i) { byId[i.id] = i; });
      local.forEach(function(i) { byId[i.id] = i; });
      this.interactions = Object.keys(byId).map(function(k) { return byId[k]; });
    } else if (!this.interactions || !this.interactions.length) {
      this.interactions = [
        { id: "crm1", company: "Astro Digital", date: "2026-05-12", time: "10:30", type: "Email", subject: "Initial outreach", notes: "Sent introductory email about payload requirements. Awaiting response.", followUp: "2026-06-01", followUpDone: false },
        { id: "crm2", company: "BAE Systems /INSPACE", date: "2026-05-20", time: "14:00", type: "Meeting", subject: "Technical discussion", notes: "Discussed platform capabilities for LEO PNT mission.", followUp: "", followUpDone: true },
        { id: "crm3", company: "Blue Canyon Technologies", date: "2026-06-05", time: "09:15", type: "Call", subject: "Follow-up call", notes: "Spoke with sales engineer.", followUp: "2026-06-20", followUpDone: false }
      ];
      this.saveInteractions();
    }
  },

  saveInteractions() {
    localStorage.setItem("satbus_crm", JSON.stringify(this.interactions));
    this.gsheetPost('interactions', { interactions: this.interactions });
    if (this.selectedDashCompany) this.renderCompanyDetail(this.selectedDashCompany);
  },

  openInteractionModal() {
    this.editingInteractionId = null;
    this.el.intModalTitle.textContent = "VYOMIC Log Interaction";
    this.el.intDeleteBtn.style.display = "none";
    const companies = [...new Set(this.buses.map(b => b.company))].sort();
    this.el.intCompany.innerHTML = '<option value="">Select company...</option>';
    companies.forEach(c => {
      const opt = document.createElement("option"); opt.value = c; opt.textContent = c;
      this.el.intCompany.appendChild(opt);
    });
    if (this.selectedDashCompany) {
      this.el.intCompany.value = this.selectedDashCompany;
    }
    const now = new Date();
    this.el.intDate.value = now.toISOString().split("T")[0];
    this.el.intTime.value = now.toTimeString().slice(0, 5);
    this.el.intType.value = "Email";
    this.el.intSubject.value = "";
    this.el.intNotes.value = "";
    this.el.intFollowUp.value = "";
    this.el.intFollowUpDone.checked = false;
    this.el.intModal.classList.add("is-visible");
  },

  editInteraction(id) {
    const i = this.interactions.find(x => x.id === id);
    if (!i) return;
    this.editingInteractionId = id;
    this.el.intModalTitle.textContent = "VYOMIC Edit Interaction";
    this.el.intDeleteBtn.style.display = "";
    const companies = [...new Set(this.buses.map(b => b.company))].sort();
    this.el.intCompany.innerHTML = '<option value="">Select company...</option>';
    companies.forEach(c => {
      const opt = document.createElement("option"); opt.value = c; opt.textContent = c;
      this.el.intCompany.appendChild(opt);
    });
    this.el.intCompany.value = i.company;
    this.el.intDate.value = i.date || "";
    this.el.intTime.value = i.time || "";
    this.el.intType.value = i.type || "Email";
    this.el.intSubject.value = i.subject || "";
    this.el.intNotes.value = i.notes || "";
    this.el.intFollowUp.value = i.followUp || "";
    this.el.intFollowUpDone.checked = i.followUpDone || false;
    this.el.intModal.classList.add("is-visible");
  },

  closeInteractionModal() {
    this.el.intModal.classList.remove("is-visible");
    this.editingInteractionId = null;
  },

  saveInteraction() {
    const company = this.el.intCompany.value;
    const date = this.el.intDate.value;
    const time = this.el.intTime.value;
    const type = this.el.intType.value;
    const subject = this.el.intSubject.value.trim();
    const notes = this.el.intNotes.value.trim();
    if (!company || !date || !subject) {
      this.setStatus("Company, Date, and Subject are required", "error");
      return;
    }
    if (this.editingInteractionId) {
      const i = this.interactions.find(x => x.id === this.editingInteractionId);
      if (i) {
        i.company = company; i.date = date; i.time = time; i.type = type;
        i.subject = subject; i.notes = notes; i.followUp = this.el.intFollowUp.value;
        i.followUpDone = this.el.intFollowUpDone.checked;
      }
    } else {
      this.interactions.push({
        id: "crm_" + Date.now(),
        company, date, time, type, subject, notes,
        followUp: this.el.intFollowUp.value,
        followUpDone: this.el.intFollowUpDone.checked
      });
    }
    this.saveInteractions();
    this.closeInteractionModal();
    this.setStatus("Interaction saved", "success");
  },

  deleteInteraction() {
    if (!this.editingInteractionId) return;
    if (!confirm("Delete this interaction?")) return;
    this.interactions = this.interactions.filter(i => i.id !== this.editingInteractionId);
    this.saveInteractions();
    this.closeInteractionModal();
    this.setStatus("Interaction deleted", "info");
  },

  renderDetailCRM() {
    if (!this.selectedDashCompany) return;
    const list = this.el.detailCrmList;
    const empty = this.el.detailCrmEmpty;
    const items = this.interactions.filter(i => i.company === this.selectedDashCompany);
    items.sort((a, b) => {
      const d = (b.date || "").localeCompare(a.date || "");
      if (d !== 0) return d;
      return (b.time || "").localeCompare(a.time || "");
    });
    if (items.length === 0) {
      list.innerHTML = "";
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    list.innerHTML = items.map(i => {
      const ts = (i.date || "") + (i.time ? " " + i.time : "");
      const fuLabel = i.followUpDone ? "Done" : (i.followUp ? "Due " + i.followUp : "");
      const fuClass = i.followUpDone ? "done" : (i.followUp ? "open" : "");
      return `<div class="crm-timeline-item" data-id="${i.id}">
        <div class="crm-timeline-marker">
          <span class="crm-timeline-dot crm-dot-${i.type}"></span>
          <div class="crm-timeline-line"></div>
        </div>
        <div class="crm-timeline-content">
          <div class="crm-timeline-head">
            <span class="crm-timeline-ts">${ts}</span>
            <span class="crm-type-pill crm-type-${i.type}">${i.type}</span>
            ${fuLabel ? `<span class="crm-followup ${fuClass}">${fuLabel}</span>` : ""}
          </div>
          <div class="crm-timeline-body">
            <span class="crm-timeline-subject">${i.subject}</span>
            ${i.notes ? `<p class="crm-timeline-notes">${i.notes}</p>` : ""}
          </div>
          <button class="crm-timeline-del" title="Delete interaction">&times;</button>
        </div>
      </div>`;
    }).join("");
  },

  handleDetailCrmClick(e) {
    const del = e.target.closest(".crm-timeline-del");
    if (del) {
      const item = del.closest(".crm-timeline-item");
      if (item && item.dataset.id && confirm("Delete this interaction?")) {
        this.interactions = this.interactions.filter(i => i.id !== item.dataset.id);
        this.saveInteractions();
        this.setStatus("Interaction deleted", "info");
      }
      return;
    }
    const item = e.target.closest(".crm-timeline-item");
    if (item && item.dataset.id) {
      this.editInteraction(item.dataset.id);
    }
  },

  // ========== DASHBOARD ==========

  loadCompliance() {
    const raw = localStorage.getItem("satbus_compliance");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && parsed._v === 2) {
          Object.assign(this.compliance, parsed.d || {});
        } else {
          localStorage.removeItem("satbus_compliance");
        }
      } catch (_) {}
    }
  },

  saveCompliance() {
    localStorage.setItem("satbus_compliance", JSON.stringify({ _v: 2, d: this.compliance }));
    this.gsheetPost('compliance', { compliance: this.compliance });
  },

  getCompanyBuses(company) {
    return this.buses.filter(b => b.company === company);
  },

  getBusLabel(index) {
    return "Bus " + (index + 1);
  },

  getComplianceScore(company, platform) {
    const key = company + "|" + platform;
    const ans = this.compliance[key];
    if (!ans) return { passed: 0, total: COMPLIANCE_QUESTIONS.length };
    let passed = 0;
    COMPLIANCE_QUESTIONS.forEach((_, i) => { if (ans[i] === "yes") passed++; });
    return { passed, total: COMPLIANCE_QUESTIONS.length };
  },

  getLatestInteraction(company) {
    const items = this.interactions.filter(i => i.company === company);
    if (!items.length) return null;
    items.sort((a, b) => {
      const d = (b.date || "").localeCompare(a.date || "");
      if (d !== 0) return d;
      return (b.time || "").localeCompare(a.time || "");
    });
    return items[0];
  },

  getCompanyStage(company) {
    var labels = this.stageLabels;
    var colors = { "new": "var(--color-text-muted)", "1st": "#74b9ff", "2nd": "#a29bfe", "3rd": "#fd79a8", "nda": "#a29bfe", "meeting": "#00b894", "eoi": "#fdcb6e", "tech": "#e84393", "eval_started": "#fd79a8", "eval_one": "#e17055", "eval_two": "#d63031", "shortlisted": "#6c5ce7", "selected": "#00b894" };
    if (this.stageOverrides[company]) {
      var k = this.stageOverrides[company];
      return { stage: labels[k] || k, key: k, color: colors[k] || "var(--color-text-muted)", overridden: true };
    }
    var items = this.interactions.filter(function(i) { return i.company === company; });
    if (!items.length) return { stage: labels["new"], key: "new", color: colors["new"] };
    var count = items.length;
    var sorted = items.slice().sort(function(a, b) {
      var d = (b.date || "").localeCompare(a.date || "");
      if (d !== 0) return d;
      return (b.time || "").localeCompare(a.time || "");
    });
    var latest = sorted[0];
    var text = ((latest.subject || "") + " " + (latest.notes || "")).toLowerCase();
    var type = (latest.type || "").toLowerCase();
    if (type === "meeting" || text.indexOf("meeting") !== -1) return { stage: labels["meeting"], key: "meeting", color: colors["meeting"] };
    if (text.indexOf("eoi") !== -1 || text.indexOf("expression of interest") !== -1) return { stage: labels["eoi"], key: "eoi", color: colors["eoi"] };
    if (text.indexOf("nda") !== -1) return { stage: labels["nda"], key: "nda", color: colors["nda"] };
    if (count >= 3) return { stage: labels["3rd"], key: "3rd", color: colors["3rd"] };
    if (count === 2) return { stage: labels["2nd"], key: "2nd", color: colors["2nd"] };
    if (count === 1) return { stage: labels["1st"], key: "1st", color: colors["1st"] };
    return { stage: labels["new"], key: "new", color: colors["new"] };
  },

  setCompanyStage(company, key) {
    if (key) {
      this.stageOverrides[company] = key;
    } else {
      delete this.stageOverrides[company];
    }
    this.saveStageOverrides();
  },

  loadStageOverrides() {
    var stored = localStorage.getItem("satbus_stages");
    if (stored) {
      try {
        var parsed = JSON.parse(stored);
        // Migrate old display-name format to new key format
        var nameToKey = { "New": "new", "1st Response": "1st", "2nd Response": "2nd", "3rd+ Response": "3rd", "3rd Response": "3rd", "NDA": "nda", "Meeting": "meeting", "EOI": "eoi" };
        this.stageOverrides = {};
        Object.keys(parsed).forEach(function(c) {
          var v = parsed[c];
          this.stageOverrides[c] = nameToKey[v] || v;
        }.bind(this));
      } catch (_) { this.stageOverrides = {}; }
    }
    var labels = localStorage.getItem("satbus_stage_labels");
    if (labels) {
      try {
        var parsed = JSON.parse(labels);
        Object.keys(parsed).forEach(function(k) { if (parsed[k]) this.stageLabels[k] = parsed[k]; }.bind(this));
      } catch (_) {}
    }
  },

  saveStageOverrides() {
    localStorage.setItem("satbus_stages", JSON.stringify(this.stageOverrides));
  },

  saveStageLabels() {
    localStorage.setItem("satbus_stage_labels", JSON.stringify(this.stageLabels));
  },

  loadGoStatus() {
    var stored = localStorage.getItem("satbus_go_status");
    if (stored) {
      try { this.goStatus = JSON.parse(stored); } catch (_) { this.goStatus = {}; }
    }
  },

  saveGoStatus() {
    localStorage.setItem("satbus_go_status", JSON.stringify(this.goStatus));
  },

  toggleGoStatus(company) {
    if (this.goStatus[company] === "nogo") {
      delete this.goStatus[company];
    } else {
      this.goStatus[company] = "nogo";
    }
    this.saveGoStatus();
    this.renderDashCompanyList();
  },

  showDashCompanyList() {
    this.selectedDashCompany = null;
    document.getElementById("dashCompanyList").hidden = false;
    this.el.dashCompanyDetail.hidden = true;
    this.renderDashCompanyList();
  },

  renderDashCompanyList() {
    const query = (this.el.dashSearch ? this.el.dashSearch.value.trim().toLowerCase() : "");
    const busMap = {};
    this.buses.forEach(b => { if (!busMap[b.company]) busMap[b.company] = b; });
    const companies = [...new Set(this.buses.map(b => b.company))].sort().filter(c => {
      if (!query) return true;
      const bus = busMap[c];
      if (!bus) return false;
      return (c + " " + (bus.platform || "") + " " + (bus.country || "")).toLowerCase().indexOf(query) !== -1;
    });
    this.el.dashCards.innerHTML = companies.map(c => {
      const bus = this.getCompanyBuses(c)[0];
      if (!bus) return "";
      const score = this.getComplianceScore(c, bus.platform);
      const pct = Math.round(score.passed / score.total * 100);
      const latest = this.getLatestInteraction(c);
      const latestHtml = latest
        ? `<span class="dash-latest">Latest: ${latest.type} — ${latest.subject}</span>`
        : `<span class="dash-latest muted">No interactions</span>`;
      const isNoGo = this.goStatus[c] === "nogo";
      const goClass = isNoGo ? " dash-card-nogo" : "";
      const goLabel = isNoGo ? "No-Go" : "Go";
      const goBtnClass = isNoGo ? "dash-go-btn nogo" : "dash-go-btn";
      return `<div class="dash-card${goClass}" data-company="${c}">
        <div class="dash-card-top">
          <h3>${c}</h3>
          <div class="dash-card-top-right">
            <button class="${goBtnClass}" type="button" data-company="${c}" title="Toggle Go/No-Go">${goLabel}</button>
            <span class="dash-bus-count">${bus.platform}</span>
            <button class="dash-specs-btn" title="View bus specifications" data-company="${c}">Specs</button>
          </div>
        </div>
        <div class="dash-stats">
          <div class="dash-stat">
            <span class="dash-stat-val">${score.passed}/${score.total}</span>
            <span class="dash-stat-lbl">Compliance passed</span>
          </div>
          <div class="dash-stat">
            <span class="dash-stat-val">${pct}%</span>
            <span class="dash-stat-lbl">Overall score</span>
          </div>
        </div>
        <div class="dash-card-foot">${latestHtml}</div>
      </div>`;
    }).join("");
    this.el.dashCards.querySelectorAll(".dash-card").forEach(card => {
      card.addEventListener("click", () => this.showCompanyDetail(card.dataset.company));
    });
    this.el.dashCards.querySelectorAll(".dash-specs-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        this.showBusSpecs(btn.dataset.company);
      });
    });
    this.el.dashCards.querySelectorAll(".dash-go-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        this.toggleGoStatus(btn.dataset.company);
      });
    });
  },

  showCompanyDetail(company) {
    this.selectedDashCompany = company;
    document.getElementById("dashCompanyList").hidden = true;
    this.el.dashCompanyDetail.hidden = false;
    this.renderCompanyDetail(company);
  },

  renderCompanyDetail(company) {
    this.el.dashDetailTitle.textContent = company;
    const bus = this.getCompanyBuses(company)[0];
    if (!bus) { this.el.dashDetailBody.innerHTML = ""; return; }
    const key = company + "|" + bus.platform;
    const ans = this.compliance[key] || {};
    const score = this.getComplianceScore(company, bus.platform);
    this.el.dashDetailBody.innerHTML =
      `<div class="dash-detail-split">
        <div class="dash-detail-left">
          <div class="dash-bus-section">
            <div class="dash-bus-section-header">
              <h3><input class="dash-bus-name-input" value="${bus.platform}" data-company="${company}" /></h3>
              <span class="dash-score">${score.passed}/${score.total} passed</span>
            </div>
            <div class="dash-bus-params">
              ${bus.payloadMass ? `<span><strong>Payload Mass:</strong> ${bus.payloadMass}</span>` : ""}
              ${bus.payloadPower ? `<span><strong>Power (OAP):</strong> ${bus.payloadPower}</span>` : ""}
              ${bus.orbit ? `<span><strong>Orbit:</strong> ${bus.orbit}</span>` : ""}
              ${bus.propulsion ? `<span><strong>Propulsion:</strong> ${bus.propulsion}</span>` : ""}
              ${bus.lifetime ? `<span><strong>Lifetime:</strong> ${bus.lifetime}</span>` : ""}
            </div>
            <div class="dash-compliance-grid">
              ${(() => {
                let lastCat = "";
                return COMPLIANCE_QUESTIONS.map((qObj, qi) => {
                  const catHtml = qObj.cat !== lastCat ? `<div class="dash-cat-header">${qObj.cat}</div>` : "";
                  lastCat = qObj.cat;
                  const remark = ans[qi + "_remark"] || "";
                  return catHtml + `<div class="dash-compliance-row" data-key="${key}" data-qi="${qi}">
                    <span class="dash-q-text">${qObj.q}</span>
                    <div class="dash-q-answers">
                      <button class="dash-ans ${ans[qi] === "yes" ? "is-yes" : ""}" data-val="yes">Yes</button>
                      <button class="dash-ans ${ans[qi] === "no" ? "is-no" : ""}" data-val="no">No</button>
                      <button class="dash-ans ${ans[qi] === "partial" ? "is-partial" : ""}" data-val="partial">Partial</button>
                      <button class="dash-ans-clear${ans[qi] ? " has-value" : ""}" data-val="" title="Clear answer">&times;</button>
                    </div>
                    <span class="dash-saved"></span>
                    <textarea class="dash-remark-area ${remark ? "has-remark" : ""}" data-key="${key}" data-qi="${qi}" placeholder="Add remark...">${remark}</textarea>
                  </div>`;
                }).join("")
              })()}
            </div>
          </div>
        </div>
        <div class="dash-detail-right">
          <div class="dash-crm-section">
            <div class="dash-crm-header">
              <h3>VYOMIC Interaction History</h3>
              <button id="detailAddInteractionBtn" class="ghost-button" type="button">+ Log Interaction</button>
            </div>
            <div id="detailCrmList" class="detail-crm-list"></div>
            <p id="detailCrmEmpty" class="detail-crm-empty">No interactions logged for this company.</p>
          </div>
        </div>
      </div>`;

    this.el.detailAddInteractionBtn = this.el.dashDetailBody.querySelector("#detailAddInteractionBtn");
    this.el.detailCrmList = this.el.dashDetailBody.querySelector("#detailCrmList");
    this.el.detailCrmEmpty = this.el.dashDetailBody.querySelector("#detailCrmEmpty");
    if (this.el.detailAddInteractionBtn) {
      this.el.detailAddInteractionBtn.addEventListener("click", () => this.openInteractionModal());
    }
    if (this.el.detailCrmList) {
      this.el.detailCrmList.addEventListener("click", e => this.handleDetailCrmClick(e));
    }
    this.renderDetailCRM();

    this.el.dashDetailBody.querySelectorAll(".dash-ans").forEach(btn => {
      btn.addEventListener("click", e => {
        const row = e.target.closest(".dash-compliance-row");
        const key = row.dataset.key;
        const qi = parseInt(row.dataset.qi);
        const val = e.target.dataset.val;
        this.setComplianceAnswer(key, qi, val);
        row.querySelectorAll(".dash-ans").forEach(b => b.className = "dash-ans");
        e.target.classList.add("is-" + val);
        row.querySelector(".dash-ans-clear").classList.add("has-value");
        const section = row.closest(".dash-bus-section");
        const [companyName, platform] = key.split("|");
        const score = this.getComplianceScore(companyName, platform);
        section.querySelector(".dash-score").textContent = `${score.passed}/${score.total} passed`;
        const saved = row.querySelector(".dash-saved");
        if (saved) { saved.textContent = "✓ saved"; saved.style.opacity = "1"; setTimeout(() => saved.opacity = "0", 800); }
      });
    });
    this.el.dashDetailBody.querySelectorAll(".dash-ans-clear").forEach(btn => {
      btn.addEventListener("click", e => {
        const row = e.target.closest(".dash-compliance-row");
        const key = row.dataset.key;
        const qi = parseInt(row.dataset.qi);
        this.setComplianceAnswer(key, qi, "");
        row.querySelectorAll(".dash-ans").forEach(b => b.className = "dash-ans");
        e.target.classList.remove("has-value");
        const section = row.closest(".dash-bus-section");
        const [companyName, platform] = key.split("|");
        const score = this.getComplianceScore(companyName, platform);
        section.querySelector(".dash-score").textContent = `${score.passed}/${score.total} passed`;
        const saved = row.querySelector(".dash-saved");
        if (saved) { saved.textContent = "cleared"; saved.style.opacity = "1"; setTimeout(() => saved.style.opacity = "0", 800); }
      });
    });
    this.el.dashDetailBody.querySelectorAll(".dash-remark-area").forEach(ta => {
      ta.addEventListener("input", e => {
        const row = e.target.closest(".dash-compliance-row");
        const key = row.dataset.key;
        const qi = parseInt(row.dataset.qi);
        this.setComplianceRemark(key, qi, e.target.value);
        e.target.classList.toggle("has-remark", e.target.value.trim() !== "");
      });
    });
    this.el.dashDetailBody.querySelectorAll(".dash-bus-name-input").forEach(inp => {
      inp.addEventListener("change", () => {
        const company = inp.dataset.company;
        const bus = this.buses.find(b => b.company === company);
        if (bus) {
          const oldPlatform = bus.platform;
          const newPlatform = inp.value.trim();
          if (!newPlatform || oldPlatform === newPlatform) {
            inp.value = bus.platform;
            return;
          }
          bus.platform = newPlatform;
          const oldKey = company + "|" + oldPlatform;
          const newKey = company + "|" + newPlatform;
          if (this.compliance[oldKey] && oldKey !== newKey) {
            this.compliance[newKey] = this.compliance[oldKey];
            delete this.compliance[oldKey];
            this.saveCompliance();
          }
          this.save();
          this.renderDashCompanyList();
          this.setStatus("Bus name updated", "success");
        }
      });
    });
  },

  setComplianceAnswer(key, qi, val) {
    if (!this.compliance[key]) this.compliance[key] = {};
    this.compliance[key][qi] = val;
    this.saveCompliance();
  },

  setComplianceRemark(key, qi, text) {
    if (!this.compliance[key]) this.compliance[key] = {};
    if (text.trim()) {
      this.compliance[key][qi + "_remark"] = text;
    } else {
      delete this.compliance[key][qi + "_remark"];
    }
    this.saveCompliance();
  },

  renderComparison() {
    var self = this;
    const companies = [...new Set(this.buses.map(b => b.company))].sort().filter(function(c) { return self.goStatus[c] !== "nogo"; });
    if (!this.compareVisible) {
      this.compareVisible = {};
      companies.forEach(c => this.compareVisible[c] = true);
    }
    const busMap = {};
    this.buses.forEach(b => { if (!busMap[b.company]) busMap[b.company] = b; });
    const visible = companies.filter(c => this.compareVisible[c]);

    if (this.el.compareTitle) {
      this.el.compareTitle.textContent = this.compareMode === "compliance" ? "VYOMIC Compliance Comparison" : "VYOMIC Bus Specs Comparison";
    }

    let html = `<div class="compare-toggles">`;
    html += `<button class="compare-vis-toggle" data-action="hide-all">Hide All</button>`;
    html += `<button class="compare-vis-toggle" data-action="show-all">Show All</button>`;
    companies.forEach(c => {
      const active = this.compareVisible[c] ? "active" : "";
      html += `<button class="compare-vis-toggle ${active}" data-company="${c}">${c}${this.goStatus[c] === "nogo" ? ' <span style="color:#e74c3c;font-size:0.7rem">NO-GO</span>' : ''}</button>`;
    });
    html += `</div>`;

    if (this.compareMode === "compliance") {
      html += this.renderComplianceTable(visible, busMap, companies);
    } else {
      html += this.renderSpecsTable(visible, busMap);
    }
    html += `<details class="compare-debug" style="margin-top:1rem;font-size:0.7rem;color:var(--color-text-muted)"><summary>Debug: show compliance data</summary><pre style="max-height:300px;overflow:auto;white-space:pre-wrap;background:var(--color-surface-alt);padding:0.5rem;border-radius:4px;margin-top:0.5rem">${this.escapeHtml(JSON.stringify(this.compliance, null, 2))}</pre></details>`;
    this.el.compareBody.innerHTML = html;

    this.el.compareBody.querySelectorAll(".compare-vis-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const c = btn.dataset.company;
        const action = btn.dataset.action;
        if (action === "hide-all") {
          companies.forEach(cp => this.compareVisible[cp] = false);
        } else if (action === "show-all") {
          companies.forEach(cp => this.compareVisible[cp] = true);
        } else if (c) {
          this.compareVisible[c] = !this.compareVisible[c];
        }
        this.renderComparison();
      });
    });

    this.el.compareBody.querySelectorAll(".remarks-expand-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const td = e.target.closest(".compare-cell-remarks");
        if (!td) return;
        const full = td.dataset.full || "";
        const span = td.querySelector(".remarks-text");
        if (span) span.textContent = full;
        e.target.remove();
      });
    });
  },

  renderComplianceTable(visible, busMap) {
    let html = `<div class="compare-wrap"><table class="compare-table"><thead><tr><th class="compare-q-col">Parameter</th>${visible.map(c => `<th class="compare-company-col${this.goStatus[c] === 'nogo' ? ' nogo-col-header' : ''}">${c}</th>`).join("")}</tr></thead><tbody>`;
    let lastCat = "", qi = 0;
    COMPLIANCE_QUESTIONS.forEach((qObj) => {
      if (qObj.cat !== lastCat) {
        html += `<tr class="compare-cat-row"><td colspan="${1 + visible.length}">${qObj.cat}</td></tr>`;
        lastCat = qObj.cat;
      }
      html += `<tr><td class="compare-q-text">${qObj.q}</td>`;
      visible.forEach(c => {
        const bus = busMap[c];
        if (!bus) { html += `<td class="compare-cell"></td>`; return; }
        const key = c + "|" + bus.platform;
        const ans = (this.compliance[key] && this.compliance[key][qi]) || "";
        html += `<td class="compare-cell compare-cell-${ans}">${ans || "—"}</td>`;
      });
      html += `</tr>`;
      qi++;
    });
    html += `</tbody></table></div>`;
    return html;
  },

  renderSpecsTable(visible, busMap) {
    const specFields = [
      ["Platform", "platform"],
      ["Payload Mass", "payloadMass"],
      ["Payload Power", "payloadPower"],
      ["Payload Volume", "payloadVolume"],
      ["Platform Mass", "platformMass"],
      ["Platform Volume", "platformVolume"],
      ["Orbit", "orbit"],
      ["Lifetime", "lifetime"],
      ["Pointing Accuracy", "pointingAcc"],
      ["Pointing Stability", "pointingStability"],
      ["Pointing Knowledge", "pointingKnowledge"],
      ["Position Knowledge", "positionKnowledge"],
      ["Pointing Control", "pointingControl"],
      ["Slewing", "slewing"],
      ["Propulsion", "propulsion"],
      ["Data Interface", "dataInterface"],
      ["Encryption", "encryption"],
      ["Downlink", "downlink"],
      ["TC/TM", "tcTm"],
      ["Power Voltage", "powerVoltage"],
      ["Rideshare", "rideshare"],
      ["Solar Array", "solarArray"],
      ["Storage", "storage"],
      ["Lead Time", "leadTime"],
      ["Cost", "cost"],
      ["Heritage", "heritage"],
      ["Remarks", "remarks"]
    ];
    let html = `<div class="compare-wrap"><table class="compare-table"><thead><tr><th class="compare-q-col">Parameter</th>${visible.map(c => `<th class="compare-company-col${this.goStatus[c] === 'nogo' ? ' nogo-col-header' : ''}">${c}</th>`).join("")}</tr></thead><tbody>`;
    specFields.forEach(([label, field]) => {
      const isRemarks = field === "remarks";
      html += `<tr><td class="compare-q-text">${label}</td>`;
      visible.forEach(c => {
        const bus = busMap[c];
        if (!bus) { html += `<td class="compare-cell">—</td>`; return; }
        const val = bus[field] || "";
        if (isRemarks && val !== "—") {
          const truncated = val.length > 150 ? val.slice(0, 150) + "..." : "";
          html += `<td class="compare-cell compare-cell-remarks" data-full="${this.escapeHtml(val)}">
            <span class="remarks-text">${truncated ? this.escapeHtml(truncated) : this.escapeHtml(val)}</span>
            ${truncated ? '<button class="remarks-expand-btn" type="button">Read More</button>' : ''}
          </td>`;
        } else {
          html += `<td class="compare-cell">${this.escapeHtml(val || "—")}</td>`;
        }
      });
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    return html;
  },

  showBusSpecs(company) {
    this.showSpecsModal(company);
  },

  showSpecsModal(company) {
    const bus = this.getCompanyBuses(company)[0];
    if (!bus) return;
    this.el.specsModalTitle.textContent = company + " — Bus Specifications";
    const params = [
      ["Platform", bus.platform],
      ["Payload Mass", bus.payloadMass],
      ["Payload Power", bus.payloadPower],
      ["Payload Volume", bus.payloadVolume],
      ["Platform Mass", bus.platformMass],
      ["Platform Volume", bus.platformVolume],
      ["Orbit", bus.orbit],
      ["Lifetime", bus.lifetime],
      ["Pointing Accuracy", bus.pointingAcc],
      ["Pointing Stability", bus.pointingStability],
      ["Pointing Knowledge", bus.pointingKnowledge],
      ["Position Knowledge", bus.positionKnowledge],
      ["Pointing Control", bus.pointingControl],
      ["Slewing", bus.slewing],
      ["Propulsion", bus.propulsion],
      ["Data Interface", bus.dataInterface],
      ["Encryption", bus.encryption],
      ["Downlink", bus.downlink],
      ["TC/TM", bus.tcTm],
      ["Power Voltage", bus.powerVoltage],
      ["Rideshare", bus.rideshare],
      ["Solar Array", bus.solarArray],
      ["Storage", bus.storage],
      ["Lead Time", bus.leadTime],
      ["Cost", bus.cost],
      ["Datasheet", bus.datasheet],
      ["Heritage", bus.heritage],
      ["Remarks", bus.remarks]
    ].filter(p => p[1]);
    this.el.specsModalBody.innerHTML =
      '<div class="specs-grid">' +
      params.map(p => '<div class="specs-item"><span class="specs-label">' + p[0] + '</span><span class="specs-value">' + this.escapeHtml(p[1]) + '</span></div>').join("") +
      '</div>';
    this.el.specsModal.classList.add("is-visible");
  },

  closeSpecsModal() {
    this.el.specsModal.classList.remove("is-visible");
  },

  renderBusSpecs(scrollToCompany) {
    var self2 = this;
    const query = (this.el.specsSearch ? this.el.specsSearch.value.trim().toLowerCase() : "");
    const companies = [...new Set(this.buses.map(b => b.company))].sort().filter(function(c) { return self2.goStatus[c] !== "nogo"; });
    const busMap = {};
    this.buses.forEach(b => { if (!busMap[b.company]) busMap[b.company] = b; });

    const filtered = query
      ? companies.filter(c => {
          const bus = busMap[c];
          if (!bus) return false;
          const searchStr = (c + " " + (bus.platform || "") + " " + (bus.country || "")).toLowerCase();
          return searchStr.indexOf(query) !== -1;
        })
      : companies;

    const html = filtered.map(c => {
      const bus = busMap[c];
      if (!bus) return "";
      const params = [
        ["Platform", bus.platform],
        ["Payload Mass", bus.payloadMass],
        ["Payload Power", bus.payloadPower],
        ["Payload Volume", bus.payloadVolume],
        ["Platform Mass", bus.platformMass],
        ["Platform Volume", bus.platformVolume],
        ["Orbit", bus.orbit],
        ["Lifetime", bus.lifetime],
        ["Pointing Accuracy", bus.pointingAcc],
        ["Pointing Stability", bus.pointingStability],
        ["Pointing Knowledge", bus.pointingKnowledge],
        ["Position Knowledge", bus.positionKnowledge],
        ["Pointing Control", bus.pointingControl],
        ["Slewing", bus.slewing],
        ["Propulsion", bus.propulsion],
        ["Data Interface", bus.dataInterface],
        ["Encryption", bus.encryption],
        ["Downlink", bus.downlink],
        ["TC/TM", bus.tcTm],
        ["Power Voltage", bus.powerVoltage],
        ["Rideshare", bus.rideshare],
        ["Solar Array", bus.solarArray],
        ["Storage", bus.storage],
        ["Lead Time", bus.leadTime],
        ["Cost", bus.cost],
        ["Datasheet", bus.datasheet],
        ["Heritage", bus.heritage],
        ["Remarks", bus.remarks]
      ].filter(p => p[1]);
      return `<div class="specs-company-card${this.goStatus[c] === 'nogo' ? ' nogo-card' : ''}" data-company="${c}">
        <h3 class="specs-company-name">${c}${this.goStatus[c] === 'nogo' ? ' <span style="color:#e74c3c;font-size:0.7rem">NO-GO</span>' : ''}</h3>
        <div class="specs-grid">
          ${params.map(p => `<div class="specs-item"><span class="specs-label">${p[0]}</span><span class="specs-value">${p[1]}</span></div>`).join("")}
        </div>
      </div>`;
    }).join("");
    this.el.specsBody.innerHTML = html;

    this.el.specsBody.querySelectorAll(".specs-company-card").forEach(card => {
      card.addEventListener("click", () => this.showCompanyDetail(card.dataset.company));
    });

    if (scrollToCompany) {
      const target = this.el.specsBody.querySelector(`[data-company="${CSS.escape(scrollToCompany)}"]`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },

  // ========== ANALYSIS ==========

  renderAnalysis() {
    var selfA = this;
    var companies = [...new Set(this.buses.map(b => b.company))].sort().filter(function(c) { return selfA.goStatus[c] !== "nogo"; });
    var busMap = {};
    this.buses.forEach(b => { if (!busMap[b.company]) busMap[b.company] = b; });

    // Score every company
    var scored = [];
    companies.forEach(function(c) {
      var bus = busMap[c];
      if (!bus) return;
      var key = c + "|" + bus.platform;
      var data = this.compliance[key] || {};
      var s = computeCompanyScore(data);
      s.company = c;
      s.platform = bus.platform || "";
      s.country = bus.country || "";
      s.goStatus = this.goStatus[c] || "go";
      scored.push(s);
    }.bind(this));

    scored.sort(function(a, b) { return b.overall - a.overall; });

    // ── Ranking Table ──
    var html = '<div class="analysis-ranking">';
    html += '<h3>Vendor Ranking</h3>';
    html += '<table class="analysis-table"><thead><tr><th>Rank</th><th>Vendor</th><th>Platform</th><th>Country</th><th>Score</th><th>Rating</th><th>Status</th></tr></thead><tbody>';
    scored.forEach(function(s, i) {
      var rec = getRecommendation(s.overall);
      var statusTag = s.goStatus === "nogo" ? '<span class="analysis-nogo">NO-GO</span>' : '<span class="analysis-go">GO</span>';
      var rowClass = s.goStatus === "nogo" ? ' analysis-row-nogo' : '';
      html += '<tr class="' + rowClass + '"><td>' + (i + 1) + '</td><td><strong>' + s.company + '</strong></td><td>' + s.platform + '</td><td>' + s.country + '</td><td><strong>' + s.overall + '</strong>/100</td><td><span style="color:' + rec.color + ';font-weight:700">' + rec.label + '</span></td><td>' + statusTag + '</td></tr>';
    });
    html += '</tbody></table></div>';

    // ── Per-vendor details ──
    html += '<div class="analysis-vendors">';
    scored.forEach(function(s, i) {
      var rec = getRecommendation(s.overall);
      var nogoClass = s.goStatus === "nogo" ? " analysis-card-nogo" : "";

      html += '<div class="analysis-card' + nogoClass + '">';
      html += '<div class="analysis-card-header">';
      html += '<h3>' + (i + 1) + '. ' + s.company + ' <span style="font-size:0.8rem;color:var(--color-text-muted)">' + s.platform + '</span></h3>';
      html += '<div class="analysis-card-score"><span class="analysis-big-score">' + s.overall + '</span><span class="analysis-score-label">/100</span> <span style="color:' + rec.color + ';font-weight:700;margin-left:8px">' + rec.label + '</span></div>';
      html += '</div>';

      // Category breakdown with bar chart
      html += '<div class="analysis-categories">';
      COMPLIANCE_CATEGORIES.forEach(function(catDef) {
        var cat = s.categories[catDef.key];
        var barWidth = Math.round(cat.pctScore);
        var barColor = cat.pctScore >= 80 ? '#27ae60' : cat.pctScore >= 60 ? '#f39c12' : '#e74c3c';
        html += '<div class="analysis-cat-row">';
        html += '<div class="analysis-cat-label">' + cat.label + ' <span class="analysis-cat-pct">(' + catDef.pct + '%)</span></div>';
        html += '<div class="analysis-bar-wrap"><div class="analysis-bar" style="width:' + barWidth + '%;background:' + barColor + '"></div></div>';
        html += '<div class="analysis-cat-score">' + Math.round(cat.pctScore) + '%</div>';
        html += '</div>';
      });
      html += '</div>';

      // Strengths
      if (s.strengths.length) {
        html += '<div class="analysis-section"><h4 class="analysis-section-title analysis-strengths">Top Strengths</h4><ul>';
        s.strengths.forEach(function(st) {
          html += '<li><span class="analysis-q">' + st.q + '</span> <span class="analysis-weight">(w:' + st.weight + ')</span></li>';
        });
        html += '</ul></div>';
      }

      // Weaknesses
      if (s.weaknesses.length) {
        html += '<div class="analysis-section"><h4 class="analysis-section-title analysis-weaknesses">Top Weaknesses</h4><ul>';
        s.weaknesses.forEach(function(w) {
          var valLabel = w.val === "no" ? "No" : w.val === "partial" ? "Partial" : "Unanswered";
          html += '<li><span class="analysis-q">' + w.q + '</span> <span class="analysis-val-badge analysis-val-' + w.val + '">' + valLabel + '</span> <span class="analysis-weight">(w:' + w.weight + ')</span></li>';
        });
        html += '</ul></div>';
      }

      // Mission-critical gaps
      if (s.criticalGaps.length) {
        html += '<div class="analysis-section"><h4 class="analysis-section-title analysis-critical">Mission-Critical Gaps</h4><ul class="analysis-critical-list">';
        s.criticalGaps.forEach(function(g) {
          html += '<li><span class="analysis-q">' + g.q + '</span> — <span class="analysis-val-badge analysis-val-gap">' + g.val + '</span></li>';
        });
        html += '</ul></div>';
      }

      html += '</div>';
    });
    html += '</div>';

    var el = document.getElementById("analysisBody");
    if (el) el.innerHTML = html;
  },

  // ========== TIMELINE (SHEET-STYLE EDITABLE TABLE) ==========

  loadMilestoneLabels() {
    var defaults = [
      { key: "1st", label: "1st Contact" },
      { key: "meeting", label: "Meeting" },
      { key: "nda", label: "NDA" },
      { key: "eoi", label: "EOI" },
      { key: "tech", label: "Technical Discussion" },
      { key: "eval_started", label: "Evaluation Started" },
      { key: "eval_one", label: "Evaluation One" },
      { key: "eval_two", label: "Evaluation Two" },
      { key: "shortlisted", label: "Shortlisted" },
      { key: "selected", label: "Selected" },
    ];
    var stored = localStorage.getItem("satbus_milestone_labels");
    if (stored) {
      try {
        var parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === 10) {
          this.milestoneLabels = parsed;
          return;
        }
      } catch (_) {}
    }
    this.milestoneLabels = defaults;
  },

  saveMilestoneLabels() {
    localStorage.setItem("satbus_milestone_labels", JSON.stringify(this.milestoneLabels));
  },

  renderTimeline() {
    var self = this;
    var MILESTONES = this.milestoneLabels;

    var MILESTONE_COLORS = {
      "none": "var(--color-text-muted)",
      "1st": "#74b9ff", "meeting": "#00b894", "nda": "#a29bfe", "eoi": "#fdcb6e",
      "tech": "#e84393", "eval_started": "#fd79a8", "eval_one": "#e17055",
      "eval_two": "#d63031", "shortlisted": "#6c5ce7", "selected": "#00b894",
    };

    var companies = [...new Set(this.buses.map(b => b.company))].sort().filter(function(c) { return self.goStatus[c] !== "nogo"; });
    var busMap = {};
    this.buses.forEach(b => { if (!busMap[b.company]) busMap[b.company] = b; });

    // Country filter
    var countries = [...new Set(companies.map(c => busMap[c] ? busMap[c].country : "").filter(Boolean))].sort();
    var countrySelect = document.getElementById("tlFilterCountry");
    if (countrySelect && countrySelect.options.length <= 1) {
      countries.forEach(function(c) { var o = document.createElement("option"); o.value = c; o.textContent = c; countrySelect.appendChild(o); });
    }

    // Filter
    var filtered = companies.filter(function(c) {
      var bus = busMap[c];
      if (!bus) return false;
      if (self.timelineFilters.country && bus.country !== self.timelineFilters.country) return false;
      if (self.timelineFilters.go) {
        if ((self.goStatus[c] || "go") !== self.timelineFilters.go) return false;
      }
      return true;
    });

    // Determine auto-stage from interactions
    function getAutoStage(company) {
      var items = self.interactions.filter(function(i) { return i.company === company; });
      if (!items.length) return "new";
      var allText = items.map(function(i) { return ((i.type || "") + " " + (i.subject || "") + " " + (i.notes || "")).toLowerCase(); }).join(" ");
      var sorted = items.slice().sort(function(a, b) { return (a.date || "").localeCompare(b.date || ""); });
      var latest = sorted[sorted.length - 1];
      var text = ((latest.type || "") + " " + (latest.subject || "") + " " + (latest.notes || "")).toLowerCase();
      var type = (latest.type || "").toLowerCase();
      if (allText.indexOf("selected") !== -1 || allText.indexOf("awarded") !== -1 || allText.indexOf("contract") !== -1) return "selected";
      if (allText.indexOf("shortlist") !== -1) return "shortlisted";
      if (allText.indexOf("eval two") !== -1 || allText.indexOf("eval 2") !== -1) return "eval_two";
      if (allText.indexOf("eval one") !== -1 || allText.indexOf("eval 1") !== -1) return "eval_one";
      if (allText.indexOf("eval") !== -1 || allText.indexOf("review") !== -1) return "eval_started";
      if (allText.indexOf("technical") !== -1 || allText.indexOf("tech") !== -1) return "tech";
      if (allText.indexOf("eoi") !== -1 || allText.indexOf("expression of interest") !== -1) return "eoi";
      if (allText.indexOf("nda") !== -1 || allText.indexOf("non-disclosure") !== -1) return "nda";
      if (type === "meeting" || text.indexOf("meeting") !== -1) return "meeting";
      if (items.length >= 1) return "1st";
      return "new";
    }

    function getStageIndex(key) {
      for (var i = 0; i < MILESTONES.length; i++) { if (MILESTONES[i].key === key) return i; }
      return -1;
    }

    function getLatestInteractionInfo(company) {
      var items = self.interactions.filter(function(i) { return i.company === company; });
      if (!items.length) return { date: "", type: "", subject: "", notes: "" };
      var sorted = items.slice().sort(function(a, b) { return (b.date || "").localeCompare(a.date || ""); });
      var latest = sorted[0];
      return { date: latest.date || "", type: latest.type || "", subject: latest.subject || "", notes: latest.notes || "" };
    }

    // Pre-compute stages for sorting
    var stageCache = {};
    filtered.forEach(function(c) {
      var overridden = self.stageOverrides[c] || "";
      var autoStage = getAutoStage(c);
      stageCache[c] = { overridden: overridden, autoStage: autoStage, activeStage: overridden || autoStage };
    });

    // Sort by progress descending
    filtered.sort(function(a, b) {
      var aIdx = getStageIndex(stageCache[a].activeStage);
      var bIdx = getStageIndex(stageCache[b].activeStage);
      return (bIdx >= 0 ? bIdx : -1) - (aIdx >= 0 ? aIdx : -1) || a.localeCompare(b);
    });

    // Build table
    var html = '<table class="tl-sheet">';
    html += '<thead><tr>';
    html += '<th class="tl-th tl-th-sticky">Company</th>';
    html += '<th class="tl-th">Country</th>';
    html += '<th class="tl-th tl-th-stage">Stage</th>';
    html += '<th class="tl-th">Last Contact</th>';
    html += '<th class="tl-th">Type</th>';
    html += '<th class="tl-th">Subject</th>';
    html += '<th class="tl-th">Progress</th>';
    html += '</tr></thead>';
    html += '<tbody>';

    filtered.forEach(function(c) {
      var bus = busMap[c];
      var overridden = stageCache[c].overridden;
      var autoStage = stageCache[c].autoStage;
      var activeStage = stageCache[c].activeStage;
      var stageIdx = getStageIndex(activeStage);
      var pct = stageIdx >= 0 ? Math.round(((stageIdx + 1) / MILESTONES.length) * 100) : 0;
      var color = MILESTONE_COLORS[activeStage] || MILESTONE_COLORS["none"];
      var latest = getLatestInteractionInfo(c);
      var goClass = self.goStatus[c] === "nogo" ? " tl-row-nogo" : "";

      html += '<tr class="tl-row' + goClass + '" data-company="' + self.escapeHtml(c) + '">';

      // Company name
      html += '<td class="tl-td tl-td-sticky"><span class="tl-cell-text">' + self.escapeHtml(c) + '</span></td>';

      // Country
      html += '<td class="tl-td"><span class="tl-cell-text">' + self.escapeHtml(bus ? bus.country || "" : "") + '</span></td>';

      // Stage (dropdown)
      html += '<td class="tl-td tl-td-stage">';
      html += '<select class="tl-cell-select" data-field="stage" data-company="' + self.escapeHtml(c) + '">';
      html += '<option value="">Auto (' + self.escapeHtml(MILESTONES[getStageIndex(autoStage)] ? MILESTONES[getStageIndex(autoStage)].label : autoStage) + ')</option>';
      MILESTONES.forEach(function(m, i) {
        html += '<option value="' + m.key + '"' + (overridden === m.key ? ' selected' : '') + '>' + self.escapeHtml(m.label) + '</option>';
      });
      html += '</select>';
      html += '<span class="tl-stage-dot" style="background:' + color + '"></span>';
      html += '</td>';

      // Last contact (editable date)
      html += '<td class="tl-td"><input type="date" class="tl-cell-input" data-field="lastContact" data-company="' + self.escapeHtml(c) + '" value="' + (latest.date || '') + '"></td>';

      // Type (dropdown)
      html += '<td class="tl-td">';
      html += '<select class="tl-cell-select tl-cell-select-sm" data-field="lastType" data-company="' + self.escapeHtml(c) + '">';
      ['', 'Email', 'Meeting', 'Call', 'Follow-up', 'Technical', 'Note', 'Contract'].forEach(function(t) {
        html += '<option value="' + t + '"' + (latest.type === t ? ' selected' : '') + '>' + (t || '—') + '</option>';
      });
      html += '</select></td>';

      // Subject (editable text)
      html += '<td class="tl-td"><input type="text" class="tl-cell-input tl-cell-wide" data-field="lastSubject" data-company="' + self.escapeHtml(c) + '" value="' + self.escapeHtml(latest.subject || '') + '" placeholder="Subject..."></td>';

      // Progress bar (visual only)
      html += '<td class="tl-td tl-td-progress">';
      html += '<div class="tl-mini-bar"><div class="tl-mini-fill" style="width:' + pct + '%;background:' + color + '"></div></div>';
      html += '<span class="tl-pct-label">' + (pct > 0 ? pct + '%' : '—') + '</span>';
      html += '</td>';

      html += '</tr>';
    });

    html += '</tbody></table>';

    var el = document.getElementById("timelineBody");
    if (el) el.innerHTML = html;

    // Bind filters
    var countryEl = document.getElementById("tlFilterCountry");
    var goEl = document.getElementById("tlFilterGo");
    if (countryEl) countryEl.onchange = function() { self.timelineFilters.country = countryEl.value; self.renderTimeline(); };
    if (goEl) goEl.onchange = function() { self.timelineFilters.go = goEl.value; self.renderTimeline(); };

    // Bind stage selects
    el.querySelectorAll('.tl-cell-select[data-field="stage"]').forEach(function(sel) {
      sel.addEventListener("change", function() {
        self.setCompanyStage(sel.dataset.company, sel.value);
        self.renderTimeline();
      });
    });

    // Bind last contact date
    el.querySelectorAll('.tl-cell-input[data-field="lastContact"]').forEach(function(inp) {
      inp.addEventListener("change", function() {
        var company = inp.dataset.company;
        var newDate = inp.value;
        // Find latest interaction for this company and update its date
        var items = self.interactions.filter(function(i) { return i.company === company; });
        if (items.length) {
          items.sort(function(a, b) { return (b.date || "").localeCompare(a.date || ""); });
          items[0].date = newDate;
          self.saveInteractions();
        }
      });
    });

    // Bind type selects
    el.querySelectorAll('.tl-cell-select[data-field="lastType"]').forEach(function(sel) {
      sel.addEventListener("change", function() {
        var company = sel.dataset.company;
        var newType = sel.value;
        var items = self.interactions.filter(function(i) { return i.company === company; });
        if (items.length) {
          items.sort(function(a, b) { return (b.date || "").localeCompare(a.date || ""); });
          items[0].type = newType;
          self.saveInteractions();
        }
      });
    });

    // Bind subject inputs
    el.querySelectorAll('.tl-cell-input[data-field="lastSubject"]').forEach(function(inp) {
      inp.addEventListener("change", function() {
        var company = inp.dataset.company;
        var newSubject = inp.value;
        var items = self.interactions.filter(function(i) { return i.company === company; });
        if (items.length) {
          items.sort(function(a, b) { return (b.date || "").localeCompare(a.date || ""); });
          items[0].subject = newSubject;
          self.saveInteractions();
        }
      });
    });
  },

  // ========== THEME ==========

  initTheme() {
    const theme = localStorage.getItem("satbus_theme");
    if (theme === "light") {
      document.documentElement.classList.add("light");
    }
  },

  toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("light");
    localStorage.setItem("satbus_theme", root.classList.contains("light") ? "light" : "dark");
  },

  // ========== UTILS ==========

  setStatus(msg, type) {
    const s = this.el.status;
    s.textContent = msg;
    s.className = `status-message status-${type}`;
    if (type === "success" || type === "info") setTimeout(() => { s.textContent = ""; s.className = "status-message"; }, 5000);
  },

  escapeHtml(str) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
};

document.addEventListener("DOMContentLoaded", () => APP.init());
