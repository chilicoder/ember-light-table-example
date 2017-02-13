import Ember from 'ember';
import Table from 'ember-light-table';

const { computed } = Ember;

export default Ember.Component.extend({
  model: null,

  columns: computed(function() {
    return [{
      label: 'Name',
      valuePath: 'name',
      // width: '60px',
      sortable: false
      // cellComponent: 'user-avatar'
    }, {
      label: 'surname',
      valuePath: 'surname',
      // width: '150px'
    }];
  }),

  table: computed('model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});

// qualityLabel: DS.attr('string'),
//   shelfPlace: DS.attr('string'),
//   zone: DS.attr('string'),
//   date: DS.attr('date'),
//   process: DS.attr('string'),
//   boxId: DS.attr('string')