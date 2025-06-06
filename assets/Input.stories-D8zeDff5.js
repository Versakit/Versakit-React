import{j as Er}from"./jsx-runtime-CVkQBkwt.js";import{c as wr}from"./main-CC60pO_z.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const Ar=wr({base:"flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",variants:{variant:{default:"border-gray-300 focus:border-blue-500",primary:"border-blue-500 focus:border-blue-600",secondary:"border-gray-500 focus:border-gray-600",success:"border-green-500 focus:border-green-600",warn:"border-yellow-500 focus:border-yellow-600",error:"border-red-500 focus:border-red-600"},size:{sm:"h-8 px-2 text-xs",md:"h-10 px-3 text-sm",lg:"h-12 px-4 text-base"}},defaultVariants:{variant:"default",size:"md"}}),Cr=({className:y,variant:pr,size:mr,disabled:b,readOnly:gr,tabIndex:hr,type:yr="text","aria-label":br,"aria-disabled":fr,"aria-invalid":vr,unstyled:zr=!1,pt:Fr,required:Sr,...xr})=>{const Br=Fr||{};return Er("input",{className:zr?y:Ar({variant:pr,size:mr,class:y}),type:yr,disabled:b,readOnly:gr,tabIndex:hr,"aria-label":br,"aria-disabled":fr||b,"aria-invalid":vr,required:Sr,...Br,...xr})},Ir={title:"Versakit UI/Input",component:Cr,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warn","error"],description:"输入框的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"输入框的尺寸"},type:{control:{type:"select"},options:["text","password","email","tel","url","search"],description:"输入框的类型"},placeholder:{control:"text",description:"输入框的占位符文本"},disabled:{control:"boolean",description:"是否禁用"},readOnly:{control:"boolean",description:"是否只读"},required:{control:"boolean",description:"是否必填"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onChange:{action:"changed"}}},r={args:{variant:"default",size:"md",placeholder:"请输入文本"}},e={args:{variant:"primary",size:"md",placeholder:"主要输入框"}},a={args:{variant:"secondary",size:"md",placeholder:"次要输入框"}},s={args:{variant:"success",size:"md",placeholder:"成功输入框"}},o={args:{variant:"warn",size:"md",placeholder:"警告输入框"}},n={args:{variant:"error",size:"md",placeholder:"错误输入框"}},t={args:{variant:"default",size:"md",type:"password",placeholder:"请输入密码"}},u={args:{variant:"default",size:"sm",placeholder:"小输入框"}},c={args:{variant:"default",size:"md",placeholder:"中输入框"}},d={args:{variant:"default",size:"lg",placeholder:"大输入框"}},l={args:{variant:"default",size:"md",disabled:!0,placeholder:"禁用输入框"}},i={args:{variant:"default",size:"md",readOnly:!0,placeholder:"只读输入框",value:"这是只读内容"}},p={args:{variant:"default",size:"md",required:!0,placeholder:"必填输入框"}},m={args:{unstyled:!0,className:"px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",placeholder:"自定义样式输入框"}},g={args:{variant:"primary",size:"md",placeholder:"带自定义属性的输入框",pt:{"data-testid":"custom-input","data-custom":"custom-value"}}},h={args:{variant:"primary",size:"md",placeholder:"无障碍示例","aria-label":"用户名输入框",required:!0}};var f,v,z;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    placeholder: "请输入文本"
  }
}`,...(z=(v=r.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var F,S,x;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    placeholder: "主要输入框"
  }
}`,...(x=(S=e.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var B,E,w;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    placeholder: "次要输入框"
  }
}`,...(w=(E=a.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var A,C,D;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    placeholder: "成功输入框"
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var q,O,P;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "warn",
    size: "md",
    placeholder: "警告输入框"
  }
}`,...(P=(O=o.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var I,R,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    placeholder: "错误输入框"
  }
}`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,j,N;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    type: "password",
    placeholder: "请输入密码"
  }
}`,...(N=(j=t.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var U,V,L;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    placeholder: "小输入框"
  }
}`,...(L=(V=u.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,_,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    placeholder: "中输入框"
  }
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var G,H,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    placeholder: "大输入框"
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    disabled: true,
    placeholder: "禁用输入框"
  }
}`,...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    readOnly: true,
    placeholder: "只读输入框",
    value: "这是只读内容"
  }
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,ar;p.parameters={...p.parameters,docs:{...(rr=p.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    required: true,
    placeholder: "必填输入框"
  }
}`,...(ar=(er=p.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var sr,or,nr;m.parameters={...m.parameters,docs:{...(sr=m.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",
    placeholder: "自定义样式输入框"
  }
}`,...(nr=(or=m.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};var tr,ur,cr;g.parameters={...g.parameters,docs:{...(tr=g.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    placeholder: "带自定义属性的输入框",
    pt: {
      "data-testid": "custom-input",
      "data-custom": "custom-value"
    }
  }
}`,...(cr=(ur=g.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,lr,ir;h.parameters={...h.parameters,docs:{...(dr=h.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    placeholder: "无障碍示例",
    "aria-label": "用户名输入框",
    required: true
  }
}`,...(ir=(lr=h.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};const Rr=["Default","Primary","Secondary","Success","Warning","ErrorInput","Password","Small","Medium","Large","Disabled","ReadOnly","Required","Unstyled","WithPassThrough","AccessibilityExample"];export{h as AccessibilityExample,r as Default,l as Disabled,n as ErrorInput,d as Large,c as Medium,t as Password,e as Primary,i as ReadOnly,p as Required,a as Secondary,u as Small,s as Success,m as Unstyled,o as Warning,g as WithPassThrough,Rr as __namedExportsOrder,Ir as default};
