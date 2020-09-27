import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-appwrite-not-found',
  template: `
    <div class="p-10">
      <div class="relative pb-1/3">
        <img
            src="assets/not-found/undraw_warning_cyit.svg"
            alt="404 Image"
            class="absolute bottom-0 h-full w-full object-fit" /></div>
      <div class="flex flex-col items-center">
        <h1 class="text-4xl font-bold text-appwrite">Sorry, page not found</h1>
        <button
          type="button"
          routerLink="/"
          class="bg-gray-700 px-4 py-2 mt-4 text-white font-semibold rounded-lg">
          Return Home
        </button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
