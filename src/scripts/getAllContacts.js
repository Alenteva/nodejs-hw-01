import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
// повертаємо масив контактів
export const getAllContacts = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.error('Error:', err);
  }
};

console.log(await getAllContacts());
