
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'NotFoundComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      RouterModule.forRoot([], { useHash: true })
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  },
  component: NotFoundComponent,
  props: {
  }
})
