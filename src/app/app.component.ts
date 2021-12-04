import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  arrToDos: string[] = [
    'Estudiar 2 horas enplatzi',
    'Tomar un descanso de 30 minutos',
    'Poner en practica lo aprendido',
  ];

  
  toDo: string = '';
  done: boolean = false;
  
  saveLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.arrToDos)); // guarda en local storage
  }
  
  // getLocalStorage() {
  //   const dataToDo: string | null = JSON.parse(localStorage.getItem('todo'));// mostrar ToDos
  // }
  
  addToDos(argumentToDo: string) {
    this.arrToDos.push(argumentToDo);
    this.toDo = '';

    this.saveLocalStorage();
    // console.log(this.getLocalStorage());
  }

  deleteToDo(indice: number) {
    this.arrToDos.splice(indice, 1);
  }

  finishToDo(indice: number) {
    const indiceStr = indice.toString();

    const toDo = document.querySelector(`#id${indiceStr}`) as HTMLElement;
    const btnDone = document.querySelector(`#btn${indiceStr}`) as HTMLElement;

    toDo.classList.toggle('done');
    btnDone.classList.toggle('btnDone');
  }
}
