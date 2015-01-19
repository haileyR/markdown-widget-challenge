function MarkdownWidget(source, preview){
  this.textSource = source;
  this.preview = preview;
}

MarkdownWidget.prototype.italics = function(text){
  var wordsToBeItalic = [];
  if (text.match(/[_]\w+[_]/ig) != null){
    text.match(/[_]\w+[_]/ig).forEach(function(match){
      wordsToBeItalic.push(match);
    });
  };

  if (text.match(/[*]\w+[*]/ig) != null){
    text.match(/[*]\w+[*]/ig).forEach(function(match){
      wordsToBeItalic.push(match);
    });
  };
  return wordsToBeItalic;

}

MarkdownWidget.prototype.bolds = function(text){
  var wordsToBeBold = [];
  if (text.match(/[*][*]\w+[*][*]/ig) != null){
    text.match(/[*][*]\w+[*][*]/ig).forEach(function(match){
      wordsToBeBold.push(match);
    });
  };
  return wordsToBeBold;

}

MarkdownWidget.prototype.previewText = function(text){
  this.bolds(text).forEach(function(word){
    text = text.replace(word, "<b>"+word.substr(2, word.length-4)+"</b>")
  });
  this.italics(text).forEach(function(word){
    text = text.replace(word, "<i>"+word.substr(1, word.length-2)+"</i>")
  });
  return text;
}