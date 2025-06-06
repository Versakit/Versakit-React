import{j as W,a as Qe}from"./jsx-runtime-CVkQBkwt.js";import{r as u}from"./index-BwDkhjyp.js";import{c as Ne}from"./main-CC60pO_z.js";import"./_commonjsHelpers-BosuxZz1.js";const Ye=Ne({base:"relative w-full h-2 rounded-full bg-gray-200 cursor-pointer",variants:{variant:{default:"bg-gray-200",primary:"bg-blue-100",secondary:"bg-gray-100",success:"bg-green-100",warn:"bg-yellow-100",error:"bg-red-100"},size:{sm:"h-1",md:"h-2",lg:"h-3"}},defaultVariants:{variant:"default",size:"md"}}),Ze=Ne({base:"absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",variants:{size:{sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"}},defaultVariants:{size:"md"}}),ea=({className:D,variant:Pe,size:k,disabled:r,"aria-label":Xe,"aria-disabled":je,unstyled:Ce=!1,pt:Ue,min:a=0,max:c=100,step:N=1,value:n,defaultValue:P,onChange:x,...Ae})=>{const Fe=Ue||{},[Ie,$e]=u.useState(P!==void 0?P:n!==void 0?n:a),X=n!==void 0?n:Ie,j=u.useRef(null),_e=u.useRef(null),t=u.useRef(!1),C=()=>(X-a)/(c-a)*100,Be=e=>{var U;const s=(U=j.current)==null?void 0:U.getBoundingClientRect();if(!s)return a;const He=Math.max(0,Math.min(100,(e-s.left)/s.width*100)),Je=a+He/100*(c-a),Ke=Math.round(Je/N)*N;return Math.max(a,Math.min(c,Ke))},Oe=e=>{r||(t.current=!0,document.addEventListener("mousemove",M),document.addEventListener("mouseup",T),o(e.clientX))},qe=e=>{r||(t.current=!0,document.addEventListener("touchmove",L),document.addEventListener("touchend",R),o(e.touches[0].clientX))},M=e=>{t.current&&o(e.clientX)},L=e=>{t.current&&o(e.touches[0].clientX)},T=()=>{t.current=!1,document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",T)},R=()=>{t.current=!1,document.removeEventListener("touchmove",L),document.removeEventListener("touchend",R)},o=e=>{const s=Be(e);n===void 0&&$e(s),x==null||x(s)},Ge=e=>{r||o(e.clientX)};return u.useEffect(()=>()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",L),document.removeEventListener("touchend",R)},[]),W("div",{className:`relative ${r?"opacity-50 cursor-not-allowed":""}`,...Fe,...Ae,children:Qe("div",{ref:j,className:Ce?D:Ye({variant:Pe,size:k,class:D}),onClick:Ge,role:"slider","aria-label":Xe,"aria-disabled":je||r,"aria-valuemin":a,"aria-valuemax":c,"aria-valuenow":X,tabIndex:r?-1:0,children:[W("div",{className:"absolute h-full bg-blue-600 rounded-full",style:{width:`${C()}%`}}),W("div",{ref:_e,className:Ze({size:k}),style:{left:`${C()}%`},onMouseDown:Oe,onTouchStart:qe})]})})},na={title:"Versakit UI/Slider",component:ea,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warn","error"],description:"滑块的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"滑块的尺寸"},min:{control:{type:"number"},description:"最小值"},max:{control:{type:"number"},description:"最大值"},step:{control:{type:"number"},description:"步进值"},value:{control:{type:"number"},description:"当前值（受控组件）"},defaultValue:{control:{type:"number"},description:"默认值（非受控组件）"},disabled:{control:"boolean",description:"是否禁用"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onChange:{action:"changed"}}},i={args:{variant:"default",size:"md",defaultValue:50}},d={args:{variant:"primary",size:"md",defaultValue:50}},l={args:{variant:"secondary",size:"md",defaultValue:50}},m={args:{variant:"success",size:"md",defaultValue:50}},p={args:{variant:"warn",size:"md",defaultValue:50}},g={args:{variant:"error",size:"md",defaultValue:50}},f={args:{variant:"default",size:"md",min:0,max:10,defaultValue:5}},v={args:{variant:"default",size:"md",step:10,defaultValue:50}},h={args:{variant:"default",size:"sm",defaultValue:50}},V={args:{variant:"default",size:"md",defaultValue:50}},b={args:{variant:"default",size:"lg",defaultValue:50}},y={args:{variant:"default",size:"md",disabled:!0,defaultValue:50}},z={args:{variant:"default",size:"md",min:-50,max:50,defaultValue:0}},S={args:{unstyled:!0,className:"w-64 h-2 rounded-lg bg-purple-200",defaultValue:50}},E={args:{variant:"primary",size:"md",defaultValue:50,pt:{"data-testid":"custom-slider","data-custom":"custom-value"}}},w={args:{variant:"primary",size:"md",defaultValue:50,"aria-label":"音量控制"}};var A,F,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    defaultValue: 50
  }
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var $,_,B;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    defaultValue: 50
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var O,q,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    defaultValue: 50
  }
}`,...(G=(q=l.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    defaultValue: 50
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "warn",
    size: "md",
    defaultValue: 50
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    defaultValue: 50
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    min: 0,
    max: 10,
    defaultValue: 5
  }
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ue,ce;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    step: 10,
    defaultValue: 50
  }
}`,...(ce=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ie,de,le;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    defaultValue: 50
  }
}`,...(le=(de=h.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var me,pe,ge;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    defaultValue: 50
  }
}`,...(ge=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var fe,ve,he;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    defaultValue: 50
  }
}`,...(he=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ve,be,ye;y.parameters={...y.parameters,docs:{...(Ve=y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    disabled: true,
    defaultValue: 50
  }
}`,...(ye=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ze,Se,Ee;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    min: -50,
    max: 50,
    defaultValue: 0
  }
}`,...(Ee=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var we,xe,Me;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "w-64 h-2 rounded-lg bg-purple-200",
    defaultValue: 50
  }
}`,...(Me=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Me.source}}};var Le,Te,Re;E.parameters={...E.parameters,docs:{...(Le=E.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    defaultValue: 50,
    pt: {
      "data-testid": "custom-slider",
      "data-custom": "custom-value"
    }
  }
}`,...(Re=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var We,De,ke;w.parameters={...w.parameters,docs:{...(We=w.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    defaultValue: 50,
    "aria-label": "音量控制"
  }
}`,...(ke=(De=w.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};const oa=["Default","Primary","Secondary","Success","Warning","ErrorVariant","WithMinMax","WithStep","Small","Medium","Large","Disabled","CustomRange","Unstyled","WithPassThrough","AccessibilityExample"];export{w as AccessibilityExample,z as CustomRange,i as Default,y as Disabled,g as ErrorVariant,b as Large,V as Medium,d as Primary,l as Secondary,h as Small,m as Success,S as Unstyled,p as Warning,f as WithMinMax,E as WithPassThrough,v as WithStep,oa as __namedExportsOrder,na as default};
