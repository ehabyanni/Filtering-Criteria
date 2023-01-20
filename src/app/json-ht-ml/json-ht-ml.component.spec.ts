import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonHtMLComponent } from './json-ht-ml.component';

describe('JsonHtMLComponent', () => {
  let component: JsonHtMLComponent;
  let fixture: ComponentFixture<JsonHtMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonHtMLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonHtMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
