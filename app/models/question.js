import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
