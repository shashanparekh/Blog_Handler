import { Identifiers } from '@angular/compiler';

export class Blog{
  constructor(
    public id:number,private title:string,private description:string,private category:string
  ){

  }
}
