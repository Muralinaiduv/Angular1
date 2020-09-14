import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorDetailsComponent } from './list-author/author-details/author-details.component';
import { ListAuthorComponent } from './list-author/list-author.component';


const routes: Routes = [
  {path: '', pathMatch:'full', component: CreateAuthorComponent},
  {path: 'author', component: ListAuthorComponent },
  {path: 'author/:id', component: AuthorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
