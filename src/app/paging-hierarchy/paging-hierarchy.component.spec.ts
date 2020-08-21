import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PagingHierarchyComponent } from './paging-hierarchy.component';
import { IgxHierarchicalGridModule } from 'igniteui-angular';

describe('PagingHierarchyComponent', () => {
  let component: PagingHierarchyComponent;
  let fixture: ComponentFixture<PagingHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingHierarchyComponent ],
      imports: [ NoopAnimationsModule, IgxHierarchicalGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
