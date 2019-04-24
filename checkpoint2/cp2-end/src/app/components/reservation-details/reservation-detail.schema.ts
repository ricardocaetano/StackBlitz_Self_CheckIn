import { recordSchema, stringSchema, numberSchema } from "@lightweightform/storage";
import { dateRangeSchema} from "@lightweightform/bootstrap-theme";
import { accomodationSchema } from "./components/accommodation/accomodation.schema";

export const reservationDetailsSchema = recordSchema(
   {
   email: stringSchema({
      
   }),

   phoneNumber: numberSchema({
      isInteger : true,
      isRequired : true,
      isNullable : true,
   }),
   

   checkInOut: dateRangeSchema({
      isRequired : true,
      isNullable : true,
   }),

   hourOfArrival: numberSchema({
      Required : true,
      isNullable : true,
   }),

   flightNumber: numberSchema({
      Required : true,
      isNullable : true,
   }),
   
 
   accomodation : accomodationSchema,
   },
   {isForm:true,
});



