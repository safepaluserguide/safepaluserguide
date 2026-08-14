
import { official, pages, siteUrl } from "../_data";
export const metadata = {
 title: "SafePal Firmware Update: Update Your Device Safely",
 description: "SafePal firmware update guide for existing hardware wallet users, with checks before downloading or installing firmware.",
 alternates:{canonical:"/safepal-firmware-update/"},
 openGraph:{title:"SafePal Firmware Update: Update Your Device Safely",description:"SafePal firmware update guide for existing hardware wallet users, with checks before downloading or installing firmware.",url:"/safepal-firmware-update/"}
};
export default function Page(){
 const sections = ["Use firmware for the correct model", "SafePal hardware models can have different firmware. Identify the exact device and use the official SafePal download or firmware resource.", "Prepare before updating", "Make sure your wallet backup is securely stored and that you understand the official update procedure. Do not download firmware from file-sharing sites or unsolicited links.", "After the update", "Confirm the device starts normally and reconnect it using the supported workflow. A firmware update should never require sending recovery words to a person."];
 const related=pages.filter(([u])=>u!=="/safepal-firmware-update/").slice(0,6);
 const faq=[
  ["Is this the official SafePal website?","No. Wallet User Guide is an independent educational website and is not affiliated with SafePal."],
  ["Will this guide ask for my recovery phrase?","No. Never enter a recovery phrase, seed phrase, private key, wallet password or PIN on this website."],
  ["Where should sensitive SafePal actions be completed?","Use trusted official SafePal resources and verify the destination before downloading software, updating firmware or recovering a wallet."]
 ];
 const jsonLd={"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","name":"SafePal Firmware Update: Update Your Device Safely","url":`${siteUrl()}/safepal-firmware-update/`,"description":"SafePal firmware update guide for existing hardware wallet users, with checks before downloading or installing firmware."},
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl()+"/"},
    {"@type":"ListItem","position":2,"name":"SafePal","item":siteUrl()+"/safepal/"},
    {"@type":"ListItem","position":3,"name":"SafePal Firmware Update: Update Your Device Safely","item":`${siteUrl()}/safepal-firmware-update/`}
  ]},
  {"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
 ]};
 return <main className="wrap">
  <div className="breadcrumbs"><a href="/">Home</a> › <a href="/safepal/">SafePal</a> › {"SafePal Firmware Update: Update Your Device Safely"}</div>
  <section className="hero"><div className="eyebrow">Independent SafePal guide</div><h1>{"SafePal Firmware Update: Update Your Device Safely"}</h1><p className="lead">{"SafePal firmware update guide for existing hardware wallet users, with checks before downloading or installing firmware."}</p></section>
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
