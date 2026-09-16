import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbItem, LegalDocument as LegalDocumentModel } from '../../../../data/models';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { LegalSection } from '../legal-section/legal-section';

/** Shared layout for the privacy policy and terms of service pages. */
@Component({
  selector: 'app-legal-document',
  imports: [RouterLink, Breadcrumb, LegalSection],
  templateUrl: './legal-document.html',
})
export class LegalDocument {
  readonly document = input.required<LegalDocumentModel>();

  protected readonly breadcrumb = computed<BreadcrumbItem[]>(() => [
    { label: 'الرئيسية', link: '/' },
    { label: this.document().title },
  ]);
}
