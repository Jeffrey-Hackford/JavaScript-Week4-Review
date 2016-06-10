import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(title, params) {
      console.log("title tile", title);
      this.sendAction('update', title, params);
    }
  }
});
