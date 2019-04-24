import { recordSchema, stringSchema, dateSchema, numberSchema} from "@lightweightform/storage";
import { foodSchema } from "./food/food.schema";
import { otherServicesSchema } from "./other-services/other-services.schema";


export const guestSchema  = recordSchema({
    name: stringSchema({
    }),
    birthDate: dateSchema({
        /*TODO CP3: create a restriction where the user needs to have at least 18 years old
         *Tip: use the function "has18PlusYears"*/
        isRequired : true,
        isNullable : true,
    }),
    email: stringSchema({
        
    }),
    phoneNumber: numberSchema({
        /*TODO CP3: create a restriction where the phone number
        * needs to have at least 9 digits */
        isInteger: true,
        isNullable : true,
    }),
    food: foodSchema, 
    otherServices : otherServicesSchema,   

}, {isForm:true})

/*TODO CP3: use the following method that check if the email is valid and 
use it to verify the user email*/
/*function emailValidator(ctx: LfStorage): ValidationIssue | undefined{    
    const email = ctx.get()
    let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailRegExp.test(email);
    if (!emailRegExp.test(email)) {
      return {
        code: 'INVALID_EMAIL',
      }
    }
}*/
        
/*function has18PlusYears(ctx: LfStorage) : ValidationIssue | undefined{ 
    const birthDate: Date = ctx.get();
    const currDate : Date = new Date();
    if(moment(currDate).diff(moment(birthDate), 'years') < 18){
        return {
            code: 'INVALID_AGE',
        }
}*/