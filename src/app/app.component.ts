import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="card" style="width: 70%">
        <div class="card-header">
          <h1 class="text-center">Validation du numéro de sécurité sociale</h1>
        </div>
        <div class="card-body">
          <div
            class="alert alert-danger"
            data-cy-global-status
            *ngIf="form.controls['securityNumber'].hasError('pattern')"
          >
            Le patient ne peut pas être pris en charge !
          </div>
          <form [formGroup]="form">
            <input
              formControlName="securityNumber"
              type="text"
              placeholder="Numéro de sécurité sociale"
              class="form-control"
              name="security-number"
              data-cy-security-number
              [ngClass]="{
                'is-invalid':
                  form.controls['securityNumber'].hasError('pattern')
              }"
            />
            <p
              class="invalid-feedback"
              data-cy-security-number-error
              *ngIf="form.controls['securityNumber'].hasError('pattern')"
            >
              Numéro de sécurité sociale invalide !
            </p>

            <button class="btn btn-primary" data-cy-submit>Valider</button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  form = new FormGroup({
    securityNumber: new FormControl('', Validators.pattern(/^[0-9]{15}$/)),
  });
}
