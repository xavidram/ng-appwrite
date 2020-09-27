import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppwriteService } from './services/appwrite.service';

@NgModule({
  imports: [CommonModule],
  providers: [AppwriteService]
})
export class SharedModule {}
