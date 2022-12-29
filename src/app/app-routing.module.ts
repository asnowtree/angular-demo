import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IssueComponent } from './issue/issue.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"user",component:UserComponent},
  {path:"issue",component:IssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
