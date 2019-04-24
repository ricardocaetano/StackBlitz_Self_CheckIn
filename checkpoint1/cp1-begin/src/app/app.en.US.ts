import {LfI18n} from '@lightweightform/core';
import {I18N_EN_US} from '@lightweightform/bootstrap-theme';

export const SOME_ERROR_OCCURRED_KEY = 'someErrorOccured';

export const I18N_SELF_CHECK_IN_EN_US = LfI18n.mergeTranslations(
  I18N_EN_US,
  /*TODO CP1: add the I18N of all coponents you have created*/
  {
    '*': {
      appTitleLg: 'Self Check-In',
      documentTitle: 'Self Check-In',
      appTitleSm: 'Self Check-In',
    },
  },
);
