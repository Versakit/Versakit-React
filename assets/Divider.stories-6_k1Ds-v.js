import{j as e,a as Oe}from"./jsx-runtime-CVkQBkwt.js";import{c as _e}from"./main-CC60pO_z.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const qe=_e({base:"shrink-0 bg-gray-200 dark:bg-gray-700",variants:{orientation:{horizontal:"w-full h-px",vertical:"h-full w-px"},variant:{default:"bg-gray-200 dark:bg-gray-700",primary:"bg-blue-200 dark:bg-blue-700",success:"bg-green-200 dark:bg-green-700",warning:"bg-yellow-200 dark:bg-yellow-700",error:"bg-red-200 dark:bg-red-700"},size:{xs:"h-[0.5px] data-[orientation=vertical]:w-[0.5px]",sm:"h-px data-[orientation=vertical]:w-px",md:"h-[2px] data-[orientation=vertical]:w-[2px]",lg:"h-[3px] data-[orientation=vertical]:w-[3px]"},withLabel:{true:"flex items-center text-center before:content-[''] before:flex-1 after:content-[''] after:flex-1"},labelPosition:{center:"before:mr-2 after:ml-2",start:"before:hidden after:ml-2",end:"before:mr-2 after:hidden"},dashed:{true:"border-dashed border-0 bg-transparent border-y-[1px] border-gray-200 dark:border-gray-700 h-0"}},compoundVariants:[{orientation:"horizontal",withLabel:!0,class:"w-full"}],defaultVariants:{orientation:"horizontal",variant:"default",size:"sm",labelPosition:"center"}}),a=({className:r,orientation:S="horizontal",variant:Ve,size:ke,dashed:Be,labelPosition:We,role:Ce="separator","aria-hidden":Fe,"aria-label":Ie,"aria-orientation":je,unstyled:Ae=!1,pt:Te,children:w,...Ne})=>{const Ue=Te||{},E=!!w,Me=je||S;return e("div",{className:Ae?r:qe({orientation:S,variant:Ve,size:ke,dashed:Be,withLabel:E,labelPosition:E?We:void 0,class:r}),role:Ce,"aria-hidden":Fe,"aria-label":Ie,"aria-orientation":Me,"data-orientation":S,...Ue,...Ne,children:w})},Qe={title:"Versakit UI/Divider",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"分割线的方向"},variant:{control:{type:"select"},options:["default","primary","success","warning","error"],description:"分割线的样式变体"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"分割线的尺寸"},dashed:{control:"boolean",description:"是否为虚线"},labelPosition:{control:{type:"select"},options:["center","start","end"],description:"标签的位置（当有标签时）"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"}},decorators:[r=>e("div",{style:{width:"100%",maxWidth:"500px",padding:"20px"},children:r()})]},s={args:{variant:"default",size:"sm"}},t={args:{variant:"primary",size:"sm"}},n={args:{variant:"success",size:"sm"}},i={args:{variant:"warning",size:"sm"}},o={args:{variant:"error",size:"sm"}},c={args:{variant:"default",size:"xs"}},l={args:{variant:"default",size:"sm"}},d={args:{variant:"default",size:"md"}},m={args:{variant:"default",size:"lg"}},u={args:{variant:"default",size:"sm",dashed:!0}},p={args:{variant:"default",size:"sm",children:"标签文本"}},g={args:{variant:"default",size:"sm",labelPosition:"center",children:"居中标签"}},v={args:{variant:"default",size:"sm",labelPosition:"start",children:"左对齐标签"}},b={args:{variant:"default",size:"sm",labelPosition:"end",children:"右对齐标签"}},f={args:{orientation:"vertical",variant:"default",size:"sm"},decorators:[r=>e("div",{style:{height:"100px",display:"flex",alignItems:"center"},children:r()})]},h={render:()=>Oe("div",{style:{height:"100px",display:"flex",alignItems:"center",gap:"20px"},children:[e(a,{orientation:"vertical",size:"xs"}),e(a,{orientation:"vertical",size:"sm"}),e(a,{orientation:"vertical",size:"md"}),e(a,{orientation:"vertical",size:"lg"})]})},z={args:{unstyled:!0,className:"h-px w-full bg-purple-300"}},x={args:{variant:"default",size:"sm",pt:{"data-testid":"custom-divider","data-custom":"custom-value"}}},y={args:{variant:"default",size:"sm","aria-label":"内容分隔符"}};var P,L,D;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm"
  }
}`,...(D=(L=s.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var V,k,B;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm"
  }
}`,...(B=(k=t.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var W,C,F;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "sm"
  }
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var I,j,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "sm"
  }
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var T,N,U;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "sm"
  }
}`,...(U=(N=o.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var M,O,_;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "xs"
  }
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var q,G,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm"
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md"
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,X,Y;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg"
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    dashed: true
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    children: "标签文本"
  }
}`,...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,ie;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    labelPosition: "center",
    children: "居中标签"
  }
}`,...(ie=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,ce,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    labelPosition: "start",
    children: "左对齐标签"
  }
}`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,me,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    labelPosition: "end",
    children: "右对齐标签"
  }
}`,...(ue=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,ge,ve;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    variant: "default",
    size: "sm"
  },
  decorators: [
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  (Story: any) => <div style={{
    height: "100px",
    display: "flex",
    alignItems: "center"
  }}>{Story()}</div>]
}`,...(ve=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,fe,he;h.parameters={...h.parameters,docs:{...(be=h.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100px",
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>
            <Divider orientation="vertical" size="xs" />
            <Divider orientation="vertical" size="sm" />
            <Divider orientation="vertical" size="md" />
            <Divider orientation="vertical" size="lg" />
        </div>
}`,...(he=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ze,xe,ye;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "h-px w-full bg-purple-300"
  }
}`,...(ye=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Se,we,Ee;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    pt: {
      "data-testid": "custom-divider",
      "data-custom": "custom-value"
    }
  }
}`,...(Ee=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Pe,Le,De;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    "aria-label": "内容分隔符"
  }
}`,...(De=(Le=y.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};const Re=["Default","Primary","Success","Warning","ErrorVariant","ExtraSmall","Small","Medium","Large","Dashed","WithLabel","LabelCenter","LabelStart","LabelEnd","Vertical","VerticalSizes","Unstyled","WithPassThrough","AccessibilityExample"];export{y as AccessibilityExample,u as Dashed,s as Default,o as ErrorVariant,c as ExtraSmall,g as LabelCenter,b as LabelEnd,v as LabelStart,m as Large,d as Medium,t as Primary,l as Small,n as Success,z as Unstyled,f as Vertical,h as VerticalSizes,i as Warning,p as WithLabel,x as WithPassThrough,Re as __namedExportsOrder,Qe as default};
