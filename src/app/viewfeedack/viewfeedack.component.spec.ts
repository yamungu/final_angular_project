import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeedackComponent } from './viewfeedack.component';

describe('ViewfeedackComponent', () => {
  let component: ViewfeedackComponent;
  let fixture: ComponentFixture<ViewfeedackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewfeedackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewfeedackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
