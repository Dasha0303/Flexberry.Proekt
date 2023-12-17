import {
  defineNamespace,
  defineProjections,
  Model as ОценкаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-оценка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОценкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
