import { jChoose } from "../jchoose";

(() => {
  // @ts-ignore
  global.jChoose = jChoose;
})();

let jc = new jChoose();
jc.choose({
  appendSelectors: ".jChoose"
})

let jc2 = new jChoose();
jc.choose({
  appendSelectors: ".jChoose2"
})