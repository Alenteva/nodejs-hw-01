import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
// видалення контактів
export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, [], 'utf8');
    console.log('All contacts have been removed.');
  } catch (err) {
    console.error('Error', err);
  }
};

await removeAllContacts();
