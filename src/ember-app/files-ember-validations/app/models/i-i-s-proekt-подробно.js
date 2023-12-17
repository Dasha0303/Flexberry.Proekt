import {
  defineNamespace,
  defineProjections,
  Model as ПодробноMixin
} from '../mixins/regenerated/models/i-i-s-proekt-подробно';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПодробноMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
