import { Routes } from '@angular/router';
import { LoginApp } from './login-app/login-app';
import { HomeApp } from './home-app/home-app';
import { NewTodoList } from './components/todo/new-todo-list/new-todo-list';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeApp },
      {path: 'login', component: LoginApp},
      {path: 'new-todo', component: NewTodoList}
    ]

  }
];
