import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        NavbarComponent
      ],
      imports: [
        BrowserModule
      ],

      exports: [
          NavbarComponent
      ],

      providers: [],
      bootstrap: [NavbarComponent]
})
export class SharedModule {}