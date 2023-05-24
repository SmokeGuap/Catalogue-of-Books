import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from './firebase.js';

const booksCollectionRef = collection(db, 'books');

const addBook = async (book) => {
  try {
    await addDoc(booksCollectionRef, {
      ...book,
      author: book.author.split(','),
    });
    return 'Книга успешно создана';
  } catch (e) {
    console.error('Error adding document: ', e);
    return 'Не удалось создать книгу';
  }
};
const getBooks = async () => {
  try {
    const data = await getDocs(booksCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    console.error('Error getting document: ', e);
  }
};
const getBook = async (id) => {
  try {
    const bookDoc = doc(db, 'books', id);
    return getDoc(bookDoc);
  } catch (e) {
    console.error('Error getting document: ', e);
  }
};
const updateBook = async (id, book) => {
  try {
    const bookDoc = doc(db, 'books', id);
    await updateDoc(
      bookDoc,
      typeof book.author != 'string'
        ? book
        : {
            ...book,
            author: book.author.split(','),
          }
    );
    return 'Книга успешно обновлена';
  } catch (e) {
    console.error('Error updating document: ', e);
    return 'Не удалось обновить книгу';
  }
};
const deleteBook = async (id) => {
  try {
    const bookDoc = doc(db, 'books', id);
    await deleteDoc(bookDoc);
    return 'Книга успешно удалена';
  } catch (e) {
    console.error('Error deleting document: ', e);
    return 'Не удалось удалить книгу';
  }
};
export { addBook, getBooks, updateBook, deleteBook, getBook };
