
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Extension: Browser Wallet Access Guide",
 description: "Independent SafePal Extension guide for existing users, including safe installation, connection checks and troubleshooting.",
 alternates:{canonical:"/safepal-extension/"},
 openGraph:{title:"SafePal Extension: Browser Wallet Access Guide",description:"Independent SafePal Extension guide for existing users, including safe installation, connection checks and troubleshooting.",url:"/safepal-extension/"}
};
export default function Page(){
 const sections = ["Using the browser extension", "Install browser wallet software only from a destination reached through official SafePal resources. Lookalike extensions are a common risk in crypto.", "Extension connection problems", "Check whether the extension is enabled, whether the browser is supported and up to date, and whether the site you are using is requesting the correct wallet connection method.", "Security checks", "A normal dApp connection should not require you to reveal your recovery phrase or private key. Read transaction prompts before approving them."];
 const related=pages.filter(([u])=>u!=="/safepal-extension/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Extension: Browser Wallet Access Guide","url":`${siteUrl()}/safepal-extension/`,"description":"Independent SafePal Extension guide for existing users, including safe installation, connection checks and troubleshooting."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Extension: Browser Wallet Access Guide","item":`${siteUrl()}/safepal-extension/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Extension: Browser Wallet Access Guide"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Extension: Browser Wallet Access Guide"}</h1><p className="lead">{"Independent SafePal Extension guide for existing users, including safe installation, connection checks and troubleshooting."}</p></section>
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
