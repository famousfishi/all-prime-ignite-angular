import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { SINGERS } from './data';

@Component({
    selector: 'app-sorting-heirarchy',
    templateUrl: './sorting-heirarchy.component.html',
    styleUrls: ['./sorting-heirarchy.component.scss']
})
export class SortingHeirarchyComponent implements OnInit {
    public localData;

    public ngOnInit(): void {
        this.localData = SINGERS;
    }

    public toggleColumn(col: IgxColumnComponent, event: MouseEvent) {
        col.pinned ? col.unpin() : col.pin();
        event.stopPropagation();
    }
}
