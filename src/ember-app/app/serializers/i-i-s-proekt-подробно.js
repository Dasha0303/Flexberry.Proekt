import { Serializer as ПодробноSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-подробно';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПодробноSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
