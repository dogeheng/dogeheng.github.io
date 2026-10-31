import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.gif':'image/gif','.mp4':'video/mp4','.ttf':'font/ttf','.json':'application/json'};
const server=createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const path=resolve(root,'.'+decodeURIComponent(url.pathname));if((path!==root&&!path.startsWith(root+sep))||url.pathname.split('/').some(part=>part.startsWith('.'))){res.writeHead(403).end();return}const target=(await stat(path)).isDirectory()?resolve(path,'index.html'):path;const bytes=await readFile(target);res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(bytes)}catch{res.writeHead(404).end('Not found')}});
server.listen(Number(process.env.PORT)||4320,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+server.address().port));
