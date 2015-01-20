MarkdownWidgetModel = function(){
}

MarkdownWidgetModel.prototype.processText = function(text){
  return marked(text)
}

MarkdownWidgetController = function(model, view) {
  this.model = model
  this.view = view
  this._bindEventListener();
}

MarkdownWidgetController.prototype._bindEventListener = function(event){
  $(this.view.sourceId).on('keyup', function(){
    this.view.setText(this.model.processText(this.view.getText()))
  }.bind(this))
}

MarkdownWidgetView = function(opts){
  this.sourceId = opts.sourceId;
  this.destinationId = opts.destinationId;
}

MarkdownWidgetView.prototype = {
  getText: function(){
    return $(this.sourceId).val();
  },
  setText: function(newText){
    $(this.destinationId).html(newText)
  }
}


MarkdownWidget = function(opts){
  new MarkdownWidgetController(
    new MarkdownWidgetModel(),
    new MarkdownWidgetView(opts))
}

