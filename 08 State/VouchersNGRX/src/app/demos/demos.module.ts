import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";
import { DemoService } from "./demo.service";
import { DemosComponent } from "./demos.component";
import { EvtBusComponent } from "./evt-bus/evt-bus.component";
import { MovieService } from "./movie.service";
import { NgRxStoreComponent } from "./ngrx-store/ngrx-store.component";
import { NgRxTypedComponent } from "./ngrx-typed/ngrx-typed.component";
import { PersonService } from "./person.service";
import { SimpleDataStoreComponent } from "./simple-data-store/simple-data-store.component";
import { StatefulComponent } from "./stateful/stateful.component";
import { NgRxEffectsComponent } from "./ngrx-effects/ngrx-effects.component";
import { NgrxActionCreatorsComponent } from "./ngrx-action-creators/ngrx-action-creators.component";
import { EffectsModule } from "@ngrx/effects";
import { VouchersEffects } from "./state/demo.effects";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient } from "@angular/common/http";

//TODO: Switch imports - use 2nd import starting with "Using Action Creators"
import { demo_slice } from "./state/state";
// import { reducer } from "./state/demo.reducer";
import { reducer } from "./state/demo.reducer.typed";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,

    children: [
      { path: "stateful", component: StatefulComponent },
      { path: "simpleds", component: SimpleDataStoreComponent },
      { path: "evtbus", component: EvtBusComponent },
      { path: "ngrxstore", component: NgRxStoreComponent },
      { path: "ngrxtyped", component: NgRxTypedComponent },
      { path: "actioncreator", component: NgrxActionCreatorsComponent },
      { path: "ngrxeffects", component: NgRxEffectsComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    NgxChartsModule,
    //TODO: Notice Feature Store
    StoreModule.forFeature(demo_slice, reducer),
    EffectsModule.forFeature([VouchersEffects]),
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  declarations: [
    DemosComponent,
    StatefulComponent,
    EvtBusComponent,
    SimpleDataStoreComponent,
    NgRxStoreComponent,
    NgRxTypedComponent,
    NgRxEffectsComponent,
    NgrxActionCreatorsComponent
  ],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
