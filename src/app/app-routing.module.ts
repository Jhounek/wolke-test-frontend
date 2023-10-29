import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './modules/post/pages/post-page/post-page.component';
import { SessionGuard } from './core/guards/session.guard';
import { EditUserComponent } from './modules/user/pages/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: 'edit-profile',
    component: EditUserComponent,
    loadChildren: () => import(`./modules/user/user.module`).then(m => m.UserModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'create-profile',
    component: EditUserComponent,
    loadChildren: () => import(`./modules/user/user.module`).then(m => m.UserModule),
  },
  {
    path: '',
    component: PostPageComponent,
    loadChildren: () => import(`./modules/post/post.module`).then(m => m.PostModule),
    canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
