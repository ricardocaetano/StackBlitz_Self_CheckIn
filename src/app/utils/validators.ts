import { LfStorage } from '@lightweightform/core';
import { ValidationIssue } from '@lightweightform/storage';

/**
 * E-mail validator.
 * @param ctx Storage context.
 * @returns Validation issue with code `'INVALID_EMAIL'` when the e-mail is
 * invalid.
 */
export function emailValidator(ctx: LfStorage): ValidationIssue | undefined {
  const email = ctx.get();
  const emailRegExp = /^.+@.+$/;
  if (!emailRegExp.test(email)) {
    return { code: 'INVALID_EMAIL' };
  }
}

/**
 * Phone number validator.
 * @param ctx Storage context.
 * @returns Validation issue with code `'INVALID_PHONE_NUMBER'` when the phone
 * number is invalid.
 */
export function phoneNumberValidator(
  ctx: LfStorage
): ValidationIssue | undefined {
  const phoneNumber = ctx.get();
  const phoneNumberRegExp = /^\+?[\d \-.]+$/;
  if (!phoneNumberRegExp.test(phoneNumber)) {
    return { code: 'INVALID_PHONE_NUMBER' };
  }
}
