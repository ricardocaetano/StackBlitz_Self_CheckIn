import {listSchema} from "@lightweightform/storage";
import { guestSchema } from "./components/guest/guest.schema";


export const guestsSchema  = listSchema(guestSchema, {
    isFormList:true, minSize:1})