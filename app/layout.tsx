import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import type { Viewport } from "next";
import { Footerbar } from "@/components/footer-bar";
import { siteConfig } from "@/config/site";

export const fontSans = FontSans({
  subsets: ["latin", "greek", "cyrillic", "latin-ext"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteName,
    template: `%s - ${siteConfig.siteName}`,
  },
  applicationName: siteConfig.appName,
  description: siteConfig.description,
  referrer: "origin-when-cross-origin",
  keywords: [siteConfig.appName, "telemed"],
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "550x550" }],
    shortcut: [{ url: siteConfig.logos.png, sizes: "550x550" }],
    apple: [{ url: siteConfig.logos.png, sizes: "550x550" }],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        style={{
          background:
            "var(rgba(0, 0, 0, 0.15) 0 0 0 1px inset, radial-gradient(ellipse at 40% 0%, #bf398910 0, transparent 75%), radial-gradient(ellipse at 60% 0%, #096bde10 0, transparent 75%))",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <div className="relative flex min-h-screen flex-col max-w-screen-2xl">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Footerbar />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
