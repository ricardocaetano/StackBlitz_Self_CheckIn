/**
 * Reservation details i18n object for the pt-PT locale.
 */
export const reservationDetailsI18nPtPT: Record<string, any> = {
  '/reservation-details': {
    label: 'Detalhes da reserva'
  },
  '/reservation-details/name': {
    label: 'Nome',
    helpMessage: 'A reserva ficará neste nome'
  },
  '/reservation-details/email': {
    label: 'E-mail',
    validations: {
      INVALID_EMAIL: 'O e-mail é inválido.'
    }
  },
  '/reservation-details/phone-number': {
    label: 'Número telefónico'
  },
  '/reservation-details/check-in-out': {
    label: 'Datas de check-in/check-out',
    legend: 'Check-in das 16:00h às 23:00h, check-out até às 12:00h'
  },
  '/reservation-details/check-in-hour': {
    label: 'Hora de chegada',
    suffix: 'h',
    helpMessage: 'Hora aproximada de check-in (se souber)'
  },
  '/reservation-details/accommodation': {
    label: 'Estadia',
    addRowActionText: 'Adicionar quarto',
    removeRowsActionText: 'Remover quartos',
    noRowsText: 'Nenhum quarto adicionado.',
    columnLabels: {
      index: '#',
      'room-type': 'Tipo de quarto',
      'smoking-room': 'Quarto para fumadores?'
    },
    validations: {
      LF_SIZE_OUT_OF_BOUNDS: 'Pelo menos um quarto tem de ser adicionado.'
    }
  },
  '/reservation-details/accommodation/?/room-type': {
    label: 'Tipo de quarto',
    options: [
      { value: 'single', label: 'Solteiro' },
      { value: 'double', label: 'Casal' },
      { value: 'twin', label: 'Duplo' }
    ]
  },
  '/reservation-details/accommodation/?/smoking-room': {
    label: 'Quarto para fumadores?'
  },
  '/reservation-details/special-requests': {
    label: 'Pedidos especiais'
  }
};
