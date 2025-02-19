"use strict";(self.webpackChunkfl_assistant=self.webpackChunkfl_assistant||[]).push([[831],{6844:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(8168),l=a(1594),s=a.n(l),r=a(2405),c=a(2470),m=a(1880),o=a(6075),i=a(8566),u=a(6923),p=a.n(u);const d=({children:e,maxHeight:t=150})=>{const[a,n]=(0,l.useState)(!1),[c,o]=(0,l.useState)(!1),i=(0,l.useRef)(null);(0,l.useLayoutEffect)((()=>{i.current&&i.current.offsetHeight>t?n(!0):o(!0)}),[]);const u={open:{height:"auto",transition:{ease:"easeInOut"}},truncated:{height:t,transition:{ease:"easeInOut"}}};return s().createElement("div",{className:"fl-asst-limit-content"},!a&&s().createElement("div",{className:"fl-asst-limit-content-cell"},s().createElement("div",{ref:i},e)),a&&s().createElement(m.motion.div,{className:"fl-asst-limit-content-cell",initial:!1,animate:c?"open":"truncated",variants:u},s().createElement("div",{ref:i},e),a&&s().createElement(m.motion.div,{className:"fl-asst-limit-content-fadeout",initial:!1,animate:c?"open":"truncated",variants:{open:{opacity:0},truncated:{opacity:1}}})),a&&s().createElement(r.Layout.Row,null,s().createElement(r.Button,{className:"fl-asst-limit-content-expand-button",appearance:"transparent",onClick:e=>{o(!c),e.stopPropagation(),e.preventDefault()}},s().createElement(r.Icon.Ellipsis,null))))};var E=a(9489);const f=({items:e=[]})=>!e||1>e.length?null:s().createElement("div",{className:"fl-asst-item-extras"},e.map(((e,t)=>{const a={handle:"",icon:s().createElement(r.Icon.Placeholder,null),isShowing:!0,component:r.Button,appearance:"transparent",tabIndex:-1,...e},{component:l,isShowing:c,icon:m,handle:o,className:i,...u}=a;if("function"==typeof c&&!c(e))return null;if(!c)return null;const d=p()({[`fl-asst-item-action-${o}`]:o},i);return s().createElement(l,(0,n.A)({key:t,className:d},u),m)}))),h=({isPending:e=!1,isSpam:t=!1,isTrash:a=!1})=>s().createElement("div",{className:"fl-asst-comment-gutter"},s().createElement("div",{className:"fl-asst-thread-line"}),s().createElement("div",{className:"fl-asst-gutter-dot-area"},s().createElement("div",{className:p()({"fl-asst-dot":!0,"is-pending":e,"is-spam":t,"is-trash":a})}))),v=({name:e,avatar:t,date:a})=>s().createElement("div",{className:"fl-asst-comment-header"},s().createElement("div",{className:"fl-asst-comment-avatar"},s().createElement(r.Layout.AspectBox,{style:{width:30,backgroundImage:`url(${t})`,backgroundSize:"cover"}})),s().createElement("div",{className:"fl-asst-comment-author-name"},e,a&&s().createElement("span",{className:"fl-asst-comment-since"},a))),g=({url:e,ip:t,email:a})=>{const n=e=>e.stopPropagation();return s().createElement("div",{className:"fl-asst-comment-meta"},e&&s().createElement("span",{className:"fl-asst-comment-meta-value"},s().createElement("strong",null,(0,c.__)("URL")," "),s().createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",onClick:n},e)),t&&s().createElement("span",{className:"fl-asst-comment-meta-value"},s().createElement("strong",null,(0,c.__)("IP Address")," "),s().createElement("span",null,t)),a&&s().createElement("span",{className:"fl-asst-comment-meta-value"},s().createElement("strong",null,(0,c.__)("Email")," "),s().createElement("a",{href:`mailto:${a}`,onClick:n},a)))},_=({onDismiss:e,id:t,postID:a})=>{const n=(0,l.useRef)(),[o,i]=(0,l.useState)(!1),u=e=>{e.stopPropagation(),e.preventDefault()};return(0,l.useEffect)((()=>{n.current&&n.current.focus()}),[]),o?s().createElement(r.Layout.Row,{padY:!0,style:{background:"var(--fluid-primary-background)",color:"var(--fluid-primary-color)",borderRadius:"var(--fluid-radius)",marginTop:10}},(0,c.__)("Success! Your reply was posted.")):s().createElement(m.motion.div,{style:{padding:"20px 0 5px"},initial:{scale:0},animate:{scale:1}},s().createElement("textarea",{ref:n,onClick:u,placeholder:(0,c.__)("Type Your Reply..."),style:{maxWidth:"100%",minHeight:100,resize:"none"}}),s().createElement(r.Layout.Row,{style:{padding:"5px 0"}},s().createElement(r.Button,{onClick:t=>{e(),u(t)}},(0,c.__)("Cancel")),s().createElement(r.Button,{status:"primary",onClick:e=>{""!==n.current.value&&(0,E.replyToComment)(t,a,n.current.value,(()=>{})).then((()=>{i(!0)})),u(e)},style:{marginLeft:"auto"}},(0,c.__)("Reply"))))},y=({id:e,content:t,isPending:a,isSpam:n,isTrash:m,author:o,post:i,to:u,className:E,actions:y,approveComment:C,unapproveComment:k,spamComment:N,unspamComment:I,trashComment:R,restoreComment:S})=>{const[b,w]=(0,l.useState)(!1),P=[{handle:"reply",title:(0,c.__)("Reply"),icon:s().createElement(r.Icon.Reply,null),onClick:()=>w(!b)},{handle:"approve",onClick:a?C:k,title:a?(0,c.__)("Approve"):(0,c.__)("Reject"),icon:a?s().createElement(r.Icon.Approve,null):s().createElement(r.Icon.Reject,null)},{handle:"spam",onClick:n?I:N,title:n?(0,c.__)("Unmark as Spam"):(0,c.__)("Mark as Spam"),icon:n?s().createElement(r.Icon.Unspam,null):s().createElement(r.Icon.Spam,null)},{handle:"trash",status:"destructive",onClick:m?S:R,title:m?(0,c.__)("Restore"):(0,c.__)("Move to trash"),icon:m?s().createElement(r.Icon.Restore,null):s().createElement(r.Icon.Trash,null)}];return s().createElement("li",{className:p()({"is-spam":n,"is-pending":a,"is-trash":m},E)},s().createElement(r.Button,{to:u,style:{display:"flex",flexDirection:"row",padding:0}},s().createElement(h,{isPending:a,isSpam:n,isTrash:m}),s().createElement("div",{className:"fl-asst-comment-cell"},s().createElement(v,o),a&&!n&&!m&&s().createElement(g,o),s().createElement(d,null,s().createElement("div",{className:"fl-asst-comment-content",dangerouslySetInnerHTML:{__html:t}})),b&&s().createElement(_,{id:e,postID:i.id,onDismiss:()=>w(!1)}))),s().createElement(f,{items:[...y,...P]}))},C=({baseURL:e})=>{const{type:t}=(0,o.useAppState)("fl-comments"),a=r.Env.use();return s().createElement(m.AnimatePresence,null,s().createElement(r.List.Comments,{className:"fl-asst-comment-list",type:t,direction:null,getItemComponent:()=>y,getItemProps:(t,n)=>{const{id:l,content:m,approved:o,spam:u,trash:p,thumbnail:d,authorName:E,authorEmail:f,authorIP:h,authorURL:v,timeDiff:g,post:_}=t,y={pathname:`${e}/comment/${l}`,state:{item:t}},C=(0,i.applyFilters)("fl-asst.list-item-actions",[{handle:"view-comment",href:t.url,title:(0,c.__)("View Comment"),icon:s().createElement(r.Icon.View,null)},{handle:"edit-comment",to:y,title:(0,c.__)("Edit Comment"),icon:s().createElement(r.Icon.Edit,null)}],{item:t,listType:"comment",env:a});return{...n,...t,key:l,content:m,isPending:!o,isSpam:u,isTrash:p,post:_,author:{name:E,avatar:d,date:g,email:f,ip:h,url:v},to:y,actions:C}}}))};var k=a(3151);const N=()=>{const{type:e}=(0,o.useAppState)("fl-comments"),{setType:t}=(0,o.getAppActions)("fl-comments");return s().createElement(r.Filter,null,s().createElement(r.Filter.RadioGroupItem,{title:(0,c.__)("Status"),items:k.bM,value:e,defaultValue:k.kj,onChange:e=>t(e)}),s().createElement(r.Filter.Button,{onClick:()=>t(k.kj)},(0,c.__)("Reset Filter")))};var I=a(5501);const R=({label:e,baseURL:t})=>s().createElement(r.Page,{id:"fl-comments-list-page",padX:!1,padY:!1,title:e,header:s().createElement(N,null),icon:s().createElement(I.A,{context:"sidebar"}),shouldShowBackButton:!1,shouldScroll:!1},s().createElement(C,{baseURL:t})),S=r.Page.Comment,b=e=>s().createElement(r.App.Config,(0,n.A)({pages:{default:R,"comment/:id":S}},e))},8168:(e,t,a)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(null,arguments)}a.d(t,{A:()=>n})}}]);