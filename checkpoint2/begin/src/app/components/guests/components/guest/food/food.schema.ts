import { recordSchema, stringSchema } from "@lightweightform/storage";
import { foodTableSchema } from "./food-table/food-table.schema";

export const foodSchema = recordSchema({
    ...foodTableSchema('breakfastTable'),
    ...foodTableSchema('lunchTable'),
    ...foodTableSchema('dinnerTable'),
    comments : stringSchema({
        textBox : true,
    }),
    /*TODO CP2: create a numberSchema for the totalPrice*/
}, {isForm: true,
    });