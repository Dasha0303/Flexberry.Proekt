import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПодробноMixin
} from '../mixins/regenerated/models/i-i-s-proekt-подробно';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПодробноMixin, Validations, {
});

defineProjections(Model);

export default Model;
