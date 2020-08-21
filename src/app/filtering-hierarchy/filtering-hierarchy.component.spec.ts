import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FilteringHierarchyComponent } from './filtering-hierarchy.component';
import { IgxHierarchicalGridModule } from 'igniteui-angular';

describe('FilteringHierarchyComponent', () => {
  let component: FilteringHierarchyComponent;
  let fixture: ComponentFixture<FilteringHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteringHierarchyComponent ],
      imports: [ NoopAnimationsModule, IgxHierarchicalGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
