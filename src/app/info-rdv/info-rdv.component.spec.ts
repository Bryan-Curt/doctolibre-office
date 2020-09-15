import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRdvComponent } from './info-rdv.component';

describe('InfoRdvComponent', () => {
  let component: InfoRdvComponent;
  let fixture: ComponentFixture<InfoRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
