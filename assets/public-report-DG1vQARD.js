const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-BPGsVxw2.js","assets/rolldown-runtime-pP25SEvz.js","assets/pptxgen.es-DV2nfTlH.js","assets/index-Bs2INQeL.js","assets/index-CUy8KhP4.css"])))=>i.map(i=>d[i]);
import{A as e,D as t,E as n,N as r,O as i,P as a,T as o,_ as s,b as c,h as l,i as u,k as d,n as f,t as p,v as m,w as h,x as g,y as _}from"./index-Bs2INQeL.js";var v=t(),y=n(),b=i();function x({snapshot:t,logo:n,page:i=1}){let{draft:o,analysis:d,story:v,kind:y=`distribution`}=t,x=y===`distribution`?_(d):void 0,S=v&&!d.suppressed&&o.title===u[y]?v.headline:o.title,C=x&&!d.suppressed&&d.valid&&d.question===h.find(e=>e.id===`satisfaction`).text?`${d.counts.at(-1).count} из ${d.valid} ответивших полностью удовлетворены работой (${m(c(d,`top`),`%`)}).`:void 0,w=o.note.trim();return(0,b.jsxs)(`article`,{className:`slide`,"aria-label":`Слайд отчёта`,children:[(0,b.jsxs)(`header`,{className:`slide-brand`,children:[(0,b.jsx)(`img`,{src:n,alt:`BIOCAD`}),(0,b.jsx)(`span`,{children:`BIG VOICE / 2026`}),(0,b.jsx)(`span`,{className:`slide-demo`,children:`Искусственные данные`})]}),(0,b.jsx)(`h1`,{"data-fit":!0,className:`slide-title`,children:S}),(0,b.jsxs)(`p`,{className:`slide-scope`,children:[y===`comparison`?`Сравнение доступных подразделений. Дополнительные фильтры сохранены в подписях.`:d.scopeLabel,v&&(0,b.jsxs)(b.Fragment,{children:[` · `,v.studyName,!d.suppressed&&` · В срезе: ${d.sampleSize}`]})]}),d.suppressed&&y!==`summary`?(0,b.jsx)(`div`,{className:`slide-text`,children:r(d.suppressed)}):v?(0,b.jsxs)(`div`,{className:`slide-story`,"data-fit":!0,children:[(0,b.jsx)(l,{story:v,kind:y,cards:!w}),w&&(0,b.jsxs)(`div`,{className:`story-note`,children:[(0,b.jsx)(`h2`,{children:`Вывод аналитика`}),(0,b.jsx)(`p`,{children:w})]}),t.quote&&y===`evp`&&(0,b.jsx)(`blockquote`,{children:t.quote})]}):y===`text`?(0,b.jsx)(`div`,{"data-fit":!0,className:`slide-text`,children:w}):y===`summary`?(0,b.jsxs)(`div`,{"data-fit":!0,className:`slide-summary`,children:[(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Вопрос`}),(0,b.jsx)(`th`,{children:`Ответили`}),(0,b.jsx)(`th`,{children:`Пропуски`}),(0,b.jsx)(`th`,{children:`Не задавался`})]})}),(0,b.jsx)(`tbody`,{children:t.summary?.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:e.title}),e.suppressed?(0,b.jsx)(`td`,{colSpan:3,children:r(e.suppressed)}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`td`,{children:e.valid}),(0,b.jsx)(`td`,{children:e.missing}),(0,b.jsx)(`td`,{children:e.notAsked})]})]},e.title))})]}),w&&(0,b.jsx)(`p`,{children:w})]}):(0,b.jsxs)(`div`,{className:`slide-body`+(w?``:` full-chart`),children:[(0,b.jsxs)(`section`,{className:`slide-chart`,children:[(0,b.jsx)(`h2`,{children:C||d.question}),y===`comparison`?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{className:`slide-unit`,children:`Количество и доля от ответивших на вопрос. Значимость не оценивалась.`}),!d.suppressed&&(0,b.jsx)(f,{analysis:d,columns:t.comparison??[],className:`slide-comparison`})]}):(0,b.jsxs)(b.Fragment,{children:[x&&!C&&(0,b.jsx)(`p`,{children:x}),(0,b.jsx)(`p`,{className:`slide-unit`,children:`Число ответов`}),!d.suppressed&&(0,b.jsx)(p,{analysis:g(d)})]})]}),w&&(0,b.jsxs)(`aside`,{className:`slide-insight`,children:[(0,b.jsx)(`h2`,{children:`Вывод аналитика`}),(0,b.jsx)(`p`,{"data-fit":!0,className:`slide-note`,children:w})]})]}),(0,b.jsxs)(`footer`,{className:`slide-footer`,children:[(0,b.jsxs)(`div`,{children:[y===`indices`&&!d.suppressed&&(0,b.jsx)(`p`,{children:`Базы по порядку: вовлечённость — отзывы, намерение остаться, мотивация; EVP — обмен информацией, процессы, поддержка, обратная связь, развитие, гордость за продукты.`}),(0,b.jsx)(`p`,{children:d.suppressed?``:v?`Базы — валидные ответы по каждому вопросу. * Менее ${e} ответов: вывод предварительный.`:y===`comparison`?`Численность среза: ${d.sampleSize}. Базы каждого подразделения указаны в таблице.`:y===`summary`||y===`text`?`Численность среза: ${d.sampleSize}.`:`Численность среза: ${d.sampleSize}. Ответов на вопрос: ${d.valid}. Пропусков: ${d.missing}. Не задавался: ${d.notAsked??0}.`}),(0,b.jsxs)(`p`,{children:[!v&&!d.suppressed&&a(d.valid),` Данные: `,d.dataVersion,`. Метод: `,d.methodVersion,x||v?` · `+s:``,`.`]})]}),(0,b.jsx)(`span`,{children:String(i).padStart(2,`0`)})]})]})}function S({snapshots:e,title:t,logo:n}){return(0,b.jsxs)(b.Fragment,{children:[t!==void 0&&(0,b.jsxs)(`article`,{className:`slide report-cover`,"aria-label":`Обложка отчёта`,children:[(0,b.jsxs)(`header`,{children:[(0,b.jsx)(`h1`,{children:`Опрос сотрудников`}),(0,b.jsx)(`p`,{"data-fit":!0,children:t})]}),(0,b.jsxs)(`div`,{"aria-hidden":`true`,className:`cover-art`,children:[(0,b.jsx)(`i`,{}),(0,b.jsx)(`i`,{}),(0,b.jsx)(`i`,{}),(0,b.jsx)(`i`,{})]}),(0,b.jsxs)(`footer`,{children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`BIG VOICE / 2026`}),(0,b.jsx)(`span`,{children:`Искусственные данные`})]}),(0,b.jsx)(`img`,{src:n,alt:`BIOCAD`})]})]}),e.map((e,r)=>(0,b.jsx)(x,{snapshot:e,logo:n,page:r+(t===void 0?1:2)},r))]})}var C=`.distribution {
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

.slide-brand {border-bottom:1px solid var(--color-border);padding-bottom:12px;height:44px}
.report-metrics {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.report-metrics section {background:var(--color-bg-subtle);border-radius:var(--radius-md);padding:12px 16px}
.report-metrics h2 {font:600 18px/1.25 var(--font-ui)}
.report-metrics dl {display:flex;gap:12px;margin:9px 0 0}
.report-metrics dl div {flex:1;min-width:0}
.report-metrics dt {font-size:13px;color:var(--color-ink-muted)}
.report-metrics dd {margin:4px 0 0}
.report-metrics strong {display:block;font:500 24px/1.2 var(--font-mono);color:var(--color-accent-text)}
.report-metrics dl div + div strong {color:var(--color-ink)}
.report-retention {display:flex;align-items:baseline;flex-wrap:wrap;gap:6px 20px;border-bottom:1px solid var(--color-border);padding:10px 0;font-size:14px}
.report-retention strong {font-family:var(--font-mono)}
.report-retention small {display:inline;margin-left:6px}
.evp-pair section {border-radius:var(--radius-md);border-top:0}
.evp-track {height:6px;background:var(--color-border);border-radius:var(--radius-full);margin-top:16px}
.evp-track i {display:block;height:100%;border-radius:inherit;background:var(--color-accent)}
.slide .story-note {border-left:3px solid var(--color-accent);padding-left:16px}

.slide.report-cover {
  position:relative;
  isolation:isolate;
  justify-content:space-between;
  background:var(--primary-900);
  color:white;
  padding:66px 72px 46px;
}
.report-cover header {width:88%;z-index:1}
.report-cover header::before {content:"";display:block;width:132px;height:5px;background:var(--primary-500);margin-bottom:28px}
.report-cover h1 {font:400 78px/1.1 var(--font-display)}
.report-cover header p {max-width:850px;margin-top:22px;overflow-wrap:anywhere;font:400 29px/1.35 var(--font-ui);color:var(--primary-100)}
.report-cover footer {z-index:1;display:flex;align-items:end;justify-content:space-between}
.report-cover footer strong,.report-cover footer span {display:block}
.report-cover footer strong {font:500 21px/1.4 var(--font-mono)}
.report-cover footer span {font:400 16px/1.5 var(--font-ui);color:var(--primary-200)}
.report-cover footer img {width:135px;filter:brightness(0) invert(1)}
.cover-art {position:absolute;right:0;bottom:104px;width:540px;height:242px;z-index:-1}
.cover-art i {position:absolute}
.cover-art i:nth-child(1) {width:225px;height:225px;border:29px solid var(--green-300);border-radius:50%;top:14px}
.cover-art i:nth-child(2) {left:135px;top:8px;width:219px;height:219px;border:21px dotted var(--primary-500);border-radius:50%}
.cover-art i:nth-child(3) {inset:24px 0 10px 300px;background:radial-gradient(circle,var(--primary-400) 1px,transparent 2px) 0 0/11px 11px}
.cover-art i:nth-child(4) {width:160px;height:160px;right:-95px;top:52px;border-radius:50%;background:var(--red-500)}
`,w=1280,T=720,E=`./portal5/`,D=`http://www.w3.org/2000/svg`;async function O(e){let t=await fetch(E+e);if(!t.ok)throw Error(`Не удалось загрузить оформление отчёта. Обновите страницу и повторите действие.`);return t}function k(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error),r.readAsDataURL(e)})}async function A(){let e=await Promise.all([`palette`,`semantic`,`foundations`,`fonts`].map(async e=>(await O(`tokens/`+e+`.css`)).text())),t=e.pop(),n=[...new Set([...t.matchAll(/url\('\.\.\/fonts\/([^']+)'\)/g)].map(e=>e[1]))],r=await Promise.all(n.map(async e=>[e,await k(await(await O(`fonts/`+e)).blob())])),i=t;for(let[e,t]of r)i=i.replaceAll(`../fonts/`+e,t);let a=await k(await(await O(`assets/logo-full.svg`)).blob());return{css:[...e,i,C].join(`
`),logo:a}}var j;function M(){return j??=A().catch(e=>{throw j=void 0,e}),j}function N(e){let t=e.blocks.filter(o);if(!t.length)throw Error(`Включите в экспорт хотя бы один блок отчёта.`);return t.map(({title:e,scope:t,note:n,kind:r,story:i,quote:a,analysis:o,departmentIds:s,comparison:c,summary:l})=>({draft:{title:e,scope:t,note:n},kind:r,story:i,quote:a,analysis:o,departmentIds:s,comparison:c,summary:l}))}async function P(e){let t=N(e),{css:n,logo:r}=await M(),i=document.createElement(`div`),a=(0,y.createRoot)(i);try{return(0,v.flushSync)(()=>a.render((0,b.jsx)(S,{snapshots:t,title:e.title,logo:r}))),`<!doctype html><html lang="ru"><head><meta charset="utf-8"><title>BIG VOICE — отчёт</title><style>`+n+`
html,body{margin:0;padding:0;background:white}@page{size:1280px 720px;margin:0}</style></head><body>`+i.innerHTML+`</body></html>`}finally{a.unmount()}}async function F(e,t){let n=document.createElementNS(D,`svg`);n.setAttribute(`width`,String(w*2)),n.setAttribute(`height`,String(T*2)),n.setAttribute(`viewBox`,`0 0 ${w} ${T}`);let r=document.createElementNS(D,`style`);r.textContent=t;let i=document.createElementNS(D,`foreignObject`);i.setAttribute(`width`,String(w)),i.setAttribute(`height`,String(T)),i.append(e.cloneNode(!0)),n.append(r,i);let a=new XMLSerializer().serializeToString(n),o=new Image;o.src=`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(a),await o.decode();let s=document.createElement(`canvas`);s.width=w*2,s.height=T*2;let c=s.getContext(`2d`);if(!c)throw Error(`Браузер не смог подготовить слайд к скачиванию.`);return c.fillStyle=`#fff`,c.fillRect(0,0,s.width,s.height),c.drawImage(o,0,0),new Promise((e,t)=>s.toBlob(n=>{n?e(n):t(Error(`Браузер не смог создать изображение слайда.`))},`image/png`))}async function*I(e){let t=await P(e),n=document.createElement(`iframe`);n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`tabindex`,`-1`),n.setAttribute(`sandbox`,`allow-same-origin`),n.style.cssText=`position:fixed;left:-10000px;top:0;width:${w}px;height:${T}px;border:0;pointer-events:none`;let r=new Promise((e,t)=>{n.onload=()=>e(),n.onerror=()=>t(Error(`Предпросмотр отчёта не открылся.`))});n.srcdoc=t,document.body.append(n);try{await r;let e=n.contentDocument;await e.fonts.ready;let t=Array.from(e.querySelectorAll(`.slide`));for(let e of t)for(let t of e.querySelectorAll(`[data-fit]`))if(t.scrollWidth>t.clientWidth+1||t.scrollHeight>t.clientHeight+1)throw Error(`Текст не помещается на слайде. Сократите заголовок или вывод и повторите экспорт.`);let{css:i}=await M();for(let e of t)yield await F(e,i)}finally{n.remove()}}async function L(e,t){if(t===`pdf`){let{PDFDocument:t}=await d(async()=>{let{PDFDocument:e}=await import(`./es-BPGsVxw2.js`);return{PDFDocument:e}},__vite__mapDeps([0,1])),n=await t.create();n.setTitle(e.title),n.setAuthor(`BIG VOICE`);for await(let t of I(e)){let e=await n.embedPng(await t.arrayBuffer());n.addPage([960,540]).drawImage(e,{x:0,y:0,width:960,height:540})}return new Blob([new Uint8Array(await n.save())],{type:`application/pdf`})}let{default:n}=await d(async()=>{let{default:e}=await import(`./pptxgen.es-DV2nfTlH.js`);return{default:e}},__vite__mapDeps([2,1,3,4])),r=new n;r.layout=`LAYOUT_WIDE`,r.title=e.title,r.author=`BIG VOICE`;let i=e.blocks.filter(o),a=0;for await(let t of I(e)){let n=a===0?e.title:i[a-1].title;a++,r.addSlide().addImage({data:await k(t),x:0,y:0,w:13.333333,h:7.5,altText:n})}return await r.write({outputType:`blob`,compression:!0})}export{L as exportPublicReport,P as renderPublicReport};