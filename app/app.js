var App = Backbone.Model.extend({

  this.set('words', new Words()); // Word Collection for viewing in Words View
  this.set('appView', new AppView()); // App View

});

var AppView = Backbone.View.extend({

  //el is body?
  //User View
  //Post View
  //Words View

}); 

var UserView = Backbone.View.extend({

  //Display Username
  //Display Friends list?
  //Display list of words available?

  //custom views?

});

var PostView = Backbone.View.extend({ //is form?

  //Has Text input field
  //Has submit button thing

});

var WordsView = Backbone.View.extend({

  //Has all Words posted
  //Updates regularly?

});

var Word = Backbone.Model.extend({

  url: 'someurl',
  //username
  //text
  //createdAt?

});

var Words = Backbone.Collection.extend({

  url : 'someurl',
  model: Word,
  getWords : function() {
    //sync with firebase
  },
  //sort?

});

var User = Backbone.Model.extend({

  //username
  //password
  //current word

})