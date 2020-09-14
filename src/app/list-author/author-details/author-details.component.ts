import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/model/author';
import { AuthorServiceService } from 'src/app/service/author-service.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {


  author: Author[];

  constructor(private activatedRoute: ActivatedRoute,
              private authorService: AuthorServiceService) { }

  ngOnInit() {
    let authorId = this.activatedRoute.snapshot.params['id'];
    console.log(this.activatedRoute)
    this.authorService.getAuthor(authorId).subscribe(author => {
      this.author = author;
    });
  }

}
