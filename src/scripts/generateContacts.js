import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// додаємо 5 згенерованих контактів до масиву
const generateContacts = async (number) => {
  let contacts = [];
  try {
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (err) {
    // console.error('Error:', err);
    (contacts = []), err;
  }
};
await generateContacts(5);

export { generateContacts };
