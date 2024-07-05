import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageProductsComponent } from './main-page-products.component';

describe('MainPageProductsComponent', () => {
  let component: MainPageProductsComponent;
  let fixture: ComponentFixture<MainPageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
