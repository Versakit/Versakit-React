import{j as ye}from"./jsx-runtime-CVkQBkwt.js";import{c as ze}from"./main-CC60pO_z.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const fe=ze({base:"h-4 w-4 rounded border border-gray-300 bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",variants:{variant:{default:"text-blue-600",primary:"text-blue-600",secondary:"text-gray-600",success:"text-green-600",warn:"text-yellow-600",error:"text-red-600"},size:{sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5"}},defaultVariants:{variant:"default",size:"md"}}),Se=({className:h,variant:de,size:ie,disabled:k,tabIndex:ue,role:me="checkbox","aria-label":le,"aria-disabled":pe,"aria-checked":ge,unstyled:he=!1,pt:ke,...be})=>{const ve=ke||{};return ye("input",{type:"checkbox",className:he?h:fe({variant:de,size:ie,class:h}),disabled:k,tabIndex:ue,role:me,"aria-label":le,"aria-disabled":pe||k,"aria-checked":ge,...ve,...be})},De={title:"Versakit UI/Checkbox",component:Se,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warn","error"],description:"复选框的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"复选框的尺寸"},checked:{control:"boolean",description:"是否被选中"},disabled:{control:"boolean",description:"是否禁用"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onChange:{action:"changed"}}},e={args:{variant:"default",size:"md"}},r={args:{variant:"default",size:"md",checked:!0}},a={args:{variant:"primary",size:"md",checked:!0}},s={args:{variant:"secondary",size:"md",checked:!0}},t={args:{variant:"success",size:"md",checked:!0}},c={args:{variant:"warn",size:"md",checked:!0}},n={args:{variant:"error",size:"md",checked:!0}},o={args:{variant:"default",size:"sm",checked:!0}},d={args:{variant:"default",size:"md",checked:!0}},i={args:{variant:"default",size:"lg",checked:!0}},u={args:{variant:"default",size:"md",disabled:!0}},m={args:{variant:"default",size:"md",disabled:!0,checked:!0}},l={args:{unstyled:!0,className:"w-5 h-5 accent-purple-600",checked:!0}},p={args:{variant:"primary",size:"md",checked:!0,pt:{"data-testid":"custom-checkbox","data-custom":"custom-value"}}},g={args:{variant:"primary",size:"md","aria-label":"同意条款和条件","aria-checked":!0,checked:!0}};var b,v,y;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md"
  }
}`,...(y=(v=e.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var z,f,S;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    checked: true
  }
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,w,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    checked: true
  }
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,D,P;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    checked: true
  }
}`,...(P=(D=s.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var T,W,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    checked: true
  }
}`,...(j=(W=t.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var N,U,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "warn",
    size: "md",
    checked: true
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var A,F,L;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    checked: true
  }
}`,...(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,_,B;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    checked: true
  }
}`,...(B=(_=o.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var I,O,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    checked: true
  }
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var G,H,J;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    checked: true
  }
}`,...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,R;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    disabled: true
  }
}`,...(R=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    disabled: true,
    checked: true
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "w-5 h-5 accent-purple-600",
    checked: true
  }
}`,...(re=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,te;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    checked: true,
    pt: {
      "data-testid": "custom-checkbox",
      "data-custom": "custom-value"
    }
  }
}`,...(te=(se=p.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ce,ne,oe;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    "aria-label": "同意条款和条件",
    "aria-checked": true,
    checked: true
  }
}`,...(oe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const Pe=["Default","Checked","Primary","Secondary","Success","Warn","ErrorState","Small","Medium","Large","Disabled","DisabledChecked","Unstyled","WithPassThrough","AccessibilityExample"];export{g as AccessibilityExample,r as Checked,e as Default,u as Disabled,m as DisabledChecked,n as ErrorState,i as Large,d as Medium,a as Primary,s as Secondary,o as Small,t as Success,l as Unstyled,c as Warn,p as WithPassThrough,Pe as __namedExportsOrder,De as default};
