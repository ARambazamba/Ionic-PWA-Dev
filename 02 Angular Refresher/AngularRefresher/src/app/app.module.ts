import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AccountsComponent } from "./accounts/accounts.component";
import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { BindingComponent } from "./demos/binding/binding.component";
import { ContentProjectionComponent } from "./demos/content-projection/content-projection.component";
import { EmployeeComponent } from "./demos/content-projection/employee/employee.component";
import { DemosComponent } from "./demos/demos.component";
import { DirectivesComponent } from "./demos/directives/directives.component";
import { ExpressionsComponent } from "./demos/expressions/expressions.component";
import { InlineComponent } from "./demos/inline/inline.component";
import { PersonEditComponent } from "./demos/persons/person-edit/person-edit.component";
import { PersonService } from "./demos/persons/person.service";
import { PersonsListComponent } from "./demos/persons/persons-list/persons-list.component";
import { StructDirectivesComponent } from "./demos/struct-directives/struct-directives.component";
import { TemplateComponent } from "./demos/template/template.component";
import { AlertComponent } from "./demos/view-child/alert/alert.component";
import { ViewChildComponent } from "./demos/view-child/view-child.component";
import { NavbarComponent } from "./shared/index";
import { MatchHeightDirective } from "./shared/match-height/match-height.directive";
import { VouchersService } from "./vouchers/voucher.service";
import { VoucherDetailComponent } from "./vouchers/voucher/voucher-detail/voucher-detail.component";
import { VoucherDetailsListComponent } from "./vouchers/voucher/voucher-details-list/voucher-details-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { DemoNavComponent } from './demos/content-projection/demo-nav/demo-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent,
    InlineComponent,
    BindingComponent,
    TemplateComponent,
    DirectivesComponent,
    StructDirectivesComponent,
    ExpressionsComponent,
    PersonsListComponent,
    PersonEditComponent,
    ContentProjectionComponent,
    EmployeeComponent,
    NavbarComponent,
    MatchHeightDirective,
    ViewChildComponent,
    AlertComponent,
    AdminComponent,
    DemoNavComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [VouchersService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
