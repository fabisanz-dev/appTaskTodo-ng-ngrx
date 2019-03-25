import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//STORE
import { StoreModule } from '@ngrx/store';
import { appReducers } from './todo/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FooterComponent } from './footer/footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { environment } from 'src/environments/environment';
import { FilterPipe } from './todo/filter/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FooterComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),  //config STORE
    StoreDevtoolsModule.instrument({ //confif STORE DEV TOOLS
      maxAge: 25,
      logOnly: environment.production
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
