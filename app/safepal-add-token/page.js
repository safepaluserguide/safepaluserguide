
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Add Token: How Token Visibility Works",
 description: "SafePal add token guide for existing users, including networks, contract addresses and missing-token checks.",
 alternates:{canonical:"/safepal-add-token/"},
 openGraph:{title:"SafePal Add Token: How Token Visibility Works",description:"SafePal add token guide for existing users, including networks, contract addresses and missing-token checks.",url:"/safepal-add-token/"}
};
export default function Page(){
 const sections = ["Before adding a token", "Confirm which blockchain the token uses. Tokens with similar names can exist on different networks, and fraudulent tokens can imitate legitimate assets.", "Verify the contract address", "When a custom token requires a contract address, verify it using reliable project and blockchain sources. Do not rely solely on an unsolicited message.", "If a token still does not appear", "Confirm the receiving address, network and on-chain balance. A token display problem may be separate from actual ownership on the blockchain."];
 const related=pages.filter(([u])=>u!=="/safepal-add-token/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Add Token: How Token Visibility Works","url":`${siteUrl()}/safepal-add-token/`,"description":"SafePal add token guide for existing users, including networks, contract addresses and missing-token checks."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Add Token: How Token Visibility Works","item":`${siteUrl()}/safepal-add-token/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Add Token: How Token Visibility Works"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Add Token: How Token Visibility Works"}</h1><p className="lead">{"SafePal add token guide for existing users, including networks, contract addresses and missing-token checks."}</p></section>
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
