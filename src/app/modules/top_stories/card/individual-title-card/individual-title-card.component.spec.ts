import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTitleCardComponent } from './individual-title-card.component';

describe('IndividualTitleCardComponent', () => {
  let component: IndividualTitleCardComponent;
  let fixture: ComponentFixture<IndividualTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualTitleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
