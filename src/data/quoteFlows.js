export const INSURANCE_TYPES = [
  { id: 'auto', label: 'Auto Insurance', description: 'Cars, trucks, SUVs & motorcycles' },
  { id: 'home', label: 'Home Insurance', description: 'Homeowners & dwelling coverage' },
  { id: 'renters', label: 'Renters Insurance', description: 'Apartments, condos & rental homes' },
  { id: 'pet', label: 'Pet Insurance', description: 'Dogs, cats & companion animals' },
  { id: 'bundle', label: 'Auto + Home Bundle', description: 'Multi-policy savings' },
]

const yesNo = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
]

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
  'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
]

function showIf(field, value) {
  return { field, value }
}

export function getEmptyDetails(typeId) {
  const flow = QUOTE_FLOWS[typeId]
  if (!flow) return {}
  const details = {}
  flow.forEach((step) => {
    step.fields.forEach((f) => {
      if (f.default !== undefined) details[f.name] = f.default
      else if (f.type === 'yesno' || f.type === 'radio') details[f.name] = f.options?.[0]?.value ?? ''
      else details[f.name] = ''
    })
  })
  return details
}

export function getFlowSteps(typeId) {
  return QUOTE_FLOWS[typeId] || QUOTE_FLOWS.auto
}

export function countQuestions(typeId) {
  return getFlowSteps(typeId).reduce((n, step) => n + step.fields.length, 0)
}

const contactStep = {
  id: 'contact',
  title: 'Contact information',
  subtitle: 'A licensed agent will reach out with personalized quote options.',
  fields: [
    { name: 'first_name', label: 'First name', type: 'text', required: true, half: true },
    { name: 'last_name', label: 'Last name', type: 'text', required: true, half: true },
    { name: 'phone', label: 'Phone number', type: 'tel', required: true, half: true },
    { name: 'email', label: 'Email address', type: 'email', required: true, half: true },
    {
      name: 'preferred_contact',
      label: 'Preferred contact method',
      type: 'select',
      options: [
        { value: 'phone', label: 'Phone call' },
        { value: 'text', label: 'Text message' },
        { value: 'email', label: 'Email' },
        { value: 'either', label: 'Any method' },
      ],
      default: 'phone',
    },
    {
      name: 'best_time',
      label: 'Best time to reach you',
      type: 'select',
      options: [
        { value: 'morning', label: 'Morning (8 AM – 12 PM)' },
        { value: 'afternoon', label: 'Afternoon (12 PM – 5 PM)' },
        { value: 'evening', label: 'Evening (5 PM – 8 PM)' },
        { value: 'anytime', label: 'Anytime' },
      ],
      default: 'anytime',
    },
    { name: 'notes', label: 'Additional notes for your agent', type: 'textarea', placeholder: 'Optional — discounts, special situations, questions…' },
  ],
}

