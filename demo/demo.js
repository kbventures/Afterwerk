const csjs = require("csjs-inject");
const html = require("nanohtml");

const navigationBar = require("../src/navigationBar");
const navBar = navigationBar();

function demo() {
  const page = html`${navBar}`;
  return page;
}

document.body.appendChild(demo());
