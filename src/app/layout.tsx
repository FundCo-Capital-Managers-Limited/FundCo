import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://fundco.ng";
const SITE_NAME = "FundCo Capital Managers";
const DEFAULT_TITLE =
  "FundCo Capital Managers | Nigerian Alternative Asset Manager";
const DEFAULT_DESCRIPTION =
  "FundCo is a specialized alternative asset manager mobilizing and investing local capital in real assets that lead the transition to a low-carbon economy across Nigeria's clean energy, affordable housing, and agriculture sectors.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | FundCo Capital Managers",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "alternative asset management Nigeria",
    "FundCo Capital Managers",
    "clean energy investment Nigeria",
    "affordable housing fund Nigeria",
    "agriculture investment Nigeria",
    "low-carbon economy investing",
    "blended finance Nigeria",
    "SEC registered fund manager Nigeria",
    "institutional infrastructure investment",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FundCo Capital Managers",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/fundco-logo-deep.png`,
  description: DEFAULT_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
