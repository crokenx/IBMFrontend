import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { environment } from '../../../environments/environment';
//services
import { HttpService } from '../../services/http.service';
const { encriptarCampo } = require('../../FORGET_ALL/forge.all.min.js');

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @ViewChild('encrypted') input: ElementRef;
  dataForm: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpService) {
    this.dataForm = this.fb.group({
      documento: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onBlur() {
    encriptarCampo('documento', 'documentoCifrado', 2);
  }

  onSubmit(): void {
    const formulario = {
      encrypted_document: this.input.nativeElement.value,
      name: this.dataForm.value.nombre,
    };
    console.log(formulario);
    this.service.postForm(formulario).subscribe((res) => console.log(res));
  }
}
