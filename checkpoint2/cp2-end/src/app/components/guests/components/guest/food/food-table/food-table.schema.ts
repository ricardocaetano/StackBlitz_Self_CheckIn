import { recordSchema, stringSchema, dateSchema, listSchema } from "@lightweightform/storage";

export const foodTableSchema : ((string) => object) = path => {
    return {
      [path]: listSchema(
            recordSchema({
                index : stringSchema({
                }),
                date : dateSchema({
                    isNullable: true,
                }),
                typeOfFood : stringSchema({
                    isNullable: true,
                    isRequired: true,
                }),
            })
        ),
    }
}
