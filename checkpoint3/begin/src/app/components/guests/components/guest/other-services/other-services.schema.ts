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
            /*TODO CP3: make this field required if the h2Radio select value == Y*/
            isNullable : true,
            min : 0,
        }),
    },{isForm: true,
       
    });

    /*function asksForGymService(ctx: LfStorage): boolean{
        /*TODO CP3: to get a element use the method ctx.get('elemName')
        return false;
    }*/
