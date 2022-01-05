const SEND_PERSONAL_FORM = 'SEND_PERSONAL_FORM';
const SEND_PROFESSIONAL_FORM = 'SEND_PROFESSIONAL_FORM';

export const personalForm = (payload) => ({
  type: SEND_PERSONAL_FORM,
  payload,
});

export const professionalForm = (payload) => ({
  type: SEND_PROFESSIONAL_FORM,
  payload,
});
