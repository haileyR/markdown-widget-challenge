$(document).ready(function(){

  model = new Markdowner()
  view = new MarkdownView(".new_article textarea", ".markdown-preview")
  controller = new MarkdownController(model, view)

  controller.doPreview()

})
