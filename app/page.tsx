'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useCreateSubmission } from '@/lib/hooks'
import type { Role } from '@/lib/types'
import { ArrowLeft, ArrowRight, Check, Truck, Package } from 'lucide-react'
import s from './mvp.module.css'

const ports = ['Manzanillo', 'Veracruz', 'Altamira', 'Lázaro Cárdenas']
const mxStates = ['Colima', 'Jalisco', 'Nuevo León', 'CDMX', 'Puebla', 'Querétaro', 'EdoMex', 'Veracruz']

function MultiDate({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [candidate, setCandidate] = useState('')
  return (
    <div>
      <div className={s.multiWrap}>
        <input className={s.input} type="date" value={candidate} onChange={(e) => setCandidate(e.target.value)} />
        <button className={s.btnAdd} type="button" onClick={() => candidate && !value.includes(candidate) && onChange([...value, candidate])}>
          Agregar
        </button>
      </div>
      {value.length > 0 && (
        <div className={s.chips}>
          {value.map((d) => (
            <span key={d} className={s.chip}>
              {d}
              <button type="button" className={s.chipBtn} onClick={() => onChange(value.filter((x) => x !== d))}>×</button>
            </span>
          ))}
        </div>
      )}
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
  const title = useMemo(() => (role === 'importer' ? 'Solicitud de arrastre' : 'Registro de transportista'), [role])

  return (
    <main className={s.page}>
      <nav className={s.nav}>
        <div className={s.navInner}>
          <Link href="/landing" className={s.backLink}>
            <ArrowLeft size={14} /> Inicio
          </Link>
          <Image src="/arrastralo-logo-transparent.png" alt="Arrástralo" width={110} height={36} className={s.logo} />
        </div>
      </nav>

      <div className={s.container}>
        <div className={s.formHeader}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.subtitle}>Sin intermediarios, comunicación directa con la línea de transporte.</p>
        </div>

        <div className={s.roleToggle}>
          <button
            type="button"
            className={`${s.roleBtn} ${role === 'importer' ? s.roleBtnActive : ''}`}
            onClick={() => setRole('importer')}
          >
            <Package size={15} /> Importador
          </button>
          <button
            type="button"
            className={`${s.roleBtn} ${role === 'carrier' ? s.roleBtnActive : ''}`}
            onClick={() => setRole('carrier')}
          >
            <Truck size={15} /> Transportista
          </button>
        </div>

        <form
          className={s.form}
          onSubmit={(e) => {
            e.preventDefault()
            mutation.mutate({ role, email, phone, city, port, haulDates, deliveryCity, fleetBaseCity, originStates, destinationStates, paymentTerms, pricingMode })
          }}
        >
          <div className={s.section}>
            <h3 className={s.sectionTitle}>Contacto</h3>
            <div className={s.grid2}>
              <label className={s.label}>
                <span className={s.labelText}>Email</span>
                <input className={s.input} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@empresa.com" />
              </label>
              <label className={s.label}>
                <span className={s.labelText}>Celular</span>
                <input className={s.input} required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+52 ..." />
              </label>
            </div>
            <label className={s.label}>
              <span className={s.labelText}>Ciudad</span>
              <input className={s.input} required value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ej. Monterrey" />
            </label>
          </div>

          {role === 'importer' ? (
            <div className={s.section}>
              <h3 className={s.sectionTitle}>Detalles de arrastre</h3>
              <label className={s.label}>
                <span className={s.labelText}>Puerto</span>
                <select className={s.select} value={port} onChange={(e) => setPort(e.target.value)}>
                  {ports.map((p) => <option key={p}>{p}</option>)}
                </select>
              </label>
              <label className={s.label}>
                <span className={s.labelText}>Días de arrastre</span>
              </label>
              <MultiDate value={haulDates} onChange={setHaulDates} />
              <label className={s.label}>
                <span className={s.labelText}>Ciudad de entrega</span>
                <input className={s.input} value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} placeholder="Ej. Guadalajara" />
              </label>
            </div>
          ) : (
            <div className={s.section}>
              <h3 className={s.sectionTitle}>Información de flotilla</h3>
              <label className={s.label}>
                <span className={s.labelText}>Base de flotilla</span>
                <input className={s.input} value={fleetBaseCity} onChange={(e) => setFleetBaseCity(e.target.value)} placeholder="Ej. Manzanillo" />
              </label>
              <div className={s.grid2}>
                <label className={s.label}>
                  <span className={s.labelText}>Origen (estados)</span>
                  <select className={`${s.select} ${s.selectMulti}`} multiple value={originStates} onChange={(e) => setOriginStates(Array.from(e.target.selectedOptions).map((o) => o.value))}>
                    {mxStates.map((st) => <option key={st}>{st}</option>)}
                  </select>
                </label>
                <label className={s.label}>
                  <span className={s.labelText}>Destino (estados)</span>
                  <select className={`${s.select} ${s.selectMulti}`} multiple value={destinationStates} onChange={(e) => setDestinationStates(Array.from(e.target.selectedOptions).map((o) => o.value))}>
                    {mxStates.map((st) => <option key={st}>{st}</option>)}
                  </select>
                </label>
              </div>
              <div className={s.grid2}>
                <label className={s.label}>
                  <span className={s.labelText}>Términos de pago</span>
                  <select className={s.select} value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value as any)}>
                    <option value="7_days">7 días</option>
                    <option value="15_days">15 días</option>
                    <option value="30_days">30 días</option>
                    <option value="immediate">Inmediato</option>
                  </select>
                </label>
                <label className={s.label}>
                  <span className={s.labelText}>Modo de cotización</span>
                  <select className={s.select} value={pricingMode} onChange={(e) => setPricingMode(e.target.value as any)}>
                    <option value="manual">Manual</option>
                    <option value="auto">Automática</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          <div className={s.mapWrap}>
            <iframe
              title="OpenStreetMap Mexico"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-120.0%2C13.0%2C-85.0%2C33.0&layer=mapnik"
              className={s.map}
            />
          </div>

          <button className={s.submitBtn} type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Guardando...' : 'Solicita acceso'}
            {!mutation.isPending && <ArrowRight size={15} />}
          </button>

          {mutation.isSuccess && (
            <div className={s.success}>
              <Check size={16} /> Recibirás tu usuario y contraseña en tu correo.
            </div>
          )}
          {mutation.isError && (
            <p className={s.error}>{(mutation.error as Error).message}</p>
          )}
        </form>
      </div>
    </main>
  )
}
