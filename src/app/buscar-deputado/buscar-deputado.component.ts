import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeputadoServiceService } from '../deputado-service.service';
import { Deputado } from '../module/deputados';

@Component({
  selector: 'app-buscar-deputado',
  templateUrl: './buscar-deputado.component.html',
  styleUrl: './buscar-deputado.component.css'
})
export class BuscarDeputadoComponent {

  formBusca: FormGroup
  deputado: Deputado | undefined

  constructor( private fb: FormBuilder, private fs: DeputadoServiceService) {
    this.formBusca = this.fb.group({
      nome: ['', [ Validators.required, Validators.minLength(2)] ]
    })

    this.deputado = undefined
  }
  buscar() {
    const nome = this.formBusca.value.nome
    this.fs.buscarDeputadoPorNome(nome).subscribe(
      res => {
        this.deputado = res.dados}
    )
  }

}
