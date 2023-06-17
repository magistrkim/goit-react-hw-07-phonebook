import {
  getAllContacts,
  addContact,
  removeContact,
} from 'services/contacts-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchAddContactsRequest,
  fetchAddContactsSuccess,
  fetchAddContactsError,
  fetchRemoveContactsRequest,
  fetchRemoveContactsSuccess,
  fetchRemoveContactsError,
} from './contacts-actions';
// import { removeContact } from './contacts-slice';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactsRequest());
      const data = await getAllContacts();
      dispatch(fetchContactsSuccess(data));
    } catch ({ response }) {
      dispatch(fetchContactsError(response.data.message));
    }
  };
  return func;
};

const isDublicate = (contacts, { name }) => {
  const normilizedName = name.toLowerCase();
  const result = contacts.find(({ name }) => {
    return name.toLowerCase() === normilizedName;
  });
  return Boolean(result);
};

export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        return Notify.warning(`${data.name} is already in contact list!`);
      }
      dispatch(fetchAddContactsRequest());
      const result = await addContact(data);
      dispatch(fetchAddContactsSuccess(result));
    } catch ({ response }) {
      dispatch(fetchAddContactsError(response.data.message));
    }
  };
  return func;
};

export const fetchRemoveContact = id => {
  const func = async dispatch => {
    try {
      dispatch(fetchRemoveContactsRequest());
      await removeContact(id);
      dispatch(fetchRemoveContactsSuccess(id));
    } catch ({ response }) {
      dispatch(fetchRemoveContactsError(response.data.message));
    }
  };
  return func;
};
