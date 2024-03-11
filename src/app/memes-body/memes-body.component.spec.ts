import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesBodyComponent } from './memes-body.component';

describe('MemesBodyComponent', () => {
  let component: MemesBodyComponent;
  let fixture: ComponentFixture<MemesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemesBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
