import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УвольнениеMixin
} from '../mixins/regenerated/models/i-i-s-proekt-увольнение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УвольнениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
