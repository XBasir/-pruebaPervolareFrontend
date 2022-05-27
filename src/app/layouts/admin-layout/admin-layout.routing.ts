import { Routes } from '@angular/router';
import { AuthGuardService } from 'app/auth-guard.service';


export const AdminLayoutRoutes: Routes = [
    { path: 'users', canActivateChild:[AuthGuardService],
      loadChildren: () => import('../../admin/users/user.module').then(m => m.UserModule),
    },
    { path: 'categories',canActivateChild:[AuthGuardService],
    loadChildren: () => import('../../admin/categories/category.module').then(m => m.CategoryModule),
    }
];
