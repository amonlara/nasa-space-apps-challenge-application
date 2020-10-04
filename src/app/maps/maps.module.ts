import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AgmCoreModule } from '@agm/core';
import { MapsRoutingModule } from "./maps-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullScreenMapComponent } from "./full-screen-map/full-screen-map.component";
import { GoogleMapComponent } from "./google-map/google-map.component";
import { MatchHeightModule } from "../shared/directives/match-height.directive";

@NgModule({
    imports: [
        CommonModule,
        MapsRoutingModule,
        AgmCoreModule,
        NgbModule,
        MatchHeightModule
    ],
    declarations: [
        FullScreenMapComponent,
        GoogleMapComponent
    ]
})
export class MapsModule { }
