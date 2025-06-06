import{j as r,F as Yr,a as Zr}from"./jsx-runtime-CVkQBkwt.js";import{c as Hr}from"./main-CC60pO_z.js";import{B as z}from"./index-BYl7pwD6.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const I=Hr({base:"inline-flex items-center justify-center rounded-full text-xs font-medium",variants:{variant:{default:"bg-gray-900 text-white",primary:"bg-blue-600 text-white",secondary:"bg-gray-500 text-white",success:"bg-green-600 text-white",warning:"bg-yellow-600 text-white",error:"bg-red-600 text-white",outline:"border border-gray-200 text-gray-800"},size:{sm:"h-4 min-w-4 px-1",md:"h-5 min-w-5 px-1.5",lg:"h-6 min-w-6 px-2"},shape:{rounded:"rounded-md",pill:"rounded-full",square:"rounded-none"},position:{"top-right":"absolute -top-1 -right-1","top-left":"absolute -top-1 -left-1","bottom-right":"absolute -bottom-1 -right-1","bottom-left":"absolute -bottom-1 -left-1"}},defaultVariants:{variant:"default",size:"md",shape:"pill"}}),re=({className:e,variant:C,size:E,shape:F,position:Kr,content:B,max:q=99,dot:W=!1,visible:Qr=!0,role:P="status","aria-label":j,"aria-hidden":A,unstyled:V=!1,pt:Xr,children:D,...$})=>{const M=Xr||{},T=()=>W?null:typeof B=="number"&&B>q?`${q}+`:B;return Qr?D?Zr("div",{className:"relative inline-flex",children:[D,r("span",{className:V?e:I({variant:C,size:E,shape:F,position:Kr,class:`${W?"h-2 w-2 min-w-0 p-0":""} ${e||""}`}),role:P,"aria-label":j,"aria-hidden":A,...M,...$,children:T()})]}):r("span",{className:V?e:I({variant:C,size:E,shape:F,class:`${W?"h-2 w-2 min-w-0 p-0":""} ${e||""}`}),role:P,"aria-label":j,"aria-hidden":A,...M,...$,children:T()}):r(Yr,{children:D})},oe={title:"Versakit UI/Badge",component:re,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","outline"],description:"徽章的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"徽章的尺寸"},shape:{control:{type:"select"},options:["rounded","pill","square"],description:"徽章的形状"},position:{control:{type:"select"},options:["top-right","top-left","bottom-right","bottom-left"],description:"徽章的位置（当作为子元素时）"},content:{control:"text",description:"徽章内容"},max:{control:"number",description:"最大显示数量"},dot:{control:"boolean",description:"是否为点状徽章"},visible:{control:"boolean",description:"是否显示徽章"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"}}},t={args:{content:"5"}},a={args:{variant:"primary",content:"5"}},n={args:{variant:"secondary",content:"5"}},s={args:{variant:"success",content:"5"}},o={args:{variant:"warning",content:"5"}},c={args:{variant:"error",content:"5"}},i={args:{variant:"outline",content:"5"}},p={args:{size:"sm",content:"5"}},u={args:{size:"md",content:"5"}},d={args:{size:"lg",content:"5"}},l={args:{shape:"rounded",content:"5"}},m={args:{shape:"pill",content:"5"}},g={args:{shape:"square",content:"5"}},h={args:{dot:!0,variant:"error"}},b={args:{content:"100",max:99}},y={args:{content:"5",variant:"primary",position:"top-right",children:r(z,{children:"消息"})}},v={args:{dot:!0,variant:"error",position:"top-right",children:r(z,{children:"通知"})}},f={args:{content:"5",visible:!1,children:r(z,{children:"隐藏徽章"})}},S={args:{content:"5",unstyled:!0,className:"bg-purple-500 text-white px-2 py-1 rounded-full"}},x={args:{content:"5",variant:"primary",pt:{"data-testid":"custom-badge","data-custom":"custom-value"}}},w={args:{content:"5",variant:"primary","aria-label":"5 条未读消息"}};var N,O,U;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    content: "5"
  }
}`,...(U=(O=t.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var R,_,k;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    content: "5"
  }
}`,...(k=(_=a.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var L,G,J;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    content: "5"
  }
}`,...(J=(G=n.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "success",
    content: "5"
  }
}`,...(X=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,H;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    content: "5"
  }
}`,...(H=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var rr,er,tr;c.parameters={...c.parameters,docs:{...(rr=c.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    variant: "error",
    content: "5"
  }
}`,...(tr=(er=c.parameters)==null?void 0:er.docs)==null?void 0:tr.source}}};var ar,nr,sr;i.parameters={...i.parameters,docs:{...(ar=i.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    content: "5"
  }
}`,...(sr=(nr=i.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var or,cr,ir;p.parameters={...p.parameters,docs:{...(or=p.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    size: "sm",
    content: "5"
  }
}`,...(ir=(cr=p.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var pr,ur,dr;u.parameters={...u.parameters,docs:{...(pr=u.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: {
    size: "md",
    content: "5"
  }
}`,...(dr=(ur=u.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var lr,mr,gr;d.parameters={...d.parameters,docs:{...(lr=d.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    size: "lg",
    content: "5"
  }
}`,...(gr=(mr=d.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var hr,br,yr;l.parameters={...l.parameters,docs:{...(hr=l.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    shape: "rounded",
    content: "5"
  }
}`,...(yr=(br=l.parameters)==null?void 0:br.docs)==null?void 0:yr.source}}};var vr,fr,Sr;m.parameters={...m.parameters,docs:{...(vr=m.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  args: {
    shape: "pill",
    content: "5"
  }
}`,...(Sr=(fr=m.parameters)==null?void 0:fr.docs)==null?void 0:Sr.source}}};var xr,wr,Br;g.parameters={...g.parameters,docs:{...(xr=g.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  args: {
    shape: "square",
    content: "5"
  }
}`,...(Br=(wr=g.parameters)==null?void 0:wr.docs)==null?void 0:Br.source}}};var Wr,Dr,zr;h.parameters={...h.parameters,docs:{...(Wr=h.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    dot: true,
    variant: "error"
  }
}`,...(zr=(Dr=h.parameters)==null?void 0:Dr.docs)==null?void 0:zr.source}}};var Cr,Er,Fr;b.parameters={...b.parameters,docs:{...(Cr=b.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    content: "100",
    max: 99
  }
}`,...(Fr=(Er=b.parameters)==null?void 0:Er.docs)==null?void 0:Fr.source}}};var qr,Pr,jr;y.parameters={...y.parameters,docs:{...(qr=y.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  args: {
    content: "5",
    variant: "primary",
    position: "top-right",
    children: <Button>消息</Button>
  }
}`,...(jr=(Pr=y.parameters)==null?void 0:Pr.docs)==null?void 0:jr.source}}};var Ar,Vr,$r;v.parameters={...v.parameters,docs:{...(Ar=v.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  args: {
    dot: true,
    variant: "error",
    position: "top-right",
    children: <Button>通知</Button>
  }
}`,...($r=(Vr=v.parameters)==null?void 0:Vr.docs)==null?void 0:$r.source}}};var Mr,Tr,Ir;f.parameters={...f.parameters,docs:{...(Mr=f.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
  args: {
    content: "5",
    visible: false,
    children: <Button>隐藏徽章</Button>
  }
}`,...(Ir=(Tr=f.parameters)==null?void 0:Tr.docs)==null?void 0:Ir.source}}};var Nr,Or,Ur;S.parameters={...S.parameters,docs:{...(Nr=S.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    content: "5",
    unstyled: true,
    className: "bg-purple-500 text-white px-2 py-1 rounded-full"
  }
}`,...(Ur=(Or=S.parameters)==null?void 0:Or.docs)==null?void 0:Ur.source}}};var Rr,_r,kr;x.parameters={...x.parameters,docs:{...(Rr=x.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  args: {
    content: "5",
    variant: "primary",
    pt: {
      "data-testid": "custom-badge",
      "data-custom": "custom-value"
    }
  }
}`,...(kr=(_r=x.parameters)==null?void 0:_r.docs)==null?void 0:kr.source}}};var Lr,Gr,Jr;w.parameters={...w.parameters,docs:{...(Lr=w.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  args: {
    content: "5",
    variant: "primary",
    "aria-label": "5 条未读消息"
  }
}`,...(Jr=(Gr=w.parameters)==null?void 0:Gr.docs)==null?void 0:Jr.source}}};const ce=["Default","Primary","Secondary","Success","Warning","ErrorVariant","Outline","Small","Medium","Large","Rounded","Pill","Square","Dot","WithMax","WithChildren","DotWithChildren","Invisible","Unstyled","WithPassThrough","AccessibilityExample"];export{w as AccessibilityExample,t as Default,h as Dot,v as DotWithChildren,c as ErrorVariant,f as Invisible,d as Large,u as Medium,i as Outline,m as Pill,a as Primary,l as Rounded,n as Secondary,p as Small,g as Square,s as Success,S as Unstyled,o as Warning,y as WithChildren,b as WithMax,x as WithPassThrough,ce as __namedExportsOrder,oe as default};
