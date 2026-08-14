
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Backup: Protect Your Wallet Recovery Information",
 description: "SafePal backup guide explaining how existing users can protect recovery information without exposing it online.",
 alternates:{canonical:"/safepal-backup/"},
 openGraph:{title:"SafePal Backup: Protect Your Wallet Recovery Information",description:"SafePal backup guide explaining how existing users can protect recovery information without exposing it online.",url:"/safepal-backup/"}
};
export default function Page(){
 const sections = ["What a wallet backup protects", "A recovery backup can be the key to restoring access if a device is lost or damaged. It must therefore be protected from both physical loss and unauthorized access.", "Keep recovery information offline", "Do not paste recovery words into cloud notes, email, chat, support forms or this website. Avoid photographs and screenshots.", "Verify before you need it", "Understand which backup belongs to which wallet and follow official SafePal instructions for any verification procedure. Never perform a 'backup check' on a random website."];
 const related=pages.filter(([u])=>u!=="/safepal-backup/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Backup: Protect Your Wallet Recovery Information","url":`${siteUrl()}/safepal-backup/`,"description":"SafePal backup guide explaining how existing users can protect recovery information without exposing it online."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Backup: Protect Your Wallet Recovery Information","item":`${siteUrl()}/safepal-backup/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Backup: Protect Your Wallet Recovery Information"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Backup: Protect Your Wallet Recovery Information"}</h1><p className="lead">{"SafePal backup guide explaining how existing users can protect recovery information without exposing it online."}</p></section>
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