const autoVehicleStep = {
  id: 'vehicle',
  title: 'Vehicle information',
  subtitle: 'Tell us about the primary vehicle you want to insure.',
  fields: [
    { name: 'vehicle_year', label: 'Vehicle year', type: 'text', required: true, placeholder: '2019', maxLength: 4, half: true },
    { name: 'vehicle_make', label: 'Make', type: 'text', required: true, placeholder: 'Toyota', half: true },
    { name: 'vehicle_model', label: 'Model', type: 'text', required: true, placeholder: 'Camry', half: true },
    { name: 'vehicle_trim', label: 'Trim / edition', type: 'text', placeholder: 'LE, XLE, Sport…', half: true },
    {
      name: 'body_style',
      label: 'Body style',
      type: 'select',
      options: [
        { value: 'sedan', label: 'Sedan' },
        { value: 'suv', label: 'SUV / Crossover' },
        { value: 'truck', label: 'Truck' },
        { value: 'van', label: 'Van / Minivan' },
        { value: 'coupe', label: 'Coupe' },
        { value: 'motorcycle', label: 'Motorcycle' },
        { value: 'other', label: 'Other' },
      ],
      default: 'sedan',
    },
    {
      name: 'primary_use',
      label: 'Primary use',
      type: 'select',
      options: [
        { value: 'commute', label: 'Commute to work/school' },
        { value: 'pleasure', label: 'Pleasure / personal' },
        { value: 'business', label: 'Business use' },
        { value: 'rideshare', label: 'Rideshare (Uber/Lyft)' },
      ],
      default: 'commute',
    },
    {
      name: 'annual_miles',
      label: 'Estimated annual miles',
      type: 'select',
      options: [
        { value: 'under_7500', label: 'Under 7,500' },
        { value: '7500_12000', label: '7,500 – 12,000' },
        { value: '12000_18000', label: '12,000 – 18,000' },
        { value: 'over_18000', label: 'Over 18,000' },
      ],
      default: '12000_18000',
    },
    {
      name: 'ownership_status',
      label: 'Ownership status',
      type: 'select',
      options: [
        { value: 'owned', label: 'Owned outright' },
        { value: 'financed', label: 'Financed' },
        { value: 'leased', label: 'Leased' },
      ],
      default: 'owned',
    },
    { name: 'garaging_zip', label: 'Garaging ZIP (if different)', type: 'text', placeholder: 'Same as home ZIP', maxLength: 5, half: true },
    { name: 'vin', label: 'VIN (optional — speeds up quoting)', type: 'text', placeholder: '17-character VIN', maxLength: 17, half: true },
  ],
}

const autoDriverStep = {
  id: 'driver',
  title: 'Primary driver profile',
  subtitle: 'Driver details help carriers calculate accurate rates.',
  fields: [
    { name: 'driver_age', label: 'Age', type: 'text', required: true, placeholder: '35', half: true },
    {
      name: 'driver_gender',
      label: 'Gender',
      type: 'select',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'non_binary', label: 'Non-binary / prefer not to say' },
      ],
      half: true,
    },
    {
      name: 'marital_status',
      label: 'Marital status',
      type: 'select',
      options: [
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },
        { value: 'divorced', label: 'Divorced' },
        { value: 'widowed', label: 'Widowed' },
        { value: 'domestic_partner', label: 'Domestic partner' },
      ],
      default: 'single',
      half: true,
    },
    {
      name: 'education',
      label: 'Highest education level',
      type: 'select',
      options: [
        { value: 'high_school', label: 'High school' },
        { value: 'some_college', label: 'Some college' },
        { value: 'bachelors', label: "Bachelor's degree" },
        { value: 'graduate', label: 'Graduate degree' },
      ],
      half: true,
    },
    { name: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Teacher, engineer, self-employed…', half: true },
    {
      name: 'license_state',
      label: 'Driver license state',
      type: 'select',
      options: US_STATES.map((s) => ({ value: s, label: s })),
      default: 'TX',
      half: true,
    },
    {
      name: 'license_status',
      label: 'License status',
      type: 'select',
      options: [
        { value: 'valid', label: 'Valid / active' },
        { value: 'learners', label: "Learner's permit" },
        { value: 'suspended', label: 'Suspended' },
        { value: 'foreign', label: 'Foreign / international' },
      ],
      default: 'valid',
    },
    { name: 'years_licensed', label: 'Years licensed', type: 'text', placeholder: '10', half: true },
    { name: 'homeownership', label: 'Do you own or rent your home?', type: 'radio', options: [{ value: 'own', label: 'Own' }, { value: 'rent', label: 'Rent' }], default: 'own', half: true },
  ],
}

