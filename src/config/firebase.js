import admin from 'firebase-admin';
import { readFile } from 'fs/promises';
import path from 'path';

// 'path.resolve' garante que pegamos o arquivo na raiz do container (/app)
const serviceAccountPath = path.resolve('chaveJsonFirebaseFirestore.json');

const serviceAccount = JSON.parse(
  await readFile(serviceAccountPath, 'utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { admin, db };

