import { Component, ViewEncapsulation } from '@angular/core';
import { coreDomain } from '@pomodoro-app/core/domain';

@Component({
  selector: 'app-nx-welcome',
  template: `<h1>{{ title }}</h1>`,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  title = coreDomain();
}
