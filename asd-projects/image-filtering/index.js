// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreasedBlue);
  applyFilterNoBackground(increasedGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
// nested for loops to iterate over 2D image array
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      var rgbString = image[r][c];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers)
      image[r][c] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground() {
  var backgroundColor = image[0][0];
  // console.log(backgroundColor);
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      if (image[r][c] !== backgroundColor) {
        var rgbString = image[r][c];
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers)
        image[r][c] = rgbString;
      }
    } 
  }
}

// // TODO 5: Create the keepInBounds function
// // multiple ternary operators syntax
// // var yourVar = condition1 ? someValue
// : condition2 ? anotherValue
// : defaultValue;

function keepInBounds(b) {
  var bounds = (b < 0) ? 0
    : (b > 255) ? 255
      : b;
  return bounds;
}

console.log(keepInBounds(-30)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(127)); // should print 127

// TODO 3: Create reddify function
function reddify(r) {
  r[RED] = 200;
}

// TODO 6: Create more filter functions

function decreasedBlue(d) {
  d[BLUE] = keepInBounds(d[BLUE] - 50);
}

function increasedGreenByBlue(g) {
  g[GREEN] = keepInBounds(g[BLUE] + g[GREEN]);
}

// CHALLENGE code goes below here
