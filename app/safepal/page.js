
import { pages, siteUrl } from "../_data";
export const metadata={title:"SafePal Wallet: App, Setup & Troubleshooting Guide",description:"Independent SafePal guide for existing users: app access, downloads, setup, backup, recovery, firmware and troubleshooting.",alternates:{canonical:"/safepal/"}};
export default function Page(){
 const jsonLd={"@context":"https://schema.org","@type":"WebPage",name:"SafePal Wallet User Guide",url:`${siteUrl()}/safepal/`,description:"Independent guide for people who already use SafePal."};
 return <main className="wrap"><div className="breadcrumbs"><a href="/">Home</a> › SafePal</div><section className="hero"><div className="eyebrow">SafePal user hub</div><h1>SafePal Wallet User Guide</h1><p className="lead">Find help with access, the SafePal app, setup, recovery, updates and common wallet problems.</p></section><div className="notice"><strong>Independent guide:</strong> We are not SafePal. Never share your recovery phrase, seed phrase, private key, password or PIN with a website or support contact.</div><section className="grid">{pages.map(([u,n])=><a className="card" href={u} key={u}><h2>{n}</h2><p>Step-by-step information for existing SafePal users.</p></a>)}</section><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} /></main>
}
