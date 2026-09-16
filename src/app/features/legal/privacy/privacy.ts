import { Component } from '@angular/core';
import { PRIVACY_POLICY } from '../../../data/legal';
import { LegalDocument } from '../components/legal-document/legal-document';

@Component({
  selector: 'app-privacy',
  imports: [LegalDocument],
  template: `<app-legal-document [document]="policy" />`,
})
export class Privacy {
  protected readonly policy = PRIVACY_POLICY;
}
