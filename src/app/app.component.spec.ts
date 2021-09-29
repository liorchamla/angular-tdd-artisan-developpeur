import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('Security Number Checker', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [FormsModule, ReactiveFormsModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should appear as the given mockup', () => {
    expect(spectator.query('form')).toBeTruthy();
    expect(spectator.query('input[name="security-number"]')).toBeTruthy();
    expect(spectator.query('form button')).toBeTruthy();

    expect(spectator.query('[data-cy-global-status]')).toBeNull();
    expect(spectator.query('[data-cy-security-number-error]')).toBeNull();
  });

  it('should reject bad formatted security number', () => {
    spectator.typeInElement('100 100 00', 'input[name="security-number"]');
    spectator.click('form button');

    expect(spectator.query('[data-cy-security-number-error]')).toBeTruthy();
    expect(spectator.query('[data-cy-global-status]')).toBeTruthy();
  });
});
