import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageInicioComponent } from './main-page-inicio.component';

describe('MainPageInicioComponent', () => {
  let component: MainPageInicioComponent;
  let fixture: ComponentFixture<MainPageInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
