import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
{
  path: '',
  component: UsersComponent
},
{
  path: 'details/:id',
  component: UserDetailsComponent
},
{
  path: 'posts',
  component: PostsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
