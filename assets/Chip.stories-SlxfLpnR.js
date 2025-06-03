import{d as ar}from"./main-BeXj-Af9.js";const nr={title:"Versakit UI/Chip",component:ar,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","outline"],description:"标签的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"标签的尺寸"},children:{control:"text",description:"标签内容"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},closable:{control:"boolean",description:"是否可关闭"},disabled:{control:"boolean",description:"是否禁用"},pt:{control:"object",description:"传递给组件的自定义属性"},onClose:{action:"closed"}}},r={args:{variant:"default",size:"md",children:"默认标签"}},e={args:{variant:"primary",size:"md",children:"主要标签"}},a={args:{variant:"success",size:"md",children:"成功标签"}},s={args:{variant:"warning",size:"md",children:"警告标签"}},n={args:{variant:"error",size:"md",children:"错误标签"}},t={args:{variant:"outline",size:"md",children:"轮廓标签"}},o={args:{variant:"default",size:"sm",children:"小标签"}},c={args:{variant:"default",size:"md",children:"中标签"}},i={args:{variant:"default",size:"lg",children:"大标签"}},u={args:{variant:"default",size:"md",children:"可关闭标签",closable:!0}},d={args:{variant:"default",size:"md",children:"禁用标签",disabled:!0,closable:!0}},l={args:{unstyled:!0,className:"bg-purple-100 text-purple-800 px-3 py-1 rounded-full",children:"自定义样式标签"}},m={args:{variant:"primary",size:"md",children:"带自定义属性的标签",pt:{"data-testid":"custom-chip","data-custom":"custom-value"}}},p={args:{variant:"primary",size:"md",children:"无障碍标签","aria-label":"无障碍示例标签"}};var g,h,E;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "默认标签"
  }
}`,...(E=(h=r.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var v,z,y;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "主要标签"
  }
}`,...(y=(z=e.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var b,B,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    children: "成功标签"
  }
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,x,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "md",
    children: "警告标签"
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var A,C,F;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    children: "错误标签"
  }
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var P,W,w;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "轮廓标签"
  }
}`,...(w=(W=t.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var N,O,T;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    children: "小标签"
  }
}`,...(T=(O=o.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,V,L;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "中标签"
  }
}`,...(L=(V=c.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,_,j;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    children: "大标签"
  }
}`,...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var k,I,q;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "可关闭标签",
    closable: true
  }
}`,...(q=(I=u.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var G,H,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "禁用标签",
    disabled: true,
    closable: true
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,R;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full",
    children: "自定义样式标签"
  }
}`,...(R=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "带自定义属性的标签",
    pt: {
      "data-testid": "custom-chip",
      "data-custom": "custom-value"
    }
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,er;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "无障碍标签",
    "aria-label": "无障碍示例标签"
  }
}`,...(er=(rr=p.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};const tr=["Default","Primary","Success","Warning","ErrorVariant","Outline","Small","Medium","Large","Closable","Disabled","Unstyled","WithPassThrough","AccessibilityExample"];export{p as AccessibilityExample,u as Closable,r as Default,d as Disabled,n as ErrorVariant,i as Large,c as Medium,t as Outline,e as Primary,o as Small,a as Success,l as Unstyled,s as Warning,m as WithPassThrough,tr as __namedExportsOrder,nr as default};
