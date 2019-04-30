import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompteComponent } from "./compte/compte.component";
import { CompteDetailsComponent } from "./compte-details/compte-details.component";
import { CompteAddComponent } from "./compte-add/compte-add.component";
import { CompteEditComponent } from "./compte-edit/compte-edit.component";

const routes: Routes = [
  {
    path: "comptes",
    component: CompteComponent
  },
  {
    path: "compte-details/:id",
    component: CompteDetailsComponent,
    data: { title: "Compte Details" }
  },

  {
    path: "compte-add",
    component: CompteAddComponent,
    data: { title: "Add Compte" }
  },
  {
    path: "compte-edit/:id",
    component: CompteEditComponent,
    data: { title: "Edit Compte" }
  },
  { path: "", redirectTo: "/comptes",
    pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
