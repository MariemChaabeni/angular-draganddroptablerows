import { Directive, EventEmitter, HostBinding,  HostListener,  Input, Output } from "@angular/core";
import { DragService } from "./drag.service";

@Directive({
  selector: '[myDropTarget]'
})
export class DropTargetDirective {
  constructor(private dragService: DragService) {
  }

  @Input()
  set myDropTarget(options: any) {
    if (options) {
      this.options = options;
    }
  }

  @Output('myDrop') drop = new EventEmitter();

  private options: DropTargetOptions = {};

  @HostListener('dragenter', ['$event'])onDragEnter(evt) {
 
   
  }
  @HostListener('dragover', ['$event'])onDragOver(evt) {
    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
       evt.preventDefault();
    }
      
  
  }

  @HostListener('drop', ['$event'])
  onDrop(evt) {
    const data =  JSON.parse(evt.dataTransfer.getData('Text'));

    this.drop.next(data);
    
  }
}
export interface DropTargetOptions {
  zone?: string;
}