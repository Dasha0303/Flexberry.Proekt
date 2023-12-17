import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оценка: DS.belongsTo('i-i-s-proekt-оценка', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proekt-сотрудники', { inverse: null, async: false }),
  отчетОбОценке: DS.belongsTo('i-i-s-proekt-отчет-об-оценке', { inverse: 'подробно', async: false })
});

export let ValidationRules = {
  оценка: {
    descriptionKey: 'models.i-i-s-proekt-подробно.validations.оценка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt-подробно.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчетОбОценке: {
    descriptionKey: 'models.i-i-s-proekt-подробно.validations.отчетОбОценке.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПодробноE', 'i-i-s-proekt-подробно', {
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    оценка: belongsTo('i-i-s-proekt-оценка', 'Оценка', {
      комментарии: attr('Комментарии', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'комментарии' })
  });
};
