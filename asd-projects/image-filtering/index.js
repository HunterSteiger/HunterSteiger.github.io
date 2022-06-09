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
applyFilterNoBackground(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var a = 0; a < image.length; a++){
    var row = image[a]
    for (var b = 0; b < row.length; b++){
    var rgbString = row[b]
        var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      row[b] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  
  for (var c = 0; c < image.length; c++){
      var row = image[c];
      for (var d = 0; d < row.length; d++){
        var rgbString = row[d];

        if (rgbString !== backgroundColor){
          var rgbNumbers = rgbStringToArray(rgbString);
          filterFunction(rgbNumbers);
          rgbString = rgbArrayToString(rgbNumbers);
          row[d] = rgbString;
        }
      }
    }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num){

  var max = Math.max(num, 0);
  var min = Math.min(max, 255);
  return min;
}


// TODO 3: Create reddify function
function reddify(array){
  array[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(array){
  array[BLUE] = keepInBounds(array[BLUE] - 50);
}
function increaseGreenByBlue(array){
  array[GREEN] = keepInBounds(array[BLUE] + array[GREEN])
}

// CHALLENGE code goes below here
