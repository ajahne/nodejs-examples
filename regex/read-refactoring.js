const fs = require('fs');
const file = '../pdf/assets/refactoring.txt';

/**
 * What does the data look like?
 *     data: {
 *      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
 *      datasets: [
 *        {
 *        label: "Population (millions)",
 *          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
 *          data: [2478,5267,734,784,433]
 *        }
 *      ]
 *    },
 *
 * so labels are going to be the list of refactorings
 * "data" is going to be an array
 * how about I write this to a file to be used?
 */
function createDataForChart(refactorings) {
  const filename = 'data.json';
  const config = {
    labels: [],
    data: []
  };

  refactorings.forEach((element, index, array) => {
    config.labels.push(element.name);
    config.data.push(element.references);
  });

  const data = JSON.stringify(config, null, ' ');

  writeFile(filename, data);
}

function writeRawData(refactorings) {
  const filename = 'data-raw.json';
  const data = JSON.stringify(refactorings, null, ' ');

  writeFile(filename, data);
}

function writeFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('file written');
  });
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

function print(refactorings) {
  refactorings.forEach(function(currentValue, index, array) {
    console.log(`${currentValue.name} is referenced ${currentValue.references} times.`);
  })
}

function sort(refactorings) {
  function compareNumbers(a, b) {
    return a.references - b.references;
  }
  refactorings.sort(compareNumbers);
  refactorings.reverse();
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
  const refactorings = createListOfRefactorings(data);
  sort(refactorings);
  // print(refactorings);
  createDataForChart(refactorings);
  writeRawData(refactorings);
});
