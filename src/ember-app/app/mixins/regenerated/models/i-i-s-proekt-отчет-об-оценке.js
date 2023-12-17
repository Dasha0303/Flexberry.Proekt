import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОтчёта: DS.attr('date'),
  сотрудники: DS.belongsTo('i-i-s-proekt-сотрудники', { inverse: null, async: false }),
  подробно: DS.hasMany('i-i-s-proekt-подробно', { inverse: 'отчетОбОценке', async: false })
});

export let ValidationRules = {
  датаОтчёта: {
    descriptionKey: 'models.i-i-s-proekt-отчет-об-оценке.validations.датаОтчёта.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt-отчет-об-оценке.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подробно: {
    descriptionKey: 'models.i-i-s-proekt-отчет-об-оценке.validations.подробно.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОбОценкеE', 'i-i-s-proekt-отчет-об-оценке', {
    датаОтчёта: attr('Дата отчёта', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    подробно: hasMany('i-i-s-proekt-подробно', 'Подробно', {
      сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудники', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' }),
      оценка: belongsTo('i-i-s-proekt-оценка', 'Оценка', {
        комментарии: attr('Комментарии', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'комментарии' })
    })
  });

  modelClass.defineProjection('ОтчетОбОценкеL', 'i-i-s-proekt-отчет-об-оценке', {
    датаОтчёта: attr('Дата отчёта', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
