import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчетОбОценкеMixin
} from '../mixins/regenerated/models/i-i-s-proekt-отчет-об-оценке';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетОбОценкеMixin, Validations, {
});

defineProjections(Model);

export default Model;
