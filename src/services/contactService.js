import { storageService } from './storageService';
import { v4 as uuid } from 'uuid';

export const contactService = {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact,
  //   resetContacts,
};

const contacts = [
  {
    _id: '5a56640269f443a5d64b32ca',
    imgNum: '40',
    name: 'Ochoa Hyde',
    email: 'ochoahyde@renovize.com',
    phone: '+1 (968) 593-3824',
  },
  {
    _id: '5a5664025f6ae9aa24a99fde',
    imgNum: '2',
    name: 'Hallie Mclean',
    email: 'halliemclean@renovize.com',
    phone: '+1 (948) 464-2888',
  },
  {
    _id: '5a56640252d6acddd183d319',
    imgNum: '3',
    name: 'Parsons Norris',
    email: 'parsonsnorris@renovize.com',
    phone: '+1 (958) 502-3495',
  },
  {
    _id: '5a566402ed1cf349f0b47b4d',
    imgNum: '4',
    name: 'Rachel Lowe',
    email: 'rachellowe@renovize.com',
    phone: '+1 (911) 475-2312',
  },

  {
    _id: '5a566402a6499c1d4da9220a',
    imgNum: '6',
    name: 'Shana Pope',
    email: 'shanapope@renovize.com',
    phone: '+1 (970) 527-3082',
  },
  {
    _id: '5a566402f90ae30e97f990db',
    imgNum: '74',
    name: 'Faulkner Flores',
    email: 'faulknerflores@renovize.com',
    phone: '+1 (952) 501-2678',
  },
  {
    _id: '5a5664027bae84ef280ffbdf',
    imgNum: '38',
    name: 'Holder Bean',
    email: 'holderbean@renovize.com',
    phone: '+1 (989) 503-2663',
  },
  {
    _id: '5a566402e3b846c5f6aec652',
    imgNum: '55',
    name: 'Rosanne Shelton',
    email: 'rosanneshelton@renovize.com',
    phone: '+1 (968) 454-3851',
  },
  {
    _id: '5a56640272c7dcdf59c3d411',
    imgNum: '24',
    name: 'Pamela Nolan',
    email: 'pamelanolan@renovize.com',
    phone: '+1 (986) 545-2166',
  },
  {
    _id: '5a5664029a8dd82a6178b15f',
    imgNum: '25',
    name: 'Roy Cantu',
    email: 'roycantu@renovize.com',
    phone: '+1 (929) 571-2295',
  },
  {
    _id: '5a5664028c096d08eeb13a8a',
    imgNum: '78',
    name: 'Ollie Christian',
    email: 'olliechristian@renovize.com',
    phone: '+1 (977) 419-3550',
  },
  {
    _id: '5a5664026c53582bb9ebe9d1',
    imgNum: 'contact-avatar-9.png',
    name: 'Nguyen Walls',
    email: 'nguyenwalls@renovize.com',
    phone: '+1 (963) 471-3181',
  },
  {
    _id: '5a56640298ab77236845b82b',
    imgNum: '54',
    name: 'Glenna Santana',
    email: 'glennasantana@renovize.com',
    phone: '+1 (860) 467-2376',
  },
  {
    _id: '5a56640208fba3e8ecb97305',
    imgNum: '88',
    name: 'Malone Clark',
    email: 'maloneclark@renovize.com',
    phone: '+1 (818) 565-2557',
  },
  {
    _id: '5a566402abb3146207bc4ec5',
    imgNum: '87',
    name: 'Floyd Rutledge',
    email: 'floydrutledge@renovize.com',
    phone: '+1 (807) 597-3629',
  },
  {
    _id: '5a56640298500fead8cb1ee5',
    imgNum: '12',
    name: 'Grace James',
    email: 'gracejames@renovize.com',
    phone: '+1 (959) 525-2529',
  },
  {
    _id: '5a56640243427b8f8445231e',
    imgNum: '63',
    name: 'Tanner Gates',
    email: 'tannergates@renovize.com',
    phone: '+1 (978) 591-2291',
  },
  {
    _id: '5a5664025c3abdad6f5e098c',
    imgNum: '46',
    name: 'Lilly Conner',
    email: 'lillyconner@renovize.com',
    phone: '+1 (842) 587-3812',
  },
];

function getContacts(filterBy = null) {
  return new Promise((resolve, reject) => {
    let contactsToReturn = storageService.load('contacts');
    if (!contactsToReturn) {
      contactsToReturn = contacts;
      storageService.store('contacts', contactsToReturn);
    }
    if (filterBy && filterBy.term) {
      contactsToReturn = filter(filterBy.term);
    }
    resolve(sort(contactsToReturn));
  });
}

function getContactById(id) {
  return new Promise((resolve, reject) => {
    let contacts = storageService.load('contacts');
    const contact = contacts.find(contact => contact._id === id);
    contact ? resolve(contact) : reject(`Contact id ${id} not found!`);
  });
}

function deleteContact(id) {
  return new Promise((resolve, reject) => {
    let contacts = storageService.load('contacts');
    const index = contacts.findIndex(contact => contact._id === id);
    if (index !== -1) contacts.splice(index, 1);
    storageService.store('contacts', contacts);
    resolve(contacts);
  });
}

function saveContact(contact) {
  // console.log(contact);
  return contact._id ? _updateContact(contact) : _addContact(contact);
}

// function resetContacts() {
//   storageService.store('contacts', contacts);
//   return contacts;
// }

function _updateContact(contact) {
  return new Promise((resolve, reject) => {
    let contacts = storageService.load('contacts');
    const index = contacts.findIndex(c => contact._id === c._id);
    if (index !== -1) contacts[index] = contact;
    storageService.store('contacts', contacts);
    resolve(contact);
  });
}

function _addContact(contact) {
  return new Promise((resolve, reject) => {
    contact._id = uuid();
    contacts.unshift(contact);
    storageService.store('contacts', contacts);
    resolve(contact);
  });
}

function getEmptyContact() {
  return {
    name: '',
    email: '',
    phone: '',
    imgNum: '1',
    coins: 100,
  };
}

function filter(term) {
  term = term.toLocaleLowerCase();
  return contacts.filter(contact => {
    return (
      contact.name.toLocaleLowerCase().includes(term) ||
      contact.phone.toLocaleLowerCase().includes(term) ||
      contact.email.toLocaleLowerCase().includes(term)
    );
  });
}

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }
    return 0;
  });
}
