import{a as Er,j as b}from"./jsx-runtime-CVkQBkwt.js";import{c as fr}from"./main-CC60pO_z.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const xr=fr({base:"inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",variants:{variant:{default:"bg-gray-100 text-gray-800 hover:bg-gray-200",primary:"bg-blue-100 text-blue-800 hover:bg-blue-200",secondary:"bg-gray-100 text-gray-800 hover:bg-gray-200",success:"bg-green-100 text-green-800 hover:bg-green-200",warning:"bg-yellow-100 text-yellow-800 hover:bg-yellow-200",error:"bg-red-100 text-red-800 hover:bg-red-200",outline:"border border-gray-200 text-gray-800 hover:bg-gray-100"},size:{sm:"h-5 text-xs",md:"h-6 text-sm",lg:"h-7 text-base"},interactive:{true:"cursor-pointer"}},defaultVariants:{variant:"default",size:"md"}}),zr=({className:v,variant:or,size:ir,disabled:g,closable:cr,onClose:h,children:ur,role:lr="status","aria-label":dr,"aria-disabled":mr,unstyled:pr=!1,pt:gr,...hr})=>{const br=gr||{},vr=yr=>{yr.stopPropagation(),!g&&h&&h()};return Er("div",{className:pr?v:xr({variant:or,size:ir,interactive:!!h,class:v}),role:lr,"aria-label":dr,"aria-disabled":mr||g,...br,...hr,children:[ur,cr&&b("button",{type:"button",className:"ml-1 h-4 w-4 rounded-full hover:bg-gray-300 inline-flex items-center justify-center",onClick:vr,disabled:g,"aria-label":"关闭",title:"关闭",children:b("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:b("path",{d:"M1 1L9 9M9 1L1 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})},Dr={title:"Versakit UI/Chip",component:zr,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","outline"],description:"标签的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"标签的尺寸"},children:{control:"text",description:"标签内容"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},closable:{control:"boolean",description:"是否可关闭"},disabled:{control:"boolean",description:"是否禁用"},pt:{control:"object",description:"传递给组件的自定义属性"},onClose:{action:"closed"}}},r={args:{variant:"default",size:"md",children:"默认标签"}},e={args:{variant:"primary",size:"md",children:"主要标签"}},a={args:{variant:"success",size:"md",children:"成功标签"}},s={args:{variant:"warning",size:"md",children:"警告标签"}},t={args:{variant:"error",size:"md",children:"错误标签"}},n={args:{variant:"outline",size:"md",children:"轮廓标签"}},o={args:{variant:"default",size:"sm",children:"小标签"}},i={args:{variant:"default",size:"md",children:"中标签"}},c={args:{variant:"default",size:"lg",children:"大标签"}},u={args:{variant:"default",size:"md",children:"可关闭标签",closable:!0}},l={args:{variant:"default",size:"md",children:"禁用标签",disabled:!0,closable:!0}},d={args:{unstyled:!0,className:"bg-purple-100 text-purple-800 px-3 py-1 rounded-full",children:"自定义样式标签"}},m={args:{variant:"primary",size:"md",children:"带自定义属性的标签",pt:{"data-testid":"custom-chip","data-custom":"custom-value"}}},p={args:{variant:"primary",size:"md",children:"无障碍标签","aria-label":"无障碍示例标签"}};var y,E,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "默认标签"
  }
}`,...(f=(E=r.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var x,z,B;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "主要标签"
  }
}`,...(B=(z=e.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var S,w,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    children: "成功标签"
  }
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,A,F;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "md",
    children: "警告标签"
  }
}`,...(F=(A=s.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var j,k,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    children: "错误标签"
  }
}`,...(L=(k=t.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var P,V,W;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "轮廓标签"
  }
}`,...(W=(V=n.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,N,T;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    children: "小标签"
  }
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var O,U,_;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "中标签"
  }
}`,...(_=(U=i.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var I,q,G;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    children: "大标签"
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "可关闭标签",
    closable: true
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "禁用标签",
    disabled: true,
    closable: true
  }
}`,...(X=(R=l.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,$;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full",
    children: "自定义样式标签"
  }
}`,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,ar;m.parameters={...m.parameters,docs:{...(rr=m.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "带自定义属性的标签",
    pt: {
      "data-testid": "custom-chip",
      "data-custom": "custom-value"
    }
  }
}`,...(ar=(er=m.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var sr,tr,nr;p.parameters={...p.parameters,docs:{...(sr=p.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "无障碍标签",
    "aria-label": "无障碍示例标签"
  }
}`,...(nr=(tr=p.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};const Ar=["Default","Primary","Success","Warning","ErrorVariant","Outline","Small","Medium","Large","Closable","Disabled","Unstyled","WithPassThrough","AccessibilityExample"];export{p as AccessibilityExample,u as Closable,r as Default,l as Disabled,t as ErrorVariant,c as Large,i as Medium,n as Outline,e as Primary,o as Small,a as Success,d as Unstyled,s as Warning,m as WithPassThrough,Ar as __namedExportsOrder,Dr as default};
