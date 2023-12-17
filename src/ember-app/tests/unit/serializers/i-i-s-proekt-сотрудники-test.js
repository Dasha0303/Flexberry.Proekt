import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-сотрудники', 'Unit | Serializer | i-i-s-proekt-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proekt-причины',
    'transform:i-i-s-proekt-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
