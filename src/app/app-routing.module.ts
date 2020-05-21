import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

//import our newly created components
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

//setup routing
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'todos', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
