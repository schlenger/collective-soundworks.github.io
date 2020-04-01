# Contributing to this Website

You wrote some documentation about some `soundworks` related stuff that could be useful to others, or you would like to fix or even improve existing content (which might be a great challenge)? Please contribute!

::: tip Note
This site is generated using `vuepress`, full documentation can be found at [https://vuepress.vuejs.org/](https://vuepress.vuejs.org/)
:::

## Installing and Deploying

1. Clone repo and go to `sources` branch where the source files are located

```sh
git clone git@github.com:collective-soundworks/collective-soundworks.github.io.git
git checkout sources
npm install
```

2. Run `vuepress` in development mode

```sh
npm run docs:dev
```

Do whatever you need to do...

3. Publish on GitHub using the dedicated script:

```sh
./deploy.sh
```

## Examples

### Adding a "Misc" Page

1. Add your markdown file in the `/misc` directory

::: tip Note
If your file is quite a long file, it can be nice to put a "table of content" on top of it using the `[[toc]]` command:

```md
# My Awesome Document

[[toc]]

## subsection 1

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. 

## subsection 2

Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

cf. [https://vuepress.vuejs.org/guide/markdown.html#table-of-contents](https://vuepress.vuejs.org/guide/markdown.html#table-of-contents)
::: 

2. Add your page to the sidebar menu

- Open the `.vuepress/config.js`
- Add the path to your markdown file in `children` entry of the 'Misc' object:

```js
{
  title: 'Misc',      // required
  path: '/misc/',     // optional, which should be a absolute path.
  collapsable: false,  // optional, defaults to true
  sidebarDepth: 2,    // optional, defaults to 1
  children: [
    '/misc/setting-up-environment',
    '/misc/local-deployment',
    '/misc/contributing-to-this-site',
    // add your file here
  ]
},
```

3. Test everything is good with `vuepress`, run the following in a Terminal

```sh
npm install
vuepress dev
```

4. If everything is ok, just push on GitHub doing:

```
npm run deploy
```

### Adding a "Tutorial" Page

Same process a "Misc" page except the link in the side-bar should be placed in the `Tutorial` entry of the `config.js` file:

```js
{
  title: 'Tutorials',      // required
  path: '/tutorials/',     // optional, which should be a absolute path.
  collapsable: false,  // optional, defaults to true
  sidebarDepth: 2,    // optional, defaults to 1
  children: [
    '/tutorials/state-manager',
    // add your file here
  ]
},
```

<!--
## Add a "Service" Entry

@todo
-->

