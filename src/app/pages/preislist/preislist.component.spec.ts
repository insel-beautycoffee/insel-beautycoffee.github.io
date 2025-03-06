import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreislistComponent } from './preislist.component';

describe('PreislistComponent', () => {
  let component: PreislistComponent;
  let fixture: ComponentFixture<PreislistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreislistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
