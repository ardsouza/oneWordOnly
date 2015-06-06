var App = Backbone.Model.extend({

  this.set('words', new Words()); // Word Collection
  this.set('appView', new AppView()); // App View

});

var AppView = Backbone.View.extend({

  //el is body?
  //more views

});

var Word = Backbone.Model.extend({

  url: 'someurl',
  //username
  //text

});

var Words = Backbone.Collection.extend({

  url : 'someurl',
  model: Word,
  getWords : function() {
    // sync with firebase
  },
  //sort?

});

