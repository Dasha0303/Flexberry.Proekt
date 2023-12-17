import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-оценка', 'Unit | Model | i-i-s-proekt-оценка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt-отчет-об-оценке',
    'model:i-i-s-proekt-оценка',
    'model:i-i-s-proekt-подробно',
    'model:i-i-s-proekt-сотрудники',
    'model:i-i-s-proekt-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
