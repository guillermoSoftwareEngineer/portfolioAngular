import { Component, Signal } from '@angular/core';


@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',

})
export class LabsComponent {

 nombre = 'Guillermo';
  image ='https://img.freepik.com/vector-gratis/silueta-dragon-diseno-plano_23-2149486319.jpg?t=st=1738268265~exp=1738271865~hmac=b67b22cf9cf817976c2110b0db5055237ca66ea5e0b38a0ac9e86154c17d1703&w=740';
  // contador: signal(0);
  person ={
    yo : 'Guillermo',
    apellido : 'Vasquez',
    edad:39
  }

  onCLickHandler() {
    alert('El evento funciona')
  }

}
