import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  arrToDos: string[] = [
    'Estudiar 2 horas enplatzi',
    'Tomar un descanso de 30 minutos',
    'Poner en practica lo aprendido',
  ];

  toDo: string = '';
  classLi: string = '';
  finish: boolean = false;

  addToDos(argumentToDo: string) {
    this.arrToDos.push(argumentToDo);
    this.toDo = '';

    console.log(
      'Si lograste cambiar el bg de html o body ayudame =(, mi twitter es : MooenzDev'
    );
  }

  deleteToDo(indice:number) {
    this.arrToDos.splice(indice, 1);
  }

  finishToDo(indice: number) {
    const indiceStr = indice.toString();
    const element = document.querySelector(`#id${indiceStr}`) as HTMLElement;

    element.classList.toggle('terminado');
  }
}
