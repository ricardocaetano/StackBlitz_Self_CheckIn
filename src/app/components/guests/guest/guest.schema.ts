import {
  RecordSchema,
  recordSchema,
  stringSchema,
  dateSchema
} from '@lightweightform/storage';
import { emailValidator } from '../../../utils/validators';

/**
 * Guest schema.
 */
export const guestSchema: RecordSchema = recordSchema({
  name: stringSchema({ minLength: 1 }),
  'document-type': stringSchema({
    isNullable: true,
    isRequired: true,
    allowedValues: ['passport', 'id']
  }),
  'document-number': stringSchema({ minLength: 1 }),
  'birth-date': dateSchema({
    isNullable: true,
    isRequired: true,
    maxDate: new Date()
  }),
  email: stringSchema()
});
