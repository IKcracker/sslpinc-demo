/** Static prerender: crawlable HTML for every approved demo route.
 * Run after `vite build`; never use this prototype's URL list as a live-site migration crawl.
 */
import {createServer} from 'vite';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {defaultContent,SITE_URL} from '../src/content.js';
const pages=[
  ['/','Welcome home','Explore a warm, accessible website concept for pediatric speech-language care.'],
  ['/about','Our approach','A welcoming, family-focused website introduction with illustrative practice content.'],
  ['/team','Our team','A staff directory concept with editable biographies and placeholder photographs.'],
  ['/services','Services','Browse a proposed pediatric communication service directory.'],
  ['/evaluations','Evaluations','A clear path for families exploring evaluations and next steps.'],
  ['/resources','Parent resources','Browse family resources and practice information in this demonstration.'],
  ['/referrals','Professional referrals','A straightforward hub for professional and referral information.'],
  ['/careers','Careers','An editable careers page concept with example content.'],
  ['/contact','Request information','Try the demo-only contact form. No information will be transmitted.'],
  ['/content-studio','Content studio','Try editing website content in your browser: services, team, FAQs and resources.'],
  ['/accessibility','Accessibility approach','Explore our WCAG 2.2 AA testing and remediation approach.'],
  ['/migration-plan','SEO migration approach','See the proposed crawl, mapping, redirect and verification workflow.'],
  ...defaultContent.services.map(s=>['/services/'+s.slug,s.name,s.short]),
  ...defaultContent.resources.map(r=>['/resources/'+r.slug,r.title,r.summary]),
];
const escape=(str)=>String(str).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const server=await createServer({server:{middlewareMode:true},appType:'custom',logLevel:'error'});
try{
  const {render}=await server.ssrLoadModule('/src/ssr.jsx');
  const template=await readFile('dist/index.html','utf8');
  for(const [url,title,description] of pages){
    const markup=render(url);
    const canonical=SITE_URL+url.replace(/\/$/,'');
    const extra=[`<link rel="canonical" href="${escape(canonical)}"/>`,`<meta property="og:type" content="website"/>`,`<meta property="og:title" content="${escape(title)} | SSLP redesign concept"/>`,`<meta property="og:description" content="${escape(description)}"/>`,`<meta property="og:url" content="${escape(canonical)}"/>`,`<meta name="twitter:card" content="summary"/>`, `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'WebPage',name:title,url:canonical,description, isAccessibleForFree:true}).replace(/</g,'\\u003c')}</script>`].join('');
    const full=template
      .replace(/<title>[^<]*<\/title>/,`<title>${escape(title)} | SSLP redesign concept</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/>/,`<meta name="description" content="${escape(description)}"/>`)
      .replace('</head>',extra+'</head>')
      .replace('<div id="root"></div>',`<div id="root">${markup}</div>`);
    const target=url==='/'?'dist/index.html':'dist'+url+'.html';
    await mkdir(path.dirname(target),{recursive:true});
    await writeFile(target,full);
    console.log('prerendered:',url);
  }
  const urls=pages.map(([url])=>`  <url><loc>${escape(SITE_URL+url)}</loc></url>`).join('\n');
  await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
  await writeFile('dist/robots.txt',`User-agent: *\nDisallow: /\n# Demo preview: never index the proposal site\n# Publish a separate, verified production robots policy after approval.\n`);
  // The production clinic's existing domain, URLs and indexed content are NOT mirrored in this concept.
  console.log(`Generated ${pages.length} crawlable pages; preview remains explicitly noindex.`);
}finally{await server.close()}
