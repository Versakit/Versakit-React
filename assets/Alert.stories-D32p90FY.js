import{a as o,j as e}from"./jsx-runtime-CVkQBkwt.js";import{c as x}from"./main-CC60pO_z.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const fr=x({base:"relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",variants:{variant:{default:"bg-gray-50 text-gray-900 border-gray-200",primary:"bg-blue-50 text-blue-900 border-blue-200",success:"bg-green-50 text-green-900 border-green-200",warning:"bg-yellow-50 text-yellow-900 border-yellow-200",error:"bg-red-50 text-red-900 border-red-200"},size:{sm:"text-sm p-3",md:"text-base p-4",lg:"text-lg p-5"}},defaultVariants:{variant:"default",size:"md"}}),wr=x({base:"mb-1 font-medium leading-none tracking-tight"}),br=x({base:"text-sm [&_p]:leading-relaxed"}),s=({className:r,variant:n,size:t,icon:i,closable:c,onClose:u,role:cr="alert","aria-label":dr,"aria-live":lr="polite",unstyled:gr=!1,pt:pr,children:mr,...hr})=>{const vr=pr||{},Ar=()=>{u&&u()};return o("div",{className:gr?r:fr({variant:n,size:t,class:r}),role:cr,"aria-label":dr,"aria-live":lr,...vr,...hr,children:[i&&i,mr,c&&e("button",{className:"absolute top-4 right-4 h-4 w-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",onClick:Ar,"aria-label":"关闭警告",type:"button",children:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e("path",{d:"M18 6 6 18"}),e("path",{d:"m6 6 12 12"})]})})]})},Er=({className:r,unstyled:n=!1,pt:t,children:i,...c})=>{const u=t||{};return e("h5",{className:n?r:wr({class:r}),...u,...c,children:i})},Fr=({className:r,unstyled:n=!1,pt:t,children:i,...c})=>{const u=t||{};return e("div",{className:n?r:br({class:r}),...u,...c,children:i})};s.Title=Er;s.Description=Fr;const zr={title:"Versakit UI/Alert",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","success","warning","error"],description:"警告框的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"警告框的尺寸"},icon:{control:"boolean",description:"是否显示图标（示例中使用布尔值控制，实际使用时应传入ReactNode）"},closable:{control:"boolean",description:"是否可关闭"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"},onClose:{action:"closed"}}},a=r=>{const n={default:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-500","aria-hidden":"true",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 16v-4"}),e("path",{d:"M12 8h.01"})]}),primary:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-500","aria-hidden":"true",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 16v-4"}),e("path",{d:"M12 8h.01"})]}),success:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-green-500","aria-hidden":"true",children:[e("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e("path",{d:"m9 11 3 3L22 4"})]}),warning:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-yellow-500","aria-hidden":"true",children:[e("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),e("path",{d:"M12 9v4"}),e("path",{d:"M12 17h.01"})]}),error:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-red-500","aria-hidden":"true",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"m15 9-6 6"}),e("path",{d:"m9 9 6 6"})]})};return n[r]||n.default},d={args:{variant:"default",size:"md",children:"这是一个基本警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},l={args:{variant:"primary",size:"md",icon:!0,children:"这是一个主要警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},g={args:{variant:"success",size:"md",icon:!0,children:"这是一个成功警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},p={args:{variant:"warning",size:"md",icon:!0,children:"这是一个警告警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},m={args:{variant:"error",size:"md",icon:!0,children:"这是一个错误警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},h={args:{variant:"default",size:"sm",icon:!0,children:"这是一个小尺寸警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},v={args:{variant:"default",size:"md",icon:!0,children:"这是一个中尺寸警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},A={args:{variant:"default",size:"lg",icon:!0,children:"这是一个大尺寸警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}},f={args:{variant:"default",size:"md",closable:!0,children:"这是一个可关闭的警告框"}},w={args:{variant:"primary",size:"md",icon:!0},render:r=>{const{icon:n,...t}=r;return o(s,{...t,icon:n?a(r.variant):void 0,children:[e(s.Title,{children:"警告标题"}),e(s.Description,{children:"这是警告框的详细描述信息，提供更多的上下文和指导。"})]})}},b={args:{unstyled:!0,className:"bg-purple-50 border border-purple-200 rounded-xl p-4 text-purple-800",children:"这是一个自定义样式的警告框"}},E={args:{variant:"default",size:"md",children:"带自定义属性的警告框",pt:{"data-testid":"custom-alert","data-custom":"custom-value"}}},F={args:{variant:"warning",size:"md",icon:!0,"aria-live":"assertive","aria-label":"重要安全警告",children:"这是一个具有无障碍特性的警告框"},render:r=>{const{icon:n,...t}=r;return e(s,{...t,icon:n?a(r.variant):void 0})}};var y,B,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(B=d.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var z,D,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var S,L,T;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(L=g.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var I,W,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var j,N,V;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var P,U,_;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var O,R,Z;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Z=(R=v.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var q,G,H;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(G=A.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    closable: true,
    children: "这是一个可关闭的警告框"
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,$;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var rr,er,nr;b.parameters={...b.parameters,docs:{...(rr=b.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "bg-purple-50 border border-purple-200 rounded-xl p-4 text-purple-800",
    children: "这是一个自定义样式的警告框"
  }
}`,...(nr=(er=b.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var tr,sr,ar;E.parameters={...E.parameters,docs:{...(tr=E.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "带自定义属性的警告框",
    pt: {
      "data-testid": "custom-alert",
      "data-custom": "custom-value"
    }
  }
}`,...(ar=(sr=E.parameters)==null?void 0:sr.docs)==null?void 0:ar.source}}};var or,ir,ur;F.parameters={...F.parameters,docs:{...(or=F.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ur=(ir=F.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};const Dr=["Default","Primary","Success","Warning","ErrorAlert","Small","Medium","Large","Closable","WithTitleAndDescription","Unstyled","WithPassThrough","AccessibilityExample"];export{F as AccessibilityExample,f as Closable,d as Default,m as ErrorAlert,A as Large,v as Medium,l as Primary,h as Small,g as Success,b as Unstyled,p as Warning,E as WithPassThrough,w as WithTitleAndDescription,Dr as __namedExportsOrder,zr as default};
