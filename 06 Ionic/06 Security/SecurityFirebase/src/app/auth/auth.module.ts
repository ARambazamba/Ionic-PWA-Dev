import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

const comps = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [FormsModule, CommonModule, IonicModule]
})
export class AuthModule {}
