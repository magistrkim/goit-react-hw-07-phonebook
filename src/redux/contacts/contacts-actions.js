import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetch/request');
export const fetchContactsSuccess = createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');

export const fetchAddContactsRequest = createAction('contacts/add/request');
export const fetchAddContactsSuccess = createAction('contacts/add/success');
export const fetchAddContactsError = createAction('contacts/add/error');

export const fetchRemoveContactsRequest = createAction(
  'contacts/remove/request'
);
export const fetchRemoveContactsSuccess = createAction(
  'contacts/remove/success'
);
export const fetchRemoveContactsError = createAction('contacts/remove/error');
