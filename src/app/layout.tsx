import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Nourain",
  description: "Innovative solutions for signage, HVAC",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Note: since this is the root layout, we assume params is available as a plain object
// Adjust if needed—but using synchronous params avoids the need to await.
function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale || "en";
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <head>
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
