import { Component, Input, EventEmitter } from '@angular/core';

@Component ({
    selector: 'favorite',
    template: `<i
            class="glyphicon"
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick()">
        </i>`,
    styles:[` .glyphicon-star {
        color:orange;
    }
    `]
})

export class FavoriteComponent{
    @Input() isFavorite = false; 

    @Input() change = new EventEmitter();


onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
}
}