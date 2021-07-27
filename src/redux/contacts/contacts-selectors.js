import { createSelector } from '@reduxjs/toolkit';
export const getFilterValue = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const sortedContacts = contacts.slice().sort((a, b) => {
      const prevName = a.name.toLowerCase();
      const nextName = b.name.toLowerCase();
      if (prevName < nextName) {
        return -1;
      }
      if (prevName > nextName) {
        return 1;
      }
      return 0;
    });
    const normalizedFilter = filter.toLowerCase();
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
