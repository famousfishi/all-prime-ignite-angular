import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EditingHierarchyComponent } from './editing-hierarchy.component';
import { IgxHierarchicalGridModule } from 'igniteui-angular';

describe('EditingHierarchyComponent', () => {
  let component: EditingHierarchyComponent;
  let fixture: ComponentFixture<EditingHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingHierarchyComponent ],
      imports: [ NoopAnimationsModule, IgxHierarchicalGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
