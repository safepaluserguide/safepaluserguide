
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Download: Find the Official App Safely",
 description: "SafePal download guide for existing users. Learn how to avoid unofficial installers and reach trusted SafePal download resources.",
 alternates:{canonical:"/safepal-download/"},
 openGraph:{title:"SafePal Download: Find the Official App Safely",description:"SafePal download guide for existing users. Learn how to avoid unofficial installers and reach trusted SafePal download resources.",url:"/safepal-download/"}
};
export default function Page(){
 const sections = ["Where to download SafePal", "Use SafePal's official website or the legitimate listing in your platform's app store. Avoid APK mirrors, sponsored lookalike pages and installers sent through unsolicited messages.", "Before installing an update", "Check the publisher and destination carefully. Backups should already be secured offline before major device or software changes, but never enter recovery words merely to perform a normal download.", "After installation", "Open the legitimate application and follow the appropriate existing-wallet workflow. If something looks different from what you expect, stop before entering sensitive information."];
 const related=pages.filter(([u])=>u!=="/safepal-download/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Download: Find the Official App Safely","url":`${siteUrl()}/safepal-download/`,"description":"SafePal download guide for existing users. Learn how to avoid unofficial installers and reach trusted SafePal download resources."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Download: Find the Official App Safely","item":`${siteUrl()}/safepal-download/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Download: Find the Official App Safely"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Download: Find the Official App Safely"}</h1><p className="lead">{"SafePal download guide for existing users. Learn how to avoid unofficial installers and reach trusted SafePal download resources."}</p></section>
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
