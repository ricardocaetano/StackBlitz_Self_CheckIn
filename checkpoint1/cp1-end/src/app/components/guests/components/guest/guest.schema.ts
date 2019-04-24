import { recordSchema} from "@lightweightform/storage";
import { foodSchema } from "./food/food.schema";
import { otherServicesSchema } from "./other-services/other-services.schema";

export const guestSchema  = recordSchema({
    food: foodSchema, 
    otherServices : otherServicesSchema,   
}, {isForm:true})