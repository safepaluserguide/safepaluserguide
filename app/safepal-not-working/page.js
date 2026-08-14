
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Not Working? Troubleshooting Guide",
 description: "SafePal not working? Check app, network, balance, transaction and device issues with this independent troubleshooting guide.",
 alternates:{canonical:"/safepal-not-working/"},
 openGraph:{title:"SafePal Not Working? Troubleshooting Guide",description:"SafePal not working? Check app, network, balance, transaction and device issues with this independent troubleshooting guide.",url:"/safepal-not-working/"}
};
export default function Page(){
 const sections = ["Identify what is actually failing", "Separate app launch problems from network problems, missing balances, pending transactions and hardware connection issues. The right fix depends on the symptom.", "Basic checks", "Restart the app or device, verify internet access, check whether the issue affects one blockchain, and confirm that your SafePal software is current. Do not reinstall or reset a wallet until you understand your backup situation.", "When to use official support", "If the issue involves a device fault, firmware, an unsupported asset or a persistent service problem, use SafePal's official support resources. Never send recovery words to a support agent."];
 const related=pages.filter(([u])=>u!=="/safepal-not-working/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Not Working? Troubleshooting Guide","url":`${siteUrl()}/safepal-not-working/`,"description":"SafePal not working? Check app, network, balance, transaction and device issues with this independent troubleshooting guide."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Not Working? Troubleshooting Guide","item":`${siteUrl()}/safepal-not-working/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Not Working? Troubleshooting Guide"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Not Working? Troubleshooting Guide"}</h1><p className="lead">{"SafePal not working? Check app, network, balance, transaction and device issues with this independent troubleshooting guide."}</p></section>
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
