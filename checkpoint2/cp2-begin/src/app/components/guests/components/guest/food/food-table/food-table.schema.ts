import { recordSchema, stringSchema, dateSchema, tableSchema } from "@lightweightform/storage";

export const foodTableSchema : ((string) => object) = path => {
    return {
      [path]: tableSchema(
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
