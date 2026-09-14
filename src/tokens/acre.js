module.exports={
slug:'harvest-acres',symbol:'ACRE',name:'Harvest Acres Farmland',issuer:'Harvest Acres Land Co. LLC',updated:'September 12, 2026',
tagline:'Fractional ownership of 1,240 acres of prime Iowa row-crop farmland.',
lede:'ACRE tokens represent membership units in an LLC that owns three contiguous Class A farms in Story County, Iowa, leased to an established operator under a cash-rent agreement with annual escalators.',
status:'Ongoing Offering · Round 1',
image:'acre.png',accent:'#8bc34a',accent2:'#c5e17a',accentRgb:'139,195,74',
stats:[
  {k:'Token Price',v:'$100.00',s:'fixed for Round 1',live:false},
  {k:'Tokens Offered',v:'96,000',s:'of 124,000 units'},
  {k:'Farmland',v:'1,240 acres',s:'3 farms · 1,186 tillable'},
  {k:'Cash Rent Yield',v:'4.2%',s:'net, 2026 crop year',cls:'up'},
  {k:'Appraised Value',v:'$14.9M',s:'$12,016 / acre · Jun 2026'},
],
overview:{
  sub:'Farmland is a real asset with income, historically low correlation to equities, and long-run appreciation driven by productivity and scarcity. ACRE makes an institutional-quality Iowa portfolio available in $100 units.',
  body:[
    'Harvest Acres Farmland (ACRE) owns three adjoining farms totalling 1,240 acres in Story County, Iowa, in the heart of the Corn Belt. The land carries a weighted Corn Suitability Rating (CSR2) of 84, placing it in the top decile of Iowa cropland, with drainage tile installed across 91% of tillable acres.',
    'The farms are leased to Brenner Family Farms, a fourth-generation operator that has farmed the ground for 22 years, under a three-year cash-rent lease with 3% annual escalators. Rent is paid 50% in March and 50% in December, and distributed to token holders within 15 days of receipt.',
    'ACRE holders receive both the rental income and any appreciation in the land value, which is independently appraised each June. The LLC carries no debt.'
  ],
  badges:['CSR2 84 · top decile','No leverage','22-year tenant','Annual appraisal','Quarterly distributions'],
  pillars:[
    {icon:'leaf',t:'Class A Cropland',d:'Clarion-Nicollet-Webster soils, pattern tile drainage, corn-soybean rotation with average corn yields of 212 bu/acre.'},
    {icon:'coins',t:'Contracted Income',d:'Cash rent of $340/acre for 2026, escalating 3% per year, from a tenant with a 22-year history on the property.'},
    {icon:'scale',t:'Simple Structure',d:'One LLC, one asset class, no debt. Holders own units directly; a majority of units can vote to sell the land.'},
  ]
},
asset:{
  title:'The Land',sub:'Three farms in Story County, Iowa, as described in the June 2026 appraisal by Hertz Farm Management.',
  spec:[
    ['Location','Story County, Iowa (Sections 14, 15, 22, T84N R23W)'],['Total acres','1,240.4 (surveyed)'],['Tillable acres','1,186.1 (95.6%)'],['Soil rating','CSR2 84 (weighted); range 76–92'],['Drainage','Pattern tile, 91% of tillable acres; 2019–2023 installs'],['Crop history','Corn / soybean rotation; 5-yr avg 212 bu corn, 64 bu soy'],['Tenant','Brenner Family Farms LLC (since 2004)'],['Lease','3-year cash rent, 2026–2028, 3% escalators'],['2026 rent','$340 / tillable acre · $403,274 total'],['Appraised value','$14,904,000 · Hertz Farm Management · Jun 2026'],
  ],
  allocTitle:'Acreage by Farm',
  alloc:[['North Farm (Sec 14–15)',44],['Home Farm (Sec 22)',36],['Creek Farm (Sec 22 S)',20]],
  custodyTitle:'Title & Governance',
  custody:[
    'Title to all three farms is held by Harvest Acres Land Co. LLC, an Iowa limited liability company. Title is insured by Chicago Title with no liens or encumbrances other than standard utility easements.',
    'The LLC is managed by Harvest Acres Management, which receives a 0.75% annual asset management fee. Holders of a majority of units may remove the manager or direct a sale of the property; a sale requires 60% approval.'
  ]
},
perf:{
  sub:'Token value reflects appraised land value plus retained cash. Iowa farmland values have compounded at roughly 6% annually over 50 years, with periods of decline.',
  label:'ACRE Net Asset Value (USD / unit)',note:'Illustrative series for demonstration. NAV is marked to the annual appraisal with quarterly interim updates from the Iowa State University land value survey. Past performance does not indicate future results.',
  metrics:[
    {k:'Total Return (12M)',v:'+9.6%',cls:'up',s:'income + appreciation, illustrative'},{k:'Cash Yield',v:'4.2%',s:'net of fees and taxes'},{k:'Land Appreciation',v:'+5.4%',s:'Jun 2025 → Jun 2026 appraisal'},{k:'Leverage',v:'0%',s:'no debt on the property'},
  ]
},
chart:{seed:7712,points:365,start:110.4,end:120.2,vol:0.0025,prefix:'$',decimals:2},
terms:{
  sub:'Summary of Round 1 of the ACRE unit offering. The Offering Circular governs in the event of any inconsistency.',
  table:[
    ['Token','ACRE — Harvest Acres Farmland membership unit'],['Underlying','1 / 124,000 membership interest in Harvest Acres Land Co. LLC'],['Tokens offered','96,000 (Round 1); 28,000 retained by sponsor'],['Issue price','$100.00 per unit (≈ 0.8× appraised NAV of $120.19)'],['Minimum subscription','10 units ($1,000)'],['Distributions','Quarterly; rent received March and December'],['Management fee','0.75% p.a. of appraised value'],['Eligible investors','Verified investors; Reg A Tier 2 for U.S. persons'],['Lock-up','None on platform; sale of land requires 60% holder vote'],['Governing law','Iowa, USA'],
  ],
  timeline:[
    {d:'Apr 2026',t:'Farms acquired',p:'Three parcels purchased from the Halverson estate for $14.1M in cash.',state:'done'},
    {d:'Jun 2026',t:'Independent appraisal',p:'Hertz Farm Management appraised the property at $14.9M.',state:'done'},
    {d:'Aug 2026',t:'Round 1 opens',p:'96,000 units offered at $100. Sponsor retains 28,000 units.',state:'done'},
    {d:'Sep 2026',t:'Harvest season · 41% subscribed',p:'Corn harvest under way; tenant reports yields tracking above 5-year average.',state:'now'},
    {d:'Dec 2026',t:'First distribution',p:'Second-half 2026 rent ($201,637) distributed to holders of record.'},
    {d:'Jun 2027',t:'Annual appraisal',p:'NAV reset to updated appraised value.'},
  ]
},
calc:{min:1000,max:2000000,default:10000,price:100,feePct:1,tokenDecimals:0,unitTitle:'Acreage equivalent',yieldTitle:'Projected annual rent (4.2%)',note:'Round 1 price $100.00 per unit. Platform fee 1% on subscription.',
  unitLabel:function(t){return (t/124000*1240.4).toFixed(2)+' acres'},
  yieldLabel:function(v){return '$'+(v*0.042).toFixed(2)}},
docs:[
  {name:'Offering Circular — Round 1',type:'Primary offering document',date:'Aug 3, 2026',pages:96,summary:['Describes the offering of up to 96,000 membership units of Harvest Acres Land Co. LLC, the property, the lease, management, fees, distributions, voting rights, and risk factors.','Use of proceeds: repayment of the sponsor\'s acquisition bridge ($9.4M), working capital reserve ($150K), offering costs.']},
  {name:'LLC Operating Agreement',type:'Legal · constitutional',date:'Apr 10, 2026',pages:47,summary:['Governs the rights of unit holders, manager duties and removal (majority vote), sale of the property (60% vote), distributions and transfer restrictions.']},
  {name:'Appraisal Report — Hertz Farm Management',type:'Independent valuation',date:'Jun 22, 2026',pages:38,summary:['Sales-comparison and income approaches yield a reconciled value of $14,904,000, or $12,016 per acre. Comparable sales within 12 miles ranged from $10,800 to $13,400 per acre.']},
  {name:'Cash Rent Lease — Brenner Family Farms',type:'Contract',date:'Mar 1, 2026',pages:14,summary:['Three-year lease for crop years 2026–2028 at $340/$350/$361 per tillable acre. Tenant responsible for all inputs and conservation compliance; landlord responsible for tile and property tax.']},
  {name:'Soil & Tile Survey',type:'Technical report',date:'May 14, 2026',pages:27,summary:['CSR2 map and tile-line survey for all three farms. 91% of tillable acres pattern-tiled at 60–80 ft spacing; remaining 9% (Creek Farm bottomland) scheduled for tile in 2027.']},
  {name:'Title Commitment & Survey',type:'Chicago Title',date:'Apr 8, 2026',pages:19,summary:['Owner\'s policy for $14.1M. Exceptions limited to a rural electric cooperative easement and county drainage district assessment.']},
  {name:'Form 1-A Offering Statement',type:'Regulatory filing',date:'Jul 20, 2026',pages:112,summary:['Regulation A Tier 2 offering statement qualified by the SEC on July 31, 2026. Reproduced for investor convenience.']},
  {name:'Distribution Policy',type:'Disclosure',date:'Aug 3, 2026',pages:3,summary:['Net rent after property tax, insurance, management fee and reserve contribution is distributed quarterly. Target payout ratio 95%.']},
],
news:[
  {tag:'Harvest',source:'Issuer update',date:'Sep 10, 2026',title:'Harvest under way: tenant reports corn yields tracking 8% above average',summary:'Favourable July rainfall and early planting have set up a strong crop on all three farms.',body:['Brenner Family Farms began corn harvest on the Home Farm on September 8 and reports early yield monitor readings averaging 228 bushels per acre, roughly 8% above the five-year farm average.','While ACRE holders receive fixed cash rent rather than a share of the crop, strong yields support tenant profitability and the outlook for rent renewals in 2029.','Soybean harvest is expected to begin the last week of September.']},
  {tag:'Markets',source:'Iowa Land Journal',date:'Sep 3, 2026',title:'Iowa farmland values steady in Q3 survey as rates ease',summary:'The Iowa State quarterly survey shows values up 1.1% quarter-over-quarter, with high-quality land outperforming.',body:['Average Iowa farmland values rose 1.1% in the third quarter according to the Iowa State University survey, with high-CSR land in central counties leading. Respondents cited lower interest rates and limited supply of land coming to market.','Story County was among the counties reporting the strongest interest from institutional and fractional buyers.']},
  {tag:'Operations',source:'Issuer update',date:'Aug 27, 2026',title:'Creek Farm tile project scheduled for spring 2027',summary:'Tiling the remaining 105 untiled acres is expected to lift their productivity to match the rest of the property.',body:['The manager has contracted with Central Iowa Drainage to install pattern tile on the 105 acres of Creek Farm bottomland following the 2026 harvest. The $178,000 project will be funded from the working capital reserve.','Tiled ground in the area has historically commanded a 10–15% rent premium and a corresponding uplift in appraised value.']},
  {tag:'Offering',source:'Issuer announcement',date:'Aug 3, 2026',title:'Round 1 opens: 96,000 ACRE units at $100, a 17% discount to appraised NAV',summary:'The sponsor is offering units below appraised value to build a broad holder base.',body:['Harvest Acres Land Co. LLC has opened Round 1 of its unit offering. 96,000 units are available at $100.00, compared with an appraised net asset value of $120.19 per unit.','The sponsor, which retains 28,000 units, said the discount reflects its desire to establish a broad and liquid holder base on the platform.']},
  {tag:'Regulatory',source:'Issuer announcement',date:'Jul 31, 2026',title:'SEC qualifies Regulation A offering statement',summary:'Qualification allows the units to be offered to both accredited and non-accredited U.S. investors.',body:['The SEC has qualified the Form 1-A offering statement for Harvest Acres Land Co. LLC under Regulation A Tier 2, permitting the sale of up to $9.6 million of units to U.S. investors, including non-accredited investors subject to investment limits.']},
  {tag:'Insight',source:'Harvest Acres Research',date:'Jul 15, 2026',title:'Why Corn Belt farmland has been a quiet compounder',summary:'A look at 50 years of Iowa land values, income and correlations.',body:['Iowa farmland has returned roughly 10% per year over the past five decades when income and appreciation are combined, with only two sustained drawdowns: the 1980s farm crisis and the 2014–2019 commodity downturn.','Returns have shown low correlation with equities and a positive relationship with inflation, which is the basis for its role in institutional real-asset allocations.']},
],
faq:[
  ['What do I own?','A membership unit in Harvest Acres Land Co. LLC, an Iowa LLC that owns the three farms outright with no debt. Each unit is 1/124,000 of the company.'],
  ['How do I earn a return?','Two ways: quarterly distributions of net cash rent, and any change in the appraised value of the land, which is reflected in the unit NAV and realised on sale.'],
  ['Why is the price below NAV?','The sponsor set the Round 1 price at $100 against a $120.19 appraised NAV to build a broad holder base quickly. Subsequent rounds, if any, will be priced at or near NAV.'],
  ['Who farms the land?','Brenner Family Farms, which has leased the ground for 22 years. They pay cash rent and bear all crop risk. If yields are poor, ACRE holders still receive the contracted rent.'],
  ['Can the land be sold?','Yes, with a 60% vote of unit holders. The manager may also present offers for a vote. Proceeds after costs are distributed pro-rata.'],
  ['What are the fees?','0.75% of appraised value per year to the manager, plus property tax and insurance paid from rent. Platform fee of 1% on subscription. There is no promote or performance fee.'],
],
risks:[
  ['Land value risk','Farmland values can decline, sometimes for extended periods, driven by commodity prices, interest rates and farm income. The 1980s saw Iowa values fall over 60%.'],
  ['Tenant and rent risk','The tenant could default or decline to renew. Rent on renewal in 2029 will reflect market conditions and could be lower than the current lease.'],
  ['Illiquidity','Farmland is illiquid. Secondary trading of units on the platform may be thin, and a sale of the property requires a 60% holder vote and a marketing period.'],
  ['Weather and environmental risk','Flooding, drought and drainage failures can reduce productivity and value. Creek Farm includes bottomland with historic flood exposure.'],
  ['Concentration','All assets are in one county and one crop system. Local events, such as a change in drainage district assessments, affect the entire portfolio.'],
  ['Valuation risk','NAV depends on an annual appraisal and interim survey data. Actual sale proceeds could differ materially from appraised value.'],
  ['Regulatory and tax risk','Changes to agricultural, environmental or tax law, including treatment of LLC income and property tax, could reduce returns.'],
],
team:[{i:'RK',n:'Ruth Kowalski',r:'Managing Member, Harvest Acres Management'},{i:'BF',n:'Brenner Family Farms LLC',r:'Tenant operator'},{i:'HF',n:'Hertz Farm Management',r:'Independent appraiser'},{i:'CT',n:'Chicago Title Insurance',r:'Title insurer'}],
legal:'This offering profile is a summary only and is qualified in its entirety by the Offering Circular. An offering statement regarding this offering has been qualified by the SEC under Regulation A. Farmland values and rental income can fall as well as rise. Distributions are not guaranteed.'
};
