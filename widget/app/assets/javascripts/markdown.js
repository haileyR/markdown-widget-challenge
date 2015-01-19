var Markdowner = function(){
  this.rawText = "";
  this.markdownHTML = "";
  this.tagOpen = false;
  this.glyphs = {
    "*": "<em>",
    "_": "<em>"
  }
}

Markdowner.prototype = {

  setText: function(){
    this.rawText = $(".new_article textarea").val();
  },

  updateOutput: function(){
    $(".new_article textarea").val(this.markdownHTML);
  },

  closeTag: function(tag){
    var closeTag = tag.split("");
    closeTag.splice(1,0,"/");
    return closeTag.join("");
  },

  transformText: function(){
    setText();

  }
}

//  Markdowner
//  1. Every KEYUP
//    1a. CHECK TEXT against rawTEXT
//      1a1. IF USER BACKSPACED MARKDOWN CHARACTER
//        - REPLACE the LAST open HTML tag
//        - UPDATE toggle
//    1b. UPDATE rawText
//    1c. CHECK for MARKDOWN GLYPH
//      - IF GLYPH,
//        - toggle tagOpen
//  2. IF tagOpen EQUALS TRUE
//    2a. RETURN to step 1
//  3. IF tagOpen EQUALS FALSE
//    3a. CAPTURE TEXT
//    3b. SPLIT TEXT
//    3c. LOCATE FIRST GLYPH
//      3c1. REPLACE with HTML TAG
//    3d. LOCATE FOLLOWING GLYPH
//      3d1. REPLACE with CLOSING HTML TAG
//    3e. JOIN TEXT
//    3f. UPDATE markdownHTML
//  4. UPDATE VIEW
