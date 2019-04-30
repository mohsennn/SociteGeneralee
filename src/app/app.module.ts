  import { AppRoutingModule } from './app-routing.module';
 import { CompteComponent } from './compte/compte.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatMenuModule, MatDialogModule } from '@angular/material';
 import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
 import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
 import { AppComponent } from  './app.component';
 import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule
, MatTableModule } from "@angular/material";
import { MatPaginator } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { MatSort  } from '@angular/material';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { CompteAddComponent } from './compte-add/compte-add.component';
import { CompteDetailsComponent } from './compte-details/compte-details.component';
import { CompteEditComponent } from './compte-edit/compte-edit.component';
import { FormGroupDirective, FormControl } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent,
    CompteAddComponent,
    CompteDetailsComponent,
    CompteEditComponent


  ],
  imports: [

   CdkTableModule,
   AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule



   ],
  providers: [],
  entryComponents:[DialogOverviewExampleDialogComponent],

  bootstrap: [AppComponent
  ]
})
export class AppModule { }


