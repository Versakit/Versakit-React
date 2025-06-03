import{j as r,a as e,F as d}from"./jsx-runtime-CVkQBkwt.js";import{M as c}from"./index-Ddt7JnWB.js";import{useMDXComponents as a}from"./index--fhZTOoi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BoxnQIO4.js";import"../sb-preview/runtime.js";import"./index-aS4jWOJ1.js";import"./index-Cu4lwwaE.js";import"./index-B_TSwO5-.js";import"./index-DrFu-skq.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",a:"a"},a(),i.components);return e(d,{children:[r(c,{title:"介绍/Versakit UI"}),`
`,r(n.h1,{id:"versakit-ui",children:"Versakit UI"}),`
`,r(n.p,{children:"Versakit UI 是一个现代化的 React 组件库，专为桌面应用程序设计，提供了一套高度可定制的组件解决方案。"}),`
`,r(n.h2,{id:"特点",children:"特点"}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"🚀   提供高质量的通用 React 组件"}),`
`,r(n.li,{children:"🎨   使用 Tailwind CSS 实现高度可定制的样式"}),`
`,r(n.li,{children:"🛠️   支持按需导入"}),`
`,r(n.li,{children:"🌍   支持国际化"}),`
`,r(n.li,{children:"💡   TypeScript 支持"}),`
`,r(n.li,{children:"🌙   暗黑模式支持"}),`
`,r(n.li,{children:"♿   注重无障碍设计"}),`
`]}),`
`,r(n.h2,{id:"安装",children:"安装"}),`
`,r(n.pre,{children:r(n.code,{className:"language-bash",children:`# 使用 npm
npm install @versakit/react

# 使用 yarn
yarn add @versakit/react

# 使用 pnpm
pnpm add @versakit/react
`})}),`
`,r(n.h2,{id:"使用",children:"使用"}),`
`,r(n.pre,{children:r(n.code,{className:"language-tsx",children:`import React from "react";
import { Button, Card, Chip, Badge } from "@versakit/react";
import "@versakit/react/dist/main.css";

function App() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>示例卡片</Card.Title>
          <Card.Description>这是一个包含多个组件的示例</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="flex gap-2 mb-4">
            <Chip>标签1</Chip>
            <Chip variant="primary">标签2</Chip>
            <Chip variant="success" closable>
              可关闭标签
            </Chip>
          </div>
          <Button>
            消息 <Badge content="5" variant="error" position="top-right" />
          </Button>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary">确认</Button>
          <Button variant="outline">取消</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
`})}),`
`,r(n.h2,{id:"组件列表",children:"组件列表"}),`
`,r(n.p,{children:"在左侧导航栏中浏览所有可用的 Versakit UI 组件。目前提供以下组件："}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"Button - 按钮"}),`
`,r(n.li,{children:"Card - 卡片"}),`
`,r(n.li,{children:"Chip - 标签"}),`
`,r(n.li,{children:"Badge - 徽章"}),`
`,r(n.li,{children:"(更多组件正在开发中...)"}),`
`]}),`
`,r(n.h2,{id:"贡献",children:"贡献"}),`
`,e(n.p,{children:["我们欢迎社区贡献！如果您想要参与贡献，请查看我们的 ",r(n.a,{href:"https://github.com/versakit/versakit-eta",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub 仓库"}),"。"]}),`
`,r(n.h2,{id:"许可证",children:"许可证"}),`
`,e(n.p,{children:["Versakit UI 使用 MIT 许可证发布。详细信息请查看项目根目录中的 ",r(n.code,{children:"LICENSE"})," 文件。"]})]})}function f(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?r(n,Object.assign({},i,{children:r(t,i)})):t(i)}export{f as default};
