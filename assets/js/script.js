let jsMethods = [{
  prototypeName: "map",
  protoOf: "Array",
  mutates: false,
  description: "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
  syntax: "arr.lastIndexOf(searchElement[, fromIndex])",
  mdnLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
  example: "\n\
  var array1 = [1, 4, 9, 16]; \n\
  // pass a function to map \n\
  const map1 = array1.map(x => x * 2);\n\
  console.log(map1); \n\
  // expected output: Array [2, 8, 18, 32]  \n  "
  
}, {
  
}, {
}]
let code = document.createElement("textarea")
code.classList.add("language-js")
document.body.append(code);
// document.body.innerHTML = `<code class="language-js" >${jsMethods[0].example}</code>`
let myTextArea = document.querySelector("textarea")
var myCodeMirror = CodeMirror(function(elt) {
  myTextArea.parentNode.replaceChild(elt, myTextArea);
}, {value: jsMethods[0].example, mode:  "javascript", theme: "base16-light", lineNumbers: true, readOnly: true }); 


let loadMethods = () => {};
