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
}






