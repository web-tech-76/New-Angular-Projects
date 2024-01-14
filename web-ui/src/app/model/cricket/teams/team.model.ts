export class Team {

  constructor(public _id: string,
              public teamId: string,
              public teamName: string,
              public captain: string,
              public playersCount: number,
              public createdDate: Date) {
    this._id = _id;
    this.teamId = teamId;
    this.teamName = teamName;
    this.captain = captain;
    this.playersCount = playersCount;
    this.createdDate = createdDate;
  }

}
