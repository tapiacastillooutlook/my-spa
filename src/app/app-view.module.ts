import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CardExampleComponent } from "./card-example/card-example.component";
import { compileNgModule } from "@angular/compiler";
import { FormsModule } from "@angular/forms";
const rutas:Routes = [
    { path: 'tarjeta', component: CardExampleComponent},
    { path: 'calculadora', component: CalculatorComponent}
  ]
  
@NgModule({
    declarations: [
        CardExampleComponent,
        CalculatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }
