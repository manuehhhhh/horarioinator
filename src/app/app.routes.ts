import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"/Agregar",
        pathMatch:"full",
        loadComponent: () => {return import("./components/lista-total/lista-total.component").then((m) => m.ListaTotalComponent)}
    }
];
