import{s as L}from"./main-BeXj-Af9.js";const P={title:"Versakit UI/Button",component:L,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","outline","ghost","primary","secondary","success","warn","error"],description:"按钮的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"按钮的尺寸"},children:{control:"text",description:"按钮内容"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onClick:{action:"clicked"}}},e={args:{variant:"default",size:"md",children:"默认按钮"}},r={args:{variant:"outline",size:"md",children:"轮廓按钮"}},a={args:{variant:"ghost",size:"md",children:"幽灵按钮"}},s={args:{variant:"default",size:"sm",children:"小按钮"}},t={args:{variant:"default",size:"md",children:"中按钮"}},n={args:{variant:"default",size:"lg",children:"大按钮"}},o={args:{unstyled:!0,className:"bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600",children:"无样式按钮"}},u={args:{variant:"primary",size:"md",children:"带自定义属性的按钮",pt:{"data-testid":"custom-button","data-custom":"custom-value"}}},c={args:{variant:"primary",size:"md",children:"无障碍按钮","aria-label":"无障碍示例按钮","aria-haspopup":!0,"aria-expanded":!1}};var i,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "默认按钮"
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "轮廓按钮"
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,E,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "md",
    children: "幽灵按钮"
  }
}`,...(v=(E=a.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var y,z,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    children: "小按钮"
  }
}`,...(A=(z=s.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var f,S,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "中按钮"
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,D,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    children: "大按钮"
  }
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var F,B,k;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600",
    children: "无样式按钮"
  }
}`,...(k=(B=o.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var w,N,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "带自定义属性的按钮",
    pt: {
      "data-testid": "custom-button",
      "data-custom": "custom-value"
    }
  }
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var T,U,G;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "无障碍按钮",
    "aria-label": "无障碍示例按钮",
    "aria-haspopup": true,
    "aria-expanded": false
  }
}`,...(G=(U=c.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const W=["Default","Outline","Ghost","Small","Medium","Large","Unstyled","WithPassThrough","AccessibilityExample"];export{c as AccessibilityExample,e as Default,a as Ghost,n as Large,t as Medium,r as Outline,s as Small,o as Unstyled,u as WithPassThrough,W as __namedExportsOrder,P as default};
