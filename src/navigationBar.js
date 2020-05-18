const csjs = require("csjs-inject");
const html = require("nanohtml");

module.exports = navigationBar;

function navigationBar() {
  const navigationBar = html`<nav class=${css.header}>
    <div class=${css.container}>
      <div class=${css.logoAndCompanyName}>
        <a><h2 class=${css.opacity85}>AfterWerk</h2></a>
      </div>
      <div>
        <i class="fas fa-bars ${css.opacity85}"></i>
      </div>
    </div>
    <hr class=${css.line} />
  </nav>`;
  return navigationBar;
}

const css = csjs`
a:hover{
  cursor: pointer;
}
h2{font-size: 1.5rem;}
.header{
  position:fixed;
  width: 100%;
  z-index: 30;
  top: 0;
  border-top: #f2059f 0.1rem solid;
  background-image: linear-gradient(
    to bottom,
    #ecbbf2,
    #e3a6f0,
    #d790f0,
    #c97cef,
    #b967f0,
    #a657e3,
    #9348d7,
    #7f38ca,
    #682aac,
    #521d90,
    #3c1074,
    #280459
  );
  }
  .container{
    width: 100%;
    margin-top:0;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content:space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .opacity85{
    opacity:0.85;
  }
  .line{
    border-bottom-width: 1px;
    border-color: #f7fafc;
    opacity:0.25;
    padding-top: 0;
    padding-bottom: 0;
    margin-top:0;
    margin-bottom:0;
  }
  .logoAndCompanyName{
    padding-left:1rem;
  }
  @media (max-width:480px){
    body{background-color:red;}
  }
}`;
