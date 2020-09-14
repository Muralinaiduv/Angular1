import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorServiceService } from '../service/author-service.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {

  authorForm: FormGroup;
  submitted = false;
  author: any;

  constructor( private formBuilder: FormBuilder,
              private route : Router,
               private authorService: AuthorServiceService) { }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      id: ['', Validators.required],
      author: ['', Validators.required],
      gender: ['', Validators.required],
      description: ['', Validators.required]
  });
}

get f() {
  return this.authorForm.controls; }


onSubmit() {
  if (this.authorForm.valid) {
  this.authorService.addAuthor(this.authorForm.value).subscribe(data => {
    console.log("data", data)
    this.submitted = true;
    this.authorForm.reset();

  });
  this.route.navigateByUrl("/author")
 }
}

}
