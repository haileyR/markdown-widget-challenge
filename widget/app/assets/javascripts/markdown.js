function Markdowner(){
  this.rawText = ""
  this.markdownHTML = ""
  this.openGlyphs = {
    "<strong>" :/\*{2}/,
    "<strong>":/_{2}/,
    "<em>":/\*{1}/,
    "<em>":/_{1}/,
    "<h1>":/#{1}/
  }
  this.closeGlyphs = {
    "</strong>": /\*{2}/,
    "</strong>": /_{2}/,
    "</em>": /\*{1}/,
    "</em>": /_{1}/,
    "</h1>": /\n/
  }
}

Markdowner.prototype = {

  setText: function(text){
    this.rawText = text
    this.markdownHTML = text
  },

  openTagReplace: function(){
    var dictionary = this.openGlyphs
    for(var glyph in dictionary){
      this.markdownHTML = this.markdownHTML.replace(dictionary[glyph], glyph)
    }
  },

  closeTagReplace: function(){
    var dictionary = this.closeGlyphs
    for( var glyph in dictionary ){
      this.markdownHTML = this.markdownHTML.replace( dictionary[glyph], glyph)
    }
  },
}

function MarkdownController(model, view){
  this.model = model
  this.view = view
  this.userString = ""
  this.htmlString = ""
}

function MarkdownView(inputField, outputDiv){
  this.$inputField = $(inputField)
  this.$outputDiv = $(outputDiv)
}

MarkdownView.prototype.updateOutput = function(text){
    this.$outputDiv.html("<p>" + text + "</p>")
  }

MarkdownController.prototype.transformText = function(view){
  this.view.setText()
}

MarkdownController.prototype.doPreview = function(){
  $(window).on("keyup", function(){
    this.model.setText( this.view.$inputField.val() )
    this.model.openTagReplace()
    this.model.closeTagReplace()
    this.view.updateOutput( this.model.markdownHTML )
  }.bind(this))
}





