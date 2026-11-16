import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Öğrenci & Öğretmen Akıllı Tahtam | İnteraktif İlkokul Platformu",
  description:
    "1, 2, 3 ve 4. sınıflar için MEB Maarif Modeline tam uyumlu, akıllı tahta dostu, kapsayıcı ve interaktif eğitsel oyunlar ve etkinlikler portalı.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased selection:bg-amber-200">
        {children}
      </body>
    </html>
  );
}
