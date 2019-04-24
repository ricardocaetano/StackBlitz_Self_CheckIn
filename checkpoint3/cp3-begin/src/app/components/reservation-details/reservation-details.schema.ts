import { recordSchema, stringSchema, numberSchema } from "@lightweightform/storage";
import { dateRangeSchema} from "@lightweightform/bootstrap-theme";
import { accomodationSchema } from "./components/accommodation/accomodation.schema";

export const reservationDetailsSchema = recordSchema(
   {
   email: stringSchema({
      
   }),

   phoneNumber: numberSchema({
      /*TODO CP3: create a restriction where the phone number
      * needs to have at least 9 digits */
      isInteger : true,
      isRequired : true,
      isNullable : true,
   }),
   

   checkInOut: dateRangeSchema({
      /*TODO CP3: create a restriction where the birthDate has to be in the past
       *Tip: use new Date() to get the current date of the system*/
      isRequired : true,
      isNullable : true,
   }),

   hourOfArrival: numberSchema({
      /*TODO CP3: create a restriction where the hour of arrival
      * needs to be between 0 and 23 */
      Required : true,
      isNullable : true,
   }),

   flightNumber: numberSchema({
      /*TODO CP3: create a restriction where the hour of arrival
      * needs have less than 7 digits*/
      Required : true,
      isNullable : true,
   }),
   
 
   accomodation : accomodationSchema,
   },
   {isForm:true,
});



