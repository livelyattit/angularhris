import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {


  private _logStatus: string = ''
  get logStatus(): string {
    return this._logStatus;
  }

  set logStatus(value: string) {
    this._logStatus = value;
    console.log("A server status changed, new server " + this._logStatus )
  }

  constructor() { }


}
