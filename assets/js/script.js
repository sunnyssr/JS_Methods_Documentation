let methodSearchElement = document.querySelector(".method-search");
let filterByMethodElement = document.querySelector("#filterByMethodOf");
let filterByMutatesElement = document.querySelector("#filterByMutates");

let jsMethods = [{
  prototypeName: "map",
  protoOf: "Array",
  mutates: false,
  description: "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
  syntax: "var new_array = arr.map(function callback(currentValue[, index[, array]]) { \n\
    // Return element for new_array \n\
}[, thisArg])",
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
  prototypeName: "includes",
  protoOf: "String",
  mutates: false,
  description: "The includes() method determines whether one string may be found within another string, returning true or false as appropriate.",
  syntax: "str.includes(searchString[, position])",
  mdnLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes",
  example: " \
  var sentence = 'The quick brown fox jumps over the lazy dog.'; \n\
  \n\
  var word = 'fox'; \n\
  \n\
  console.log(`The word \"${word}\" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`); \n\
  // expected output: \"The word \"fox\" is in the sentence\" \n\
  "
}]

//  Function which would show the provided method array in HTML
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

let refreshMethods = () => {
  let filteredArray = [...jsMethods];

  let mutatesFilterValue = filterByMutatesElement.value;
  switch(mutatesFilterValue){
    case "all": 
    filteredArray = filteredArray;
    break;

    case "mutates": 
      filteredArray = filteredArray.filter((method) => method.mutates === true);
      break;
    
    case "notmutates":
      filteredArray = filteredArray.filter((method) => method.mutates === false)
  }

  let methodOfFilterValue = filterByMethodElement.value;
  filteredArray = (methodOfFilterValue === "all") ? filteredArray : filteredArray.filter((method) => method.protoOf === methodOfFilterValue);

  let methodSearchValue = methodSearchElement.value;
  filteredArray = filteredArray.filter((method) => (method.prototypeName.toLowerCase().includes(methodSearchValue.toLowerCase())) || (method.description.toLowerCase().includes(methodSearchValue.toLowerCase())) || (method.protoOf.toLowerCase().includes(methodSearchValue.toLowerCase())) )
  
  showMethods(filteredArray);
  Prism.highlightAll();
}

methodSearchElement.addEventListener("change", refreshMethods)
methodSearchElement.addEventListener("keydown", refreshMethods)
methodSearchElement.addEventListener("keyup", refreshMethods)
filterByMethodElement.addEventListener("change", refreshMethods)
filterByMutatesElement.addEventListener("change", refreshMethods)

window.onload = (function(){
  let setOfMethods = new Set(jsMethods.map(val => val.protoOf));
  for(let key of setOfMethods){
    let option = document.createElement("option");
    option.value = key;
    option.innerText = key;
    filterByMethodElement.append(option)
  }
  refreshMethods();
})