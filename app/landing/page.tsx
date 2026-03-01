import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bell, Clock, FileText, Gauge, Handshake, MapPin, Route, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const kpis = [
  { icon: Clock, label: 'Tiempo de cotización', value: 'Minutos' },
  { icon: Handshake, label: 'Canal', value: 'Directo' },
  { icon: Route, label: 'Operación', value: 'Centralizada' },
  { icon: Shield, label: 'Modelo', value: 'Sin intermediarios' },
]

const steps = [
  { n: '1', title: 'Solicita tu arrastre', desc: 'Selecciona puerto, fechas (múltiples días) y ciudad de entrega.' },
  { n: '2', title: 'Compara transportistas', desc: 'Filtra por precio, línea local, términos de pago, rapidez, reputación y reseñas validadas; o usa recomendación por IA.' },
  { n: '3', title: 'Elige y ejecuta', desc: 'Escoge la opción más conveniente para ti y listo.' },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-background/82 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Image src="/arrastralo-logo-transparent.png" alt="Arrástralo" width={240} height={76} className="w-[150px] sm:w-[190px] h-auto" />
          <Button variant="dark" size="sm" asChild>
            <Link href="/">
              Solicita acceso <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-12 bg-[radial-gradient(ellipse_700px_420px_at_0%_0%,rgba(194,65,12,.06),transparent),radial-gradient(ellipse_500px_320px_at_100%_60%,rgba(194,65,12,.04),transparent)]">
        <div className="max-w-[1100px] mx-auto grid gap-8 lg:grid-cols-[1.3fr_.7fr] items-start">
          <div className="animate-fade-up">
            <Badge variant="accent" className="mb-5 text-[11px] tracking-widest uppercase">
              Marketplace de Arrastre Portuario
            </Badge>
            <h1 className="font-display text-[clamp(2rem,5.5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground mb-4 sm:mb-5">
              Sin intermediarios<br />en arrastre portuario.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[620px] leading-relaxed">
              Publica una vez. Recibe varias ofertas. Reserva al instante.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-[650px] leading-relaxed">
              Arrástralo prioriza tu carga entre los transportistas que han indicado específicamente que desean esa ruta, tipo de equipo y puerto.
            </p>
            <ul className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc pl-5 space-y-1 max-w-[650px]">
              <li>Elige entre varias ofertas.</li>
              <li>Consulta el equipo y las certificaciones de cada transportista.</li>
              <li>Los transportistas reciben alertas instantáneas y responden rápidamente.</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button size="lg" asChild>
                <Link href="/">
                  Solicita acceso al piloto <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#como-funciona">Ver cómo funciona</a>
              </Button>
            </div>
          </div>

          <aside className="animate-fade-up-delay-1 bg-dark text-warm-50 rounded-lg p-6 sm:p-7 shadow-lg">
            <h3 className="font-display text-base sm:text-lg font-bold mb-4 tracking-tight">
              Todo en una sola plataforma
            </h3>
            <ul className="grid gap-3.5">
              {[
                [FileText, 'Documentos y facturación'],
                [MapPin, 'GPS y visibilidad operativa'],
                [Bell, 'Alertas por correo y WhatsApp'],
                [Route, 'Estatus de punta a punta'],
                [Gauge, 'Historial por proveedor y ruta'],
              ].map(([Icon, text]) => (
                <li key={text as string} className="flex items-center gap-3 text-sm text-warm-300">
                  <Icon size={15} className="text-[#fed7aa] shrink-0" />
                  {text as string}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ── KPIs ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-up-delay-2">
          {kpis.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="hover:shadow-md hover:border-warm-300">
              <CardContent className="p-4 sm:p-5">
                <Icon size={18} className="text-primary mb-2" />
                <span className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{label}</span>
                <strong className="block font-display text-xl sm:text-2xl font-extrabold tracking-tight mt-1">{value}</strong>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Steps ───────────────────────────────────── */}
      <section id="como-funciona" className="px-4 sm:px-6 py-12 sm:py-14 bg-card border-y border-border">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-extrabold tracking-tight mb-7">
            Arrástralo en 1, 2 por 3
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ n, title, desc }) => (
              <Card key={n} className="bg-background hover:shadow-sm hover:border-warm-300">
                <CardContent className="p-5 sm:p-6">
                  <span className="inline-grid place-items-center size-9 rounded-full bg-primary text-primary-foreground font-display text-sm font-extrabold mb-4">
                    {n}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold tracking-tight mb-1.5">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audiences ───────────────────────────────── */}
      <section className="px-4 sm:px-6 py-12 sm:py-14">
        <div className="max-w-[1100px] mx-auto grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'Para importadores',
              items: [
                'Sin intermediarios, comunicación directa con la línea de transporte',
                'Visibilidad en tiempo real con GPS',
                'Sube tus documentos y configura alertas por correo o WhatsApp',
                'Centraliza todo flujo del arrastre en una misma plataforma',
              ],
            },
            {
              title: 'Para transportistas',
              items: [
                'Más cargas recurrentes y menos tiempo ocioso',
                'Pago más rápido y trazable',
                'Facturación y documentación desde la app',
                'Badge de compañía local por desempeño',
              ],
            },
          ].map(({ title, items }) => (
            <Card key={title} className="hover:shadow-md hover:border-warm-300">
              <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {items.map((item) => (
                    <li key={item} className="relative pl-4 text-sm text-muted-foreground leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[7px] before:size-1.5 before:rounded-full before:bg-primary">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────── */}
      <section className="bg-dark px-4 sm:px-6 py-12 sm:py-14">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-warm-50 tracking-tight">
              ¿Listo para entrar al piloto?
            </h3>
            <p className="text-warm-400 mt-1.5 text-sm sm:text-base">
              Recibirás tu usuario y contraseña en tu correo.
            </p>
          </div>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/">
              Solicita acceso <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
