

export class Users{

  private _userId: string ='';
  private _name: string =''


  constructor(_userId: string, _name:string) {
    this._userId = _userId;
    this._name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }


  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

}
