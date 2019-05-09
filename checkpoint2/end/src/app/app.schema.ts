import {recordSchema} from '@lightweightform/storage';
import {guestsSchema} from './components/guests/guests.schema';
import { reservationDetailsSchema } from './components/reservation-details/reservation-detail.schema';


export const appSchema = recordSchema({
    reservationDetails: reservationDetailsSchema,
    guests: guestsSchema,
});
