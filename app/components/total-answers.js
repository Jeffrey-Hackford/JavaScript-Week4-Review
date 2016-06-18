import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers', function() {
      return this.get('question.answers.length');
    })
});
