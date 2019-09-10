const fs = require('fs');
const file = '../pdf/assets/refactoring.txt';

function logInstances(data) {
  const refactorings = createListOfRefactorings(data);
  printRefactoringsInOrder(refactorings);
}

function createListOfRefactorings(data) {
  const pageNumbers = getRefactoringPageNumbers();
  const refactorings = [];
  for (let key in pageNumbers) {
    let re = new RegExp('\\(' + pageNumbers[key] + '\\)', 'ig');
    refactorings.push({
      name: key,
      page: pageNumbers[key],
      references: data.match(re).length
    });
    // console.log(`"${key}" is referenced ${data.match(re).length} times.`);
  }
  // console.log(`Number of Refactorings ${length}`);
  return refactorings;
}

function printRefactoringsInOrder(sortedRefactorings) {
  function compareNumbers(a, b) {
    return a.references - b.references;
  }
  sortedRefactorings.sort(compareNumbers);
  sortedRefactorings.reverse();
  sortedRefactorings.forEach(function(currentValue, index, array) {
    console.log(`${currentValue.name} is referenced ${currentValue.references} times.`);
  })
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
  return require('./data/refactoring-page-numbers.json');
}

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  // console.log(data);
  logInstances(data);
});
