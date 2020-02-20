import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NavbarComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule
      ],

      exports: [
          NavbarComponent
      ],

      providers: [],
      bootstrap: [NavbarComponent]
})
export class SharedModule {}