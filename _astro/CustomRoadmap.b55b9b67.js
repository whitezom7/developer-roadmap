import{j as e}from"./jsx-runtime.6940b965.js";import{r as m}from"./index.070054a4.js";import{g as I}from"./browser.6245b9a5.js";import{d as T,c as C,a as $,h as M}from"./http.387f5009.js";import{c as w}from"./classname.585fc13a.js";import{u as x}from"./index.2d760e66.js";import{c as S,a as c}from"./roadmap.9fae4e3a.js";import{S as R,M as U,L,T as B}from"./ShareOptionsModal.151cee26.js";import{c as k}from"./createLucideIcon.3c9fdece.js";import{p as D}from"./page.c1a8a472.js";import{i as P}from"./jwt.ab9b7b25.js";/* empty css                       */import{u as z}from"./use-toast.fb52de5d.js";import{u as A}from"./use-outside-click.d7ce4a3d.js";import{S as F}from"./shapes.18fdadc5.js";import{R as _}from"./RoadmapRenderer.6e8d4983.js";import{TopicDetail as E}from"./TopicDetail.c8f205c2.js";import{UserProgressModal as H}from"./UserProgressModal.5377e277.js";import"./use-keydown.bb1f91bb.js";import"./index.3e34842a.js";import"./index.a98c85f5.js";import"./users-2.dc7091e7.js";import"./users.9673a18c.js";import"./use-copy-text.77785bb1.js";import"./check-circle.045c0bed.js";import"./copy.2caf0f52.js";import"./toast.1fe7142d.js";import"./renderer.2494036d.js";import"./index.5f60dc5b.js";import"./resource-progress.9335d95d.js";import"./close.bb7a0ac2.js";import"./spinner.6a5ba5e9.js";import"./popup.a359f713.js";import"./markdown.9aebbb7a.js";import"./index.es.ebad3893.js";import"./use-auth.86ed5fb5.js";import"./Spinner.799b0955.js";import"./ErrorIcon.977ee49a.js";const O=k("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),N=k("ShieldBan",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m4 5 14 12",key:"1ta6nf"}]]);function G(r){const{isSecondaryBanner:t=!1}=r,[s,a]=m.useState(!1),i=x(S),n=x(c);return e.jsxs(e.Fragment,{children:[s&&i&&n&&e.jsx(R,{visibility:n?.visibility,teamId:n?.teamId,roadmapId:n?._id,sharedFriendIds:n?.sharedFriendIds||[],sharedTeamMemberIds:n?.sharedTeamMemberIds||[],onClose:()=>a(!1),onShareSettingsUpdate:o=>{c.set({...n,...o})}}),e.jsxs("div",{"data-progress-nums-container":"",className:w("striped-loader relative hidden items-center justify-between bg-white px-2 py-1.5 sm:flex",{"rounded-bl-md rounded-br-md":t,"rounded-md":!t}),children:[e.jsxs("p",{className:"flex text-sm opacity-0 transition-opacity duration-300","data-progress-nums":"",children:[e.jsxs("span",{className:"mr-2.5 rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e.jsx("span",{"data-progress-percentage":"",children:"0"}),"% Done"]}),e.jsxs("span",{className:"itesm-center hidden md:flex",children:[e.jsxs("span",{children:[e.jsx("span",{"data-progress-done":"",children:"0"})," completed"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-learning":"",children:"0"})," in progress"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-skipped":"",children:"0"})," skipped"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-total":"",children:"0"})," Total"]})]}),e.jsxs("span",{className:"md:hidden",children:[e.jsx("span",{"data-progress-done":"",children:"0"})," of"," ",e.jsx("span",{"data-progress-total":"",children:"0"})," Done"]})]}),e.jsx("div",{className:"flex items-center gap-3 opacity-0 transition-opacity duration-300","data-progress-nums":"",children:e.jsxs("button",{"data-popup":"progress-help",className:"flex items-center gap-1 text-sm font-medium text-gray-500 opacity-0 transition-opacity hover:text-black","data-progress-nums":"",children:[e.jsx(O,{className:"h-3.5 w-3.5 stroke-[2.5px]"}),"Track Progress"]})})]}),e.jsx("div",{"data-progress-nums-container":"",className:"striped-loader relative -mb-2 flex items-center justify-between rounded-md border bg-white px-2 py-1.5 text-sm text-gray-700 sm:hidden",children:e.jsxs("span",{"data-progress-nums":"",className:"text-gray-500 opacity-0 transition-opacity duration-300",children:[e.jsx("span",{"data-progress-done":"",children:"0"})," of"," ",e.jsx("span",{"data-progress-total":"",children:"0"})," Done"]})})]})}function V(r){const{roadmapTitle:t,roadmapId:s,hasTNSBanner:a=!1,tnsBannerLink:i=""}=r;return e.jsxs("div",{className:w("mb-0 mt-4 rounded-md border-0 sm:mt-7 sm:border",{"sm:-mb-[82px]":a,"sm:-mb-[65px]":!a}),children:[a&&e.jsx("div",{className:"hidden border-b bg-gray-100 px-2 py-1.5 sm:block",children:e.jsxs("p",{className:"text-sm",children:["Get the latest ",t," news from our sister site"," ",e.jsx("a",{href:i,target:"_blank",className:"font-semibold underline",children:"TheNewStack.io"})]})}),e.jsx(G,{isSecondaryBanner:a,resourceId:s,resourceType:"roadmap"})]})}function q(r){const{onDelete:t,onUpdateSharing:s,onCustomize:a}=r,i=m.useRef(null),[n,o]=m.useState(!1);return A(i,()=>{o(!1)}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{disabled:!1,onClick:()=>o(!n),className:"inline-flex items-center justify-center rounded-md bg-gray-500 py-1.5 pl-2 pr-2 text-xs font-medium text-white hover:bg-gray-600 sm:pl-1.5 sm:pr-3 sm:text-sm",children:[e.jsx(U,{className:"mr-0 h-4 w-4 stroke-[2.5] sm:mr-1.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Actions"})]}),n&&e.jsx("div",{ref:i,className:"align-right absolute right-0 top-full z-50 mt-1 w-[140px] rounded-md bg-slate-800 px-2 py-2 text-white shadow-md",children:e.jsxs("ul",{children:[s&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{o(!1),s()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(L,{size:14,className:"mr-2"}),"Sharing"]})}),a&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{o(!1),a()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(F,{size:14,className:"mr-2"}),"Customize"]})}),t&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{o(!1),t()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(B,{size:14,className:"mr-2"}),"Delete"]})})]})})]})}function J(r){const t=x(S),s=x(c),{title:a,description:i,_id:n,creator:o,team:u}=x(c)||{},[j,h]=m.useState(!1),p=z();async function l(){D.set("Deleting roadmap");const d=s?.teamId,y="https://api.roadmap.sh";let g,b;if(d?{error:g,response:b}=await T(`${y}/v1-delete-team-resource-config/${d}`,{resourceId:n,resourceType:"roadmap"}):{error:g,response:b}=await C(`${y}/v1-delete-roadmap/${n}`),g||!b){p.error(g?.message||"Something went wrong");return}p.success("Roadmap removed"),d?window.location.href=`/team/roadmaps?t=${d}`:window.location.href="/account/roadmaps"}const f=o?.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${o?.avatar}`:"/images/default-avatar.png";return e.jsx("div",{className:"border-b",children:e.jsxs("div",{className:"container relative py-5 sm:py-12",children:[o?.name&&e.jsxs("div",{className:"-mb-1 flex items-center gap-1.5 text-sm text-gray-500",children:[e.jsx("img",{alt:o.name,src:f,className:"h-5 w-5 rounded-full"}),e.jsxs("span",{children:["Created by ",e.jsx("span",{className:"font-semibold text-gray-900",children:o?.name}),u&&e.jsxs(e.Fragment,{children:[" in ",e.jsx("span",{className:"font-semibold text-gray-900",children:u?.name})]})]})]}),e.jsxs("div",{className:"mb-3 mt-4 sm:mb-4",children:[e.jsx("h1",{className:"text-2xl font-bold sm:mb-2 sm:text-4xl",children:a}),e.jsx("p",{className:"mt-0.5 text-sm text-gray-500 sm:text-lg",children:i})]}),e.jsxs("div",{className:"flex justify-between gap-2 sm:gap-0",children:[e.jsxs("div",{className:"flex gap-1 sm:gap-2",children:[e.jsxs("a",{href:"/roadmaps",className:"rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm","aria-label":"Back to All Roadmaps",children:["←",e.jsx("span",{className:"hidden sm:inline",children:" All Roadmaps"})]}),e.jsx("button",{"data-guest-required":!0,"data-popup":"login-popup",className:"inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm","aria-label":"Subscribe for Updates",children:e.jsx("span",{className:"ml-2",children:"Subscribe"})})]}),t&&e.jsxs("div",{className:"flex items-center gap-2",children:[j&&s&&e.jsx(R,{visibility:s?.visibility,teamId:s?.teamId,roadmapId:s?._id,sharedFriendIds:s?.sharedFriendIds||[],sharedTeamMemberIds:s?.sharedTeamMemberIds||[],onClose:()=>h(!1),onShareSettingsUpdate:d=>{c.set({...s,...d})}}),e.jsx(q,{onDelete:()=>{window.confirm("Are you sure you want to delete this roadmap?")&&l().finally(()=>null)},onCustomize:()=>{const d=`https://draw.roadmap.sh/${s?._id}`;window.open(d,"_blank")},onUpdateSharing:()=>{h(!0)}})]})]}),e.jsx(V,{roadmapTitle:a,hasTNSBanner:!1,roadmapId:n})]})})}function K(r){const{error:t}=r;return t.status===404?e.jsx(v,{icon:e.jsx(N,{className:"h-16 w-16"}),title:"Roadmap not found",message:"The roadmap you are looking for does not exist or has been deleted."}):e.jsx(v,{icon:e.jsx(N,{className:"h-16 w-16"}),title:"Restricted Access",message:t?.message})}function v(r){const{title:t,message:s,icon:a}=r;return e.jsxs("div",{className:"flex grow flex-col items-center justify-center",children:[a,e.jsx("h2",{className:"mt-4 text-2xl font-semibold",children:t}),e.jsx("p",{children:s||"This roadmap is not available for public access."}),e.jsx("a",{href:"/",className:"mt-4 font-medium underline underline-offset-2 hover:no-underline",children:"← Go back to home"})]})}function Q(){const r=document.querySelector("[data-roadmap-loader]");r&&r.remove()}function Be(){const{id:r,secret:t}=I(),[s,a]=m.useState(!0),[i,n]=m.useState(null),[o,u]=m.useState();async function j(){a(!0);const p=new URL(`https://api.roadmap.sh/v1-get-roadmap/${r}`);t&&p.searchParams.set("secret",t);const{response:l,error:f}=await $(p.toString());if(f||!l){u(f),a(!1);return}document.title=`${l.title} - roadmap.sh`,n(l),c.set(l),a(!1)}async function h(){P()&&await M("https://api.roadmap.sh/v1-visit",{resourceId:r,resourceType:"roadmap"})}return m.useEffect(()=>{j().finally(()=>{Q()}),h().then()},[]),s?null:o?e.jsx(K,{error:o}):e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(_,{roadmap:i}),e.jsx(E,{canSubmitContribution:!1}),e.jsx(H,{resourceId:i?._id,resourceType:"roadmap",isCustomResource:!0})]})}export{Be as CustomRoadmap};
