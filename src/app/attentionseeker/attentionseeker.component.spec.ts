import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionseekerComponent } from './attentionseeker.component';

describe('AttentionseekerComponent', () => {
  let component: AttentionseekerComponent;
  let fixture: ComponentFixture<AttentionseekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionseekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
