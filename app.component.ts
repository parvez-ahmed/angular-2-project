import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  divRef:any;
  ngOnInit(){
     this.divRef=document.getElementById("divref");
     let obj;
     obj=setTimeout(()=>{
       this.divRef.style.width="22%";
       this.divRef.style.color="black";
     },400);
  }
}
