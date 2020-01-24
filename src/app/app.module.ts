import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule} from'@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ToDoCreateComponent } from './ToDo/to-do-create/to-do-create.component';
import { ToDoListComponent } from './ToDo/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoCreateComponent,
    ToDoListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
