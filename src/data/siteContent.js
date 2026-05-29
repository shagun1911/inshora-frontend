/** Shared marketing content for Inshora Group interior pages */

export const COMPANY = {
  name: 'Inshora Group',
  tagline: 'Licensed Texas insurance brokerage since 2013',
  phone: '(713) 943-9985',
  phoneTel: '7139439985',
  email: 'support@inshoragroup.com',
  address: '6920 Brisbane Court, Ste 234',
  city: 'Sugar Land',
  state: 'TX',
  zip: '77478',
  hours: {
    weekday: 'Monday – Friday: 8:00 AM – 8:00 PM CT',
    saturday: 'Saturday: 10:00 AM – 4:00 PM CT',
    sunday: 'Sunday: Online tools & Sarah voice assistant available',
  },
}

export const STATS = [
  { value: '25+', label: 'A-rated insurance carriers' },
  { value: '2013', label: 'Founded in Texas' },
  { value: '30+', label: 'Quote wizard questions per product' },
  { value: '13+', label: 'Major metro areas served' },
]

export const VALUES = [
  {
    title: 'Independence',
    text: 'We represent you — not a single insurance company. Our job is to shop the market and recommend coverage that fits your life, budget, and risk profile.',
  },
  {
    title: 'Transparency',
    text: 'Plain-language explanations, honest trade-offs, and no hidden agendas. You always know why we recommend a carrier or coverage level.',
  },
  {
    title: 'Expertise',
    text: 'Licensed Texas agents with deep product knowledge across personal and commercial lines, from auto minimums to flood exclusions.',
  },
  {
    title: 'Accessibility',
    text: 'Quote online, talk to Sarah by voice, call our Sugar Land team, or email — choose the channel that works for you.',
  },
]

export const MILESTONES = [
  { year: '2013', event: 'Inshora Group founded in Sugar Land, TX as an independent brokerage.' },
  { year: '2016', event: 'Expanded carrier panel to 15+ A-rated partners across auto and home.' },
  { year: '2019', event: 'Statewide Texas licensing — serving Houston, Dallas, Austin, and San Antonio metros.' },
  { year: '2022', event: 'Added digital quote intake and AI-assisted client education tools.' },
  { year: '2024', event: 'Launched guided quote wizard with 30+ carrier-ready questions per product line.' },
  { year: '2025', event: 'Sarah voice assistant and unified online quote experience across all major personal lines.' },
]

export const CARRIERS = [
  'Progressive', 'Allstate', 'Liberty Mutual', 'USAA', 'State Farm', 'The General',
  'Bristol West', 'Travelers', 'Nationwide', 'Farmers', 'MetLife', 'American Family',
]

export const SERVICES = [
  {
    id: 'auto',
    icon: 'Car',
    name: 'Auto Insurance',
    summary: 'Liability, collision, comprehensive, uninsured motorist, and optional endorsements for Texas drivers.',
    whoFor: 'Commuters, families, rideshare drivers, teen drivers, multi-vehicle households, SR-22 filings.',
    coverage: ['Bodily injury & property damage liability', 'Collision & comprehensive', 'Uninsured/underinsured motorist', 'Medical payments / PIP options', 'Rental reimbursement & roadside', 'Gap coverage for financed vehicles'],
    texasNote: 'Texas minimum limits are 30/60/25 — we typically recommend higher limits when affordable.',
    quoteType: 'auto',
  },
  {
    id: 'home',
    icon: 'Home',
    name: 'Homeowners Insurance',
    summary: 'Dwelling, personal property, liability, and loss of use for Texas homeowners.',
    whoFor: 'Single-family owners, condos, townhomes, new purchases, refinance requirements, coastal properties.',
    coverage: ['Dwelling (replacement cost vs ACV)', 'Other structures & personal property', 'Personal liability & med pay', 'Loss of use / additional living expense', 'Wind/hail & water backup endorsements', 'Scheduled valuables'],
    texasNote: 'Standard policies exclude flood — separate flood coverage is critical in many Texas regions.',
    quoteType: 'home',
  },
  {
    id: 'renters',
    icon: 'Home',
    name: 'Renters Insurance',
    summary: 'Affordable protection for personal belongings and tenant liability.',
    whoFor: 'Apartment renters, college students, roommates, landlord-required coverage.',
    coverage: ['Personal property (theft, fire, water)', 'Personal liability', 'Additional living expenses', 'Medical payments to others'],
    texasNote: 'Landlords insure the building — renters insurance protects your stuff and liability.',
    quoteType: 'renters',
  },
  {
    id: 'pet',
    icon: 'PawPrint',
    name: 'Pet Insurance',
    summary: 'Accident and illness plans for dogs, cats, and companion animals.',
    whoFor: 'Pet owners wanting help with vet bills, surgeries, and chronic conditions.',
    coverage: ['Accident-only or accident & illness', 'Annual limits & deductibles', 'Reimbursement levels (70–90%)', 'Optional wellness / routine care add-ons'],
    texasNote: 'Pre-existing conditions may be excluded — enroll early for best options.',
    quoteType: 'pet',
  },
  {
    id: 'bundle',
    icon: 'Package',
    name: 'Auto + Home Bundle',
    summary: 'Multi-policy packaging for potential savings and simplified billing.',
    whoFor: 'Homeowners who also insure vehicles with the same household.',
    coverage: ['Combined auto & home quoting', 'Multi-policy discount review', 'Aligned renewal dates when possible'],
    texasNote: 'Bundling doesn\'t always win — we compare bundled and unbundled scenarios.',
    quoteType: 'bundle',
  },
  {
    id: 'flood',
    icon: 'Droplets',
    name: 'Flood Insurance',
    summary: 'NFIP and private flood options separate from homeowners policies.',
    whoFor: 'Coastal properties, FEMA flood zones, mortgage requirements, Houston-area bayous.',
    coverage: ['Building coverage', 'Contents coverage', 'Preferred vs standard risk zones'],
    texasNote: 'Hurricane season and heavy rain make flood a top Texas gap in home coverage.',
    quoteType: null,
  },
  {
    id: 'life',
    icon: 'Heart',
    name: 'Life Insurance',
    summary: 'Term and permanent life solutions for income replacement and legacy planning.',
    whoFor: 'Parents, homeowners with mortgages, business owners, estate planning.',
    coverage: ['Term life (10–30 year)', 'Whole & universal life', 'Final expense', 'Needs-based face amount analysis'],
    texasNote: 'Coverage amounts should reflect income, debts, dependents, and goals — agents guide the math.',
    quoteType: null,
  },
  {
    id: 'business',
    icon: 'Briefcase',
    name: 'Business Insurance',
    summary: 'General liability, property, workers comp, and commercial auto for Texas employers.',
    whoFor: 'Contractors, retail, professional services, startups, growing teams.',
    coverage: ['General liability & BOP', 'Commercial property', 'Workers\' compensation', 'Professional liability (E&O)', 'Commercial auto & inland marine'],
    texasNote: 'Workers\' comp requirements vary by industry and employee count in Texas.',
    quoteType: null,
  },
  {
    id: 'umbrella',
    icon: 'Umbrella',
    name: 'Umbrella / Excess Liability',
    summary: 'Extra liability limits above auto and home underlying policies.',
    whoFor: 'High-net-worth households, landlords, pool owners, public-facing professionals.',
    coverage: ['$1M+ excess liability', 'Legal defense costs', 'Personal injury liability extensions'],
    texasNote: 'Often one of the most cost-effective ways to add serious liability protection.',
    quoteType: null,
  },
]

