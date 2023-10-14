import { jChoose } from "../jchoose";

(() => {
  // @ts-ignore
  global.jChoose = jChoose;

  let ch = new jChoose();
  ch.choose();
})();
