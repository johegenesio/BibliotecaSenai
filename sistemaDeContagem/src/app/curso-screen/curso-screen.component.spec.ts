import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoScreenComponent } from './curso-screen.component';

describe('CursoScreenComponent', () => {
  let component: CursoScreenComponent;
  let fixture: ComponentFixture<CursoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoScreenComponent]
    });
    fixture = TestBed.createComponent(CursoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
