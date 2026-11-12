const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./es-BPGsVxw2.js","./rolldown-runtime-pP25SEvz.js","./pptxgen.es-B42bRVfm.js","./index-QwGUGbCB.js","./index-2g3LGQXd.css"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,M as r,N as i,O as a,T as o,_ as s,b as c,h as l,i as u,k as d,n as f,t as p,v as m,w as h,y as g}from"./index-QwGUGbCB.js";var _=n(),v=o(),y=t();function b({snapshot:t,logo:n,page:a=1}){let{draft:o,analysis:h,story:_,kind:v=`distribution`}=t,b=v===`distribution`?g(h):void 0,x=_&&!h.suppressed&&o.title===u[v]?_.headline:o.title,S=b&&!h.suppressed&&h.valid&&h.question===e.find(e=>e.id===`satisfaction`).text?`${h.counts.at(-1).count} из ${h.valid} ответивших полностью удовлетворены работой (${m(c(h,`top`),`%`)}).`:void 0,C=o.note.trim();return(0,y.jsxs)(`article`,{className:`slide`,"aria-label":`Слайд отчёта`,children:[(0,y.jsxs)(`header`,{className:`slide-brand`,children:[(0,y.jsx)(`img`,{src:n,alt:`BIOCAD`}),(0,y.jsx)(`span`,{children:`BIG VOICE / 2026`}),(0,y.jsx)(`span`,{className:`slide-demo`,children:`Искусственные данные`})]}),(0,y.jsx)(`h1`,{"data-fit":!0,className:`slide-title`,children:x}),(0,y.jsxs)(`p`,{className:`slide-scope`,children:[v===`comparison`?`Сравнение доступных подразделений. Дополнительные фильтры сохранены в подписях.`:h.scopeLabel,_&&(0,y.jsxs)(y.Fragment,{children:[` · `,_.studyName,!h.suppressed&&` · В срезе: ${h.sampleSize}`]})]}),h.suppressed&&v!==`summary`?(0,y.jsx)(`div`,{className:`slide-text`,children:r(h.suppressed)}):_?(0,y.jsxs)(`div`,{className:`slide-story`,"data-fit":!0,children:[(0,y.jsx)(l,{story:_,kind:v}),C&&(0,y.jsxs)(`div`,{className:`story-note`,children:[(0,y.jsx)(`h2`,{children:`Вывод аналитика`}),(0,y.jsx)(`p`,{children:C})]}),t.quote&&v===`evp`&&(0,y.jsx)(`blockquote`,{children:t.quote})]}):v===`text`?(0,y.jsx)(`div`,{"data-fit":!0,className:`slide-text`,children:C}):v===`summary`?(0,y.jsxs)(`div`,{"data-fit":!0,className:`slide-summary`,children:[(0,y.jsxs)(`table`,{children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{children:`Вопрос`}),(0,y.jsx)(`th`,{children:`Ответили`}),(0,y.jsx)(`th`,{children:`Пропуски`}),(0,y.jsx)(`th`,{children:`Не задавался`})]})}),(0,y.jsx)(`tbody`,{children:t.summary?.map(e=>(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{children:e.title}),e.suppressed?(0,y.jsx)(`td`,{colSpan:3,children:r(e.suppressed)}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`td`,{children:e.valid}),(0,y.jsx)(`td`,{children:e.missing}),(0,y.jsx)(`td`,{children:e.notAsked})]})]},e.title))})]}),C&&(0,y.jsx)(`p`,{children:C})]}):(0,y.jsxs)(`div`,{className:`slide-body`+(C?``:` full-chart`),children:[(0,y.jsxs)(`section`,{className:`slide-chart`,children:[(0,y.jsx)(`h2`,{children:S||h.question}),v===`comparison`?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`p`,{className:`slide-unit`,children:`Количество и доля от ответивших на вопрос. Значимость не оценивалась.`}),!h.suppressed&&(0,y.jsx)(f,{analysis:h,columns:t.comparison??[],className:`slide-comparison`})]}):(0,y.jsxs)(y.Fragment,{children:[b&&!S&&(0,y.jsx)(`p`,{children:b}),(0,y.jsx)(`p`,{className:`slide-unit`,children:`Число ответов`}),!h.suppressed&&(0,y.jsx)(p,{analysis:h})]})]}),C&&(0,y.jsxs)(`aside`,{className:`slide-insight`,children:[(0,y.jsx)(`h2`,{children:`Вывод аналитика`}),(0,y.jsx)(`p`,{"data-fit":!0,className:`slide-note`,children:C})]})]}),(0,y.jsxs)(`footer`,{className:`slide-footer`,children:[(0,y.jsxs)(`div`,{children:[v===`indices`&&!h.suppressed&&(0,y.jsx)(`p`,{children:`Базы по порядку: вовлечённость — отзывы, намерение остаться, мотивация; EVP — обмен информацией, процессы, поддержка, обратная связь, развитие, гордость за продукты.`}),(0,y.jsx)(`p`,{children:h.suppressed?``:_?`Базы — валидные ответы по каждому вопросу. * Менее ${d} ответов: вывод предварительный.`:v===`comparison`?`Численность среза: ${h.sampleSize}. Базы каждого подразделения указаны в таблице.`:v===`summary`||v===`text`?`Численность среза: ${h.sampleSize}.`:`Численность среза: ${h.sampleSize}. Ответов на вопрос: ${h.valid}. Пропусков: ${h.missing}. Не задавался: ${h.notAsked??0}.`}),(0,y.jsxs)(`p`,{children:[!_&&!h.suppressed&&i(h.valid),` Данные: `,h.dataVersion,`. Метод: `,h.methodVersion,b||_?` · `+s:``,`.`]})]}),(0,y.jsx)(`span`,{children:String(a).padStart(2,`0`)})]})]})}var x=`.distribution {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
  font-family: var(--font-ui);
}
.distribution-mobile {
  display: none;
}
.chart-grid {
  stroke: var(--color-border);
  stroke-width: 1;
  stroke-dasharray: 3 5;
}
.chart-label {
  fill: var(--color-ink-muted);
  font-size: 14px;
}
.chart-tick {
  fill: var(--color-ink-subtle);
  font: 12px var(--font-mono);
}
.chart-value {
  fill: var(--color-ink);
  font: 500 14px var(--font-mono);
}
.chart-bar {
  fill: var(--color-accent);
}
.chart-empty {
  padding: 80px 20px;
  text-align: center;
  color: var(--color-ink-muted);
}
.slide,
.slide * {
  box-sizing: border-box;
}
.slide {
  width: 1280px;
  height: 720px;
  padding: 36px 48px 28px;
  background: var(--color-surface);
  color: var(--color-ink);
  font-family: var(--font-ui);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.slide p,
.slide h1,
.slide h2 {
  margin: 0;
}
.slide-brand {
  height: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 13px;
  color: var(--color-ink-muted);
  margin-bottom: 25px;
}
.slide-brand img {
  width: 118px;
  height: auto;
}
.slide-demo {
  margin-left: auto;
  background: var(--color-accent-soft);
  color: var(--color-accent-text);
  padding: 7px 12px;
  border-radius: 6px;
}
.slide .slide-title {
  font: 400 34px/1.2 var(--font-display);
  height: 82px;
  overflow-wrap: anywhere;
}
.slide .slide-scope {
  font-size: 15px;
  color: var(--color-ink-muted);
  margin-top: 4px;
}
.slide-body {
  display: grid;
  grid-template-columns: 790px 1fr;
  gap: 30px;
  margin-top: 22px;
  flex: 1;
  min-height: 0;
}
.slide-chart {
  padding-right: 26px;
  border-right: 1px solid var(--color-border);
  min-width: 0;
}
.slide h2 {
  font-size: 17px;
  line-height: 1.5;
  font-weight: 600;
}
.slide .slide-unit {
  font-size: 12px;
  color: var(--color-ink-subtle);
  margin: 7px 0 13px;
}
.slide .distribution {
  width: 720px;
}
.slide-base {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 22px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
}
.slide-base strong {
  font: 400 48px/1 var(--font-display);
  color: var(--color-accent);
}
.slide-base span {
  font-size: 13px;
  max-width: 105px;
  line-height: 1.6;
  color: var(--color-ink-muted);
}
.slide .slide-note {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.65;
  height: 224px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.slide-note-empty {
  color: var(--color-ink-subtle);
}
.slide-footer {
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-top: 1px solid var(--color-border);
  padding-top: 14px;
  margin-top: 18px;
  font-size: 11px;
  line-height: 1.7;
  color: var(--color-ink-muted);
}
.slide-footer > span {
  font: 14px var(--font-mono);
}

.slide {
  break-after: page;
}
.slide:last-child {
  break-after: auto;
}
.slide-text{flex:1;min-height:0;white-space:pre-wrap;font-size:24px;line-height:1.65;padding:32px 0;overflow-wrap:anywhere}.slide-summary{flex:1;min-height:0;padding-top:15px}.slide-summary table,.slide-comparison{width:100%;border-collapse:collapse;text-align:left;font-size:12px;line-height:1.35}.slide-summary td,.slide-summary th,.slide-comparison td,.slide-comparison th{border-bottom:1px solid var(--color-border);padding:5px 8px}.slide-summary td:not(:first-child),.slide-comparison td:not(:first-child){font-family:var(--font-mono);text-align:right}.slide-summary>p{font-size:12px;margin-top:10px}.slide-comparison{font-size:11px}.slide-comparison th{font-size:10px}.slide .slide-scope{font-size:12px;line-height:1.5}.slide-chart>h2{font-size:15px}.slide .slide-title{height:70px;flex-shrink:0}.slide-summary{overflow:hidden}

.slide-summary td,
.slide-summary th {
  padding-block: 3px;
}
.slide-summary > p {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.slide .slide-title {height:auto;max-height:84px;line-height:1.2}
.slide .slide-scope,.slide .slide-unit,.slide-footer {font-size:14px}
.slide-footer {line-height:1.4;margin-top:auto}
.slide-story {flex:1;min-height:0;margin:14px 0;overflow-wrap:anywhere}
.story-table {width:100%;border-collapse:collapse;text-align:left;font-size:18px;line-height:1.25}
.story-table th,.story-table td {padding:5px 12px;border-bottom:1px solid var(--color-border)}
.story-table thead {background:var(--color-bg-subtle)}
.story-table th:not(:first-child),.story-table td {text-align:right}
.story-table strong,.evp-pair strong {font-family:var(--font-mono);font-variant-numeric:tabular-nums}
.story-evidence small {display:block;font:13px/18px var(--font-ui);color:var(--color-ink-muted)}
.story-table tfoot {border-top:2px solid var(--color-border)}
.story-table tfoot th {font-weight:500}
.evp-definition {font-size:18px}
.evp-pair {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin:20px 0}
.evp-pair section {padding:24px;background:var(--color-bg-subtle);border-top:3px solid var(--color-accent)}
.evp-pair strong {display:block;margin:12px 0 4px;font-size:38px;color:var(--color-accent-text)}
.story-note,.slide-story blockquote {white-space:pre-wrap;font-size:16px;line-height:1.45}
.story-note {margin:10px 0}
.slide-story blockquote {border-left:3px solid var(--color-accent);padding:8px 16px;margin:12px 0}
.slide-body.full-chart {grid-template-columns:1fr}
.full-chart .slide-chart {border:0;padding:0}
.full-chart .distribution {width:100%;max-height:322px}
.slide .slide-title {text-wrap:balance}
.slide .evp-pair h2 {margin-top:8px;font-size:22px}
.story-table:has(+small) td,.slide-story:has(.story-note) .story-table td {padding-block:2px}
.slide-story:has(.story-note) .story-table small {display:inline-block;margin-left:12px}

.slide-story .story-table td,.slide-story .story-table th {padding-block:3px}
.slide:has(.slide-story) .slide-brand {margin-bottom:12px}
.slide-story {margin:8px 0}
`,S=1280,C=720,w=`./portal5/`,T=`http://www.w3.org/2000/svg`;async function E(e){let t=await fetch(w+e);if(!t.ok)throw Error(`Не удалось загрузить оформление отчёта. Обновите страницу и повторите действие.`);return t}function D(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error),r.readAsDataURL(e)})}async function O(){let e=await Promise.all([`palette`,`semantic`,`foundations`,`fonts`].map(async e=>(await E(`tokens/`+e+`.css`)).text())),t=e.pop(),n=[...new Set([...t.matchAll(/url\('\.\.\/fonts\/([^']+)'\)/g)].map(e=>e[1]))],r=await Promise.all(n.map(async e=>[e,await D(await(await E(`fonts/`+e)).blob())])),i=t;for(let[e,t]of r)i=i.replaceAll(`../fonts/`+e,t);let a=await D(await(await E(`assets/logo-full.svg`)).blob());return{css:[...e,i,x].join(`
`),logo:a}}var k;function A(){return k??=O().catch(e=>{throw k=void 0,e}),k}function j(e){let t=e.blocks.filter(h);if(!t.length)throw Error(`Включите в экспорт хотя бы один блок отчёта.`);return t.map(({title:e,scope:t,note:n,kind:r,story:i,quote:a,analysis:o,departmentIds:s,comparison:c,summary:l})=>({draft:{title:e,scope:t,note:n},kind:r,story:i,quote:a,analysis:o,departmentIds:s,comparison:c,summary:l}))}async function M(e){let t=j(e),{css:n,logo:r}=await A(),i=document.createElement(`div`),a=(0,v.createRoot)(i);try{return(0,_.flushSync)(()=>a.render(t.map((e,t)=>(0,y.jsx)(b,{snapshot:e,logo:r,page:t+1},t)))),`<!doctype html><html lang="ru"><head><meta charset="utf-8"><title>BIG VOICE — отчёт</title><style>`+n+`
html,body{margin:0;padding:0;background:white}@page{size:1280px 720px;margin:0}</style></head><body>`+i.innerHTML+`</body></html>`}finally{a.unmount()}}async function N(e,t){let n=document.createElementNS(T,`svg`);n.setAttribute(`width`,String(S*2)),n.setAttribute(`height`,String(C*2)),n.setAttribute(`viewBox`,`0 0 ${S} ${C}`);let r=document.createElementNS(T,`style`);r.textContent=t;let i=document.createElementNS(T,`foreignObject`);i.setAttribute(`width`,String(S)),i.setAttribute(`height`,String(C)),i.append(e.cloneNode(!0)),n.append(r,i);let a=new XMLSerializer().serializeToString(n),o=new Image;o.src=`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(a),await o.decode();let s=document.createElement(`canvas`);s.width=S*2,s.height=C*2;let c=s.getContext(`2d`);if(!c)throw Error(`Браузер не смог подготовить слайд к скачиванию.`);return c.fillStyle=`#fff`,c.fillRect(0,0,s.width,s.height),c.drawImage(o,0,0),new Promise((e,t)=>s.toBlob(n=>{n?e(n):t(Error(`Браузер не смог создать изображение слайда.`))},`image/png`))}async function*P(e){let t=await M(e),n=document.createElement(`iframe`);n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`tabindex`,`-1`),n.setAttribute(`sandbox`,`allow-same-origin`),n.style.cssText=`position:fixed;left:-10000px;top:0;width:${S}px;height:${C}px;border:0;pointer-events:none`;let r=new Promise((e,t)=>{n.onload=()=>e(),n.onerror=()=>t(Error(`Предпросмотр отчёта не открылся.`))});n.srcdoc=t,document.body.append(n);try{await r;let e=n.contentDocument;await e.fonts.ready;let t=Array.from(e.querySelectorAll(`.slide`));for(let e of t)for(let t of e.querySelectorAll(`[data-fit]`))if(t.scrollWidth>t.clientWidth+1||t.scrollHeight>t.clientHeight+1)throw Error(`Текст не помещается на слайде. Сократите заголовок или вывод и повторите экспорт.`);let{css:i}=await A();for(let e of t)yield await N(e,i)}finally{n.remove()}}async function F(e,t){if(t===`pdf`){let{PDFDocument:t}=await a(async()=>{let{PDFDocument:e}=await import(`./es-BPGsVxw2.js`);return{PDFDocument:e}},__vite__mapDeps([0,1]),import.meta.url),n=await t.create();n.setTitle(e.title),n.setAuthor(`BIG VOICE`);for await(let t of P(e)){let e=await n.embedPng(await t.arrayBuffer());n.addPage([960,540]).drawImage(e,{x:0,y:0,width:960,height:540})}return new Blob([new Uint8Array(await n.save())],{type:`application/pdf`})}let{default:n}=await a(async()=>{let{default:e}=await import(`./pptxgen.es-B42bRVfm.js`);return{default:e}},__vite__mapDeps([2,1,3,4]),import.meta.url),r=new n;r.layout=`LAYOUT_WIDE`,r.title=e.title,r.author=`BIG VOICE`;let i=e.blocks.filter(h),o=0;for await(let t of P(e)){let e=i[o++];r.addSlide().addImage({data:await D(t),x:0,y:0,w:13.333333,h:7.5,altText:e.title})}return await r.write({outputType:`blob`,compression:!0})}export{F as exportPublicReport,M as renderPublicReport};