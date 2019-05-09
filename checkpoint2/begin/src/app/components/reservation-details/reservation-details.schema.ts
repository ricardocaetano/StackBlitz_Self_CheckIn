import { recordSchema, stringSchema, numberSchema } from "@lightweightform/storage";
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
   
   /*TODO CP2: follow the example given above and create schemas
    *for all the elements you created in the html*/

    /*Note: You can have a schema you have created inside anothe schema*/
     accomodation : accomodationSchema

   },
   {isForm:true,
});



