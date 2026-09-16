import { Component } from '@angular/core';
import { TERMS_OF_SERVICE } from '../../../data/legal';
import { LegalDocument } from '../components/legal-document/legal-document';

@Component({
  selector: 'app-terms',
  imports: [LegalDocument],
  template: `<app-legal-document [document]="terms" />`,
})
export class Terms {
  protected readonly terms = TERMS_OF_SERVICE;
}
