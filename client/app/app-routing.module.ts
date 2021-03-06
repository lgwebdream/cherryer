import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CommitListComponent } from './pages/commit-list/commit-list.component'
import { CommitAddComponent } from './pages/commit-add/commit-add.component'
import { RepositoryAddComponent } from './pages/repository-add/repository-add.component'
import { RepositoryListComponent } from './pages/repository-list/repository-list.component'
import { GroupListComponent } from './pages/group-list/group-list.component'
import { GroupAddComponent } from './pages/group-add/group-add.component'


const routes: Routes = [
  { path: 'commit-list', component: CommitListComponent, },
  { path: 'commit-add', component: CommitAddComponent, },
  { path: 'repository-add', component: RepositoryAddComponent, },
  { path: 'repository-list', component: RepositoryListComponent, },
  { path: 'group-list', component: GroupListComponent, },
  { path: 'group-add', component: GroupAddComponent, },
  { path: '', redirectTo: '/commit-list', pathMatch: 'full', },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
