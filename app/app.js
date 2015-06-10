var AppModel = Backbone.Model.extend({

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
  className : 'wordsView',

  initialize : function() {
    //bind custom events
  },

  events : {
    //do events
  },

  render : function() {
    //render X amount of words from the collection
  }
});

var Word = Backbone.Model.extend({

  initialize: function() {
    this.set('createdAt', new Date());
  },

  upvote: function() {
    this.set('votes', this.get('votes') + 1);
  },

  downvote: function() {
    this.set('votes', this.get('votes') - 1);
  },

});

var Words = Backbone.Collection.extend({

  url : 'someurl',

  model: Word,

  getWords : function() {
    //sync with firebase
  },
});

var User = Backbone.Model.extend({

  validate: function() {
    return {
      username: {required: true, msg: 'Please enter your username'},
      password: {required: true, msg: 'Please enter your password'}
    }
  },

  saveToDatabase : function() {},

  getWords : function() {},

  deleteWords: function() {}
  //username
  //password
  //today's word
  //word feed
  //friends

})



var LoginView = Backbone.View.extend({
  className: 'login',

  events: {
    'submit': 'login'
    '#loginButton click' : 'login'
  },

  login: function(loginEvent){

  }
});
