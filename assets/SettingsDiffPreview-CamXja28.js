import{$r as e,Ct as t,Jr as n,M as r,N as i,Xr as a,x as o}from"./index-CmmbfpRb.js";var s=e(a(),1),c=n(),l=`// Resolve the user's display preferences with a simple cascade.
function resolvePrefs(user) {
  if (!user) return DEFAULT_PREFS;
  const stored = localStorage.getItem('pyor:prefs');
  if (stored) return JSON.parse(stored);
  return { theme: user.theme, lineDiffStyle: 'word' };
}

// Fast path for the common case (signed-in user, no overrides).
export function loadPrefs(user) {
  const start = performance.now();
  const prefs = resolvePrefs(user);
  console.log('loadPrefs', performance.now() - start, 'ms');
  return prefs;
}
`,u=`// Resolve the user's display preferences via TanStack Query so
// changes from Settings propagate live to every open Changes tab.
function resolvePrefs(user) {
  if (!user) return DEFAULT_PREFS;
  const stored = localStorage.getItem('pyor:diffPrefs');
  if (stored) return JSON.parse(stored);
  return { theme: user.theme, lineDiffStyle: 'word-alt' };
}

export function loadPrefs(user) {
  return resolvePrefs(user);
}
`,d={filename:`src/util/prefs.ts`,status:`modified`,additions:4,deletions:8,changes:12,patch:null},f=new Map([[`src/util/prefs.ts`,{oldText:l,newText:u,isBinary:!1}]]);function p(){let{prefs:e}=t(),n=(0,s.useMemo)(()=>r([d],f,{ignoreWhitespace:!0,headSha:`pyor-settings-preview-head`,baseSha:`pyor-settings-preview-base`}),[]),a=(0,s.useMemo)(()=>({stickyHeaders:!1,enableGutterUtility:!1,enableLineSelection:!1,diffStyle:`split`,layout:{paddingTop:0,paddingBottom:12,gap:0},...e.theme?{theme:e.theme}:{},...e.lineDiffStyle?{lineDiffType:e.lineDiffStyle}:{},unsafeCSS:o}),[e.theme,e.lineDiffStyle]);return(0,c.jsxs)(`div`,{className:`relative mt-3.5 flex h-[280px] flex-col overflow-hidden rounded-lg border bg-canvas`,style:{"--diffs-font-size":`${e.fontSize}px`,"--diffs-line-height":`${e.lineHeight}px`},children:[(0,c.jsx)(`div`,{className:`flex h-[26px] flex-shrink-0 items-center border-b bg-surface px-2.5 text-[11px] text-muted-foreground`,children:`Preview`}),(0,c.jsx)(i,{items:n.items,options:a,className:`min-h-0 flex-1 overflow-auto`})]})}export{p as SettingsDiffPreview};
//# sourceMappingURL=SettingsDiffPreview-CamXja28.js.map