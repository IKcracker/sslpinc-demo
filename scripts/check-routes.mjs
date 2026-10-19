import{readFile,access}from'node:fs/promises';
import{defaultContent}from'../src/content.js';
const urls=['/','/about','/team','/services','/evaluations','/resources','/referrals','/careers','/contact','/content-studio','/accessibility','/migration-plan',...defaultContent.services.map(x=>'/services/'+x.slug),...defaultContent.resources.map(x=>'/resources/'+x.slug)];
let errors=0;
for(const url of urls){const file=url==='/'?'dist/index.html':`dist${url}.html`;try{await access(file);const html=await readFile(file,'utf8');if(!html.includes('id="root"')||!html.includes('noindex')||!html.includes('canonical')||!html.includes('application/ld+json'))throw Error('Missing markup/SEO controls');}catch(e){console.error(url,e.message);errors++}}
const vercel=JSON.parse(await readFile('vercel.json','utf8'));
if(!vercel.headers?.some(h=>h.headers?.some(x=>x.key==='X-Robots-Tag'))){console.error('Missing proposal noindex header');errors++}
console.log(`${urls.length-errors}/${urls.length} static pages verified`);if(errors)process.exitCode=1;
