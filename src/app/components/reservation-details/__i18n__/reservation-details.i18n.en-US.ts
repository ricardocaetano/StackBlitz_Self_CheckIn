/**
 * Reservation details i18n object for the en-US locale.
 */
export const reservationDetailsI18nEnUS: Record<string, any> = {
  '/reservation-details': {
    label: 'Reservation details'
  },
  '/reservation-details/name': {
    label: 'Name',
    helpMessage: 'The reservation will be made in this name'
  },
  '/reservation-details/email': {
    label: 'E-mail',
    validations: {
      INVALID_EMAIL: 'The e-mail is invalid.'
    }
  },
  '/reservation-details/phone-number': {
    label: 'Phone number'
  },
  '/reservation-details/check-in-out': {
    label: 'Check-in/check-out dates',
    legend: 'Check-in from 16:00h to 23:00h, check-out until 12:00h'
  },
  '/reservation-details/check-in-hour': {
    label: 'Arrival time',
    suffix: 'h',
    helpMessage: 'Approximate check-in hour (if known)'
  },
  '/reservation-details/accommodation': {
    label: 'Accommodation',
    addRowActionText: 'Add room',
    removeRowsActionText: 'Remove rooms',
    noRowsText: 'No rooms added.',
    columnLabels: {
      index: '#',
      'room-type': 'Room type',
      'smoking-room': 'Smoking room?'
    },
    validations: {
      LF_SIZE_OUT_OF_BOUNDS: 'At least one room must be added.'
    }
  },
  '/reservation-details/accommodation/?/room-type': {
    label: 'Room type',
    options: [
      { value: 'single', label: 'Single' },
      { value: 'double', label: 'Double' },
      { value: 'twin', label: 'Twin' }
    ]
  },
  '/reservation-details/accommodation/?/smoking-room': {
    label: 'Room for smokers?'
  },
  '/reservation-details/special-requests': {
    label: 'Special requests'
  }
};
