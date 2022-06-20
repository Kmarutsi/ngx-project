import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFeatureShellComponent } from './auth-feature-shell.component';

describe('AuthFeatureShellComponent', () => {
  let component: AuthFeatureShellComponent;
  let fixture: ComponentFixture<AuthFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFeatureShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
