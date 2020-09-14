import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../model/author';
import { AuthorServiceService } from '../service/author-service.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.scss']
})
export class ListAuthorComponent implements OnInit {

  author: Author[];
  bookId: number;
  //bookId: number;

  constructor(private authorService: AuthorServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //console.log("bookid", bookId, this.activatedRoute);
    this.getBooks();
  }

  getBooks() {
    this.authorService.getAll().subscribe((author => {
      this.author = author;
      console.log(author)
    }));
  }


  onClickAuthorId(id: number) {
    this.route.navigate(['/author', id]);
  }
  onRemoveClick(id: number) {
    this.authorService
      .removeAuthor(id)
      .subscribe(user => {
        this.author = this.author.filter(author => author.id !== id)
      })

  }

  onClickAuthor() {
    this.route.navigate(['/']);
  }

}
