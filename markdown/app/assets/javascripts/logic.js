$(document).ready(function(){

  $("#markdown textarea").keyup(function(event) {
    var target = $(event.target)
    console.log(markdownParser(target.val()))
    $("#render").empty().append(markdownParser(target.val()));

  });
});


function markdownParser(string) {
  var i;
  var slicePoint = 0;
  var len = string.length
  var newString = "";

  for (i = 0; i < len; i++) {
    switch (string[i]) {
      case "*":
        var boldString = string.slice(slicePoint, i).bold();
        newString += boldString
        slicePoint = i;
        break;
      case "_":
        var underlineString = underline(string.slice(slicePoint, i));
        newString += underlineString
        slicePoint = i;
        break;
      case "~":
        var italicString = string.slice(slicePoint, i).italics();
        newString += italicString
        slicePoint = i;
        break;
      default:
        newString[-1] = string[i]
        break;
    }
  }
  if(newString === "") { return string }
  return stripSpecialChars(newString);
}

function stripSpecialChars(string) {
  return string.replace(/[*_~]/g, ' ');
}

function underline(slice) {
  return "<u>" + slice + "</u>"
}

