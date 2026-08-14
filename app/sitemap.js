
import { pages, siteUrl } from "./_data";
export default function sitemap(){
 const base=siteUrl();
 const now=new Date();
 return [
  {url:`${base}/`,lastModified:now,changeFrequency:"weekly",priority:0.8},
  {url:`${base}/safepal/`,lastModified:now,changeFrequency:"weekly",priority:1},
  ...pages.map(([path])=>({url:`${base}${path}`,lastModified:now,changeFrequency:"monthly",priority:0.8}))
 ];
}
