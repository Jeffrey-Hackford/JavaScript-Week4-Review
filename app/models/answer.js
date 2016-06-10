import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  author: attr(),
  contents: attr(),
  question: DS.belongsTo('question', {async: true})
});
