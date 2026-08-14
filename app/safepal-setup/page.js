
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Setup Guide for Existing Owners",
 description: "SafePal setup guide for existing owners covering safe initialization, app pairing and essential security checks.",
 alternates:{canonical:"/safepal-setup/"},
 openGraph:{title:"SafePal Setup Guide for Existing Owners",description:"SafePal setup guide for existing owners covering safe initialization, app pairing and essential security checks.",url:"/safepal-setup/"}
};
export default function Page(){
 const sections = ["Before setup", "Use authentic hardware and software obtained through trusted channels. Work privately and never photograph, upload or type recovery words into an unrelated website.", "During setup", "Follow the instructions for your specific SafePal model or software wallet. Verify information on the trusted device interface where applicable and create backups according to official guidance.", "After setup", "Confirm that you can identify your receiving address and understand your backup before moving significant assets. Consider a small test transaction first."];
 const related=pages.filter(([u])=>u!=="/safepal-setup/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Setup Guide for Existing Owners","url":`${siteUrl()}/safepal-setup/`,"description":"SafePal setup guide for existing owners covering safe initialization, app pairing and essential security checks."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Setup Guide for Existing Owners","item":`${siteUrl()}/safepal-setup/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Setup Guide for Existing Owners"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Setup Guide for Existing Owners"}</h1><p className="lead">{"SafePal setup guide for existing owners covering safe initialization, app pairing and essential security checks."}</p></section>
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
