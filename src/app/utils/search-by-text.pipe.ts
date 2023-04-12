import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../interfaces/message';

@Pipe({
  name: 'searchByText'
})
export class SearchByTextPipe implements PipeTransform {

  transform( messages: Message[], text: string): Message[] {
    if(!text) return messages;

    return messages.filter( msg => msg.text.toLowerCase().includes( text.toLowerCase() ) )
  }

}
