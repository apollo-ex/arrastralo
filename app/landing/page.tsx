import Link from 'next/link'

const styles = {
  page: {
    background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
    minHeight: '100vh',
    fontFamily: 'Inter, ui-sans-serif, system-ui'
  } as React.CSSProperties,
  shell: { maxWidth: 1100, margin: '0 auto', padding: 24 } as React.CSSProperties,
  card: {
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: 16,
    boxShadow: '0 8px 30px rgba(2,6,23,.06)'
  } as React.CSSProperties,
  muted: { color: '#4b5563' } as React.CSSProperties,
  h1: { margin: 0, fontSize: 52, letterSpacing: '-0.03em', lineHeight: 1.04 } as React.CSSProperties,
  h2: { margin: 0, fontSize: 30, letterSpacing: '-0.02em' } as React.CSSProperties,
  pill: {
    display: 'inline-block',
    padding: '6px 10px',
    borderRadius: 999,
    border: '1px solid #d1d5db',
    fontSize: 12,
    fontWeight: 700,
    background: '#f9fafb'
  } as React.CSSProperties,
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    background: 'linear-gradient(90deg,#0f172a,#1e293b)',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 700
  } as React.CSSProperties,
  ctaLight: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    border: '1px solid #cbd5e1',
    background: '#fff',
    color: '#0f172a',
    textDecoration: 'none',
    fontWeight: 700
  } as React.CSSProperties
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ ...styles.card, padding: 14 }}>
      <div style={{ color: '#6b7280', fontSize: 12, fontWeight: 700 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>{value}</div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <main style={styles.page}>
      <div style={styles.shell}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={styles.pill}>Arrástralo • Marketplace de Arrastre Portuario</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/landing/classic">Versión clásica</Link>
            <Link href="/" style={styles.ctaLight}>Ir al MVP operativo</Link>
          </div>
        </header>

        <section style={{ ...styles.card, padding: 26, marginBottom: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 16 }}>
            <div>
              <h1 style={styles.h1}>Sin intermediarios en arrastre portuario.</h1>
              <p style={{ ...styles.muted, fontSize: 20, marginTop: 10 }}>
                Comunicación directa con la línea de transporte, cotización rápida y operación completa en una sola plataforma.
              </p>
              <p style={{ ...styles.muted, marginTop: 8 }}>
                <b>Arrástralo:</b> menos fricción, más ejecución.
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <Link href="/" style={styles.cta}>Solicita acceso al piloto</Link>
                <a href="#como-funciona" style={styles.ctaLight}>Ver cómo funciona</a>
              </div>
            </div>
            <div style={{ ...styles.card, padding: 16, background: '#0f172a', color: '#fff' }}>
              <div style={{ fontWeight: 800, fontSize: 18 }}>Todo en una sola plataforma</div>
              <ul style={{ lineHeight: 1.7, marginTop: 10, color: '#cbd5e1' }}>
                <li>Documentos y facturación</li>
                <li>GPS y visibilidad operativa</li>
                <li>Alertas por correo y WhatsApp</li>
                <li>Estatus de punta a punta</li>
                <li>Historial por proveedor y ruta</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 14 }}>
          <Kpi label="Tiempo de cotización" value="Minutos" />
          <Kpi label="Canal" value="Directo" />
          <Kpi label="Operación" value="Centralizada" />
          <Kpi label="Modelo" value="Sin intermediarios" />
        </section>

        <section id="como-funciona" style={{ ...styles.card, padding: 22, marginBottom: 14 }}>
          <h2 style={styles.h2}>Arrástralo en 1, 2 por 3</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 12 }}>
            <div style={{ ...styles.card, padding: 14 }}>
              <div style={styles.pill}>1</div>
              <h3>Solicita tu arrastre</h3>
              <p style={styles.muted}>Selecciona puerto, fechas (múltiples días) y ciudad de entrega.</p>
            </div>
            <div style={{ ...styles.card, padding: 14 }}>
              <div style={styles.pill}>2</div>
              <h3>Compara transportistas</h3>
              <p style={styles.muted}>Filtra por precio, línea local, términos de pago, rapidez, reputación y reseñas validadas. O usa recomendación por IA.</p>
            </div>
            <div style={{ ...styles.card, padding: 14 }}>
              <div style={styles.pill}>3</div>
              <h3>Elige y ejecuta</h3>
              <p style={styles.muted}>Escoge la opción más conveniente para ti y listo.</p>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
          <article style={{ ...styles.card, padding: 18 }}>
            <h2 style={{ ...styles.h2, fontSize: 26 }}>Para importadores</h2>
            <ul style={{ lineHeight: 1.7 }}>
              <li>Sin intermediarios, comunicación directa con la línea de transporte</li>
              <li>Visibilidad en tiempo real con GPS</li>
              <li>Sube tus documentos y configura alertas por correo o WhatsApp</li>
              <li>Centraliza todo flujo del arrastre en una misma plataforma</li>
            </ul>
          </article>
          <article style={{ ...styles.card, padding: 18 }}>
            <h2 style={{ ...styles.h2, fontSize: 26 }}>Para transportistas</h2>
            <ul style={{ lineHeight: 1.7 }}>
              <li>Más cargas recurrentes y menos tiempo ocioso</li>
              <li>Pago más rápido y trazable</li>
              <li>Facturación y documentación desde la app</li>
              <li>Badge de compañía local por desempeño</li>
            </ul>
          </article>
        </section>

        <section style={{ ...styles.card, padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ margin: 0 }}>¿Listo para entrar al piloto?</h3>
            <p style={{ ...styles.muted, margin: '6px 0 0' }}>Recibirás tu usuario y contraseña en tu correo.</p>
          </div>
          <Link href="/" style={styles.cta}>Solicita acceso</Link>
        </section>
      </div>
    </main>
  )
}
