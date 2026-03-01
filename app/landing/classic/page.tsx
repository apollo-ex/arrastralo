import Link from 'next/link'

export default function LandingPage() {
  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: 24, fontFamily: 'system-ui' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Arrástralo</h1>
        <Link href="/">Solicita acceso</Link>
      </div>
      <p><b>Arrástralo: menos fricción, más ejecución.</b></p>
      <p>Sin intermediarios, comunicación directa con la línea de transporte.</p>

      <section style={{ border: '1px solid #ddd', borderRadius: 10, padding: 16, marginTop: 12 }}>
        <h2>Arrástralo en 1, 2 por 3</h2>
        <ol>
          <li>Solicita tu arrastre.</li>
          <li>
            Revisa y compara a los transportistas; filtra por precio, línea local, términos de pago,
            servicio, rapidez, reputación y reseñas validadas, o confía en la recomendación sugerida
            con base en tu historial y nuestro algoritmo de IA.
          </li>
          <li>Escoge al transporte más conveniente para ti y listo.</li>
        </ol>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
        <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: 16 }}>
          <h3>Para importadores</h3>
          <ul>
            <li>Sin intermediarios, comunicación directa con la línea de transporte</li>
            <li>Cotizaciones en minutos</li>
            <li>Visibilidad en tiempo real con GPS</li>
            <li>Sube tus documentos, asegura la carga, configura y comparte alertas por correo o WhatsApp</li>
          </ul>
        </div>
        <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: 16 }}>
          <h3>Para transportistas</h3>
          <ul>
            <li>Más cargas recurrentes y menos tiempo ocioso</li>
            <li>Pago más rápido y trazable</li>
            <li>Carga documental y facturación desde la app</li>
            <li>Badge de compañía local por desempeño</li>
          </ul>
        </div>
      </section>

      <section style={{ border: '1px solid #ddd', borderRadius: 10, padding: 16, marginTop: 12 }}>
        <h3>Solicita acceso al piloto</h3>
        <p>Recibirás tu usuario y contraseña en tu correo.</p>
        <Link href="/">Completar formulario ahora</Link>
      </section>
    </main>
  )
}
