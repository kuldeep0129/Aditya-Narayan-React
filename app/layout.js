import './globals.css';
import { Navbar, BottomBar } from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/data';

export const metadata = {
  title: { default: SITE.name + ' – पूजा, पंचांग व मुहूर्त', template: '%s | ' + SITE.short },
  description: 'वैदिक पूजा, कुंडली, विवाह व गृह-प्रवेश मुहूर्त, दैनिक पंचांग और त्योहार कैलेंडर।',
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#12061f' };

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Yatra+One&family=Mukta:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="orbs" aria-hidden="true"><i /><i /><i /></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BottomBar />
        <a className="wa" href={'https://wa.me/' + SITE.wa} aria-label="WhatsApp पर संपर्क करें">💬</a>
      </body>
    </html>
  );
}
