import { recordSchema, stringSchema, dateSchema, tableSchema, numberSchema } from "@lightweightform/storage";

export const foodTableSchema : ((string) => object) = path => {
    return {
      [path]: tableSchema(
            recordSchema({
                index : stringSchema({
                }),
                date : dateSchema({
                    minDate : new Date(),
                    isNullable: true,
                }),
                typeOfFood : stringSchema({
                    isNullable: true,
                    isRequired: true,
                }),
                price : numberSchema({
                    isInteger : false,
                    /*TODO CP4:add a computed value atribute add associate a function
                     * that given a food type calculates the price */
                    isNullable: true,
                    isClientOnly: false
                }),
            })
        ),
        /*TODO CP4: add a computed value atribute add associate a function
         * that given a meal (dinner, breakfast or lunch)
         * calculates the subTotal price*/
        [`subTotal${path}`] : numberSchema({
          isInteger : false,
          isNullable: true,
          isClientOnly: false
      }),
    }
}

/*function computedPrice() {
    return ctx => {
      let price;
      switch (ctx.get('typeOfFood')) {
        case 'meat':
          price = 8.30;
          break;
        case 'fish':
          price = 7.50;
          break;
        case 'vegan':
          price = 10.5;
          break;
        default:
          price = 0;
          break;
      }
      return price;
    };
  }*/

  /*function subTotal(path: string){
    return ctx => {
      if (ctx.get(path).length > 0) {
        return ctx
          .get(path)
          .map(el => el.price)
          .reduce((acc, current) => acc + current);
      }
      return 0;
    }
  }*/
