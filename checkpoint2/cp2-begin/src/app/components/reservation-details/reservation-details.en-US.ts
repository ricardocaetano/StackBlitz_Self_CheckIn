import{LfI18n} from "@lightweightform/core";
import { ACCOMODATION_I18N_EN_US } from "./components/accommodation/accomodation.en-US";
import { I18N_VALUE_LABEL_KEY } from "@lightweightform/bootstrap-theme";

export const RESERVATION_DETAILS_I18N_EN_US = LfI18n.mergeTranslations({
  ACCOMODATION_I18N_EN_US,
    '/reservationDetails': {
        [I18N_VALUE_LABEL_KEY] : "Reservation Details",
    },

    '/reservationDetails/email': {
      code: "1.1",
      [I18N_VALUE_LABEL_KEY]: "E-mail",
    },

    /*TODO CP2: Follow the example given above and create a I18N translations
     *for all the elements you have created in the html.*/
});