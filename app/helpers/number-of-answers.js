import Ember from 'ember';

export function numberOfAnswers(params) {
  var question = params[0];

  if(question.get('answers.length') > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span>');
  }
}

export default Ember.Helper.helper(numberOfAnswers);
