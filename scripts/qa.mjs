import {readFileSync,existsSync,readdirSync,statSync} from 'node:fs';
import path from 'node:path';
const root=process.cwd(), pub=path.join(root,'public'), pages=path.join(root,'src','pages');
const files=(d)=>readdirSync(d).flatMap(n=>{const p=path.join(d,n);return statSync(p).isDirectory()?files(p):[p]});
const pageFiles=files(pages).filter(p=>p.endsWith('.astro'));
const sitePages=pageFiles.filter(p=> /[/\\](en|fr)[/\\]/.test(p));
const routes=new Set(pageFiles.map(f=>{
 const rel=path.relative(pages,f).replaceAll('\\','/');
 return '/'+rel.replace(/index\.astro$/,'').replace(/\.astro$/,'')+(rel==='index.astro'?'':rel==='404.astro'?'': '');
}));
let imageCount=0, altMissing=0, linkCount=0, brokenAssets=[], brokenRoutes=[], externalStock=0;
for(const file of sitePages){
 const src=readFileSync(file,'utf8');
 externalStock+=(src.match(/images\.unsplash\.com/g)||[]).length;
 for(const match of src.matchAll(/<img\b[^>]*>/g)){
   imageCount++;
   if(!/\balt=/.test(match[0]))altMissing++;
   const u=match[0].match(/\bsrc="(\/assets\/[^"\s]+)"/);
   if(u&&!existsSync(path.join(pub,u[1].slice(1))))brokenAssets.push([file,u[1]]);
 }
 for(const match of src.matchAll(/(?:href|src|data-fallback)="(\/[^"#?]+)(?:[?#][^\"]*)?"/g)){
   const u=match[1];
   if(u.startsWith('/assets/')){
     if(!existsSync(path.join(pub,u.slice(1))))brokenAssets.push([file,u]);
   }else if(/^\/(en|fr)\//.test(u)){
     linkCount++;
     if(!routes.has(u))brokenRoutes.push([file,u]);
   }
 }
}
const result={totalAstroRoutes:pageFiles.length,contentPages:sitePages.length,imagesChecked:imageCount,localLinksChecked:linkCount,missingImageAlt:altMissing,missingAssets:brokenAssets.length,brokenRoutes:brokenRoutes.length,externalUnsplashReferences:externalStock,hasI18nConfig:readFileSync(path.join(root,'astro.config.mjs'),'utf8').includes('prefixDefaultLocale: true'),hasSitemap:existsSync(path.join(pub,'sitemap.xml'))};
console.log(JSON.stringify(result,null,2));
if(brokenAssets.length)console.error('Missing assets:',brokenAssets.slice(0,10));
if(brokenRoutes.length)console.error('Broken routes:',brokenRoutes.slice(0,10));
if(result.totalAstroRoutes!==43||result.contentPages!==32||altMissing||brokenAssets.length||brokenRoutes.length||externalStock||!result.hasI18nConfig||!result.hasSitemap)process.exitCode=1;
