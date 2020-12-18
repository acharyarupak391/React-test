export const RESET_LABEL = "RESET_LABEL";
export const EMPTY_VALUE_LABEL = "EMPTY_VALUE_LABEL";
export const INVALID_EMAIL_LABEL = "INVALID_EMAIL_LABEL";
export const PASSWORD_LENGTH_LABEL = "PASSWORD_LENGTH_LABEL";
export const REQUEST_SUCCESS_LABEL = "REQUEST_SUCCESS_LABEL";
export const REQUEST_ERROR_LABEL = "REQUEST_ERROR_LABEL";
export const SAVE_EMAIL_INPUT = "SAVE_EMAIL_INPUT";
export const SAVE_PASSWORD_INPUT = "SAVE_EMAIL_INPUT";
export const SAVE_EMAIL_FIELD = "SAVE_EMAIL_FIELD";

export const reset_label = () => ({
  type: RESET_LABEL
})

export const empty_value_label = () => ({
  type: EMPTY_VALUE_LABEL
})

export const invalid_email_label = () => ({
  type: INVALID_EMAIL_LABEL
})

export const password_length_label = () => ({
  type: PASSWORD_LENGTH_LABEL
})

export const request_success_label = (user) => ({
  type: REQUEST_SUCCESS_LABEL,
  payload: { user }
})

export const request_error_label = (response) => ({
  type: REQUEST_ERROR_LABEL,
  payload: { response }
})

export const save_email_input = (target) => ({
  type: SAVE_EMAIL_INPUT,
  payload: { target }
})

export const save_password_input = (target) => ({
  type: SAVE_PASSWORD_INPUT,
  payload: { target }
})

export const save_email_field = (event) => ({
  type: SAVE_EMAIL_FIELD,
  payload: { event }
})

