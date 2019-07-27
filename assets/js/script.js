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
  
}]

let showMethods = (methods) => {
  let htmlCode = ""
  methods.forEach((method) => {
    htmlCode += `<div id ="${method.protoOf.toLowerCase()}-${method.prototypeName}" class="js-method">
                  <h3 class="method-name">
                    <a href="#${method.protoOf.toLowerCase()}-${method.prototypeName}">${method.protoOf}.prototype.${method.prototypeName}</a>
                  </h3>
                  <h5 class="method-heading">Description</h5>
                  <p class="description">${method.description}</p>
                  <h5 class="method-heading">Syntax</h5>
                  <pre><code class="language-js">${method.syntax}</code></pre>
                  <a class="mdn-link" href="${method.mdnLink}" target="_blank">${method.mdnLink}</a>
                  <h5 class="method-heading">Example</h5>
                  <pre><code class="language-js" >${method.example}</code></pre>
                </div>`
  });

  document.querySelector(".methods-container").innerHTML = htmlCode;

};
showMethods(jsMethods);