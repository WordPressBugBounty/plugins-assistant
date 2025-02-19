"use strict";(self.webpackChunkfl_assistant=self.webpackChunkfl_assistant||[]).push([[940],{6943:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var l=a(8168),n=a(1594),r=a.n(n),o=a(2470),c=a(9665),s=a(2405),i=a(6075),m=a(7886),u=a(7901),p=a(6271),d=a(9489);const g=()=>{const[e,t]=(0,n.useState)(null),[a,l]=(0,n.useState)(""),c="var(--fl-asst-blue)",[m,u]=(0,n.useState)(c),g=(0,d.getWpRest)(),{useLabels:b}=(0,i.getSystemHooks)(),[E,_]=b(),f=()=>{const e=Object.keys(s.Color.labelColors).shift();return s.Color.labelColors[e]},h=()=>{if(""===e.label)return void t(null);const a=(0,p.createSlug)(e.label);let l=!1;E.map((t=>{a===t.slug&&e.id!==t.id&&(l=!0)})),l||E.map(((t,l)=>{e.id===t.id&&(g.terms().update(e.id,"data",{name:e.label,slug:a,meta:{fl_asst_notation_color:e.color}}),E[l]=e,_([...E]))})),t(null)},y=E.map((a=>e&&e.id===a.id?{edit:r().createElement(r().Fragment,null,r().createElement(s.Text.Title,{style:{marginBottom:"var(--fluid-med-space)"}},(0,o.__)("Edit Label")),r().createElement("input",{type:"text",value:e.label,onChange:a=>{t({...e,label:a.target.value})}}),r().createElement(s.Control.CirclePicker,{value:e.color,onChange:a=>{t({...e,color:a})}}),r().createElement("div",{style:{display:"flex",flex:"1 1 auto"}},r().createElement(s.Button,{onClick:()=>t(null)},(0,o.__)("Cancel")),r().createElement(s.Button,{onClick:h,style:{marginLeft:"auto"},status:"primary"},(0,o.__)("Save"))))}:{color:r().createElement("div",{className:"fl-asst-label-color",style:{backgroundColor:a.color}}),label:a.label,actions:r().createElement(r().Fragment,null,r().createElement(s.Button,{onClick:()=>t(a),title:(0,o.__)("Edit Label Text"),style:{marginRight:5},icon:r().createElement(s.Icon.Edit,null)}),r().createElement(s.Button,{onClick:()=>(e=>{const t=(0,o.__)("Delete this label? It will be deleted from everywhere it is used.");confirm(t)&&E.map(((t,a)=>{e===t.id&&(g.terms().update(e,"trash"),E.splice(a,1),_([...E]))}))})(a.id),status:"destructive",title:(0,o.__)("Delete Label"),icon:r().createElement(s.Icon.Trash,null)}))}));return r().createElement("div",{className:"fl-asst-edit-labels"},r().createElement("p",{style:{marginTop:0}},(0,o.__)("Labels allow you to mark posts or pages for organization and collaborate with other users. Below you can add more labels and change the name of existing ones. Add labels to posts inside the Content app.")),r().createElement(s.Layout.Table,{rows:y}),r().createElement(s.Page.Section,{label:(0,o.__)("Create New Label"),className:"fl-asst-add-label",style:{marginTop:"auto"}},r().createElement("input",{type:"text",placeholder:(0,o.__)("Add Label"),value:a,onChange:e=>l(e.target.value)}),r().createElement(s.Control.CirclePicker,{value:m,onChange:e=>u(e)}),r().createElement(s.Button,{onClick:()=>{if(""===a)return;const e=(0,p.createSlug)(a);let t=!1;E.map((a=>{e===a.slug&&(t=!0)})),t||(g.terms().create({taxonomy:"fl_asst_label",name:a,slug:e,parent:"0",description:"",meta:{fl_asst_notation_color:m}}).then((t=>{E.map(((a,l)=>{e===a.id&&(E[l].id=t.data.id)}))})),E.push({slug:e,id:e,label:a,color:m||f()}),_([...E])),l(""),u(c)}},(0,o.__)("Create New Label"))))},b=({...e})=>r().createElement(s.App.List,(0,l.A)({className:"fl-asst-manage-app-order-list"},e),(({handle:e,label:t,icon:a,moveUp:l,moveDown:n})=>r().createElement(r().Fragment,null,r().createElement(E,null,r().createElement(s.Icon.DragHandle,null)),r().createElement(s.Button,{to:`/${e}`,onDragStart:e=>e.preventDefault(),appearance:"transparent",size:"lg",onKeyDown:e=>{e.keyCode===u.DOWN&&(n(),e.preventDefault()),e.keyCode===u.UP&&(l(),e.preventDefault())}},r().createElement("span",{className:"fl-asst-item-icon"},r().createElement(s.Icon.Safely,{icon:a,context:"manage",isSelected:!1})),t)))),E=e=>r().createElement("div",(0,l.A)({className:"fl-asst-app-drag-handle-box"},e)),_=e=>r().createElement(s.App.Config,(0,l.A)({pages:{default:f,labels:g}},e)),f=()=>r().createElement(s.Page,{title:(0,o.__)("Apps & Settings"),shouldShowBackButton:!1,icon:r().createElement(m.A,{context:"sidebar"})},r().createElement(s.Form,null,r().createElement(s.Page.Section,{contentStyle:{paddingTop:0}},r().createElement("p",{style:{marginTop:0}},(0,o.__)("You can reorder the apps below. The top 5 will appear in the sidebar for quick access.")),r().createElement(b,{before:r().createElement(h,null)})),r().createElement(y,null),r().createElement(C,null))),h=(0,n.memo)((()=>{const e=(0,c.useHistory)(),{selectHomeApp:t}=(0,i.getSystemSelectors)(),a=t();return r().createElement("li",null,r().createElement(E,null),r().createElement(s.Button,{onClick:()=>e.go(-e.length),appearance:"transparent",size:"lg",style:{flex:"1 1 auto",marginRight:"auto",justifyContent:"flex-start"}},r().createElement("span",{className:"fl-asst-item-icon"},r().createElement(s.Icon.Safely,{icon:a.icon,context:"sidebar"})),a.label))})),y=()=>{const{application:e}=s.Env.use(),{frameDefaults:t}=(0,i.getSystemConfig)(),{window:a,appearance:l}=(0,i.useSystemState)(),{setWindow:n,setBrightness:c}=(0,i.getSystemActions)(),m=e=>n({...a,origin:e});return r().createElement(s.Form.Section,{label:(0,o.__)("UI Appearance")},"beaver-builder"!==e&&r().createElement(s.Form.Item,{label:(0,o.__)("Color Scheme"),labelPlacement:"beside"},r().createElement(s.Layout.Row,{gap:5},r().createElement(s.Button,{isSelected:"light"===l.brightness,appearance:"transparent",onClick:()=>c("light")},r().createElement(s.Icon.Sun,null),"  ",(0,o.__)("Light")),r().createElement(s.Button,{isSelected:"dark"===l.brightness,appearance:"transparent",onClick:()=>c("dark")},r().createElement(s.Icon.Moon,null),"  ",(0,o.__)("Dark")))),r().createElement(s.Form.Item,{label:(0,o.__)("Display Panel On"),labelPlacement:"beside"},r().createElement(s.Layout.Row,{gap:5},r().createElement(s.Button,{isSelected:!a.origin[0],appearance:"transparent",onClick:()=>m([0,0]),icon:r().createElement(s.Icon.Sidebar,null)},(0,o.__)("Left")),r().createElement(s.Button,{isSelected:a.origin[0],appearance:"transparent",onClick:()=>m([1,0]),icon:r().createElement(s.Icon.Sidebar,{side:"right"})},(0,o.__)("Right")))),r().createElement(s.Form.Item,{label:(0,o.__)("Panel Width"),labelPlacement:"beside"},r().createElement(s.Button,{onClick:()=>n({...a,width:t.defaultWidth})},(0,o.__)("Reset To Default"))))},C=()=>r().createElement(s.Form.Section,{label:(0,o.__)("Manage Labels")},r().createElement(g,null))},8168:(e,t,a)=>{function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(null,arguments)}a.d(t,{A:()=>l})}}]);