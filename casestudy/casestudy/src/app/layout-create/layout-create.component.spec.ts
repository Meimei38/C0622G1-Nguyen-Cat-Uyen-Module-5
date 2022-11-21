import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCreateComponent } from './layout-create.component';

describe('LayoutCreateComponent', () => {
  let component: LayoutCreateComponent;
  let fixture: ComponentFixture<LayoutCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
