import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(title, params){
      console.log("index", title);
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          title.set(key,params[key]);
        }
      });
      title.save();
      this.transitionTo('index');
    }
  }
});
