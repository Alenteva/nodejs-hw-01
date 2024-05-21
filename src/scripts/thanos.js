import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    // Читаємо контакти з файлу
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    // Фільтруємо контакти, залишаючи тільки ті, які пройшли "випробування Таноса"
    contacts = contacts.filter(() => Math.random() >= 0.5);

    // Записуємо оновлений масив контактів у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log(`Thanos has deleted ${contacts.length} contacts.`);
  } catch (err) {
    console.error('Error:', err);
  }
};

await thanos();
