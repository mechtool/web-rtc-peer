import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [],
    imports: [
	CommonModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatSelectModule,
	MatTooltipModule,
	MatButtonModule,
	MatInputModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatTabsModule,
	MatBadgeModule,
	MatMenuModule,
	MatAutocompleteModule,
	MatButtonToggleModule,
	MatSlideToggleModule,
	MatSliderModule,
    ],
    exports : [
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatSelectModule,
	MatTooltipModule,
	MatButtonModule,
	MatInputModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatTabsModule,
	MatBadgeModule,
	MatMenuModule,
	MatAutocompleteModule,
	MatButtonToggleModule,
	MatSlideToggleModule,
	MatSliderModule,
    ]
})
export class MaterialModule { }
