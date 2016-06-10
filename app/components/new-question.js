import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
      this.set('author', "");
      this.set('question', "");
      this.set('notes', "");
    }
  }
});
