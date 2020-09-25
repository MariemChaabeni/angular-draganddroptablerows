import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DragService } from './drag.service';
import { DraggableDirective } from './dragable.directive';
import { DropTargetDirective } from './drop.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,  DraggableDirective,DropTargetDirective ],
  bootstrap:    [ AppComponent ],
  providers: [DragService]
})
export class AppModule { }
