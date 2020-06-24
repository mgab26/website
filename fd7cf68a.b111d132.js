(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return b}));var a=t(2),s=t(6),i=t(0),o=t(175),c=t(177),r=t(176),d={id:"css-style",title:"CSS Style",keywords:["javascript","table","javascript table","gridjs","grid js","styling","css style"]},l={id:"examples/css-style",isDocsHomePage:!1,title:"CSS Style",description:"You can easily customize your Grid.js instance and add CSS styles to it:",source:"@site/docs/examples/css-style.md",permalink:"/docs/examples/css-style",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/css-style.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592950350,sidebar:"sidebar",previous:{title:"Server Side Sorting",permalink:"/docs/examples/server-side-sort"},next:{title:"CSS ClassName",permalink:"/docs/examples/css-classname"}},m=[],p={rightToc:m};function b(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can easily customize your Grid.js instance and add CSS styles to it:"),Object(o.b)(r.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  search: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ],\n  style: {\n    table: {\n      border: '3px solid #ccc'\n    },\n    th: {\n      'background-color': 'rgba(0, 0, 0, 0.1)',\n      color: '#000',\n      'border-bottom': '3px solid #ccc',\n      'text-align': 'center'\n    },\n    td: {\n      'text-align': 'center'\n    }\n  }\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:r.a,useEffect:i.useEffect,useRef:i.useRef},mdxType:"CodeBlock"}),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config/style"}),"style")," config for more details."))))}b.isMDXComponent=!0}}]);