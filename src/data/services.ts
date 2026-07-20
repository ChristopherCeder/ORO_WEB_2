export interface ServiceChapter {
  id: string
  progressStart: number
  progressEnd: number
  eyebrow: string
  title: string
  body: string
  tags: string[]
}

export const chapters: ServiceChapter[] = [
  {
    id: 'intro',
    progressStart: 0,
    progressEnd: 0.1,
    eyebrow: 'ORO Services',
    title: 'One crew.\nEvery job.',
    body: 'Scroll through a day on the property — from open land to finished work.',
    tags: [],
  },
  {
    id: 'landscape',
    progressStart: 0.08,
    progressEnd: 0.22,
    eyebrow: 'Ground Level',
    title: 'Landscaping &\nPressure Washing',
    body: 'Crews shaping big properties — mowing, trimming, clearing, and blasting grime off driveways, siding, and equipment.',
    tags: ['Landscaping', 'Pressure Washing'],
  },
  {
    id: 'roadside',
    progressStart: 0.18,
    progressEnd: 0.32,
    eyebrow: 'On the Road',
    title: 'Roadside Assistance\n& Hotshotting',
    body: 'Stranded on the shoulder? We show up. Time-critical loads? Our hotshot rigs move fast.',
    tags: ['Roadside Assistance', 'Hotshotting'],
  },
  {
    id: 'garage',
    progressStart: 0.3,
    progressEnd: 0.48,
    eyebrow: 'Back of the Property',
    title: 'Mechanical Work\n& Paint / Body',
    body: 'The garage bay runs hot — diagnostics, rebuilds, panel work, and paint that matches factory spec.',
    tags: ['Mechanic', 'Automotive Paint & Body', 'Welding & Fabrication'],
  },
  {
    id: 'construction',
    progressStart: 0.46,
    progressEnd: 0.58,
    eyebrow: 'Front of the House',
    title: 'Construction\n& Fabrication',
    body: 'Framing, concrete, structural welding — we build what the plans call for and make it hold.',
    tags: ['Construction', 'Welding & Fabrication'],
  },
  {
    id: 'handyman',
    progressStart: 0.56,
    progressEnd: 0.68,
    eyebrow: 'Inside',
    title: 'Handyman\nServices',
    body: 'Drywall, plumbing, electrical, fixtures — the small jobs that keep a place running right.',
    tags: ['Handyman'],
  },
  {
    id: 'drafting',
    progressStart: 0.66,
    progressEnd: 0.78,
    eyebrow: 'Design Room',
    title: 'Drafting\n& Design',
    body: 'Two sets of eyes on every drawing — layouts, elevations, and build-ready plans before ground breaks.',
    tags: ['Drafting & Design'],
  },
  {
    id: 'dispatch',
    progressStart: 0.76,
    progressEnd: 0.92,
    eyebrow: 'Back Drive',
    title: 'Loaded up.\nRolling out.',
    body: 'Finished vehicle on the flatbed — headed to you or headed home. That\'s how ORO closes a job.',
    tags: ['Hotshotting', 'Mechanic'],
  },
  {
    id: 'contact',
    progressStart: 0.9,
    progressEnd: 1,
    eyebrow: 'Get in Touch',
    title: 'Need the crew?',
    body: 'Call, text, or email — tell us what you need and we\'ll put the right people on it.',
    tags: [],
  },
]

export const contact = {
  phone: '(555) 867-5309',
  email: 'crew@oroservices.com',
  location: 'Serving the region — mobile & on-site',
}
