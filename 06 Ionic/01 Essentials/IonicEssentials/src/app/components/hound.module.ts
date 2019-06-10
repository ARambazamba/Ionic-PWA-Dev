import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HoundListComponent } from "./hound-list/hound-list.component";
import { HoundEditComponent } from "./hound-edit/hound-edit.component";
import { IonicModule } from "@ionic/angular";

const comps = [HoundListComponent, HoundEditComponent];

@NgModule({
  declarations: [comps],
  exports: [comps],
  imports: [CommonModule, IonicModule]
})
export class HoundModule {}
