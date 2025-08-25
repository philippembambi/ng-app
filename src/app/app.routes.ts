import { Routes } from '@angular/router';
import { HomeApp } from './home-app/home-app';
import { NewTodoList } from './components/todo/new-todo-list/new-todo-list';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeApp },
      {path: 'new-todo', component: NewTodoList}
    ]

  }
];
