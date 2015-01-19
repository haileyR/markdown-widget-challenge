$(document).ready(function(){
  mdWidget = new MarkdownWidget("#source-id", "#preview-div");

  var sourceElement = mdWidget.textSource;
  var previewElement = mdWidget.preview;

  $(sourceElement).keyup(function(event){
    var text = $(sourceElement).val();
    $(previewElement).children('p').replaceWith("<p>"+mdWidget.previewText(text)+"</p>")
  });


})