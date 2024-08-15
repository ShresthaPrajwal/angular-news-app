import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookslideComponent } from './bookslide.component';

describe('BookslideComponent', () => {
  let component: BookslideComponent;
  let fixture: ComponentFixture<BookslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookslideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
