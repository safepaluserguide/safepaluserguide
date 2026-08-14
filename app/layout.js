
import "./globals.css";
import { siteName, siteUrl } from "./_data";

export const metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: "SafePal User Guides & Troubleshooting | Wallet User Guide", template: "%s | Wallet User Guide" },
  description: "Independent SafePal user guides for app access, setup, recovery, updates and troubleshooting.",
  openGraph: { type:"website", siteName, title:"SafePal User Guides & Troubleshooting", description:"Independent help for people who already use SafePal.", url:"/" },
  robots: { index:true, follow:true }
};

export default function RootLayout({children}) {
 return <html lang="en"><body>
  <header><div className="wrap nav"><a className="brand" href="/">Wallet User Guide</a><nav className="navlinks"><a href="/safepal/">SafePal Hub</a><a href="/safepal-not-working/">Troubleshooting</a><a href="/safepal-support/">Support Guide</a></nav></div></header>
  {children}
  <footer><div className="wrap"><strong>Wallet User Guide</strong><p>Independent educational website. We are not SafePal and are not affiliated with, endorsed by, or operated by SafePal. Never enter a recovery phrase, seed phrase, private key or wallet password on this website.</p></div></footer>
 </body></html>
}
