import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПричиныEnum from '../enums/i-i-s-proekt-причины';

export default FlexberryEnum.extend({
  enum: ПричиныEnum,
  sourceType: 'IIS.Proekt.Причины'
});
