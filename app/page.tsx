'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useCreateSubmission } from '@/lib/hooks'
import type { Role } from '@/lib/types'
import { ArrowLeft, ArrowRight, Check, Truck, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ports = ['Manzanillo', 'Veracruz', 'Altamira', 'Lázaro Cárdenas']
const mxStates = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'Ciudad de México',
  'Coahuila',
  'Colima',
  'Durango',
  'Estado de México',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas'
]

const mxPorts = [
  'Manzanillo',
  'Lázaro Cárdenas',
  'Veracruz',
  'Altamira',
  'Ensenada',
  'Tuxpan',
  'Progreso',
  'Mazatlán',
  'Guaymas',
  'Topolobampo',
  'Salina Cruz',
  'Coatzacoalcos',
  'Tampico',
  'Puerto Chiapas',
  'Dos Bocas',
  'Acapulco'
]

function MultiDate({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [candidate, setCandidate] = useState('')
  return (
    <div>
      <div className="flex gap-2 items-center">
        <Input type="date" value={candidate} onChange={(e) => setCandidate(e.target.value)} />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0"
          onClick={() => candidate && !value.includes(candidate) && onChange([...value, candidate])}
        >
          Agregar
        </Button>
      </div>
      {value.length > 0 && (
        <div className="flex gap-1.5 flex-wrap mt-2">
          {value.map((d) => (
            <span key={d} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#fed7aa] bg-[#fff7ed] text-primary text-xs font-semibold">
              {d}
              <button type="button" className="text-primary/60 hover:text-primary transition-opacity" onClick={() => onChange(value.filter((x) => x !== d))}>
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function SelectField({ className = '', ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-[15px] text-foreground transition-colors focus-visible:outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/10 appearance-none bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a39e99' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")] bg-[position:right_12px_center] pr-8 ${className}`}
      {...props}
    />
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
  const [emptyReturnTo, setEmptyReturnTo] = useState<'Puerto' | 'Ciudad destino'>('Puerto')
  const [hazardousCargo, setHazardousCargo] = useState<'Si' | 'No'>('No')

  const [fleetBaseCity, setFleetBaseCity] = useState('')
  const [originStates, setOriginStates] = useState<string[]>([])
  const [destinationStates, setDestinationStates] = useState<string[]>([])
  const [paymentTerms, setPaymentTerms] = useState<'7_days' | '15_days' | '30_days' | 'immediate'>('15_days')


  const mutation = useCreateSubmission()
  const title = useMemo(
    () =>
      role === 'importer'
        ? 'Envia tu requerimiento a nuestra red seleccionada de transportistas, compara precios y selecciona la oferta más adecuada para tu operación'
        : 'Registro de transportista',
    [role]
  )

  const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const deliveryInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!mapsKey) return
    const g = (window as any).google
    if (!g?.maps?.places || !deliveryInputRef.current || role !== 'importer') return

    const autocomplete = new g.maps.places.Autocomplete(deliveryInputRef.current, {
      componentRestrictions: { country: 'mx' },
      fields: ['formatted_address', 'address_components'],
      types: ['geocode']
    })

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      const formatted = place?.formatted_address || deliveryInputRef.current?.value || ''
      setDeliveryCity(formatted)
    })
  }, [mapsKey, role])

  return (
    <main className="min-h-screen bg-background">
      {mapsKey && (
        <Script
          id="gmaps-places"
          src={`https://maps.googleapis.com/maps/api/js?key=${mapsKey}&libraries=places`}
          strategy="afterInteractive"
        />
      )}
      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="bg-background/82 backdrop-blur-xl border-b border-border">
        <div className="max-w-[620px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/landing" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Inicio
          </Link>
          <Image src="/arrastralo-logo-transparent.png" alt="Arrástralo" width={110} height={36} className="w-[90px] h-auto" />
        </div>
      </nav>

      {/* ── Form ────────────────────────────────────── */}
      <div className="max-w-[560px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-16 animate-fade-up">
        {/* Header */}
        <div className="mb-7">
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-2">
            {title}
          </h1>
          {role === 'carrier' && (
            <p className="text-sm sm:text-base text-muted-foreground">
              No te preocupes por vender, consigue viajes de inmediato y genera nuevos clientes.
            </p>
          )}
        </div>

        {/* Role toggle */}
        <div className="grid grid-cols-2 bg-warm-200 rounded-lg p-1 mb-7">
          <button
            type="button"
            className={`inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-[13px] font-semibold transition-all cursor-pointer ${
              role === 'importer'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setRole('importer')}
          >
            <Package size={15} /> Importador
          </button>
          <button
            type="button"
            className={`inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-[13px] font-semibold transition-all cursor-pointer ${
              role === 'carrier'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setRole('carrier')}
          >
            <Truck size={15} /> Transportista
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            mutation.mutate({ role, email, phone, city, port, haulDates, deliveryCity, emptyReturnTo, hazardousCargo, fleetBaseCity, originStates, destinationStates, paymentTerms })
          }}
        >
          {/* Contact section */}
          <div className="grid gap-4 pb-6 mb-6 border-b border-border">
            <h3 className="font-display text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Contacto</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@empresa.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Celular</Label>
                <Input
                  id="phone"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{10,15}"
                  title="Ingresa solo números (10 a 15 dígitos)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Ej. 8181234567"
                />
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="city">Ciudad</Label>
              <Input
                id="city"
                required
                pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,}"
                title="Ingresa solo letras y espacios"
                value={city}
                onChange={(e) => setCity(e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ ]/g, ''))}
                placeholder="Ej. Monterrey"
              />
            </div>
          </div>

          {/* Role-specific section */}
          {role === 'importer' ? (
            <div className="grid gap-4 pb-6 mb-6 border-b border-border">
              <h3 className="font-display text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Detalles de arrastre</h3>
              <div className="grid gap-1.5">
                <Label htmlFor="port">Puerto</Label>
                <SelectField id="port" value={port} onChange={(e) => setPort(e.target.value)}>
                  {ports.map((p) => <option key={p}>{p}</option>)}
                </SelectField>
              </div>
              <div className="grid gap-1.5">
                <Label>Fecha(s) tentantiva(s) cita de despacho en aduana</Label>
                <MultiDate value={haulDates} onChange={setHaulDates} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="deliveryCity">Codigo Postal entrega</Label>
                <Input id="deliveryCity" ref={deliveryInputRef} value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} placeholder="Ej: 66367 Santa Catarina" autoComplete="off" />
                {mapsKey ? (
                  <span className="text-xs text-muted-foreground">Autocompletado por Google (México)</span>
                ) : (
                  <span className="text-xs text-muted-foreground">Captura manual por código postal + ciudad</span>
                )}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="emptyReturnTo">Retorno de vacio</Label>
                <SelectField id="emptyReturnTo" value={emptyReturnTo} onChange={(e) => setEmptyReturnTo(e.target.value as 'Puerto' | 'Ciudad destino')}>
                  <option value="Puerto">Puerto</option>
                  <option value="Ciudad destino">Ciudad destino</option>
                </SelectField>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="hazardousCargo">Carga Peligrosa</Label>
                <SelectField id="hazardousCargo" value={hazardousCargo} onChange={(e) => setHazardousCargo(e.target.value as 'Si' | 'No')}>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </SelectField>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 pb-6 mb-6 border-b border-border">
              <h3 className="font-display text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Información de flotilla</h3>
              <div className="grid gap-1.5">
                <Label htmlFor="fleetBase">Base de flotilla</Label>
                <Input id="fleetBase" value={fleetBaseCity} onChange={(e) => setFleetBaseCity(e.target.value)} placeholder="Ej. Manzanillo" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="originStates">Puertos Origen</Label>
                  <select
                    id="originStates"
                    className="flex w-full rounded-md border border-input bg-card p-2 text-[15px] text-foreground min-h-[100px] focus-visible:outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/10"
                    multiple
                    value={originStates}
                    onChange={(e) => setOriginStates(Array.from(e.target.selectedOptions).map((o) => o.value))}
                  >
                    {mxPorts.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="destStates">Cobertura Destinos (Estados)</Label>
                  <select
                    id="destStates"
                    className="flex w-full rounded-md border border-input bg-card p-2 text-[15px] text-foreground min-h-[100px] focus-visible:outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/10"
                    multiple
                    value={destinationStates}
                    onChange={(e) => setDestinationStates(Array.from(e.target.selectedOptions).map((o) => o.value))}
                  >
                    {mxStates.map((st) => <option key={st}>{st}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="paymentTerms">Términos de pago</Label>
                  <SelectField id="paymentTerms" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value as typeof paymentTerms)}>
                    <option value="7_days">7 días</option>
                    <option value="15_days">15 días</option>
                    <option value="30_days">30 días</option>
                    <option value="immediate">Inmediato</option>
                  </SelectField>
                </div>

              </div>
            </div>
          )}

          {/* Map */}
          <div className="rounded-lg border border-border overflow-hidden mb-6">
            <iframe
              title="OpenStreetMap Mexico"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-120.0%2C13.0%2C-85.0%2C33.0&layer=mapnik"
              className="w-full h-[140px] sm:h-[180px] border-0 block opacity-85"
            />
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" disabled={mutation.isPending} className="w-full">
            {mutation.isPending ? 'Guardando...' : 'Solicita acceso'}
            {!mutation.isPending && <ArrowRight className="size-4" />}
          </Button>

          {mutation.isSuccess && (
            <div className="flex items-center gap-2 mt-4 px-4 py-3 rounded-md bg-success-light border border-[#bbf7d0] text-success text-sm font-medium">
              <Check size={16} /> Recibirás tu usuario y contraseña en tu correo.
            </div>
          )}
          {mutation.isError && (
            <p className="mt-4 px-4 py-3 rounded-md bg-[#fef2f2] border border-[#fecaca] text-destructive text-sm font-medium">
              {(mutation.error as Error).message}
            </p>
          )}
        </form>
      </div>
    </main>
  )
}
