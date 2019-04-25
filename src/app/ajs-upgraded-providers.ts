import { $locationShim } from '@angular/common/upgrade';

// #docregion
export abstract class RouteParams {
  [key: string]: string;
}

export function routeParamsFactory(i: any) {
  return i.get('$routeParams');
}

export const routeParamsProvider = {
  provide: RouteParams,
  useFactory: routeParamsFactory,
  deps: ['$injector']
};

export const locationProvider = {
  provide: '$location',
  useExisting: $locationShim
}
