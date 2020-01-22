import { TableSchema, tableSchema, Storage } from '@lightweightform/storage';

import { guestSchema } from './guest/guest.schema';
import { MAX_ROOM_GUESTS } from '../../utils/constants';

/**
 * Guests schema.
 */
export const guestsSchema: TableSchema = tableSchema(guestSchema, {
  minSize: 1,
  maxSize: maxNumberOfGuests,
  initialValue: [{}]
});

/**
 * Maximum number of guests.
 * @param ctx Storage instance.
 * @returns Maximum number of guests or `null` if there is missing information.
 */
function maxNumberOfGuests(ctx: Storage): number | null {
  const rooms = ctx.get('/reservation-details/rooms');
  return rooms.length === 0
    ? null
    : rooms.reduce(
        (sum, room) =>
          sum === null || room.type === null
            ? null
            : sum + MAX_ROOM_GUESTS[room.type],
        0
      );
}
