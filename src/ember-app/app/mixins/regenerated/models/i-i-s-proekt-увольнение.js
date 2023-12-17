import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаУвольнения: DS.attr('date'),
  причина: DS.attr('i-i-s-proekt-причины'),
  сотрудники: DS.belongsTo('i-i-s-proekt-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаУвольнения: {
    descriptionKey: 'models.i-i-s-proekt-увольнение.validations.датаУвольнения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-proekt-увольнение.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt-увольнение.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УвольнениеE', 'i-i-s-proekt-увольнение', {
    датаУвольнения: attr('Дата увольнения', { index: 0 }),
    причина: attr('Причина', { index: 1 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('УвольнениеL', 'i-i-s-proekt-увольнение', {
    датаУвольнения: attr('Дата увольнения', { index: 0 }),
    причина: attr('Причина', { index: 1 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
