import { Component, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoValue : string = "";
  todoList: string[] = [];
  finishList: string[] = [];
  crescendo:string[]=[];
  check: boolean = false;
  

  insertValue(){
    
    this.todoList.push(this.todoValue)

  }
 


  constructor(){}

  removerIndice(event:MouseEvent, index:number){
    if(event){
      this.todoList.splice(index,1)
    }

  }
  removerIndice2(event:MouseEvent, index:number){
    if(event){
      this.finishList.splice(index,1)
    }

  }

   inserFinish(event:MouseEvent,index:number){
    if(event){
      this.finishList.push()
    }
  }
  setcheck(item:string){
    if(this.todoList.indexOf(item) !== -1){
      this.todoList.splice(this.todoList.indexOf(item),1)
      this.finishList.push(item)

    }
    
  }


}
