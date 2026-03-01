export type Role = 'importer' | 'carrier'
export interface SubmissionInput { role: Role; email: string; phone: string; city: string; port?: string; deliveryCity?: string; haulDates?: string[]; emptyReturnTo?: 'Puerto' | 'Ciudad destino'; hazardousCargo?: 'Si' | 'No'; fleetBaseCity?: string; originStates?: string[]; destinationStates?: string[]; paymentTerms?: '7_days' | '15_days' | '30_days' | 'immediate'; pricingMode?: 'auto' | 'manual' }
export interface SubmissionReport { total: number; importers: number; carriers: number; byCity: Array<{ city: string; count: number }> }
