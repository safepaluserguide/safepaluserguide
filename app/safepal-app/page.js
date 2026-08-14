
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal App Guide for Existing Wallet Users",
 description: "SafePal App guide covering access, updates, device pairing and common app issues for existing users.",
 alternates:{canonical:"/safepal-app/"},
 openGraph:{title:"SafePal App Guide for Existing Wallet Users",description:"SafePal App guide covering access, updates, device pairing and common app issues for existing users.",url:"/safepal-app/"}
};
export default function Page(){
 const sections = ["Using the SafePal app safely", "Use the app as the interface for supported wallet functions while keeping recovery information private. Confirm downloads through official SafePal resources rather than third-party installers.", "Common app tasks", "Existing users commonly need to check assets, send or receive crypto, manage tokens, interact with supported services or pair a hardware wallet. Keep the app updated before troubleshooting unexpected behavior.", "When the app behaves unexpectedly", "Restart the app, check connectivity, confirm the current version and determine whether the problem affects one asset or the entire wallet. Use our troubleshooting guides for more specific symptoms."];
 const related=pages.filter(([u])=>u!=="/safepal-app/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal App Guide for Existing Wallet Users","url":`${siteUrl()}/safepal-app/`,"description":"SafePal App guide covering access, updates, device pairing and common app issues for existing users."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal App Guide for Existing Wallet Users","item":`${siteUrl()}/safepal-app/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal App Guide for Existing Wallet Users"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal App Guide for Existing Wallet Users"}</h1><p className="lead">{"SafePal App guide covering access, updates, device pairing and common app issues for existing users."}</p></section>
  <div className="notice"><strong>Security notice:</strong> Never share your recovery phrase, seed phrase, private key, wallet password or PIN. This website does not provide a wallet login form and does not collect wallet credentials.</div>
  <article>
   {sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}
   <h2>Official SafePal resources</h2><p>For downloads, firmware, wallet recovery procedures and account-sensitive actions, verify the destination and continue through SafePal's official website.</p>
   <a className="cta" href={official} rel="noopener noreferrer">Visit the official SafePal website →</a>
   <h2>Frequently asked questions</h2>{faq.map(([q,a])=><section key={q}><h3>{q}</h3><p>{a}</p></section>)}
   <div className="related"><h2>Related SafePal guides</h2><ul>{related.map(([u,n])=><li key={u}><a href={u}>{n}</a></li>)}</ul></div>
  </article>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
 </main>
}
