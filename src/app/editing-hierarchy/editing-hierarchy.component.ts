import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { SINGERS } from './data';

@Component({
    selector: 'app-editing-hierarchy',
    templateUrl: './editing-hierarchy.component.html',
    styleUrls: ['./editing-hierarchy.component.scss']
})
export class EditingHierarchyComponent implements OnInit {
    public localData;

    public ngOnInit(): void {
        this.localData = SINGERS;
    }

    public toggleColumn(col: IgxColumnComponent, event: MouseEvent) {
        col.pinned ? col.unpin() : col.pin();
        event.stopPropagation();
    }
}
