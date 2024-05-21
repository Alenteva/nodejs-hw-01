import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
// додаємо один згенерований контакт
export const addOneContact = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(data);
  } catch (err) {
    console.error('Error:', err);
  }
  try {
    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (err) {
    console.error('Error:', err);
  }
};

await addOneContact();
