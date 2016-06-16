import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    showForm(){
      this.set('updateQuestionForm', true);
    },
    update(question) {
      console.log("update question.js", question);
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
