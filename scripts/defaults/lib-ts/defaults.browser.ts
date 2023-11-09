import { functions, elements } from "./defaults";

// @ts-ignore
global.functions = functions;
// @ts-ignore
global.elements = elements;

elements.popout({
  title: "test",
});
