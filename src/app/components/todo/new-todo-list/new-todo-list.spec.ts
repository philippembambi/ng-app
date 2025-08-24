import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoList } from './new-todo-list';

describe('NewTodoList', () => {
  let component: NewTodoList;
  let fixture: ComponentFixture<NewTodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTodoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
