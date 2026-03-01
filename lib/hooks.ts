'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { SubmissionInput, SubmissionReport } from './types'
export function useCreateSubmission() {
  return useMutation({ mutationFn: async (payload: SubmissionInput) => { const res = await fetch('/api/submissions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); if (!res.ok) throw new Error('No se pudo guardar la solicitud'); return res.json() } })
}
export function useSubmissionReport(enabled = false) {
  return useQuery<SubmissionReport>({ queryKey: ['submission-report'], queryFn: async () => { const token = prompt('Token de reporte') || ''; const res = await fetch(`/api/submissions/report?token=${encodeURIComponent(token)}`); if (!res.ok) throw new Error('No autorizado'); return res.json() }, enabled })
}
