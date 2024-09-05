// import { RESTDataSource } from "@apollo/datasource-rest";


// class BOOKAPI extends RESTDataSource {


//   constructor() {
//     super();
//     this.books = require('../data/data.json').books;  
//   }


//   async getbooks() {
//     return this.books;
//   }

//   // baseURL = "http://localhost:4000/";

//   // async getBooks() {
//   //   return this.get("books");
//   // }

//   // async getAuthors(authorId) {
//   //   return this.get(`authors/${authorId}`); 
//   // }

//   // async getUsers() {
//   //   return this.get('users');
//   // }
// }

// export default BOOKAPI;


import { RESTDataSource } from '@apollo/datasource-rest';

class BOOKAPI extends RESTDataSource {
  constructor() {
    super();
    this.initializeData();
  }

  async initializeData() {
    try {
      const response = await fetch('../data/data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.books = data.books;
      this.authors = data.authors;
      this.users = data.users;
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  }

  async getBooks() {
    return this.books;
  }

  async getAuthors(bookId) {
    return this.authors.filter(author => author.books.includes(bookId));
  }

  async getUsers() {
    return this.users;
  }
}

export default BOOKAPI;
