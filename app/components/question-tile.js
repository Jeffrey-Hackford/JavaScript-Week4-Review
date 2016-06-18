import Ember from 'ember';

export default Ember.Component.extend({
  
  added: Ember.computed('question.title', 'question.author', function() {
      return this.get('question.title') + ', ' + this.get('question.author');
    }),


  actions: {
    update(title, params) {
      this.sendAction('update', title, params);
    }
  }
});
