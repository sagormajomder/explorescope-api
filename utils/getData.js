import fs from 'node:fs/promises';
import path from 'node:path';

export async function getData() {
  const filePath = path.join('data', 'data.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}
