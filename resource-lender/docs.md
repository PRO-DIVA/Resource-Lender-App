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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

## Prototype Chain and Inheritance
```
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```
```
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```
## Classes and Derived Classes
```
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```
## Arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
