import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { SINGERS } from './data';

@Component({
    selector: 'app-paging-hierarchy',
    templateUrl: './paging-hierarchy.component.html',
    styleUrls: ['./paging-hierarchy.component.scss']
})
export class PagingHierarchyComponent implements OnInit {
    public localData;

    public ngOnInit(): void {
        this.localData = SINGERS;
    }

    public toggleColumn(col: IgxColumnComponent, event: MouseEvent) {
        col.pinned ? col.unpin() : col.pin();
        event.stopPropagation();
    }
}
