import { Serializer as ОтчетОбОценкеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-отчет-об-оценке';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтчетОбОценкеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
