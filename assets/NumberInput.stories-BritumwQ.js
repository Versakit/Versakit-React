import{a as j,j as M}from"./jsx-runtime-CVkQBkwt.js";import{r as ke}from"./index-BwDkhjyp.js";import{c as Ue}from"./main-CC60pO_z.js";import"./_commonjsHelpers-BosuxZz1.js";const Ae=Ue({base:"flex w-full rounded-l-md border border-gray-300 bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",variants:{variant:{default:"border-gray-300 focus:border-blue-500",primary:"border-blue-500 focus:border-blue-600",secondary:"border-gray-500 focus:border-gray-600",success:"border-green-500 focus:border-green-600",warn:"border-yellow-500 focus:border-yellow-600",error:"border-red-500 focus:border-red-600"},size:{sm:"h-8 px-2 text-xs",md:"h-10 px-3 text-sm",lg:"h-12 px-4 text-base"}},defaultVariants:{variant:"default",size:"md"}}),Le=({className:W,variant:xe,size:Se,disabled:o,tabIndex:he,"aria-label":we,"aria-disabled":Ne,unstyled:Me=!1,pt:We,min:n,max:d,step:u=1,value:s,defaultValue:E,onChange:r,...Ee})=>{const je=We||{},[Ie,w]=ke.useState(E!==void 0?E:s!==void 0?s:void 0),e=s!==void 0?s:Ie,De=()=>{if(o)return;const t=typeof e=="number"?e+u:u,a=d!==void 0?Math.min(t,d):t;s===void 0&&w(a),r==null||r(a)},Pe=()=>{if(o)return;const t=typeof e=="number"?e-u:-u,a=n!==void 0?Math.max(t,n):t;s===void 0&&w(a),r==null||r(a)},Te=t=>{const a=t.target.value,N=a===""?void 0:Number(a);s===void 0&&w(N),N!==void 0&&(r==null||r(N))};return j("div",{className:"flex",children:[M("input",{className:Me?W:Ae({variant:xe,size:Se,class:W}),type:"number",disabled:o,tabIndex:he,"aria-label":we,"aria-disabled":Ne||o,min:n,max:d,step:u,value:e===void 0?"":e,onChange:Te,...je,...Ee}),j("div",{className:"flex flex-col",children:[M("button",{className:"flex items-center justify-center h-1/2 px-2 border border-l-0 border-gray-300 disabled:opacity-50",onClick:De,disabled:o||d!==void 0&&typeof e=="number"&&e>=d,"aria-label":"增加",type:"button",children:"+"}),M("button",{className:"flex items-center justify-center h-1/2 px-2 border border-t-0 border-l-0 border-gray-300 disabled:opacity-50",onClick:Pe,disabled:o||n!==void 0&&typeof e=="number"&&e<=n,"aria-label":"减少",type:"button",children:"-"})]})]})},Be={title:"Versakit UI/NumberInput",component:Le,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warn","error"],description:"数字输入框的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"数字输入框的尺寸"},min:{control:{type:"number"},description:"最小值"},max:{control:{type:"number"},description:"最大值"},step:{control:{type:"number"},description:"步进值"},value:{control:{type:"number"},description:"当前值（受控组件）"},defaultValue:{control:{type:"number"},description:"默认值（非受控组件）"},disabled:{control:"boolean",description:"是否禁用"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onChange:{action:"changed"}}},i={args:{variant:"default",size:"md",defaultValue:0}},c={args:{variant:"primary",size:"md",defaultValue:0}},l={args:{variant:"secondary",size:"md",defaultValue:0}},m={args:{variant:"success",size:"md",defaultValue:0}},p={args:{variant:"warn",size:"md",defaultValue:0}},f={args:{variant:"error",size:"md",defaultValue:0}},b={args:{variant:"default",size:"md",min:0,max:10,defaultValue:5}},g={args:{variant:"default",size:"md",step:.5,defaultValue:0}},y={args:{variant:"default",size:"sm",defaultValue:0}},v={args:{variant:"default",size:"md",defaultValue:0}},V={args:{variant:"default",size:"lg",defaultValue:0}},z={args:{variant:"default",size:"md",disabled:!0,defaultValue:0}},x={args:{unstyled:!0,className:"w-20 px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",defaultValue:0}},S={args:{variant:"primary",size:"md",defaultValue:0,pt:{"data-testid":"custom-number-input","data-custom":"custom-value"}}},h={args:{variant:"primary",size:"md",defaultValue:0,"aria-label":"数量选择器"}};var I,D,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    defaultValue: 0
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var T,k,U;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    defaultValue: 0
  }
}`,...(U=(k=c.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var A,L,_;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    defaultValue: 0
  }
}`,...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var F,O,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    defaultValue: 0
  }
}`,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var B,G,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "warn",
    size: "md",
    defaultValue: 0
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    defaultValue: 0
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,X,Y;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    min: 0,
    max: 10,
    defaultValue: 5
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,C;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    step: 0.5,
    defaultValue: 0
  }
}`,...(C=($=g.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var ee,re,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    defaultValue: 0
  }
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    defaultValue: 0
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,de,ue;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    defaultValue: 0
  }
}`,...(ue=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ie,ce,le;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    disabled: true,
    defaultValue: 0
  }
}`,...(le=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,pe,fe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "w-20 px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",
    defaultValue: 0
  }
}`,...(fe=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var be,ge,ye;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    defaultValue: 0,
    pt: {
      "data-testid": "custom-number-input",
      "data-custom": "custom-value"
    }
  }
}`,...(ye=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,Ve,ze;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    defaultValue: 0,
    "aria-label": "数量选择器"
  }
}`,...(ze=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};const Ge=["Default","Primary","Secondary","Success","Warning","ErrorValue","WithMinMax","WithStep","Small","Medium","Large","Disabled","Unstyled","WithPassThrough","AccessibilityExample"];export{h as AccessibilityExample,i as Default,z as Disabled,f as ErrorValue,V as Large,v as Medium,c as Primary,l as Secondary,y as Small,m as Success,x as Unstyled,p as Warning,b as WithMinMax,S as WithPassThrough,g as WithStep,Ge as __namedExportsOrder,Be as default};
