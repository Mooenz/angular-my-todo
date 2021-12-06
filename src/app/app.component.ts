import { Component } from '@angular/core';
import { Todo } from './models/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    
  }
  arrToDos: Todo[] = [
    {
      content: 'Estudiar 2 horas en Platzi',
      isCompleted: false,
    },
    {
      content: 'Tomar un descanso de 30 minutos',
      isCompleted: false,
    },
    {
      content: 'Poner en practica lo aprendido',
      isCompleted: false,
    },
  ];

  getLocalStorage() {
    const dataToDo: any =localStorage.getItem('todo');// mostrar ToDos
    // JSON.parse(); convertir de string a un json
    this.arrToDos = JSON.parse(dataToDo);
  }

  toDo: string = '';
  noToDo: boolean = false;

  saveLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.arrToDos)); // guarda en local storage
  }


  addToDos(contentToDo: string) {
    if(contentToDo === "") {
      this.noToDo = true;
    } else {
      this.arrToDos.push({
        content: contentToDo,
        isCompleted: false,
      });
  
      this.toDo = '';
      this.noToDo = false;

      this.saveLocalStorage();
      this.getLocalStorage();
    }
  }

  deleteToDo(idTodo: number) {
    this.arrToDos = this.arrToDos.filter((valor, indice) => idTodo !== indice);
  }

  doneTodo(idTodo: number) {
    this.arrToDos.map((valor, indice) => {
      if (idTodo === indice) valor.isCompleted = !valor.isCompleted;

      return valor;
    });
  }
}
