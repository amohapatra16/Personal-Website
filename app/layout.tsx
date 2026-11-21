import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://anishamohapatra.com"),
  title: {
    default: "Anisha Mohapatra",
    template: "%s · Anisha Mohapatra",
  },
  description: "Personal website, writings, schemes, and archives.",
  openGraph: {
    title: "Anisha Mohapatra",
    description: "Personal website, writings, schemes, and archives.",
    url: "https://anishamohapatra.com",
    siteName: "Anisha Mohapatra",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f7f6f2] text-[#261d11] min-h-screen antialiased selection:bg-[#f2b705]/30">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
