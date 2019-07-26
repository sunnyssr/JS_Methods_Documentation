let jsMethods = [{
  prototypeName: "map",
  protoOf: "Array",
  mutates: false,
  description: "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
  syntax: "arr.lastIndexOf(searchElement[, fromIndex])",
  mdnLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
  example: " \
  var array1 = [1, 4, 9, 16]; \n\
  \n\
  // pass a function to map \n\
  const map1 = array1.map(x => x * 2);\n\
  \n\
  console.log(map1); \n\
  // expected output: Array [2, 8, 18, 32]\
  "
  
}, {
  
}, {

}]
let code = document.createElement("code")
code.textContent = jsMethods[0].example;
code.classList.add("language-js")
let pre = document.createElement("pre")
pre.append(code)
document.body.append(pre);
// document.body.innerHTML = `<code class="language-js" >${jsMethods[0].example}</code>`
 
let loadMethods = () => {};