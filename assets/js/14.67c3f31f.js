(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{370:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"contributing-to-this-website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-this-website"}},[t._v("#")]),t._v(" Contributing to this Website")]),t._v(" "),a("p",[t._v("You wrote some documentation about some "),a("code",[t._v("soundworks")]),t._v(" related stuff that could be useful to others, or you would like to fix or even improve existing content (which might be a great challenge)? Please contribute!")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This site is generated using "),a("code",[t._v("vuepress")]),t._v(", full documentation can be found at "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuepress.vuejs.org/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("ol",[a("li",[t._v("Clone repo and go to "),a("code",[t._v("sources")]),t._v(" branch where the source files are located")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:collective-soundworks/collective-soundworks.github.io.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" collective-soundworks.github.io\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout sources\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h2",{attrs:{id:"run-development-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-development-mode"}},[t._v("#")]),t._v(" Run Development Mode")]),t._v(" "),a("p",[t._v("Get remote changes")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin sources\n")])])]),a("p",[t._v("Start the development server")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("p",[t._v("Go to "),a("a",{attrs:{href:"http://127.0.0.1:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8080"),a("OutboundLink")],1),t._v(" in your favorite browser (which shall not be Safari) to see the development preview and edit some content (cf. "),a("a",{attrs:{href:"#examples"}},[t._v("examples")]),t._v(").")]),t._v(" "),a("h2",{attrs:{id:"publish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[t._v("#")]),t._v(" Publish")]),t._v(" "),a("p",[t._v("Push your changes on the source branch")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your message'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin sources\n")])])]),a("p",[t._v("A Github action will build the website and deploy it automatically (this can take a few minutes).")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"adding-a-misc-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-misc-page"}},[t._v("#")]),t._v(' Adding a "Misc" Page')]),t._v(" "),a("ol",[a("li",[t._v("Add your markdown file in the "),a("code",[t._v("/misc")]),t._v(" directory")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('If your file is quite long, it can be nice to insert a "table of content" on top of it using the '),a("code",[t._v("[[toc]]")]),t._v(" macro:")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" My Awesome Document")]),t._v("\n\n[[toc]]\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" subsection 1")]),t._v("\n\nLorem ipsum dolor sit amet...\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" subsection 2")]),t._v("\n\nDuis aute irure dolor in...\n")])])]),a("p",[t._v("cf. "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html#table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuepress.vuejs.org/guide/markdown.html#table-of-contents"),a("OutboundLink")],1)])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Add your page to the sidebar menu")])]),t._v(" "),a("ul",[a("li",[t._v("Open the "),a("code",[t._v(".vuepress/config.js")])]),t._v(" "),a("li",[t._v("Add the path to your markdown file in "),a("code",[t._v("children")]),t._v(" entry of the 'Misc' object:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Misc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/misc/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional, which should be a absolute path.")]),t._v("\n  collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional, defaults to true")]),t._v("\n  sidebarDepth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional, defaults to 1")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/misc/setting-up-environment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/misc/local-deployment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/misc/contributing-to-this-site'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add your file here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("a",{attrs:{href:"#publish"}},[t._v("Publish")])])]),t._v(" "),a("h3",{attrs:{id:"adding-a-tutorial-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-tutorial-page"}},[t._v("#")]),t._v(' Adding a "Tutorial" Page')]),t._v(" "),a("p",[t._v('Creating a "tutorial" page follow the same process as a "Misc" page, except your file should be placed in the '),a("code",[t._v("/tutorials")]),t._v(" directory and the link in the side-bar should be placed in the "),a("code",[t._v("Tutorials")]),t._v(" entry of the "),a("code",[t._v("config.js")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tutorials'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tutorials/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional, which should be a absolute path.")]),t._v("\n  collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional, defaults to true")]),t._v("\n  sidebarDepth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional, defaults to 1")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tutorials/state-manager'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add your file here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);