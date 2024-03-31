import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  newAuthor : string = "";
  newBookTitle: string = "";

  books: Book[] = []

  ngOnInit(): void {
      let savedBooks = localStorage.getItem("books")
      this.books = savedBooks ? JSON.parse(savedBooks) : []
  }
  addBook(){
    if(this.newAuthor.trim().length && this.newBookTitle){
      let newBook : Book = {
        id: Date.now(),
        author: this.newAuthor,
        title: this.newBookTitle
      }
      this.books.push(newBook)

      this.newAuthor = "";
      this.newBookTitle = "";

      localStorage.setItem("books", JSON.stringify(this.books))
    }
    
  }

  deleteBook(index: number){
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }

  

}


