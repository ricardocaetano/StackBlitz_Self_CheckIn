import{LfI18n, LfStorage} from "@lightweightform/core";
import { OTHER_SERVICES_I18N_PT } from "./other-services/other-services.pt-Pt";
import { FOOD_I18N_PT } from "./food/food.pt-Pt";
import { ValidationIssue } from "@lightweightform/storage";
import { I18N_NUMBER_THOUSANDS_SEPARATOR_KEY, I18N_VALUE_LABEL_KEY } from "@lightweightform/bootstrap-theme";


export const GUEST_I18N_PT = LfI18n.mergeTranslations({
    OTHER_SERVICES_I18N_PT,
    FOOD_I18N_PT,

    '/guests/?': {
        [I18N_VALUE_LABEL_KEY] : formListLabel,
    },

    '/guests/?/name':{
        [I18N_VALUE_LABEL_KEY]: 'Nome Completo',
    },

    '/guests/?/birthDate':{
        [I18N_VALUE_LABEL_KEY]: 'Data',
        validations: {
            INVALID_AGE: 'È necessário ter no mínimo 18 anos para poderes fazer o teu Check-in Automático.',
        },
    },

    '/guests/?/email':{
        [I18N_VALUE_LABEL_KEY]: 'E-mail:',
        validations: {
            INVALID_EMAIL: 'O E-mail inserido não é válido',
        },
    },

    '/guests/?/phoneNumber':{
        [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: "",
        [I18N_VALUE_LABEL_KEY]: 'Contacto telefónico',
    },
});

function formListLabel(ctx: LfStorage): ValidationIssue | undefined{
    return ctx.get('name') === '' ? 'Hóspede' : ctx.get('name');
}