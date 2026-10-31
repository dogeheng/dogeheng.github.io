import {build} from 'esbuild';
import {copyFile,mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const out=resolve(root,'game');await mkdir(out,{recursive:true});
await build({entryPoints:[resolve(root,'source/game-demo/main.ts')],bundle:true,format:'esm',platform:'browser',target:'es2022',outdir:out,entryNames:'game',minify:true,legalComments:'eof',logLevel:'info'});
await copyFile(resolve(root,'source/game-demo/index.html'),resolve(out,'index.html'));
await copyFile(resolve(root,'source/vendor/local-splatoon/LICENSE'),resolve(out,'LICENSE'));
