const csjs = require("csjs-inject");
const html = require("nanohtml");

module.exports = testing;

function testing() {
  const testnanohtml = html` <h1 id="bort">Testing</h1> `;
  return testnanohtml;
}

const css = csjs`#bort,h1{color:blue;}`;
