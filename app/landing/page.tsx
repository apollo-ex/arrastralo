import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bell, Clock, FileText, Gauge, Handshake, MapPin, Route, Shield } from 'lucide-react'
import s from './landing.module.css'

export default function LandingPage() {
  return (
    <main className={s.page}>
      {/* Nav */}
      <nav className={s.nav}>
        <div className={s.navInner}>
          <Image src="/arrastralo-logo-transparent.png" alt="Arrástralo" width={140} height={44} className={s.logo} />
          <Link href="/" className={s.navCta}>
            Solicita acceso <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <span className={s.badge}>Marketplace de Arrastre Portuario</span>
            <h1 className={s.h1}>
              Sin intermediarios<br />en arrastre portuario.
            </h1>
            <p className={s.heroLead}>
              Comunicación directa con la línea de transporte, cotización rápida
              y operación completa en una sola plataforma.
            </p>
            <p className={s.heroTagline}>
              <strong>Arrástralo:</strong> menos fricción, más ejecución.
            </p>
            <div className={s.heroCtas}>
              <Link href="/" className={s.btnPrimary}>
                Solicita acceso al piloto <ArrowRight size={15} />
              </Link>
              <a href="#como-funciona" className={s.btnSecondary}>Ver cómo funciona</a>
            </div>
          </div>

          <aside className={s.heroAside}>
            <h3 className={s.asideTitle}>Todo en una sola plataforma</h3>
            <ul className={s.asideList}>
              <li><FileText size={15} /> Documentos y facturación</li>
              <li><MapPin size={15} /> GPS y visibilidad operativa</li>
              <li><Bell size={15} /> Alertas por correo y WhatsApp</li>
              <li><Route size={15} /> Estatus de punta a punta</li>
              <li><Gauge size={15} /> Historial por proveedor y ruta</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* KPIs */}
      <section className={s.kpis}>
        <div className={s.kpisInner}>
          {[
            { icon: Clock, label: 'Tiempo de cotización', value: 'Minutos' },
            { icon: Handshake, label: 'Canal', value: 'Directo' },
            { icon: Route, label: 'Operación', value: 'Centralizada' },
            { icon: Shield, label: 'Modelo', value: 'Sin intermediarios' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className={s.kpi}>
              <Icon size={18} className={s.kpiIcon} />
              <span className={s.kpiLabel}>{label}</span>
              <strong className={s.kpiValue}>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section id="como-funciona" className={s.steps}>
        <div className={s.stepsInner}>
          <h2 className={s.h2}>Arrástralo en 1, 2 por 3</h2>
          <div className={s.stepsGrid}>
            {[
              { n: '1', title: 'Solicita tu arrastre', desc: 'Selecciona puerto, fechas (múltiples días) y ciudad de entrega.' },
              { n: '2', title: 'Compara transportistas', desc: 'Filtra por precio, línea local, términos de pago, rapidez, reputación y reseñas validadas; o usa recomendación por IA.' },
              { n: '3', title: 'Elige y ejecuta', desc: 'Escoge la opción más conveniente para ti y listo.' },
            ].map(({ n, title, desc }) => (
              <article key={n} className={s.stepCard}>
                <span className={s.stepNum}>{n}</span>
                <h4 className={s.stepTitle}>{title}</h4>
                <p className={s.stepDesc}>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className={s.audiences}>
        <div className={s.audiencesInner}>
          <article className={s.audienceCard}>
            <h3 className={s.audienceTitle}>Para importadores</h3>
            <ul className={s.audienceList}>
              <li>Sin intermediarios, comunicación directa con la línea de transporte</li>
              <li>Visibilidad en tiempo real con GPS</li>
              <li>Sube tus documentos y configura alertas por correo o WhatsApp</li>
              <li>Centraliza todo flujo del arrastre en una misma plataforma</li>
            </ul>
          </article>
          <article className={s.audienceCard}>
            <h3 className={s.audienceTitle}>Para transportistas</h3>
            <ul className={s.audienceList}>
              <li>Más cargas recurrentes y menos tiempo ocioso</li>
              <li>Pago más rápido y trazable</li>
              <li>Facturación y documentación desde la app</li>
              <li>Badge de compañía local por desempeño</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Final CTA */}
      <section className={s.finalCta}>
        <div className={s.finalCtaInner}>
          <div>
            <h3 className={s.finalCtaTitle}>¿Listo para entrar al piloto?</h3>
            <p className={s.finalCtaDesc}>Recibirás tu usuario y contraseña en tu correo.</p>
          </div>
          <Link href="/" className={s.btnPrimary}>
            Solicita acceso <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
