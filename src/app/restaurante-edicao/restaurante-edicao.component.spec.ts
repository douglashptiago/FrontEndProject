import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteEdicaoComponent } from './restaurante-edicao.component';

describe('RestauranteEdicaoComponent', () => {
  let component: RestauranteEdicaoComponent;
  let fixture: ComponentFixture<RestauranteEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
