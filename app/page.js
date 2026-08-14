
import { pages } from "./_data";
export default function Home(){
 return <main className="wrap">
  <section className="hero"><div className="eyebrow">Independent wallet help</div><h1>SafePal User Guides & Troubleshooting</h1><p className="lead">Practical, independent guidance for people who already use SafePal — from app access and setup to balance, transaction and connection problems.</p></section>
  <div className="notice"><strong>Security first:</strong> this site never asks for your recovery phrase, seed phrase, private key, wallet password or PIN. Sensitive actions should be completed only through trusted official SafePal resources.</div>
  <section className="grid">{pages.map(([url,name])=><a className="card" href={url} key={url}><h2>{name}</h2><p>Open the independent user guide →</p></a>)}</section>
 </main>
}
