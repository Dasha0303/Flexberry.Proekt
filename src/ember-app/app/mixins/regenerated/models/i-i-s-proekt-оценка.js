import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроведения: DS.attr('date'),
  комментарии: DS.attr('string'),
  статус: DS.attr('i-i-s-proekt-статусы'),
  сотрудники: DS.belongsTo('i-i-s-proekt-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроведения: {
    descriptionKey: 'models.i-i-s-proekt-оценка.validations.датаПроведения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комментарии: {
    descriptionKey: 'models.i-i-s-proekt-оценка.validations.комментарии.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-proekt-оценка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt-оценка.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОценкаE', 'i-i-s-proekt-оценка', {
    датаПроведения: attr('Дата проведения', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    комментарии: attr('Комментарии', { index: 2 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОценкаL', 'i-i-s-proekt-оценка', {
    датаПроведения: attr('Дата проведения', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    комментарии: attr('Комментарии', { index: 2 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
