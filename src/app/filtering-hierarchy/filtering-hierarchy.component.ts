import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { SINGERS } from './data';

@Component({
    selector: 'app-filtering-hierarchy',
    templateUrl: './filtering-hierarchy.component.html',
    styleUrls: ['./filtering-hierarchy.component.scss']
})
export class FilteringHierarchyComponent implements OnInit {
    public localData;

    public ngOnInit(): void {
        this.localData = SINGERS;
    }

    public toggleColumn(col: IgxColumnComponent, event: MouseEvent) {
        col.pinned ? col.unpin() : col.pin();
        event.stopPropagation();
    }
}
