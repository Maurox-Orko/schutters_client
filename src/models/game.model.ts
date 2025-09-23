export class GameModel {
  shootingID: string = '';
  pelotons: GamePelotonModel[] = [];
}

export class GamePelotonModel {
  _id: string = '';
  name: string = '';
  shooters: GameShooterModel[] = [];
}

export class GameShooterModel {
  _id: string = "";
  name: string = "";
  title: string = "";
  points: number = 0;
  marks: { name: string, _id: string }[] = [];
  presentTime: string = "";
}