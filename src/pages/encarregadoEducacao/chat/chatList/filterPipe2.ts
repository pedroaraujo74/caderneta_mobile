import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch2'
})

export class FilterPipe2 implements PipeTransform {
  transform(feedArray: any, term:any): any {
    if(term === undefined) return feedArray;
    return feedArray.filter(function(item){
    if (item.disciplina.toLowerCase().includes(term.toLowerCase()) || item.name.toLowerCase().includes(term.toLowerCase())) {
      return item.disciplina.toLowerCase();
    }
    })
  }
}
