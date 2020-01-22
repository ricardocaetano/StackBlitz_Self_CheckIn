import {
  booleanSchema,
  numberSchema,
  recordSchema,
  stringSchema,
  tableSchema
} from '@lightweightform/storage';
import { dateRangeSchema } from '@lightweightform/bootstrap-theme';
import { emailValidator, phoneNumberValidator } from '../../utils/validators';

/**
 * Reservation details schema.
 */
export const reservationDetailsSchema = recordSchema({
  name: stringSchema({ minLength: 1 }),
  email: stringSchema({ minLength: 1, validate: emailValidator }),
  'phone-number': stringSchema({
    minLength: 1,
    validate: phoneNumberValidator
  }),
  'check-in-out': dateRangeSchema({
    isNullable: true,
    isRequired: true,
    minDate: new Date()
  }),
  'check-in-hour': numberSchema({ isNullable: true, min: 16, max: 23 }),
  accommodation: tableSchema(
    recordSchema({
      'room-type': stringSchema({
        isNullable: true,
        isRequired: true,
        allowedValues: ['single', 'double', 'twin']
      }),
      'smoking-room': booleanSchema()
    }),
    { minSize: 1 }
  ),
  'special-requests': stringSchema()
});
