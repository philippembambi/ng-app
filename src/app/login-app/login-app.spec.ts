import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApp } from './login-app';

describe('LoginApp', () => {
  let component: LoginApp;
  let fixture: ComponentFixture<LoginApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
