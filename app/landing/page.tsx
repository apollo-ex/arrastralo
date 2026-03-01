import Link from 'next/link'
import s from './landing.module.css'

export default function LandingPage() {
  return (
    <main className={s.page}>
      <div className={s.shell}>
        <header className={s.topbar}>
          <span className={s.pill}>Arrástralo • Marketplace de Arrastre Portuario</span>
          <div className={s.toplinks}>
            <Link href="/" className={`${s.btn} ${s.secondary}`}>Solicita acceso</Link>
          </div>
        </header>

        <section className={`${s.card} ${s.hero}`}>
          <div>
            <h1 className={s.title}>Sin intermediarios en arrastre portuario.</h1>
            <p className={s.lead}>Comunicación directa con la línea de transporte, cotización rápida y operación completa en una sola plataforma.</p>
            <p className={s.tagline}><b>Arrástralo:</b> menos fricción, más ejecución.</p>
            <div className={s.ctaRow}>
              <Link href="/" className={`${s.btn} ${s.primary}`}>Solicita acceso al piloto</Link>
              <a href="#como-funciona" className={`${s.btn} ${s.secondary}`}>Ver cómo funciona</a>
            </div>
          </div>
          <aside className={s.darkPanel}>
            <h3>Todo en una sola plataforma</h3>
            <ul>
              <li>📄 Documentos y facturación</li>
              <li>📍 GPS y visibilidad operativa</li>
              <li>🔔 Alertas por correo y WhatsApp</li>
              <li>🔄 Estatus de punta a punta</li>
              <li>📊 Historial por proveedor y ruta</li>
            </ul>
          </aside>
        </section>

        <section className={s.kpis}>
          <div className={s.kpi}><small>⏱ Tiempo de cotización</small><strong>Minutos</strong></div>
          <div className={s.kpi}><small>🤝 Canal</small><strong>Directo</strong></div>
          <div className={s.kpi}><small>🧭 Operación</small><strong>Centralizada</strong></div>
          <div className={s.kpi}><small>✅ Modelo</small><strong>Sin intermediarios</strong></div>
        </section>

        <section id="como-funciona" className={s.card}>
          <h2 className={s.h2}>Arrástralo en 1, 2 por 3</h2>
          <div className={s.steps}>
            <article className={s.step}><span className={s.num}>1</span><h4>Solicita tu arrastre</h4><p>Selecciona puerto, fechas (múltiples días) y ciudad de entrega.</p></article>
            <article className={s.step}><span className={s.num}>2</span><h4>Compara transportistas</h4><p>Filtra por precio, línea local, términos de pago, rapidez, reputación y reseñas validadas; o usa recomendación por IA.</p></article>
            <article className={s.step}><span className={s.num}>3</span><h4>Elige y ejecuta</h4><p>Escoge la opción más conveniente para ti y listo.</p></article>
          </div>
        </section>

        <section className={s.twoCols}>
          <article className={s.card}>
            <h3>Para importadores</h3>
            <ul>
              <li>Sin intermediarios, comunicación directa con la línea de transporte</li>
              <li>Visibilidad en tiempo real con GPS</li>
              <li>Sube tus documentos y configura alertas por correo o WhatsApp</li>
              <li>Centraliza todo flujo del arrastre en una misma plataforma</li>
            </ul>
          </article>
          <article className={s.card}>
            <h3>Para transportistas</h3>
            <ul>
              <li>Más cargas recurrentes y menos tiempo ocioso</li>
              <li>Pago más rápido y trazable</li>
              <li>Facturación y documentación desde la app</li>
              <li>Badge de compañía local por desempeño</li>
            </ul>
          </article>
        </section>

        <section className={`${s.card} ${s.finalCta}`}>
          <div>
            <h3>¿Listo para entrar al piloto?</h3>
            <p>Recibirás tu usuario y contraseña en tu correo.</p>
          </div>
          <Link href="/" className={`${s.btn} ${s.primary}`}>Solicita acceso</Link>
        </section>
      </div>
    </main>
  )
}
