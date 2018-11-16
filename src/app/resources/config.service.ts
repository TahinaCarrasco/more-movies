import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  get baseUrl(): string {
    return 'https://more-movies-api.herokuapp.com/api/';
  }

}
