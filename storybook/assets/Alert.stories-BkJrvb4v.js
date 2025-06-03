import{j as e,a as o}from"./jsx-runtime-CVkQBkwt.js";import{l as s}from"./main-BeXj-Af9.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const cr={title:"Versakit UI/Alert",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","success","warning","error"],description:"警告框的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"警告框的尺寸"},icon:{control:"boolean",description:"是否显示图标（示例中使用布尔值控制，实际使用时应传入ReactNode）"},closable:{control:"boolean",description:"是否可关闭"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onClose:{action:"closed"}}},a=r=>{const n={default:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-500","aria-hidden":"true",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 16v-4"}),e("path",{d:"M12 8h.01"})]}),primary:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-500","aria-hidden":"true",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 16v-4"}),e("path",{d:"M12 8h.01"})]}),success:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-green-500","aria-hidden":"true",children:[e("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e("path",{d:"m9 11 3 3L22 4"})]}),warning:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-yellow-500","aria-hidden":"true",children:[e("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),e("path",{d:"M12 9v4"}),e("path",{d:"M12 17h.01"})]}),error:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-red-500","aria-hidden":"true",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"m15 9-6 6"}),e("path",{d:"m9 9 6 6"})]})};return n[r]||n.default},i={args:{variant:"default",size:"md",children:"这是一个基本警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},u={args:{variant:"primary",size:"md",icon:!0,children:"这是一个主要警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},c={args:{variant:"success",size:"md",icon:!0,children:"这是一个成功警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},d={args:{variant:"warning",size:"md",icon:!0,children:"这是一个警告警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},l={args:{variant:"error",size:"md",icon:!0,children:"这是一个错误警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},p={args:{variant:"default",size:"sm",icon:!0,children:"这是一个小尺寸警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},m={args:{variant:"default",size:"md",icon:!0,children:"这是一个中尺寸警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},g={args:{variant:"default",size:"lg",icon:!0,children:"这是一个大尺寸警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},h={args:{variant:"default",size:"md",closable:!0,children:"这是一个可关闭的警告框"}},v={args:{variant:"primary",size:"md",icon:!0},render:r=>{const{icon:n,...t}=r;return o(s,{...t,icon:n?a(r.variant):void 0,children:[e(s.Title,{children:"警告标题"}),e(s.Description,{children:"这是警告框的详细描述信息，提供更多的上下文和指导。"})]})}},A={args:{unstyled:!0,className:"bg-purple-50 border border-purple-200 rounded-xl p-4 text-purple-800",children:"这是一个自定义样式的警告框"}},E={args:{variant:"default",size:"md",children:"带自定义属性的警告框",pt:{"data-testid":"custom-alert","data-custom":"custom-value"}}},F={args:{variant:"warning",size:"md",icon:!0,"aria-live":"assertive","aria-label":"重要安全警告",children:"这是一个具有无障碍特性的警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}};var w,f,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "这是一个基本警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var x,z,y;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    icon: true,
    children: "这是一个主要警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(y=(z=u.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var D,C,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    icon: true,
    children: "这是一个成功警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var b,S,L;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "md",
    icon: true,
    children: "这是一个警告警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(L=(S=d.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var I,W,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    icon: true,
    children: "这是一个错误警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(M=(W=l.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var j,N,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    icon: true,
    children: "这是一个小尺寸警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(T=(N=p.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var P,U,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    icon: true,
    children: "这是一个中尺寸警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var _,O,R;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    icon: true,
    children: "这是一个大尺寸警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(R=(O=g.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var Z,q,G;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    closable: true,
    children: "这是一个可关闭的警告框"
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    icon: true
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined}>
                <Alert.Title>警告标题</Alert.Title>
                <Alert.Description>这是警告框的详细描述信息，提供更多的上下文和指导。</Alert.Description>
            </Alert>;
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "bg-purple-50 border border-purple-200 rounded-xl p-4 text-purple-800",
    children: "这是一个自定义样式的警告框"
  }
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,rr,er;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "带自定义属性的警告框",
    pt: {
      "data-testid": "custom-alert",
      "data-custom": "custom-value"
    }
  }
}`,...(er=(rr=E.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var nr,tr,sr;F.parameters={...F.parameters,docs:{...(nr=F.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "md",
    icon: true,
    "aria-live": "assertive",
    "aria-label": "重要安全警告",
    children: "这是一个具有无障碍特性的警告框"
  },
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
  }
}`,...(sr=(tr=F.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};const dr=["Default","Primary","Success","Warning","ErrorAlert","Small","Medium","Large","Closable","WithTitleAndDescription","Unstyled","WithPassThrough","AccessibilityExample"];export{F as AccessibilityExample,h as Closable,i as Default,l as ErrorAlert,g as Large,m as Medium,u as Primary,p as Small,c as Success,A as Unstyled,d as Warning,E as WithPassThrough,v as WithTitleAndDescription,dr as __namedExportsOrder,cr as default};
