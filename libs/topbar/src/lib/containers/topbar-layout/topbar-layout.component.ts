import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-appwrite-topbar-layout',
  template: `
    <div class="flex flex-1 items-center justify-between flex-wrap w-full px-4 bg-white shadow-md" style="min-height: 64px">
      <!-- Left Navbar -->
      <div class="nav-left grid grid-flow-col grid-rows-1 gap-4 text-gray-900 h-full items-center">
        <ng-content select="[nav-left]"></ng-content>
      </div>
      <!-- Center Navbar -->
      <div class="nav-center grid grid-flow-col grid-rows-1 gap-4 text-gray-900 h-full items-center">
        <ng-content select="[nav-center]"></ng-content>
      </div>
      <!-- Right Navbar -->
      <div class="nav-right grid grid-flow-col grid-rows-1 gap-4 text-gray-900 h-full items-center divide-x divide-gray-400">
        <ng-content select="[nav-right]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      flex: 1;
    }
  `]
})
export class TopbarLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
