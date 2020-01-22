/**
 * App i18n object for the en-US locale.
 */
export const appI18nEnUS: Record<string, any> = {
  '*': {
    actionsMenu: {
      save: 'Save',
      load: 'Load',
      language: 'Language',
      validate: 'Validate',
      finalize: 'Finalize'
    },
    actionsMenuOptions: {
      // The locale translations should stay within the default locale's file so
      // other locales inherit from it
      language: {
        'en-US': 'English',
        'pt-PT': 'Português'
      }
    },
    finalizeModalTitle: 'Finalize reservation'
  },
  '/': {
    label: 'Hotel reservation'
  }
};
