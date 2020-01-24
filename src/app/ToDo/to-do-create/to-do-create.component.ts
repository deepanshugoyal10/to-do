import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css']
})

export class ToDoCreateComponent implements OnInit {

  @Output() ToDoCreated = new EventEmitter();

  enteredTitle = "";
  enteredContent = "";
ItemName:boolean=true;
newPost="No Content";

onAddPost(){
    const post = {title: this.enteredTitle, content: this.enteredContent,};
    console.log(post);
    this.ToDoCreated.emit(post);
    this.enteredTitle="";
    this.enteredContent="";
  }

constructor() { 
}

ngOnInit() {
}

}
