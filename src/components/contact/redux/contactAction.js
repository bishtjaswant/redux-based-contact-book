import { ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT, REMOVE_CONTACT, SELECT_ALL_CONTACTS, CLEAR_ALL_CONTACTS, DELETE_ALL_CONTACTS } from "./types";


//add to contact action creator
export const AddTOContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact
});


// retrive a single contact action creator
export const GetContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id
  };
};


 


// delete a all contact action creator
export const DeleteAllContact = () => {
  return {
    type: DELETE_ALL_CONTACTS
  };
};


// update a single contact action creator
export const GetUpdateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact
});


//remove contact action creator
export const GetRemoveContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id
});

 


//select all contact action creator
export const SellectAllContacts = (id) => ({
  type: SELECT_ALL_CONTACTS,
  payload: id
});

//Clear all contact action creator
export const ClearAllContacts = () => ({
  type: CLEAR_ALL_CONTACTS
});


