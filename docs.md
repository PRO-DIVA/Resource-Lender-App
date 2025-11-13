## Resources: 
- https://www.typescriptlang.org/docs/
- https://www.prisma.io/
- https://www.prisma.io/docs/orm/reference/prisma-config-reference#using-environment-variables
- https://vite.dev/
- https://vite.dev/guide/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://nodejs.org/en/download
- https://nodejs.org/api/esm.html#esm_enabling
- https://stackoverflow.com/questions/65602936/do-i-need-chocolatey-in-node-js-for-web-development
- https://www.prisma.io/docs/orm/prisma-schema/overview
- https://www.postgresql.org/download/windows/
- https://www.prisma.io/docs/orm/more/help-and-troubleshooting/dataguide/setting-up-a-local-postgresql-database
- https://www.prisma.io/studio
- https://www.prisma.io/postgres
- https://coding-boot-camp.github.io/full-stack/postgresql/postgresql-installation-guide 
- https://nodejs.org/en/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
<br>

### Typescript in Experimental phase with Nodejs Modules:
- https://nodejs.org/docs/latest/api/typescript.html#full-typescript-support

### How to navigate stack builder (not required)
- https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/using_stackbuilder/

### Mock Service Examples and How to use Stripe for payments
- https://speedscale.com/blog/mock-services-top-use-cases/
- https://stripe.com/in

### The Linux Foundation training courses on Nodejs
- https://training.linuxfoundation.org/openjs/

### JSON.parse() and JSON.stringify:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify


## Arrays
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Download SQLite
- https://www.youtube.com/watch?v=FsiyOAkC0P4
- https://sqlite.org/download.html

## Learn Git
- https://www.atlassian.com/git/tutorials/using-branches
- https://stackoverflow.com/questions/4114095/how-do-i-revert-a-git-repository-to-a-previous-commit
- https://learngitbranching.js.org/

## Learn pnpm
- https://www.reddit.com/r/node/comments/144xqd8/is_pnpm_really_leaves_up_to_its_hype_are_yarn_npm/
- https://pnpm.io/installation
- https://pnpm.io/workspaces
- pnpm remove ```packagename```
- pnpm install ```packagename```


## Monorepo survival guide
- https://medium.com/@amirilovic/the-node-js-monorepo-survival-guide-84c7ad9b89ad
- https://monorepo.tools/#what-is-a-monorepo

> `A monorepo in Node.js refers to a single version-controlled repository (like a Git repository) that houses multiple distinct Node.js projects, packages, or applications. While these projects might be related, they are often logically independent and can even be managed by different teams. `

## To print the tree structure 
- make sure you have wsl installed (Windows subsystem for linux)
- ```ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/   /' -e 's/-/|/'```
- https://stackoverflow.com/questions/3455625/linux-command-to-print-directory-structure-in-the-form-of-a-tree

## Nodemon
- https://www.npmjs.com/package/nodemon
- **Note**: ```npm start``` is using ```node``` and ```npm dev``` is using ```nodemon```
