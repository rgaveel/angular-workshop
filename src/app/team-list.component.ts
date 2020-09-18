import { Component, Input } from '@angular/core';

import { TEAMS } from './teams'

@Component({
  selector: 'team-list',
  template: `
  <div>
    it works team list
  </div>`,
})
export class TeamListComponent  {
  teams = TEAMS;
}
