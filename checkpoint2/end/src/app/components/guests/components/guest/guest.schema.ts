import { recordSchema, stringSchema, dateSchema, numberSchema} from "@lightweightform/storage";
import { foodSchema } from "./food/food.schema";
import { otherServicesSchema } from "./other-services/other-services.schema";
import { I18N_NUMBER_THOUSANDS_SEPARATOR_KEY } from "@lightweightform/bootstrap-theme";

export const guestSchema  = recordSchema({
            name: stringSchema({
            }),

            birthDate: dateSchema({
                isRequired : true,
                isNullable : true,
            }),

            email: stringSchema({
                
            }),

            phoneNumber: numberSchema({
                [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : "",
                isInteger: true,
                isNullable : true,
            }),

            food: foodSchema, 
            otherServices : otherServicesSchema,   

        }, {
            isForm:true,
        })