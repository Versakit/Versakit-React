import{j as e,a as d,F as p}from"./jsx-runtime-CVkQBkwt.js";import{B as i}from"./index-BYl7pwD6.js";import{c}from"./main-CC60pO_z.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const Ce=c({base:"rounded-lg border bg-card text-card-foreground shadow-sm",variants:{variant:{default:"border-gray-200 bg-white",outline:"border-gray-200 bg-transparent",filled:"border-transparent bg-gray-100",elevated:"border-transparent shadow-md"},size:{sm:"p-3",md:"p-4",lg:"p-6"}},defaultVariants:{variant:"default",size:"md"}}),ge=c({base:"flex flex-col space-y-1.5 pb-4"}),ve=c({base:"text-lg font-semibold leading-none tracking-tight"}),Ee=c({base:"text-sm text-gray-500"}),fe=c({base:"pt-0"}),Be=c({base:"flex items-center pt-4",variants:{align:{start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between"}},defaultVariants:{align:"between"}}),r=({className:a,variant:n,size:t,unstyled:u=!1,pt:s,children:o,...l})=>{const he=s||{};return e("div",{className:u?a:Ce({variant:n,size:t,class:a}),...he,...l,children:o})},Ae=({className:a,unstyled:n=!1,pt:t,children:u,...s})=>{const o=t||{};return e("div",{className:n?a:ge({class:a}),...o,...s,children:u})},De=({className:a,unstyled:n=!1,pt:t,as:u="h3",children:s,...o})=>{const l=t||{};return e(u,{className:n?a:ve({class:a}),...l,...o,children:s})},ze=({className:a,unstyled:n=!1,pt:t,children:u,...s})=>{const o=t||{};return e("p",{className:n?a:Ee({class:a}),...o,...s,children:u})},Te=({className:a,unstyled:n=!1,pt:t,children:u,...s})=>{const o=t||{};return e("div",{className:n?a:fe({class:a}),...o,...s,children:u})},be=({className:a,align:n,unstyled:t=!1,pt:u,children:s,...o})=>{const l=u||{};return e("div",{className:t?a:Be({align:n,class:a}),...l,...o,children:s})};r.Header=Ae;r.Title=De;r.Description=ze;r.Content=Te;r.Footer=be;const je={title:"Versakit UI/Card",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","outline","filled","elevated"],description:"卡片的样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"卡片的尺寸"},className:{control:"text",description:"自定义 CSS 类名"},unstyled:{control:"boolean",description:"是否移除默认样式"},pt:{control:"object",description:"传递给组件的自定义属性"}}},m={args:{variant:"default",size:"md",children:"这是一个基本的卡片"}},F={args:{variant:"outline",size:"md",children:"这是一个轮廓卡片"}},h={args:{variant:"filled",size:"md",children:"这是一个填充卡片"}},C={args:{variant:"elevated",size:"md",children:"这是一个阴影卡片"}},g={args:{variant:"default",size:"sm",children:"这是一个小尺寸卡片"}},v={args:{variant:"default",size:"md",children:"这是一个中尺寸卡片"}},E={args:{variant:"default",size:"lg",children:"这是一个大尺寸卡片"}},f={args:{variant:"default",size:"md",children:d(p,{children:[d(r.Header,{children:[e(r.Title,{children:"卡片标题"}),e(r.Description,{children:"这是卡片的描述文本，提供更多的上下文信息。"})]}),e(r.Content,{children:e("p",{children:"这是卡片的主要内容区域。您可以在这里放置任何内容，如文本、图像、列表等。"})}),d(r.Footer,{children:[e(i,{variant:"primary",children:"确认"}),e(i,{variant:"outline",children:"取消"})]})]})}},B={args:{variant:"default",size:"md",children:d(p,{children:[e(r.Header,{children:e(r.Title,{children:"左对齐页脚"})}),e(r.Content,{children:e("p",{children:"这个卡片的页脚按钮左对齐。"})}),d(r.Footer,{align:"start",children:[e(i,{variant:"primary",children:"确认"}),e(i,{variant:"outline",children:"取消"})]})]})}},A={args:{variant:"default",size:"md",children:d(p,{children:[e(r.Header,{children:e(r.Title,{children:"居中对齐页脚"})}),e(r.Content,{children:e("p",{children:"这个卡片的页脚按钮居中对齐。"})}),d(r.Footer,{align:"center",children:[e(i,{variant:"primary",children:"确认"}),e(i,{variant:"outline",children:"取消"})]})]})}},D={args:{variant:"default",size:"md",children:d(p,{children:[e(r.Header,{children:e(r.Title,{children:"右对齐页脚"})}),e(r.Content,{children:e("p",{children:"这个卡片的页脚按钮右对齐。"})}),d(r.Footer,{align:"end",children:[e(i,{variant:"primary",children:"确认"}),e(i,{variant:"outline",children:"取消"})]})]})}},z={args:{variant:"default",size:"md",children:d(p,{children:[d(r.Header,{children:[e(r.Title,{as:"h2",children:"H2 标题"}),e(r.Description,{children:"这个卡片使用 H2 作为标题级别。"})]}),e(r.Content,{children:e("p",{children:"卡片内容"})})]})}},T={args:{unstyled:!0,className:"bg-purple-50 border border-purple-200 rounded-xl p-5",children:"这是一个自定义样式的卡片"}},b={args:{variant:"default",size:"md",children:"带自定义属性的卡片",pt:{"data-testid":"custom-card","data-custom":"custom-value"}}};var y,H,S;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "这是一个基本的卡片"
  }
}`,...(S=(H=m.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var x,V,j;F.parameters={...F.parameters,docs:{...(x=F.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "这是一个轮廓卡片"
  }
}`,...(j=(V=F.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var w,L,N;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "filled",
    size: "md",
    children: "这是一个填充卡片"
  }
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,U,k;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "elevated",
    size: "md",
    children: "这是一个阴影卡片"
  }
}`,...(k=(U=C.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var M,P,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    children: "这是一个小尺寸卡片"
  }
}`,...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,I,q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "这是一个中尺寸卡片"
  }
}`,...(q=(I=v.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var G,J,K;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "lg",
    children: "这是一个大尺寸卡片"
  }
}`,...(K=(J=E.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: <>
                <Card.Header>
                    <Card.Title>卡片标题</Card.Title>
                    <Card.Description>这是卡片的描述文本，提供更多的上下文信息。</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p>这是卡片的主要内容区域。您可以在这里放置任何内容，如文本、图像、列表等。</p>
                </Card.Content>
                <Card.Footer>
                    <Button variant="primary">确认</Button>
                    <Button variant="outline">取消</Button>
                </Card.Footer>
            </>
  }
}`,...(X=(R=f.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: <>
                <Card.Header>
                    <Card.Title>左对齐页脚</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>这个卡片的页脚按钮左对齐。</p>
                </Card.Content>
                <Card.Footer align="start">
                    <Button variant="primary">确认</Button>
                    <Button variant="outline">取消</Button>
                </Card.Footer>
            </>
  }
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: <>
                <Card.Header>
                    <Card.Title>居中对齐页脚</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>这个卡片的页脚按钮居中对齐。</p>
                </Card.Content>
                <Card.Footer align="center">
                    <Button variant="primary">确认</Button>
                    <Button variant="outline">取消</Button>
                </Card.Footer>
            </>
  }
}`,...(ae=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,ue;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: <>
                <Card.Header>
                    <Card.Title>右对齐页脚</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>这个卡片的页脚按钮右对齐。</p>
                </Card.Content>
                <Card.Footer align="end">
                    <Button variant="primary">确认</Button>
                    <Button variant="outline">取消</Button>
                </Card.Footer>
            </>
  }
}`,...(ue=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};var se,oe,de;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: <>
                <Card.Header>
                    <Card.Title as="h2">H2 标题</Card.Title>
                    <Card.Description>这个卡片使用 H2 作为标题级别。</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p>卡片内容</p>
                </Card.Content>
            </>
  }
}`,...(de=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,ce,le;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    className: "bg-purple-50 border border-purple-200 rounded-xl p-5",
    children: "这是一个自定义样式的卡片"
  }
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,me,Fe;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "带自定义属性的卡片",
    pt: {
      "data-testid": "custom-card",
      "data-custom": "custom-value"
    }
  }
}`,...(Fe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:Fe.source}}};const we=["Default","Outline","Filled","Elevated","Small","Medium","Large","CompleteExample","FooterAlignStart","FooterAlignCenter","FooterAlignEnd","CustomTitleLevel","Unstyled","WithPassThrough"];export{f as CompleteExample,z as CustomTitleLevel,m as Default,C as Elevated,h as Filled,A as FooterAlignCenter,D as FooterAlignEnd,B as FooterAlignStart,E as Large,v as Medium,F as Outline,g as Small,T as Unstyled,b as WithPassThrough,we as __namedExportsOrder,je as default};
