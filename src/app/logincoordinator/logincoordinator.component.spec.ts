import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincoordinatorComponent } from './logincoordinator.component';

describe('LogincoordinatorComponent', () => {
  let component: LogincoordinatorComponent;
  let fixture: ComponentFixture<LogincoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
