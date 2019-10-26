import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'car-list', loadChildren: './pages/car-list/car-list.module#CarListPageModule' },
  { path: 'user-details', loadChildren: './pages/user-details/user-details.module#UserDetailsPageModule' },
  { path: 'otp-validate', loadChildren: './component/otp-validate/otp-validate.module#OtpValidatePageModule' },
  { path: 'car-book', loadChildren: './pages/car-book/car-book.module#CarBookPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' },
  { path: 'select-location', loadChildren: './component/select-location/select-location.module#SelectLocationPageModule' },
  { path: 'items', loadChildren: './pages/items/items.module#ItemsPageModule' },
  { path: 'fill-items', loadChildren: './component/fill-items/fill-items.module#FillItemsPageModule' },
  { path: 'booking-list', loadChildren: './pages/booking-list/booking-list.module#BookingListPageModule' },
  { path: 'track-status', loadChildren: './pages/track-status/track-status.module#TrackStatusPageModule' },
  { path: 'emergency-book', loadChildren: './pages/emergency-book/emergency-book.module#EmergencyBookPageModule' },
  { path: 'route-map', loadChildren: './pages/route-map/route-map.module#RouteMapPageModule' },
  { path: 'book-ambulace-details', loadChildren: './component/book-ambulace-details/book-ambulace-details.module#BookAmbulaceDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
