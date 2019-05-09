import {LfI18n} from '@lightweightform/core';
import {I18N_PT_PT} from '@lightweightform/core';
import {GUESTS_I18N_PT} from './components/guests/guests.pt-PT';
import {RESERVATION_DETAILS_I18N_PT} from './components/reservation-details/reservation-details.pt-Pt';
import { FOOD_I18N_PT } from './components/guests/components/guest/food/food.pt-Pt';
import { OTHER_SERVICES_I18N_PT } from './components/guests/components/guest/other-services/other-services.pt-Pt';
import { GUEST_I18N_PT } from './components/guests/components/guest/guest.pt-PT';
import { FOOD_TABLE_I18N_PT } from './components/guests/components/guest/food/food-table/food-table.pt-PT';
import { ACCOMODATION_I18N_PT } from './components/reservation-details/components/accommodation/accomodations.pt-PT';

export const SOME_ERROR_OCCURRED_KEY = 'someErrorOccured';

export const I18N_SELF_CHECK_IN_PT = LfI18n.mergeTranslations(
  I18N_PT_PT,
  GUEST_I18N_PT,
  GUESTS_I18N_PT,
  RESERVATION_DETAILS_I18N_PT,
  ACCOMODATION_I18N_PT,
  FOOD_I18N_PT,
  OTHER_SERVICES_I18N_PT,
  FOOD_TABLE_I18N_PT,
  {
    '*': {
      appTitleLg: 'Check-in Automático',
      documentTitle: 'Check-in Automático',
      appTitleSm: 'Check-in Automático',
      actionsMenu: {
        save: 'Guardar',
        load: 'Carregar',
        validate: 'Validar',
        language: 'Idioma',
        submit: 'Submeter',
      },
      actionsMenuOptions: {
        language: {
          'en-US': 'Inglês',
          'pt-PT': 'Português',
        },
      },

    },
  },
);
