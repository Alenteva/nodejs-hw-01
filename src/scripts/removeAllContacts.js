import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  let contacts = [];
  try {
    // читаемо і записуємо дані до масиву
    const data = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(data);
    // перевіряємо наявність контактів
    if (contacts.length > 0) {
      // видаляємо контакти перезаписуючи порожнім масивом
      await fs.writeFile(PATH_DB, '[]', 'utf8');
      console.log('All contacts have been removed.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (err) {
    console.error('Error', err);
  }
};

await removeAllContacts();
