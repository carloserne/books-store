import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageContactoComponent } from './main-page-contacto.component';

describe('MainPageContactoComponent', () => {
  let component: MainPageContactoComponent;
  let fixture: ComponentFixture<MainPageContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
