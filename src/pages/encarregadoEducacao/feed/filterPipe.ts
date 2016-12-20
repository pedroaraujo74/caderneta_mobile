import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})

export class FilterPipe implements PipeTransform {
  transform(feed1: any, term:any): any {
    if(term === undefined) return feed1;
    return feed1.filter(function(item){
    if (item.disciplina.toLowerCase().includes(term.toLowerCase()) || item.createdBy.toLowerCase().includes(term.toLowerCase()) || item.desc.toLowerCase().includes(term.toLowerCase())  ) {
      return item.disciplina.toLowerCase();
    }
    })
  }
}
