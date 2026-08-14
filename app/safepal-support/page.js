
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Support: How to Find Official Help Safely",
 description: "SafePal support guide for existing users. Find legitimate help and avoid fake support agents asking for wallet secrets.",
 alternates:{canonical:"/safepal-support/"},
 openGraph:{title:"SafePal Support: How to Find Official Help Safely",description:"SafePal support guide for existing users. Find legitimate help and avoid fake support agents asking for wallet secrets.",url:"/safepal-support/"}
};
export default function Page(){
 const sections = ["How to reach support safely", "Start from SafePal's official website and navigate to its support resources. Be cautious with phone numbers, social profiles or direct messages found through advertisements and comments.", "What support should never need", "Never provide your seed phrase, recovery phrase, private key or complete wallet backup to a support agent. Those secrets control wallet access.", "Prepare useful non-sensitive details", "Describe the device model, app version, network, asset and visible error message. Transaction hashes and public addresses may help diagnose blockchain issues, but review what you share publicly."];
 const related=pages.filter(([u])=>u!=="/safepal-support/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Support: How to Find Official Help Safely","url":`${siteUrl()}/safepal-support/`,"description":"SafePal support guide for existing users. Find legitimate help and avoid fake support agents asking for wallet secrets."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Support: How to Find Official Help Safely","item":`${siteUrl()}/safepal-support/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Support: How to Find Official Help Safely"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Support: How to Find Official Help Safely"}</h1><p className="lead">{"SafePal support guide for existing users. Find legitimate help and avoid fake support agents asking for wallet secrets."}</p></section>
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
