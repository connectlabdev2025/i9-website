import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I9 Software | Tecnologia e Compliance para Cartórios",
  description: "Tranquilidade Jurídica e Tecnologia para o seu Cartório. Adequação ao Provimento 74/149 do CNJ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
