const pageTitle: string = "Debo's Typescript Project!";

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

interface Book {
  id: string;
  name: string;
  releaseDate?: Date;
}

const getUserById = (id: string): User => ({
  id,
  name: 'Deter Brown',
  age: 51,
  email: 'cgknutt@gmail.com'
});

const getBookById = (id: string): Book => ({
  id,
  name: 'Books are Kewl',
  releaseDate: new Date()
});

const saveUser = (user: User) => console.log('saved user: ', {
  prop1: user.id,
  prop2: user.name,
  prop3: user.age,
  prop4: user.email
});

const saveBook = (book: Book) => console.log('saved book: ', {
  prop1: book.id,
  prop2: book.name,
  prop3: book.releaseDate?.toISOString()
});

const user = getUserById('user-1');
const book = getBookById('book-1');

saveUser(user);
saveBook(book);

document.addEventListener('DOMContentLoaded', () => {
  try {
    document.getElementById('title')!.textContent = pageTitle;
  } catch (error) {
    console.error('Error loading content:', error);
    document.getElementById('title')!.textContent = 'Error Loading Content';
    document.getElementById('content')!.textContent = 'There was an error loading the content. Please check the console for details.';
  }
});
