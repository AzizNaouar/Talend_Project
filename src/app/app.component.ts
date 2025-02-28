import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SetValueService } from './Service/set-value.service';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  Date_Debut!:string
  Date_Fin!:string
  Cle_Selection!:string

constructor(private ValueService:SetValueService )
{

}


 SetValue({value,valid} : NgForm)
  {
    
    this.Date_Debut=value.datedeb;
    this.Date_Fin=value.datefin;
    this.Cle_Selection=value.cle;
    //console.log(this.Cle_Selection)
   //console.log(this.Date_Debut)
   //console.log(this.Date_Fin)
   this.ValueService.SentValue(this.Cle_Selection,this.Date_Debut,this.Date_Fin).subscribe(
    response => {
      console.log('Données envoyée avec succeés!', response);
    },
    error => {
      console.error('Erreur :', error);
    }
  );
}
}
