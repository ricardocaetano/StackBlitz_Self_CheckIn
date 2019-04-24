import { recordSchema, stringSchema, numberSchema} from "@lightweightform/storage";

export const otherServicesSchema = recordSchema(
    {
        h1Radio : stringSchema({
           initialValue : 'N',
        }),

        h2Radio : stringSchema({
            initialValue : 'N',
        }),

        h3Number : numberSchema({
            isInteger : false,
            isNullable : true,
            min : 0,
        }),
    },{isForm: true,
       
    });
