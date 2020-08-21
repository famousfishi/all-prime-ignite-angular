import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SortingHeirarchyComponent } from './sorting-heirarchy.component';
import { IgxHierarchicalGridModule } from 'igniteui-angular';

describe('SortingHeirarchyComponent', () => {
  let component: SortingHeirarchyComponent;
  let fixture: ComponentFixture<SortingHeirarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingHeirarchyComponent ],
      imports: [ NoopAnimationsModule, IgxHierarchicalGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHeirarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
