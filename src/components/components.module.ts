import { NgModule } from '@angular/core';
import { DaljeetSinghComponent } from './daljeet-singh/daljeet-singh';
import { DaljeetComponent } from './daljeet/daljeet';
@NgModule({
	declarations: [DaljeetSinghComponent,
    DaljeetComponent],
	imports: [],
	exports: [DaljeetSinghComponent,
    DaljeetComponent]
})
export class ComponentsModule {}
