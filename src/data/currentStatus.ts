export interface CurrentStatusItem {
  icon: 'graduation' | 'hammer' | 'brain' | 'sparkles'
  text: string
}

export interface CurrentStatus {
  available: boolean
  availabilityLabel: string
  items: CurrentStatusItem[]
}

/**
 * Edit this file whenever your status changes —
 * e.g. when you get a job, finish a semester, or start a new project.
 * The UI reads this automatically, nothing else needs to change.
 */
export const currentStatus: CurrentStatus = {
  available: true,
  availabilityLabel: 'Available for Opportunities',
  items: [
    { icon: 'graduation', text: 'BIT Student (6th Semester)' },
    { icon: 'hammer', text: 'Building SmartAgro AI' },
    { icon: 'brain', text: 'Learning AI, Computer Vision & Deep Learning' },
    { icon: 'sparkles', text: 'Open to Opportunities' },
  ],
}
