import { Component } from '@angular/core';
import { Todo } from './models/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  arrToDos: Todo[] = [
    {
      content: 'Estudiar 2 horas en platzi',
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

  toDo: string = '';
  done: boolean = true;

  // saveLocalStorage() {
  //   localStorage.setItem('todo', JSON.stringify(this.arrToDos)); // guarda en local storage
  // }

  // getLocalStorage() {
  //   const dataToDo: string | null = JSON.parse(localStorage.getItem('todo'));// mostrar ToDos
  // }

  addToDos(contentToDo: string) {
    console.log(contentToDo);
    this.arrToDos.push({
      content: contentToDo,
      isCompleted: false,
    });

    this.toDo = '';
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
