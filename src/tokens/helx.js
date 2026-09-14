module.exports={
slug:'helios-solar',symbol:'HELX',name:'Helios Solar Yield',issuer:'Helios Renewable Finance Ltd.',updated:'September 12, 2026',
tagline:'Revenue participation in a 48 MW operating solar park in Andalusia, Spain.',
lede:'HELX tokens are revenue-participation notes secured against the cash flows of Helios Park I, a 48 MWp solar photovoltaic plant with a 15-year indexed power purchase agreement with a Spanish utility.',
status:'Ongoing Offering · Tranche 2',
image:'helx.png',accent:'#ff9f43',accent2:'#ffc76b',accentRgb:'255,159,67',
stats:[
  {k:'Token Price',v:'$50.00',s:'par value'},
  {k:'Tokens Offered',v:'400,000',s:'Tranche 2 · $20M'},
  {k:'Plant Capacity',v:'48.2 MWp',s:'92,400 modules · 12 inverters'},
  {k:'Target Yield',v:'7.4%',s:'annualised, distributed quarterly',cls:'up'},
  {k:'YTD Generation',v:'71.3 GWh',s:'103% of P50 forecast'},
],
overview:{
  sub:'HELX turns the long-dated, contracted cash flows of an operating solar plant into a quarterly-paying token. No construction risk, no merchant power exposure for 15 years.',
  body:[
    'Helios Solar Yield (HELX) is a series of revenue-participation notes issued by Helios Renewable Finance Ltd. and secured by a first-ranking charge over the shares and receivables of Helios Park I S.L., the owner of a 48.2 MWp solar park near Écija, Seville province, one of the sunniest locations in mainland Europe.',
    'The plant reached commercial operation in March 2025 and sells 100% of its output to Iberdrola under a 15-year power purchase agreement at $52.40/MWh, indexed to Spanish CPI. Operations and maintenance are contracted to the EPC contractor under a 10-year full-wrap agreement with an availability guarantee of 98.5%.',
    'Note holders receive 85% of distributable cash flow, paid quarterly in USD or USDC, with the balance retained by the sponsor as a subordinated interest. Notes amortise from year 6 and mature in 2041, matching the PPA term.'
  ],
  badges:['Operating since Mar 2025','15-yr indexed PPA','98.5% availability guarantee','First-ranking security','Quarterly distributions'],
  pillars:[
    {icon:'bolt',t:'Contracted Revenue',d:'100% of output sold under a 15-year CPI-indexed PPA with an investment-grade offtaker. No merchant exposure until 2041.'},
    {icon:'shield',t:'Secured Structure',d:'Notes are secured by a first-ranking pledge over the project company shares, bank accounts and receivables, held by a security trustee.'},
    {icon:'leaf',t:'Measured Impact',d:'Approximately 88 GWh per year, displacing an estimated 22,000 tonnes of CO₂ annually. Verified under the Gold Standard.'},
  ]
},
asset:{
  title:'The Plant',sub:'Technical and commercial summary of Helios Park I as of the Q2 2026 operations report.',
  spec:[
    ['Location','Écija, Seville, Andalusia, Spain (37.5°N)'],['Capacity','48.2 MWp DC / 40.0 MW AC'],['Technology','Bifacial mono-PERC modules on single-axis trackers'],['Modules / inverters','92,400 × 525 W · 12 × 3.3 MW central inverters'],['Commercial operation','March 14, 2025'],['Expected annual yield','86.9 GWh (P50) · 1,803 kWh/kWp'],['Offtaker','Iberdrola Clientes S.A.U. (BBB+)'],['PPA','15 years to Mar 2040, $52.40/MWh, CPI-indexed'],['O&M','Full-wrap, 10 years, 98.5% availability guarantee'],['Grid connection','Substation Écija 66 kV, firm capacity 40 MW'],
  ],
  allocTitle:'Use of Proceeds (Tranche 2, $20M)',
  alloc:[['Refinance construction loan',72],['Debt service reserve',10],['Battery storage feasibility',8],['Transaction costs & reserve',10]],
  custodyTitle:'Security & Cash Waterfall',
  custody:[
    'All PPA revenue is paid into a project account controlled by the security trustee, Intertrust (Spain) S.L. Each quarter, cash is applied in order to: operating costs and taxes, O&M and insurance, the debt service reserve top-up, and then 85% to HELX holders and 15% to the sponsor.',
    'HELX holders benefit from a first-ranking pledge over the shares of Helios Park I S.L., its bank accounts and its receivables under the PPA. In an enforcement, the trustee may sell the project company and apply proceeds to the notes.'
  ]
},
perf:{
  sub:'Token value reflects par plus accrued distribution entitlement; the primary return driver is quarterly cash yield rather than price appreciation.',
  label:'HELX Fair Value (USD / token)',note:'Illustrative series for demonstration. Fair value is estimated monthly by the calculation agent using a discounted cash flow of contracted PPA revenue. Past performance does not indicate future results.',
  metrics:[
    {k:'Distribution Yield',v:'7.4%',cls:'up',s:'last 4 quarters on par'},{k:'Generation vs P50',v:'103%',cls:'up',s:'trailing 12 months'},{k:'Plant Availability',v:'99.1%',s:'trailing 12 months'},{k:'DSCR',v:'1.62×',s:'trailing 12 months'},
  ]
},
chart:{seed:3390,points:365,start:49.1,end:51.35,vol:0.004,prefix:'$',decimals:2},
terms:{
  sub:'Summary of Tranche 2 of the HELX note programme. The Note Terms and Information Memorandum govern in the event of any inconsistency.',
  table:[
    ['Token','HELX — Helios Solar Yield revenue-participation note'],['Underlying','Pro-rata share of 85% of distributable cash flow from Helios Park I'],['Tokens offered','400,000 (Tranche 2) · 500,000 issued in Tranche 1'],['Issue price','$50.00 per note (par)'],['Minimum subscription','20 notes ($1,000)'],['Distributions','Quarterly, in USD or USDC; target 7.4% p.a.'],['Amortisation','Straight-line from 2031; final maturity March 2041'],['Security','First-ranking share, account and receivables pledge'],['Eligible investors','Verified investors; EU retail under the prospectus exemption'],['Governing law','England & Wales (notes); Spain (security)'],
  ],
  timeline:[
    {d:'Mar 2025',t:'Commercial operation',p:'Plant energised and PPA deliveries begin.',state:'done'},
    {d:'Oct 2025',t:'Tranche 1 · $25M',p:'500,000 notes issued; partial refinancing of construction facility.',state:'done'},
    {d:'Jul 2026',t:'Fourth quarterly distribution',p:'$0.93 per note paid; trailing yield 7.4%.',state:'done'},
    {d:'Sep 2026',t:'Tranche 2 open · 58% subscribed',p:'Proceeds retire the remaining construction loan and fund a storage feasibility study.',state:'now'},
    {d:'Q1 2027',t:'Battery storage decision',p:'Board decision on a 20 MWh co-located battery.'},
    {d:'2031',t:'Amortisation begins',p:'Principal repaid straight-line over 10 years.'},
  ]
},
calc:{min:1000,max:1000000,default:20000,price:50,feePct:0.75,tokenDecimals:0,unitTitle:'Capacity equivalent',yieldTitle:'Projected annual distribution (7.4%)',note:'Par $50.00 per note. ',
  unitLabel:function(t){return (t/900000*48200).toFixed(1)+' kWp · ≈ '+(t/900000*86900).toFixed(0)+' MWh/yr'},
  yieldLabel:function(v){return '$'+(v*0.074).toFixed(2)}},
docs:[
  {name:'Information Memorandum — Tranche 2',type:'Primary offering document',date:'Aug 20, 2026',pages:128,summary:['Describes the HELX note programme, the project, the PPA and O&M contracts, the security package and cash waterfall, the sponsor, financial projections and risk factors.','Base case projections assume P50 generation, 2% CPI and 0.5% annual module degradation, yielding a 7.4% average distribution and full principal recovery by 2041.']},
  {name:'Note Terms & Conditions',type:'Legal · constitutional',date:'Oct 1, 2025',pages:54,summary:['Terms of the revenue-participation notes including calculation of distributable cash flow, payment mechanics, events of default, holder meetings and the role of the security trustee.']},
  {name:'Independent Engineer\'s Report',type:'Technical due diligence',date:'Sep 12, 2025',pages:87,summary:['DNV review of design, equipment, construction quality, energy yield (P50 86.9 GWh, P90 80.1 GWh), and O&M arrangements. No material issues identified.']},
  {name:'Power Purchase Agreement Summary',type:'Contract summary',date:'Oct 1, 2025',pages:11,summary:['15-year pay-as-produced PPA with Iberdrola Clientes at $52.40/MWh indexed to Spanish CPI (floor 0%, cap 3%). No volume floor; curtailment compensated per Spanish grid code.']},
  {name:'Q2 2026 Operations Report',type:'Quarterly report',date:'Jul 22, 2026',pages:16,summary:['Generation 25.4 GWh (104% of P50), availability 99.3%, revenue $1.36M, distributable cash $0.93 per note. One inverter outage of 31 hours resolved under warranty.']},
  {name:'Security Trust Deed',type:'Legal',date:'Oct 1, 2025',pages:39,summary:['Appoints Intertrust (Spain) S.L. as security trustee holding the share pledge, account pledges and receivables assignment for the benefit of note holders.']},
  {name:'Gold Standard Verification',type:'Impact certification',date:'Jun 3, 2026',pages:9,summary:['Verified emissions reductions of 21,860 tCO₂e for the first operating year under the Gold Standard for the Global Goals methodology.']},
  {name:'Insurance Summary',type:'Disclosure',date:'Mar 1, 2026',pages:5,summary:['Property damage and business interruption (12 months), third-party liability, and parametric weather cover for hail. Insurer: Allianz Global Corporate & Specialty.']},
],
news:[
  {tag:'Operations',source:'Issuer update',date:'Sep 9, 2026',title:'August generation 9.1 GWh as summer irradiance exceeds forecast',summary:'A hot, cloudless August pushed monthly output to a record for the plant.',body:['Helios Park I generated 9.1 GWh in August, the highest monthly total since commercial operation and 106% of the P50 forecast for the month. Availability was 99.6%.','Year-to-date generation stands at 71.3 GWh, 103% of forecast, supporting a Q3 distribution in line with or slightly above the 7.4% target.','Module cleaning was brought forward by two weeks after dust deposition from Saharan winds reduced performance ratio by an estimated 1.8% in late July.']},
  {tag:'Markets',source:'European Power Weekly',date:'Sep 1, 2026',title:'Spanish solar curtailment eases as new interconnection capacity comes online',summary:'Grid upgrades in Andalusia have reduced midday curtailment for merchant plants; PPA-backed assets were largely unaffected.',body:['Curtailment of solar output in southern Spain fell in the second quarter following the commissioning of new 400 kV capacity between Andalusia and central Spain.','Plants selling under pay-as-produced PPAs with firm grid capacity, such as those on the Écija substation, have experienced minimal curtailment.']},
  {tag:'Strategy',source:'Issuer announcement',date:'Aug 20, 2026',title:'Tranche 2 opens; $1.6M earmarked for battery storage feasibility',summary:'Co-located storage could allow the plant to capture evening price premiums after the PPA expires.',body:['Helios Renewable Finance has opened Tranche 2 of the HELX note programme, offering 400,000 notes at par. Proceeds will retire the remaining $14.4M construction facility and fund a feasibility study for a 20 MWh battery.','Chief Executive Marta Iglesias said storage is "a post-2040 story for HELX holders, but the grid connection and land are already there, and the option is worth studying now."']},
  {tag:'Distribution',source:'Issuer announcement',date:'Jul 24, 2026',title:'Q2 distribution of $0.93 per note paid; trailing yield 7.4%',summary:'The fourth quarterly distribution since Tranche 1 was paid to holders of record on July 20.',body:['Holders received $0.93 per HELX note for the second quarter, bringing distributions over the last four quarters to $3.70, or 7.4% on par value.','Approximately 41% of holders elected to receive the distribution in USDC.']},
  {tag:'Regulatory',source:'Iberian Energy Review',date:'Jun 18, 2026',title:'Spain confirms CPI indexation framework for legacy renewable PPAs',summary:'A ministerial order clarified that privately negotiated CPI-linked PPAs are outside the scope of the temporary price mechanism.',body:['The Spanish Ministry for Ecological Transition confirmed that bilateral PPAs signed before 2026 with CPI indexation will not be affected by the temporary wholesale price mechanism, removing an uncertainty flagged in several project financings.']},
  {tag:'Impact',source:'Issuer announcement',date:'Jun 3, 2026',title:'First-year emissions reductions verified at 21,860 tonnes CO₂e',summary:'Gold Standard verification completed for the March 2025 to March 2026 operating year.',body:['Helios Park I has received Gold Standard verification of 21,860 tonnes of CO₂-equivalent emissions reductions for its first year of operation, based on the Spanish grid emission factor and metered generation of 84.7 GWh.']},
],
faq:[
  ['What am I buying?','A revenue-participation note secured on the cash flows of an operating solar plant. You are a secured creditor of the issuer, not an equity holder in the plant.'],
  ['Where does the 7.4% come from?','From electricity sales under a 15-year fixed-price, inflation-indexed PPA. After operating costs and reserves, 85% of the cash goes to note holders each quarter.'],
  ['What happens if the sun doesn\'t shine?','Generation varies with weather. The P90 forecast, which is exceeded 90% of the time, still supports a distribution of roughly 6.4%. The debt service reserve covers short-term shortfalls.'],
  ['What happens to the plant at the end of the PPA?','The notes mature in 2041, one year after the PPA ends, having been fully repaid through amortisation. The plant has a design life of 35 years and the sponsor retains the residual.'],
  ['Can I sell before 2041?','Yes, notes trade on the platform. Fair value is published monthly by the calculation agent as a reference, but the trading price is set by the market.'],
  ['Is there currency risk?','The plant earns euros under the PPA, but the notes are USD-denominated and distributions are paid in USD or USDC. The issuer hedges EUR revenue to USD quarterly, so holders bear residual hedging cost rather than direct exchange-rate exposure.'],
],
risks:[
  ['Resource and generation risk','Solar irradiance varies year to year. Sustained underperformance versus the P50 forecast would reduce distributions.'],
  ['Offtaker credit risk','Revenue depends on Iberdrola honouring the PPA for 15 years. A downgrade or default would expose the plant to merchant power prices.'],
  ['Operational and equipment risk','Inverter failures, module degradation above forecast, grid outages, or extreme weather such as hail could reduce output. Insurance and warranties may not fully compensate.'],
  ['Regulatory and political risk','Changes to Spanish or EU energy regulation, taxation of generation, or grid access rules could adversely affect revenue.'],
  ['Structural subordination and enforcement risk','Enforcement of Spanish security can take time. In a distressed sale, proceeds may be insufficient to repay notes in full.'],
  ['Liquidity risk','The notes are long-dated. There is no assurance of an active secondary market on the platform or elsewhere.'],
  ['Currency risk','Plant revenue is in EUR while the notes pay USD. The issuer\'s hedging programme may not fully offset exchange-rate movements, and hedging costs reduce distributable cash.'],
],
team:[{i:'MI',n:'Marta Iglesias',r:'CEO, Helios Renewable Finance'},{i:'IT',n:'Intertrust (Spain) S.L.',r:'Security trustee'},{i:'DN',n:'DNV',r:'Independent engineer'},{i:'AZ',n:'Allianz AGCS',r:'Insurer'}],
legal:'This offering profile is a summary only and is qualified in its entirety by the Information Memorandum and the Note Terms. The notes are not deposits and are not guaranteed by any bank or government. Distributions depend on plant performance and are not guaranteed. Projections are based on assumptions that may not be realised.'
};
