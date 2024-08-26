import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import path from 'node:path';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { SupplierComponent } from './users management/supplier.component';
import { ProductComponent } from './pages/product/product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewfeedackComponent } from './viewfeedack/viewfeedack.component';
// import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingPageComponent,
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => DashComponent},
            { path: 'entrepreneur', component: EntrepreneurComponent},
            { path: 'supplier', component: SupplierComponent},
            { path: 'product', component:  ProductComponent},
            { path: 'feedback', component:  FeedbackComponent},
            { path: 'viewfeedback', component:  ViewfeedackComponent},

            
        ],
    },

];

// , canActivate: [AuthGuard], data:{roles:['Entrepreneur']}