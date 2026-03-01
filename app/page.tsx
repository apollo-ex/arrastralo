'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useCreateSubmission } from '@/lib/hooks'
import type { Role } from '@/lib/types'

const ports = ['Manzanillo', 'Veracruz', 'Altamira', 'Lázaro Cárdenas']
const mxStates = ['Colima', 'Jalisco', 'Nuevo León', 'CDMX', 'Puebla', 'Querétaro', 'EdoMex', 'Veracruz']

function MultiDate({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [candidate, setCandidate] = useState('')
  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input type="date" value={candidate} onChange={(e) => setCandidate(e.target.value)} />
        <button type="button" onClick={() => candidate && !value.includes(candidate) && onChange([...value, candidate])}>Agregar fecha</button>
      </div>
      <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {value.map((d) => (
          <span key={d} style={{ padding: '4px 8px', border: '1px solid #2a4269', borderRadius: 8 }}>
            {d} <button type="button" onClick={() => onChange(value.filter((x) => x !== d))}>x</button>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  const [role, setRole] = useState<Role>('importer')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')

  const [port, setPort] = useState('Manzanillo')
  const [haulDates, setHaulDates] = useState<string[]>([])
  const [deliveryCity, setDeliveryCity] = useState('')

  const [fleetBaseCity, setFleetBaseCity] = useState('')
  const [originStates, setOriginStates] = useState<string[]>([])
  const [destinationStates, setDestinationStates] = useState<string[]>([])
  const [paymentTerms, setPaymentTerms] = useState<'7_days' | '15_days' | '30_days' | 'immediate'>('15_days')
  const [pricingMode, setPricingMode] = useState<'auto' | 'manual'>('manual')

  const mutation = useCreateSubmission()

  const title = useMemo(() => (role === 'importer' ? 'Solicitud de arrastre para importador' : 'Onboarding de transportista'), [role])

  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: 24, fontFamily: 'system-ui' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <h1 style={{ margin: 0 }}>Arrástralo MVP</h1>
        <Link href="/landing">Ver landing comercial</Link>
      </div>
      <p>Sin intermediarios, comunicación directa con la línea de transporte.</p>

      <div style={{ marginBottom: 16 }}>
        <iframe
          title="OpenStreetMap Mexico"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-120.0%2C13.0%2C-85.0%2C33.0&layer=mapnik"
          style={{ width: '100%', height: 260, border: '1px solid #2a4269', borderRadius: 10 }}
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          mutation.mutate({ role, email, phone, city, port, haulDates, deliveryCity, fleetBaseCity, originStates, destinationStates, paymentTerms, pricingMode })
        }}
        style={{ display: 'grid', gap: 12 }}
      >
        <h2>{title}</h2>
        <label>Perfil
          <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
            <option value="importer">Importador</option>
            <option value="carrier">Transportista / Freight</option>
          </select>
        </label>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Celular<input required value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
        </div>

        <label>Ciudad<input required value={city} onChange={(e) => setCity(e.target.value)} /></label>

        {role === 'importer' ? (
          <>
            <label>Puerto
              <select value={port} onChange={(e) => setPort(e.target.value)}>{ports.map((p) => <option key={p}>{p}</option>)}</select>
            </label>
            <label>Días de arrastre (múltiples)</label>
            <MultiDate value={haulDates} onChange={setHaulDates} />
            <label>Ciudad de entrega<input value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} /></label>
          </>
        ) : (
          <>
            <label>Base de flotilla<input value={fleetBaseCity} onChange={(e) => setFleetBaseCity(e.target.value)} /></label>
            <label>Origen (estados)
              <select multiple value={originStates} onChange={(e) => setOriginStates(Array.from(e.target.selectedOptions).map((o) => o.value))}>
                {mxStates.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>Destino (estados)
              <select multiple value={destinationStates} onChange={(e) => setDestinationStates(Array.from(e.target.selectedOptions).map((o) => o.value))}>
                {mxStates.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>Términos de pago
              <select value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value as any)}>
                <option value="7_days">7 días</option><option value="15_days">15 días</option><option value="30_days">30 días</option><option value="immediate">Inmediato</option>
              </select>
            </label>
            <label>Modo de cotización
              <select value={pricingMode} onChange={(e) => setPricingMode(e.target.value as any)}>
                <option value="manual">Manual</option><option value="auto">Automática (preconfigurada)</option>
              </select>
            </label>
          </>
        )}

        <button type="submit" disabled={mutation.isPending}>{mutation.isPending ? 'Guardando...' : 'Solicita acceso'}</button>
        {mutation.isSuccess && <p>Recibirás tu usuario y contraseña en tu correo.</p>}
        {mutation.isError && <p style={{ color: 'crimson' }}>{(mutation.error as Error).message}</p>}
      </form>
    </main>
  )
}
