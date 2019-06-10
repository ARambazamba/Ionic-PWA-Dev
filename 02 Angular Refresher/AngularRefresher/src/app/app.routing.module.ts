import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AccountsComponent } from "./accounts/accounts.component";
import { AdminComponent } from "./admin/admin.component";
import { BindingComponent } from "./demos/binding/binding.component";
import { ContentProjectionComponent } from "./demos/content-projection/content-projection.component";
import { DemosComponent } from "./demos/demos.component";
import { DirectivesComponent } from "./demos/directives/directives.component";
import { ExpressionsComponent } from "./demos/expressions/expressions.component";
import { InlineComponent } from "./demos/inline/inline.component";
import { StructDirectivesComponent } from "./demos/struct-directives/struct-directives.component";
import { TemplateComponent } from "./demos/template/template.component";
import { ViewChildComponent } from "./demos/view-child/view-child.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    children: [
      { path: "inline", component: InlineComponent },
      { path: "template", component: TemplateComponent },
      { path: "directives", component: DirectivesComponent },
      { path: "structdirectives", component: StructDirectivesComponent },
      { path: "binding", component: BindingComponent },
      { path: "projection", component: ContentProjectionComponent },
      { path: "expressions", component: ExpressionsComponent },
      { path: "viewchild", component: ViewChildComponent }
    ]
  },
  {
    path: "vouchers",
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent
  },
  {
    path: "accounts",
    component: AccountsComponent,
    data: { title: "Accounts" }
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
