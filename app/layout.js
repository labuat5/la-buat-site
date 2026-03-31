export const metadata = {
  title: "La Buàt | Bologna",
  description: "Colazioni, pranzo a buffet, pizza e apericena a Bologna",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
