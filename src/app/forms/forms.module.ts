
import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing/forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormsModule } from "@angular/forms"
@NgModule({
  imports: [
    FormsRoutingModule,
    FormsModule
  
  ],
  declarations: [ FormsComponent ],
  providers: []
})
export class FormsModules { }
