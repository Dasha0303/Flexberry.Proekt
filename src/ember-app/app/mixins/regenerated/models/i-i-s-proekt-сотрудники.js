import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  ранг: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-proekt-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ранг: {
    descriptionKey: 'models.i-i-s-proekt-сотрудники.validations.ранг.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-proekt-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-proekt-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    ранг: attr('Ранг', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-proekt-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    ранг: attr('Ранг', { index: 2 })
  });
};
