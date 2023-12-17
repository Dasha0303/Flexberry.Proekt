import {
  defineNamespace,
  defineProjections,
  Model as ОтчетОбОценкеMixin
} from '../mixins/regenerated/models/i-i-s-proekt-отчет-об-оценке';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетОбОценкеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
