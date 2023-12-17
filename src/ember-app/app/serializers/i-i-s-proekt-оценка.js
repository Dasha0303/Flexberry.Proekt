import { Serializer as ОценкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-оценка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОценкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
