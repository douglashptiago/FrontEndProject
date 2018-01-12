import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoEdicaoComponent } from './prato-edicao.component';

describe('PratoEdicaoComponent', () => {
  let component: PratoEdicaoComponent;
  let fixture: ComponentFixture<PratoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
