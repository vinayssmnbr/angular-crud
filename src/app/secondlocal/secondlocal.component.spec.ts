import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondlocalComponent } from './secondlocal.component';

describe('SecondlocalComponent', () => {
  let component: SecondlocalComponent;
  let fixture: ComponentFixture<SecondlocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondlocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
