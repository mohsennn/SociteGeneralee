import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatCardModule, MatTableModule, MatSortModule, MatSelectModule } from "@angular/material";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';





@NgModule({
  imports: [
     MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
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
    MatPaginatorModule,
    BrowserAnimationsModule
   ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
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
    MatPaginatorModule


  ],
  declarations: [
  ],
})export class MaterialModule {};
