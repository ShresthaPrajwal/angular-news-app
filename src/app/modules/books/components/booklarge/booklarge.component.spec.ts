import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklargeComponent } from './booklarge.component';

describe('BooklargeComponent', () => {
  let component: BooklargeComponent;
  let fixture: ComponentFixture<BooklargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooklargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooklargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
