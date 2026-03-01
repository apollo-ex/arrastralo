import Providers from './providers'
export const metadata = { title: 'Arrástralo MVP', description: 'Ingesta de solicitudes' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><Providers>{children}</Providers></body></html>
}
