import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideheaderComponent } from './sideheader.component';

describe('SideheaderComponent', () => {
  let component: SideheaderComponent;
  let fixture: ComponentFixture<SideheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
