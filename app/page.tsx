'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useCreateSubmission } from '@/lib/hooks'
import type { Role } from '@/lib/types'
import s from './mvp.module.css'

const ports = ['Manzanillo', 'Veracruz', 'Altamira', 'Lázaro Cárdenas']
const mxStates = ['Colima', 'Jalisco', 'Nuevo León', 'CDMX', 'Puebla', 'Querétaro', 'EdoMex', 'Veracruz']

function MultiDate({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [candidate, setCandidate] = useState('')
  return (
    <div>
      <div className={s.multiWrap}>
        <input className={s.input} type="date" value={candidate} onChange={(e) => setCandidate(e.target.value)} />
        <button className={s.buttonSmall} type="button" onClick={() => candidate && !value.includes(candidate) && onChange([...value, candidate])}>Agregar fecha</button>
      </div>
      <div className={s.chips}>
        {value.map((d) => (
          <span key={d} className={s.chip}>{d} <button type="button" className={s.chipBtn} onClick={() => onChange(value.filter((x) => x !== d))}>×</button></span>
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
    <main className={s.page}>
      <div className={s.shell}>
        <div className={s.top}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <Image src="/arrastralo-logo-transparent.png" alt="Arrástralo" width={150} height={48} style={{width:130,height:'auto'}} />
          </div>
          <Link className={s.link} href="/landing">Conoce cómo funciona</Link>
        </div>
        <p className={s.sub}>Sin intermediarios, comunicación directa con la línea de transporte.</p>

        <div className={s.mapWrap}>
          <iframe
            title="OpenStreetMap Mexico"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-120.0%2C13.0%2C-85.0%2C33.0&layer=mapnik"
            className={s.map}
          />
        </div>

        <form
          className={s.card}
          onSubmit={(e) => {
            e.preventDefault()
            mutation.mutate({ role, email, phone, city, port, haulDates, deliveryCity, fleetBaseCity, originStates, destinationStates, paymentTerms, pricingMode })
          }}
          style={{ display: 'grid', gap: 12 }}
        >
          <h2 className={s.title}>{title}</h2>

          <label className={s.label}>Perfil
            <select className={s.select} value={role} onChange={(e) => setRole(e.target.value as Role)}>
              <option value="importer">Importador</option>
              <option value="carrier">Transportista / Freight</option>
            </select>
          </label>

          <div className={s.grid2}>
            <label className={s.label}>Email<input className={s.input} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <label className={s.label}>Celular<input className={s.input} required value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
          </div>

          <label className={s.label}>Ciudad<input className={s.input} required value={city} onChange={(e) => setCity(e.target.value)} /></label>

          {role === 'importer' ? (
            <>
              <label className={s.label}>Puerto
                <select className={s.select} value={port} onChange={(e) => setPort(e.target.value)}>{ports.map((p) => <option key={p}>{p}</option>)}</select>
              </label>
              <label className={s.label}>Días de arrastre (múltiples)</label>
              <MultiDate value={haulDates} onChange={setHaulDates} />
              <label className={s.label}>Ciudad de entrega<input className={s.input} value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} /></label>
            </>
          ) : (
            <>
              <label className={s.label}>Base de flotilla<input className={s.input} value={fleetBaseCity} onChange={(e) => setFleetBaseCity(e.target.value)} /></label>
              <label className={s.label}>Origen (estados)
                <select className={`${s.select} ${s.states}`} multiple value={originStates} onChange={(e) => setOriginStates(Array.from(e.target.selectedOptions).map((o) => o.value))}>
                  {mxStates.map((st) => <option key={st}>{st}</option>)}
                </select>
              </label>
              <label className={s.label}>Destino (estados)
                <select className={`${s.select} ${s.states}`} multiple value={destinationStates} onChange={(e) => setDestinationStates(Array.from(e.target.selectedOptions).map((o) => o.value))}>
                  {mxStates.map((st) => <option key={st}>{st}</option>)}
                </select>
              </label>
              <div className={s.grid2}>
                <label className={s.label}>Términos de pago
                  <select className={s.select} value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value as any)}>
                    <option value="7_days">7 días</option><option value="15_days">15 días</option><option value="30_days">30 días</option><option value="immediate">Inmediato</option>
                  </select>
                </label>
                <label className={s.label}>Modo de cotización
                  <select className={s.select} value={pricingMode} onChange={(e) => setPricingMode(e.target.value as any)}>
                    <option value="manual">Manual</option><option value="auto">Automática</option>
                  </select>
                </label>
              </div>
            </>
          )}

          <button className={s.button} type="submit" disabled={mutation.isPending}>{mutation.isPending ? 'Guardando...' : 'Solicita acceso'}</button>
          {mutation.isSuccess && <p className={s.note}>Recibirás tu usuario y contraseña en tu correo.</p>}
          {mutation.isError && <p className={s.err}>{(mutation.error as Error).message}</p>}
        </form>
      </div>
    </main>
  )
}
