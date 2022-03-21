import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteTodo, GetTodos, SetSelectedTodo } from '../actions/todo.actions';
import { Todo } from '../models/todo';
import { TodoState } from '../states/todo.state';

@Component({
  selector: 'sinqia-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Select(TodoState.getTodoList) todos$: Observable<Todo[]>;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }

  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

  editTodo(payload: Todo) {
    this.store.dispatch(new SetSelectedTodo(payload));
  }

}
