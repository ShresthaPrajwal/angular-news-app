import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoriesCardComponent } from './top-stories-card.component';

describe('TopStoriesCardComponent', () => {
  let component: TopStoriesCardComponent;
  let fixture: ComponentFixture<TopStoriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopStoriesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopStoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
