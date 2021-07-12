import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {
  
  transform(value: number): string{
    let out = "";

    for(let i = 0; i < Math.floor(value); i++){
      out += '<i class="fas fa-star"></i>';
    }
    
    let floating = value - Math.floor(value);
    if(floating >= 0.5){
      out += '<i class="fas fa-star-half-alt"></i>';
    }

    return out;
  }



  // transform(value: number): string{
  //   value = Math.round(value);
  //   if(value == 5){
  //     return "*****";
  //   }else if(value == 4){
  //     return "****";
  //   }else if(value == 3){
  //     return "***";
  //   }else if(value == 2){
  //     return "**";
  //   }else{
  //     return "*";
  //   }

  //   return "***";
  // }

}
