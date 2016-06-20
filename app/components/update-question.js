import Ember from 'ember';

export default Ember.Component.extend({

  favoriteQuestions: Ember.inject.service(),

  updateQuestionForm: false,
  actions: {
    addToFavorites(question) {
      this.get('favoriteQuestions').add(question);
    },

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
