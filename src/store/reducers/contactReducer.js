const INITIAL_STATE = {
  contacts: null,
  filterBy: null,
};

export function contactReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return {
        ...state,
        contacts: [...action.contacts],
      };
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };
    case 'SET_CONTACT':
      return {
        ...state,
        contacts: [action.contact, ...state.contacts],
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.contact._id ? action.contact : contact
        ),
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        robots: state.contacts.filter(contact => contact._id !== action.contactId),
      };
    default:
      return state;
  }
}
