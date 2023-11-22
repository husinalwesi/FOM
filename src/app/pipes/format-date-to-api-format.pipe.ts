import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateToApiFormat'
})
export class FormatDateToApiFormatPipe implements PipeTransform {

  transform(date: Date): string {
    // return date.toISOString().split('T')[0] + 'T00:00:00';
    date = new Date(date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    return formattedDate;
  }

}
