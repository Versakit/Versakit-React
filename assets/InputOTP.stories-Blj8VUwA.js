import{j as E}from"./jsx-runtime-CVkQBkwt.js";import{r as j}from"./index-BwDkhjyp.js";import{c as Cr}from"./main-CC60pO_z.js";import"./_commonjsHelpers-BosuxZz1.js";const Vr=Cr({base:"flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-transparent text-center text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",variants:{variant:{default:"border-gray-300 focus:border-blue-500",primary:"border-blue-500 focus:border-blue-600",secondary:"border-gray-500 focus:border-gray-600",success:"border-green-500 focus:border-green-600",warn:"border-yellow-500 focus:border-yellow-600",error:"border-red-500 focus:border-red-600"},size:{sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-lg",lg:"h-12 w-12 text-xl"}},defaultVariants:{variant:"default",size:"md"}}),$r=({className:P,variant:Sr,size:wr,disabled:T,tabIndex:D,"aria-label":O,"aria-disabled":Pr,unstyled:Tr=!1,pt:Dr,length:v=6,onChange:x,...Or})=>{const xr=Dr||{},[z,Er]=j.useState(Array(v).fill("")),S=j.useRef([]),jr=(e,r)=>{var s;const a=r.target.value;if(a.length<=1){const w=[...z];w[e]=a,Er(w),a&&e<v-1&&((s=S.current[e+1])==null||s.focus()),x&&x(w.join(""))}},Ar=(e,r)=>{var a;r.key==="Backspace"&&!z[e]&&e>0&&((a=S.current[e-1])==null||a.focus())};return E("div",{className:"flex gap-2",children:Array(v).fill(0).map((e,r)=>{const a=`otp-input-${r}-${Math.random().toString(36).substr(2,9)}`;return E("input",{ref:s=>{S.current[r]=s},className:Tr?P:Vr({variant:Sr,size:wr,class:P}),type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:1,disabled:T,tabIndex:D?D+r:void 0,"aria-label":O?`${O} ${r+1}`:`OTP digit ${r+1}`,"aria-disabled":Pr||T,value:z[r],onChange:s=>jr(r,s),onKeyDown:s=>Ar(r,s),...xr,...Or},a)})})},kr={title:"Versakit UI/InputOTP",component:$r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warn","error"],description:"OTP输入框的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"OTP输入框的尺寸"},length:{control:{type:"number",min:1,max:10},description:"OTP输入框的数量"},disabled:{control:"boolean",description:"是否禁用"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onChange:{action:"changed"}}},t={args:{variant:"default",size:"md",length:6}},n={args:{variant:"primary",size:"md",length:6}},o={args:{variant:"secondary",size:"md",length:6}},c={args:{variant:"success",size:"md",length:6}},i={args:{variant:"warn",size:"md",length:6}},d={args:{variant:"error",size:"md",length:6}},u={args:{variant:"default",size:"sm",length:6}},l={args:{variant:"default",size:"md",length:6}},m={args:{variant:"default",size:"lg",length:6}},p={args:{variant:"default",size:"md",length:4}},g={args:{variant:"default",size:"md",length:8}},f={args:{variant:"default",size:"md",length:6,disabled:!0}},h={args:{unstyled:!0,className:"w-8 h-8 text-center border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",length:6}},b={args:{variant:"primary",size:"md",length:6,pt:{"data-testid":"custom-otp-input","data-custom":"custom-value"}}},y={args:{variant:"primary",size:"md",length:6,"aria-label":"验证码输入"}};var A,C,V;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    length: 6
  }
}`,...(V=(C=t.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var $,I,M;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    length: 6
  }
}`,...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var N,W,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    length: 6
  }
}`,...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var F,U,_;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    length: 6
  }
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var B,K,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "warn",
    size: "md",
    length: 6
  }
}`,...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var R,q,G;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    length: 6
  }
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,Q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    length: 6
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    length: 6
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var rr,er,ar;m.parameters={...m.parameters,docs:{...(rr=m.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    length: 6
  }
}`,...(ar=(er=m.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var sr,tr,nr;p.parameters={...p.parameters,docs:{...(sr=p.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    length: 4
  }
}`,...(nr=(tr=p.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var or,cr,ir;g.parameters={...g.parameters,docs:{...(or=g.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    length: 8
  }
}`,...(ir=(cr=g.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,ur,lr;f.parameters={...f.parameters,docs:{...(dr=f.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    length: 6,
    disabled: true
  }
}`,...(lr=(ur=f.parameters)==null?void 0:ur.docs)==null?void 0:lr.source}}};var mr,pr,gr;h.parameters={...h.parameters,docs:{...(mr=h.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "w-8 h-8 text-center border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",
    length: 6
  }
}`,...(gr=(pr=h.parameters)==null?void 0:pr.docs)==null?void 0:gr.source}}};var fr,hr,br;b.parameters={...b.parameters,docs:{...(fr=b.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    length: 6,
    pt: {
      "data-testid": "custom-otp-input",
      "data-custom": "custom-value"
    }
  }
}`,...(br=(hr=b.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};var yr,vr,zr;y.parameters={...y.parameters,docs:{...(yr=y.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    length: 6,
    "aria-label": "验证码输入"
  }
}`,...(zr=(vr=y.parameters)==null?void 0:vr.docs)==null?void 0:zr.source}}};const Fr=["Default","Primary","Secondary","Success","Warning","ErrorOTP","Small","Medium","Large","FourDigits","EightDigits","Disabled","Unstyled","WithPassThrough","AccessibilityExample"];export{y as AccessibilityExample,t as Default,f as Disabled,g as EightDigits,d as ErrorOTP,p as FourDigits,m as Large,l as Medium,n as Primary,o as Secondary,u as Small,c as Success,h as Unstyled,i as Warning,b as WithPassThrough,Fr as __namedExportsOrder,kr as default};
