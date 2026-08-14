
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Balance Not Showing? What to Check",
 description: "SafePal balance not showing? Learn how to check network, token visibility, synchronization and address details safely.",
 alternates:{canonical:"/safepal-balance-not-showing/"},
 openGraph:{title:"SafePal Balance Not Showing? What to Check",description:"SafePal balance not showing? Learn how to check network, token visibility, synchronization and address details safely.",url:"/safepal-balance-not-showing/"}
};
export default function Page(){
 const sections = ["A missing balance is not always a missing asset", "Wallet interfaces display blockchain data. A temporary network, indexing or token-display problem can make a balance appear incorrect even when the on-chain address still holds the asset.", "Check the correct network and address", "Verify the asset, network and receiving address. For tokens, make sure the token is visible or correctly added for the intended chain.", "Use a blockchain explorer carefully", "You can compare the public wallet address with an appropriate blockchain explorer. A public address can be checked without revealing a private key or recovery phrase."];
 const related=pages.filter(([u])=>u!=="/safepal-balance-not-showing/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Balance Not Showing? What to Check","url":`${siteUrl()}/safepal-balance-not-showing/`,"description":"SafePal balance not showing? Learn how to check network, token visibility, synchronization and address details safely."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Balance Not Showing? What to Check","item":`${siteUrl()}/safepal-balance-not-showing/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Balance Not Showing? What to Check"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Balance Not Showing? What to Check"}</h1><p className="lead">{"SafePal balance not showing? Learn how to check network, token visibility, synchronization and address details safely."}</p></section>
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
