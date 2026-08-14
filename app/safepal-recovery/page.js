
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Recovery: Restore Access Safely",
 description: "SafePal recovery guide for existing users. Understand safe restoration principles and avoid fake recovery forms.",
 alternates:{canonical:"/safepal-recovery/"},
 openGraph:{title:"SafePal Recovery: Restore Access Safely",description:"SafePal recovery guide for existing users. Understand safe restoration principles and avoid fake recovery forms.",url:"/safepal-recovery/"}
};
export default function Page(){
 const sections = ["When recovery is appropriate", "Recovery may be needed after device loss, replacement or a legitimate wallet migration. First confirm that you understand which wallet backup you possess.", "Use only a trusted recovery environment", "Recovery words grant control of wallet assets. Enter them only where the legitimate wallet recovery procedure specifically requires it, never into this website or a support chat.", "Watch for recovery scams", "No support representative needs your complete recovery phrase. Anyone requesting it can potentially take control of the wallet."];
 const related=pages.filter(([u])=>u!=="/safepal-recovery/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Recovery: Restore Access Safely","url":`${siteUrl()}/safepal-recovery/`,"description":"SafePal recovery guide for existing users. Understand safe restoration principles and avoid fake recovery forms."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Recovery: Restore Access Safely","item":`${siteUrl()}/safepal-recovery/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Recovery: Restore Access Safely"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Recovery: Restore Access Safely"}</h1><p className="lead">{"SafePal recovery guide for existing users. Understand safe restoration principles and avoid fake recovery forms."}</p></section>
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
