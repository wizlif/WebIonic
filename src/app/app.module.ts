import {NgModule } from '@angular/core';
import {BOOTSTRAP, COMPONENTS, DECLARATIONS, IMPORTS, PROVIDERS} from "./app.metadata";
import {IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    IMPORTS,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: BOOTSTRAP,
  entryComponents: COMPONENTS,
  providers: PROVIDERS
})
export class AppModule {}