const autoHistoryStep = {
  id: 'history',
  title: 'Driving & claims history',
  subtitle: 'Accurate history helps us find carriers that fit your profile.',
  fields: [
    { name: 'accidents_3yr', label: 'At-fault accidents (last 3 years)', type: 'radio', options: [{ value: '0', label: 'None' }, { value: '1', label: '1' }, { value: '2+', label: '2 or more' }], default: '0' },
    { name: 'violations_3yr', label: 'Moving violations (last 3 years)', type: 'radio', options: [{ value: '0', label: 'None' }, { value: '1', label: '1' }, { value: '2+', label: '2 or more' }], default: '0' },
    { name: 'claims_5yr', label: 'Insurance claims (last 5 years)', type: 'radio', options: [{ value: '0', label: 'None' }, { value: '1', label: '1' }, { value: '2+', label: '2 or more' }], default: '0' },
    { name: 'dui_dwi', label: 'DUI / DWI in the last 10 years?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'sr22_required', label: 'SR-22 filing required?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'license_suspended', label: 'License ever suspended or revoked?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'defensive_driving', label: 'Completed defensive driving course (last 3 years)?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'teen_drivers', label: 'Any drivers under age 25 in household?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'teen_driver_ages', label: 'Ages of young drivers', type: 'text', placeholder: 'e.g. 17, 19', showWhen: showIf('teen_drivers', 'yes') },
  ],
}

const autoCurrentInsStep = {
  id: 'current_insurance',
  title: 'Current insurance',
  subtitle: 'Help us understand your existing coverage and renewal timeline.',
  fields: [
    { name: 'currently_insured', label: 'Currently insured?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'current_carrier', label: 'Current insurance company', type: 'text', placeholder: 'Progressive, State Farm…', showWhen: showIf('currently_insured', 'yes'), half: true },
    { name: 'years_with_carrier', label: 'Years with current carrier', type: 'select', showWhen: showIf('currently_insured', 'yes'), options: [{ value: 'under_1', label: 'Less than 1' }, { value: '1_3', label: '1–3 years' }, { value: '3_5', label: '3–5 years' }, { value: 'over_5', label: '5+ years' }], default: '1_3', half: true },
    { name: 'policy_expiration', label: 'Policy expiration (approx.)', type: 'text', placeholder: 'MM/YYYY', showWhen: showIf('currently_insured', 'yes'), half: true },
    { name: 'continuous_coverage', label: 'Continuous coverage without lapse?', type: 'yesno', options: yesNo, default: 'yes', half: true },
    { name: 'current_liability', label: 'Current liability limits', type: 'select', options: [{ value: 'state_min', label: 'Texas minimum (30/60/25)' }, { value: '50_100', label: '$50K / $100K' }, { value: '100_300', label: '$100K / $300K' }, { value: '250_500', label: '$250K / $500K' }, { value: 'unsure', label: 'Not sure' }], default: '100_300' },
    { name: 'has_comp_collision', label: 'Currently have comprehensive & collision?', type: 'yesno', options: yesNo, default: 'yes' },
  ],
}

const autoCoverageStep = {
  id: 'coverage',
  title: 'Coverage preferences',
  subtitle: 'Select the protection levels you want us to quote.',
  fields: [
    { name: 'desired_liability', label: 'Desired liability limits', type: 'select', options: [{ value: 'state_min', label: 'Texas minimum' }, { value: '50_100', label: '$50K / $100K' }, { value: '100_300', label: '$100K / $300K (recommended)' }, { value: '250_500', label: '$250K / $500K' }, { value: '500_500', label: '$500K / $500K' }], default: '100_300' },
    { name: 'comp_deductible', label: 'Comprehensive deductible', type: 'select', options: [{ value: '250', label: '$250' }, { value: '500', label: '$500' }, { value: '1000', label: '$1,000' }, { value: 'none', label: 'Do not need' }], default: '500', half: true },
    { name: 'collision_deductible', label: 'Collision deductible', type: 'select', options: [{ value: '250', label: '$250' }, { value: '500', label: '$500' }, { value: '1000', label: '$1,000' }, { value: 'none', label: 'Do not need' }], default: '500', half: true },
    { name: 'uninsured_motorist', label: 'Uninsured / underinsured motorist coverage?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'rental_reimbursement', label: 'Rental car reimbursement?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'roadside_assistance', label: 'Roadside assistance / towing?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'gap_coverage', label: 'Gap coverage (for financed/leased vehicles)?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'additional_vehicles', label: 'Additional vehicles to quote?', type: 'select', options: [{ value: '0', label: 'No — just this vehicle' }, { value: '1', label: '1 more vehicle' }, { value: '2+', label: '2 or more vehicles' }], default: '0' },
    { name: 'additional_drivers', label: 'Additional drivers on policy?', type: 'select', options: [{ value: '0', label: 'Just me' }, { value: '1', label: '1 additional driver' }, { value: '2+', label: '2 or more drivers' }], default: '0' },
  ],
}

const homePropertyStep = {
  id: 'property',
  title: 'Property details',
  subtitle: 'Basic information about the home you want to insure.',
  fields: [
    { name: 'property_address', label: 'Property street address', type: 'text', placeholder: '123 Main St', half: true },
    { name: 'property_city', label: 'City', type: 'text', placeholder: 'Sugar Land', half: true },
    {
      name: 'property_type',
      label: 'Property type',
      type: 'select',
      options: [
        { value: 'single_family', label: 'Single-family home' },
        { value: 'condo', label: 'Condo' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'mobile', label: 'Manufactured / mobile home' },
        { value: 'duplex', label: 'Duplex / multi-family' },
      ],
      default: 'single_family',
    },
    { name: 'year_built', label: 'Year built', type: 'text', required: true, placeholder: '2005', half: true },
    { name: 'square_feet', label: 'Square footage', type: 'text', placeholder: '2,200', half: true },
    { name: 'stories', label: 'Number of stories', type: 'select', options: [{ value: '1', label: '1 story' }, { value: '2', label: '2 stories' }, { value: '3+', label: '3 or more' }], default: '1', half: true },
    { name: 'bedrooms', label: 'Bedrooms', type: 'text', placeholder: '4', half: true },
    { name: 'bathrooms', label: 'Bathrooms', type: 'text', placeholder: '2.5', half: true },
    { name: 'occupancy', label: 'Occupancy type', type: 'select', options: [{ value: 'primary', label: 'Primary residence' }, { value: 'secondary', label: 'Second / vacation home' }, { value: 'rental', label: 'Rental property' }], default: 'primary' },
  ],
}

const homeConstructionStep = {
  id: 'construction',
  title: 'Construction & systems',
  subtitle: 'Roof, structure, and major systems affect homeowners rates.',
  fields: [
    { name: 'roof_type', label: 'Roof type', type: 'select', options: [{ value: 'asphalt', label: 'Asphalt shingle' }, { value: 'metal', label: 'Metal' }, { value: 'tile', label: 'Tile / slate' }, { value: 'flat', label: 'Flat / built-up' }, { value: 'other', label: 'Other' }], default: 'asphalt' },
    { name: 'roof_age', label: 'Roof age (years)', type: 'text', placeholder: '8', half: true },
    { name: 'foundation', label: 'Foundation type', type: 'select', options: [{ value: 'slab', label: 'Slab' }, { value: 'crawl', label: 'Crawl space' }, { value: 'basement', label: 'Basement' }, { value: 'pier', label: 'Pier & beam' }], default: 'slab', half: true },
    { name: 'exterior', label: 'Exterior material', type: 'select', options: [{ value: 'brick', label: 'Brick' }, { value: 'vinyl', label: 'Vinyl / siding' }, { value: 'stucco', label: 'Stucco' }, { value: 'wood', label: 'Wood' }, { value: 'mixed', label: 'Mixed' }], default: 'brick' },
    { name: 'heating', label: 'Primary heating', type: 'select', options: [{ value: 'central_gas', label: 'Central gas' }, { value: 'central_electric', label: 'Central electric' }, { value: 'heat_pump', label: 'Heat pump' }, { value: 'other', label: 'Other' }], default: 'central_gas' },
    { name: 'updated_electrical', label: 'Electrical updated in last 20 years?', type: 'yesno', options: yesNo, default: 'yes', half: true },
    { name: 'updated_plumbing', label: 'Plumbing updated in last 20 years?', type: 'yesno', options: yesNo, default: 'yes', half: true },
  ],
}

const homeRiskStep = {
  id: 'risks',
  title: 'Property features & risks',
  subtitle: 'Pools, pets, and location factors help us quote accurately.',
  fields: [
    { name: 'swimming_pool', label: 'Swimming pool on property?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'pool_fenced', label: 'Pool fenced with locking gate?', type: 'yesno', options: yesNo, default: 'yes', showWhen: showIf('swimming_pool', 'yes') },
    { name: 'trampoline', label: 'Trampoline on property?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'dog_ownership', label: 'Own a dog?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'dog_breed', label: 'Dog breed(s)', type: 'text', placeholder: 'Labrador, mixed…', showWhen: showIf('dog_ownership', 'yes') },
    { name: 'flood_zone', label: 'Property in a known flood zone?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'wildfire_risk', label: 'Area subject to wildfire risk?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'security_system', label: 'Monitored security / alarm system?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'fire_sprinklers', label: 'Fire sprinklers installed?', type: 'yesno', options: yesNo, default: 'no' },
  ],
}

const homeCurrentInsStep = {
  id: 'home_current',
  title: 'Current homeowners insurance',
  subtitle: 'Your existing policy and claims history.',
  fields: [
    { name: 'currently_insured', label: 'Currently have homeowners insurance?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'current_carrier', label: 'Current carrier', type: 'text', showWhen: showIf('currently_insured', 'yes'), half: true },
    { name: 'years_with_carrier', label: 'Years with current carrier', type: 'select', showWhen: showIf('currently_insured', 'yes'), options: [{ value: 'under_1', label: 'Less than 1' }, { value: '1_3', label: '1–3 years' }, { value: '3_5', label: '3–5 years' }, { value: 'over_5', label: '5+ years' }], default: '1_3', half: true },
    { name: 'claims_5yr', label: 'Home claims in last 5 years?', type: 'radio', options: [{ value: '0', label: 'None' }, { value: '1', label: '1' }, { value: '2+', label: '2 or more' }], default: '0' },
    { name: 'mortgage', label: 'Mortgage on property?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'mortgage_lender', label: 'Mortgage lender (optional)', type: 'text', showWhen: showIf('mortgage', 'yes'), placeholder: 'Lender name' },
    { name: 'policy_expiration', label: 'Policy expiration (approx.)', type: 'text', placeholder: 'MM/YYYY', half: true },
  ],
}

const homeCoverageStep = {
  id: 'home_coverage',
  title: 'Coverage preferences',
  subtitle: 'Select dwelling and liability limits to quote.',
  fields: [
    { name: 'dwelling_value', label: 'Estimated dwelling replacement cost', type: 'select', options: [{ value: 'under_200k', label: 'Under $200K' }, { value: '200_350', label: '$200K – $350K' }, { value: '350_500', label: '$350K – $500K' }, { value: '500_750', label: '$500K – $750K' }, { value: 'over_750', label: 'Over $750K' }], default: '200_350' },
    { name: 'deductible', label: 'Preferred deductible', type: 'select', options: [{ value: '1000', label: '$1,000' }, { value: '2500', label: '$2,500' }, { value: '5000', label: '$5,000' }, { value: '1pct', label: '1% of dwelling' }], default: '1000', half: true },
    { name: 'personal_property', label: 'Personal property coverage', type: 'select', options: [{ value: '25k', label: '$25,000' }, { value: '50k', label: '$50,000' }, { value: '75k', label: '$75,000' }, { value: '100k', label: '$100,000+' }], default: '50k', half: true },
    { name: 'liability_limit', label: 'Personal liability limit', type: 'select', options: [{ value: '100k', label: '$100,000' }, { value: '300k', label: '$300,000' }, { value: '500k', label: '$500,000' }, { value: '1m', label: '$1,000,000' }], default: '300k' },
    { name: 'flood_interest', label: 'Interested in separate flood insurance?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'wind_hail_deductible', label: 'Separate wind/hail deductible (coastal TX)?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'jewelry_scheduled', label: 'Need scheduled coverage for jewelry/ valuables?', type: 'yesno', options: yesNo, default: 'no' },
  ],
}

const rentersPropertyStep = {
  id: 'rental',
  title: 'Rental property',
  subtitle: 'Details about where you live and what you need covered.',
  fields: [
    { name: 'property_type', label: 'Rental type', type: 'select', options: [{ value: 'apartment', label: 'Apartment' }, { value: 'condo', label: 'Condo' }, { value: 'house', label: 'Single-family house' }, { value: 'townhouse', label: 'Townhouse' }], default: 'apartment' },
    { name: 'monthly_rent', label: 'Monthly rent', type: 'select', options: [{ value: 'under_1000', label: 'Under $1,000' }, { value: '1000_1500', label: '$1,000 – $1,500' }, { value: '1500_2500', label: '$1,500 – $2,500' }, { value: 'over_2500', label: 'Over $2,500' }], default: '1000_1500', half: true },
    { name: 'lease_length', label: 'Lease term', type: 'select', options: [{ value: 'month', label: 'Month-to-month' }, { value: '6mo', label: '6 months' }, { value: '12mo', label: '12 months' }, { value: 'other', label: 'Other' }], default: '12mo', half: true },
    { name: 'square_feet', label: 'Approx. square footage', type: 'text', placeholder: '900', half: true },
    { name: 'floor_level', label: 'Floor level', type: 'select', options: [{ value: 'ground', label: 'Ground floor' }, { value: 'mid', label: 'Middle floor' }, { value: 'top', label: 'Top floor' }], default: 'mid', half: true },
    { name: 'roommates', label: 'Roommates in unit?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'roommate_count', label: 'Number of roommates', type: 'text', showWhen: showIf('roommates', 'yes'), half: true },
    { name: 'landlord_required', label: 'Landlord requires renters insurance?', type: 'yesno', options: yesNo, default: 'no' },
  ],
}

const rentersCoverageStep = {
  id: 'renters_coverage',
  title: 'Coverage & belongings',
  subtitle: 'Estimate your personal property and liability needs.',
  fields: [
    { name: 'personal_property_value', label: 'Estimated value of belongings', type: 'select', options: [{ value: '15000', label: 'Under $15,000' }, { value: '25000', label: '$15,000 – $30,000' }, { value: '50000', label: '$30,000 – $60,000' }, { value: '75000', label: '$60,000+' }], default: '25000' },
    { name: 'high_value_items', label: 'Electronics, jewelry, or collectibles over $1,500?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'high_value_description', label: 'Describe high-value items', type: 'text', showWhen: showIf('high_value_items', 'yes') },
    { name: 'liability_limit', label: 'Personal liability limit', type: 'select', options: [{ value: '100k', label: '$100,000' }, { value: '300k', label: '$300,000' }, { value: '500k', label: '$500,000' }], default: '300k' },
    { name: 'deductible', label: 'Preferred deductible', type: 'select', options: [{ value: '250', label: '$250' }, { value: '500', label: '$500' }, { value: '1000', label: '$1,000' }], default: '500', half: true },
    { name: 'loss_of_use', label: 'Need additional living expense coverage?', type: 'yesno', options: yesNo, default: 'yes', half: true },
    { name: 'currently_insured', label: 'Currently have renters insurance?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'current_carrier', label: 'Current carrier', type: 'text', showWhen: showIf('currently_insured', 'yes'), half: true },
    { name: 'claims_5yr', label: 'Claims in last 5 years?', type: 'radio', options: [{ value: '0', label: 'None' }, { value: '1', label: '1' }, { value: '2+', label: '2 or more' }], default: '0' },
  ],
}

const rentersHouseholdStep = {
  id: 'renters_household',
  title: 'Household & safety',
  subtitle: 'A few more details carriers commonly ask for.',
  fields: [
    { name: 'smoke_detectors', label: 'Working smoke detectors?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'fire_extinguisher', label: 'Fire extinguisher in unit?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'security_system', label: 'Security system or deadbolts?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'dog_ownership', label: 'Own a dog?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'dog_breed', label: 'Dog breed', type: 'text', showWhen: showIf('dog_ownership', 'yes') },
    { name: 'water_damage_risk', label: 'Previous water damage in unit?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'bundle_auto', label: 'Also interested in auto insurance bundle?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'move_in_date', label: 'Move-in date (approx.)', type: 'text', placeholder: 'MM/YYYY', half: true },
  ],
}

const petDetailsStep = {
  id: 'pet_details',
  title: 'Pet information',
  subtitle: 'Tell us about your companion animal.',
  fields: [
    { name: 'pet_name', label: 'Pet name', type: 'text', placeholder: 'Max', half: true },
    {
      name: 'pet_type',
      label: 'Pet type',
      type: 'select',
      options: [{ value: 'dog', label: 'Dog' }, { value: 'cat', label: 'Cat' }, { value: 'other', label: 'Other' }],
      default: 'dog',
      half: true,
    },
    { name: 'pet_breed', label: 'Breed', type: 'text', required: true, placeholder: 'Golden Retriever', half: true },
    { name: 'pet_age', label: 'Age', type: 'text', placeholder: '3 years', half: true },
    { name: 'pet_weight', label: 'Weight (lbs)', type: 'text', placeholder: '65', half: true },
    { name: 'pet_gender', label: 'Gender', type: 'select', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }], half: true },
    { name: 'spayed_neutered', label: 'Spayed or neutered?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'microchipped', label: 'Microchipped?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'indoor_outdoor', label: 'Primarily indoor or outdoor?', type: 'radio', options: [{ value: 'indoor', label: 'Indoor' }, { value: 'outdoor', label: 'Outdoor' }, { value: 'both', label: 'Both' }], default: 'indoor' },
  ],
}

const petHealthStep = {
  id: 'pet_health',
  title: 'Health history',
  subtitle: 'Pre-existing conditions affect plan options and pricing.',
  fields: [
    { name: 'currently_insured', label: 'Currently have pet insurance?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'current_carrier', label: 'Current pet insurer', type: 'text', showWhen: showIf('currently_insured', 'yes'), half: true },
    { name: 'vet_visits_yearly', label: 'Vet visits per year', type: 'select', options: [{ value: '0_1', label: '0–1' }, { value: '2_3', label: '2–3' }, { value: '4+', label: '4 or more' }], default: '1_2', half: true },
    { name: 'chronic_conditions', label: 'Any chronic or pre-existing conditions?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'condition_details', label: 'Describe conditions', type: 'textarea', showWhen: showIf('chronic_conditions', 'yes') },
    { name: 'medications', label: 'Currently on regular medications?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'surgeries', label: 'Surgeries in the last 2 years?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'dental_issues', label: 'Known dental issues?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'vaccinations_current', label: 'Vaccinations up to date?', type: 'yesno', options: yesNo, default: 'yes' },
  ],
}

const petCoverageStep = {
  id: 'pet_coverage',
  title: 'Coverage preferences',
  subtitle: 'Choose the plan features that matter most to you.',
  fields: [
    { name: 'coverage_type', label: 'Coverage type', type: 'select', options: [{ value: 'accident_only', label: 'Accident only' }, { value: 'accident_illness', label: 'Accident & illness (recommended)' }, { value: 'wellness', label: 'Accident, illness & wellness' }], default: 'accident_illness' },
    { name: 'annual_limit', label: 'Preferred annual limit', type: 'select', options: [{ value: '5000', label: '$5,000' }, { value: '10000', label: '$10,000' }, { value: 'unlimited', label: 'Unlimited' }], default: '10000', half: true },
    { name: 'deductible', label: 'Preferred deductible', type: 'select', options: [{ value: '100', label: '$100' }, { value: '250', label: '$250' }, { value: '500', label: '$500' }], default: '250', half: true },
    { name: 'reimbursement', label: 'Reimbursement level', type: 'select', options: [{ value: '70', label: '70%' }, { value: '80', label: '80%' }, { value: '90', label: '90%' }], default: '80' },
    { name: 'wellness_interest', label: 'Interested in wellness / routine care add-on?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'multi_pet', label: 'Insure multiple pets?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'multi_pet_count', label: 'Number of additional pets', type: 'text', showWhen: showIf('multi_pet', 'yes'), half: true },
    { name: 'preferred_vet', label: 'Preferred veterinarian (optional)', type: 'text', placeholder: 'Clinic name', half: true },
  ],
}

const bundleHomeStep = {
  id: 'bundle_home',
  title: 'Home details',
  subtitle: 'Property information for your bundle quote.',
  fields: [
    { name: 'property_type', label: 'Property type', type: 'select', options: [{ value: 'single_family', label: 'Single-family' }, { value: 'condo', label: 'Condo' }, { value: 'townhouse', label: 'Townhouse' }], default: 'single_family' },
    { name: 'year_built', label: 'Year built', type: 'text', required: true, placeholder: '2010', half: true },
    { name: 'square_feet', label: 'Square footage', type: 'text', placeholder: '2,100', half: true },
    { name: 'roof_age', label: 'Roof age (years)', type: 'text', placeholder: '5', half: true },
    { name: 'swimming_pool', label: 'Swimming pool?', type: 'yesno', options: yesNo, default: 'no', half: true },
    { name: 'mortgage', label: 'Mortgage on property?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'dwelling_value', label: 'Estimated dwelling value', type: 'select', options: [{ value: 'under_200k', label: 'Under $200K' }, { value: '200_350', label: '$200K – $350K' }, { value: '350_500', label: '$350K – $500K' }, { value: 'over_500', label: 'Over $500K' }], default: '200_350' },
    { name: 'home_claims_5yr', label: 'Home claims (last 5 years)?', type: 'radio', options: [{ value: '0', label: 'None' }, { value: '1', label: '1' }, { value: '2+', label: '2 or more' }], default: '0' },
  ],
}

const bundleCoverageStep = {
  id: 'bundle_coverage',
  title: 'Bundle preferences',
  subtitle: 'Combined coverage options for auto and home.',
  fields: [
    { name: 'desired_liability', label: 'Auto liability limits', type: 'select', options: [{ value: '100_300', label: '$100K / $300K' }, { value: '250_500', label: '$250K / $500K' }, { value: '500_500', label: '$500K / $500K' }], default: '100_300' },
    { name: 'comp_deductible', label: 'Auto comp/collision deductible', type: 'select', options: [{ value: '500', label: '$500' }, { value: '1000', label: '$1,000' }], default: '500', half: true },
    { name: 'home_deductible', label: 'Home deductible', type: 'select', options: [{ value: '1000', label: '$1,000' }, { value: '2500', label: '$2,500' }], default: '1000', half: true },
    { name: 'home_liability', label: 'Home liability limit', type: 'select', options: [{ value: '300k', label: '$300,000' }, { value: '500k', label: '$500,000' }], default: '300k' },
    { name: 'flood_interest', label: 'Interested in flood insurance?', type: 'yesno', options: yesNo, default: 'no' },
    { name: 'currently_insured', label: 'Currently insured for both auto & home?', type: 'yesno', options: yesNo, default: 'yes' },
    { name: 'same_carrier', label: 'Same carrier for both policies today?', type: 'yesno', options: yesNo, default: 'no', showWhen: showIf('currently_insured', 'yes') },
    { name: 'policy_expiration', label: 'Earliest policy expiration', type: 'text', placeholder: 'MM/YYYY', half: true },
  ],
}

export const QUOTE_FLOWS = {
  auto: [autoVehicleStep, autoDriverStep, autoHistoryStep, autoCurrentInsStep, autoCoverageStep, contactStep],
  home: [homePropertyStep, homeConstructionStep, homeRiskStep, homeCurrentInsStep, homeCoverageStep, contactStep],
  renters: [rentersPropertyStep, rentersCoverageStep, rentersHouseholdStep, contactStep],
  pet: [petDetailsStep, petHealthStep, petCoverageStep, contactStep],
  bundle: [autoVehicleStep, autoDriverStep, autoHistoryStep, bundleHomeStep, bundleCoverageStep, contactStep],
}

export function isFieldVisible(field, details) {
  if (!field.showWhen) return true
  return details[field.showWhen.field] === field.showWhen.value
}

export function validateStep(step, details) {
  for (const field of step.fields) {
    if (!isFieldVisible(field, details)) continue
    if (field.required && !String(details[field.name] ?? '').trim()) {
      return `${field.label} is required.`
    }
  }
  return ''
}
