import { Pipe, PipeTransform } from '@angular/core';

const FORMATS: Record<'long' | 'short', Intl.DateTimeFormatOptions> = {
  long: { year: 'numeric', month: 'long', day: 'numeric' },
  short: { month: 'long', day: 'numeric' },
};

/** Formats dates with Arabic digits and month names, e.g. "١٥ يناير ٢٠٢٦". */
@Pipe({ name: 'arDate' })
export class ArDatePipe implements PipeTransform {
  transform(value: string | Date, format: keyof typeof FORMATS = 'long'): string {
    return new Date(value).toLocaleDateString('ar-EG', FORMATS[format]);
  }
}
