const csjs = require("csjs-inject");
const html = require("nanohtml");

const test = require("..");

const x = test();

function demo() {
  const navbar = html`<h1 class=${css.testing}>Hello World</h1>
    <h1>${x}</h1>`;
  return navbar;
}

const css = csjs`
.testing{color:red;}`;

document.body.appendChild(demo());
