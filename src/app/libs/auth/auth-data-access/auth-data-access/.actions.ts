import { createAction, props } from '@ngrx/store';

export const loads = createAction(
  '[] Load s'
);

export const loadsSuccess = createAction(
  '[] Load s Success',
  props<{ data: any }>()
);

export const loadsFailure = createAction(
  '[] Load s Failure',
  props<{ error: any }>()
);
