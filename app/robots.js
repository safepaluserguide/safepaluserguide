
import { siteUrl } from "./_data";
export default function robots(){return {rules:{userAgent:"*",allow:"/"},sitemap:`${siteUrl()}/sitemap.xml`};}
