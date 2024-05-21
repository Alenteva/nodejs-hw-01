import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
//повертає кількість контактів в масив
export const countContacts = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(data);
    return contacts.length;
  } catch (err) {
    console.error('Error:', err);
  }
};

console.log(await countContacts());