export const REGIONS = [
  {
    name: 'Greater Houston',
    cities: ['Sugar Land', 'Houston', 'Richmond', 'Katy', 'Missouri City', 'Pearland', 'League City', 'Galveston', 'The Woodlands', 'Cypress'],
    risks: 'Hurricane wind, hail, flood, bayou overflow — flood and wind deductibles matter.',
  },
  {
    name: 'Dallas–Fort Worth',
    cities: ['Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Frisco', 'Irving', 'Garland'],
    risks: 'Hail storms, tornado exposure, rapid suburban growth and replacement cost changes.',
  },
  {
    name: 'Central Texas',
    cities: ['Austin', 'Round Rock', 'San Marcos', 'New Braunfels'],
    risks: 'Wildfire risk in Hill Country, flash flooding, rising property values.',
  },
  {
    name: 'South Texas',
    cities: ['San Antonio', 'Corpus Christi', 'McAllen', 'Brownsville'],
    risks: 'Coastal windstorm considerations, heat-related home systems, border metro growth.',
  },
]

export const ALL_CITIES = [
  'Sugar Land', 'Houston', 'Richmond', 'Katy', 'Missouri City', 'Pearland', 'League City',
  'Galveston', 'The Woodlands', 'Cypress', 'Rosenberg', 'Fulshear', 'Dallas', 'Fort Worth',
  'Arlington', 'Plano', 'Frisco', 'Austin', 'San Antonio', 'Corpus Christi', 'El Paso', 'Lubbock',
]

export const CONTACT_FAQS = [
  {
    q: 'How quickly will someone respond?',
    a: 'Contact form submissions are reviewed within one business day. Quote wizard submissions receive agent follow-up — typically same or next business day.',
  },
  {
    q: 'Should I use the quote wizard or contact form?',
    a: 'Use the quote wizard for auto, home, renters, pet, or bundle quotes — it collects the details carriers need. Use the contact form for general questions, flood/life/business lines, or claims navigation help.',
  },
  {
    q: 'Can I talk to Sarah instead of filling out a form?',
    a: 'Yes. Sarah answers coverage questions by voice on our website. For binding quotes, complete the wizard or speak with a licensed agent by phone.',
  },
  {
    q: 'Do you serve my ZIP code?',
    a: 'We are licensed statewide in Texas. Enter your ZIP in the quote wizard or call us to confirm carrier availability in your area.',
  },
]

export const BLOG_TOPICS = [
  { title: 'Auto & driving in Texas', desc: 'Minimum limits, UM/UIM, teen drivers, hail damage to vehicles.' },
  { title: 'Home & property', desc: 'Roof age, wind/hail deductibles, replacement cost, water backup.' },
  { title: 'Flood & weather', desc: 'NFIP vs private flood, hurricane prep, why homeowners excludes flood.' },
  { title: 'Saving on premiums', desc: 'Bundling, deductibles, discounts, when to shop your renewal.' },
]

export const TEAM = [
  { initials: 'AG', role: 'Licensed agents', desc: 'Texas-licensed professionals who compare carriers and bind coverage.' },
  { initials: 'CS', role: 'Client support', desc: 'Help with forms, follow-ups, and scheduling agent callbacks.' },
  { initials: 'SR', role: 'Sarah AI assistant', desc: '24/7 voice help for coverage education on the website.' },
]
