import { recordSchema} from "@lightweightform/storage";
import { accomodationSchema } from "./components/accommodation/accomodation.schema";

export const reservationDetailsSchema = recordSchema({
    accomodation : accomodationSchema,
},{isForm:true});



