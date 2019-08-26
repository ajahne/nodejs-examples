const fs = require('fs');
const file = '../pdf/assets/refactoring.txt';

function logInstances(data) {
  // const re = /extract\sfunction|method\s\(106\)/ig;
  // const re = /\(106\)/ig;
  const pageNumbers = getRefactoringPageNumbers();
  let length = 0;
  let sortedRefactorings = [];
  for (let key in pageNumbers) {
    let re = new RegExp('\\(' + pageNumbers[key] + '\\)', 'ig');
    console.log(`"${key}" is referenced ${data.match(re).length} times.`);
    length++;
  }
  console.log(`Number of Refactorings ${length}`);
}

/**
Extract function +
Extract Variable +
Move Function +
Move statmens into function vs Extract Function
Rename Field
Rename Variable +
Replace Loop with Pipeline
Slide Statements +
Decompose Conditional
*/

function getRefactoringPageNumbers() {
  //61 from the book
  return {
    'Change Function Declaration': 124,
    'Change Referance to Value': 252,
    'Change Value to Reference': 256,
    'Collapse Hierarchy': 380,
    'Combine Functions into Class': 144,
    'Combine Functions into Transform': 149,
    'Consolidate Conditional Expression': 263,
    'Decompose Conditional': 260,
    'Encapsulate Collection': 170,
    'Encapsulate Record': 162,
    'Encapsulate Variable': 132,
    'Extract Class': 182,
    'Extract Function': 106,
    'Extract Superclass': 375,
    'Extract Variable': 119,
    'Hide Delegate': 189,
    'Inline Class': 186,
    'Inline Function': 115,
    'Inline Variable': 123,
    'Introduce Assertion': 302,
    'Introduce Paramter Object': 140,
    'Introduce Special Case': 289,
    'Move Field': 207,
    'Move Function': 198,
    'Move Statements into Function': 213,
    'Move Staments to Callers': 217,
    'Parameterize Function': 310,
    'Preserve Whole Object': 319,
    'Pull Up Constructor Body': 355,
    'Pull Up Field': 353,
    'Pull Up Method': 350,
    'Push Down Field': 361,
    'Push Down Method': 359,
    'Remove Dead Code': 237,
    'Remove Flag Argument': 314,
    'Remove Middle Man': 192,
    'Remove Setting Method': 331,
    'Remove Subclass': 369,
    'Rename Field': 244,
    'Rename Variable': 137,
    'Replace Command with Function': 344,
    'Replace Conditional with Polymorphism': 272,
    'Replace Constructor with Factory Function': 334,
    'Replace Derived Variable with Query': 248,
    'Replace Function with Command': 337,
    'Replace Inline Code with Function': 222,
    'Replace Loop with Pipeline': 231,
    'Replace Nested Conditional with Guard Clauses': 266,
    'Replace Paramter with Query': 334,
    'Replace Primitive with Object': 174,
    'Replace Query with Paramter': 327,
    'Replace Subclass with Delegate': 381,
    'Replace Superclass with Delegate': 399,
    'Replace Temp with Query': 178,
    'Replace Type Code with Subclasses': 362,
    'Separate Query from Modifier': 306,
    'Slide Statements': 223,
    'Split Loop': 227,
    'Split Phase': 154,
    'Split Variable':240,
    'Substitute Algorithm':195,
  }
}

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  // console.log(data);
  logInstances(data);
});
