import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОценкаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-оценка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОценкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
