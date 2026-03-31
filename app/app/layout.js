export const metadata = {
  title: "La Buàt",
  description: "Colazioni, buffet, pizza e apericena a Bologna"
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
