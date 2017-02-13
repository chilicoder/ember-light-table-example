import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {name: 'some', surname: 'some'},
      {name: 'some2', surname: 'some2'},
      {name: 'some3', surname: 'some3'},
      {name: 'some4', surname: 'some3'},
      {name: 'some5', surname: 'some4'},
      {name: 'some6', surname: 'some6'}
    ];
  }
});
