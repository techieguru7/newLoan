import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import {CardModule} from 'primeng/card';
import {SliderModule} from 'primeng/slider';
import {ToolbarModule} from 'primeng/toolbar';

import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {DividerModule} from 'primeng/divider';
import {ChartModule} from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    CardModule,
    SliderModule,
    InputNumberModule,
    ToolbarModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    DividerModule,
    RippleModule,
    ChartModule,
    TableModule,
    DropdownModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
