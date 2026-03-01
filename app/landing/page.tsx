import Link from 'next/link'

const card = {
  border: '1px solid hsl(240 6% 90%)',
  borderRadius: 14,
  padding: 18,
  background: 'white',
  boxShadow: '0 1px 2px rgba(0,0,0,.04)'
}

export default function LandingPage() {
  return (
    <main style={{ background: 'hsl(210 20% 98%)', minHeight: '100vh', fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: 20 }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 40, letterSpacing: '-0.02em' }}>Arrástralo</h1>
            <p style={{ margin: '6px 0 0', color: '#4b5563' }}>Menos fricción, más ejecución.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/landing/classic">Versión clásica</Link>
            <Link href="/">Ir al MVP operativo</Link>
          </div>
        </header>

        <section style={{ ...card, background: 'linear-gradient(180deg,#ffffff,#f8fafc)', marginBottom: 12 }}>
          <h2 style={{ marginTop: 0 }}>Sin intermediarios, comunicación directa con la línea de transporte</h2>
          <p style={{ color: '#374151', marginTop: 8 }}>
            Plataforma para coordinar arrastres de puerto a almacén y retorno de vacío en un solo flujo.
            Cotiza rápido, compara opciones y ejecuta con visibilidad completa.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10, marginTop: 12 }}>
            <div style={card}><b>Cotizaciones rápidas</b><p style={{ marginBottom: 0, color: '#6b7280' }}>Recibe y compara opciones en minutos.</p></div>
            <div style={card}><b>Operación centralizada</b><p style={{ marginBottom: 0, color: '#6b7280' }}>Docs, alertas, GPS y comunicación en un mismo lugar.</p></div>
            <div style={card}><b>Decisión con confianza</b><p style={{ marginBottom: 0, color: '#6b7280' }}>Filtra por precio, línea local, pagos, rapidez y reputación.</p></div>
          </div>
        </section>

        <section style={{ ...card, marginBottom: 12 }}>
          <h3 style={{ marginTop: 0, fontSize: 28 }}>Arrástralo en 1, 2 por 3</h3>
          <ol style={{ color: '#111827', lineHeight: 1.6, paddingLeft: 20 }}>
            <li><b>Solicita tu arrastre.</b></li>
            <li>
              <b>Revisa y compara transportistas:</b> filtra por precio, línea local, términos de pago,
              servicio, rapidez, reputación y reseñas validadas; o usa la recomendación sugerida por IA según tu historial.
            </li>
            <li><b>Escoge al transporte más conveniente para ti y listo.</b></li>
          </ol>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <article style={card}>
            <h4 style={{ marginTop: 0, fontSize: 24 }}>Para importadores</h4>
            <ul style={{ lineHeight: 1.55, color: '#111827' }}>
              <li>Sin intermediarios, comunicación directa con la línea de transporte</li>
              <li>Visibilidad en tiempo real con GPS</li>
              <li>Sube documentos y configura alertas por correo o WhatsApp</li>
              <li>Centraliza todo el flujo del arrastre en una sola plataforma</li>
            </ul>
          </article>
          <article style={card}>
            <h4 style={{ marginTop: 0, fontSize: 24 }}>Para transportistas</h4>
            <ul style={{ lineHeight: 1.55, color: '#111827' }}>
              <li>Más cargas recurrentes y menos tiempo ocioso</li>
              <li>Pago más rápido y trazable</li>
              <li>Facturación y documentación desde la app</li>
              <li>Badge de compañía local por desempeño</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  )
}
