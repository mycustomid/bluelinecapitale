import {fileURLToPath} from 'node:url';import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),source=path.join(root,'site'),out=path.join(root,'dist');
if(!fs.existsSync(path.join(source,'index.html')))throw Error('Missing site/index.html');
fs.rmSync(out,{recursive:true,force:true});fs.cpSync(source,out,{recursive:true});
let count=0,bytes=0;const walk=p=>{for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())walk(f);else{count++;bytes+=fs.statSync(f).size}}};walk(out);
console.log(`Built ${count} files (${(bytes/1048576).toFixed(2)} MB) into dist/`);
