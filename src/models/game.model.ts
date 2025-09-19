export class GameModel {
  _id: string = '';
  type: 'peloton' | 'schutter' = 'peloton';
  name: string = '';
  points?: number;
  score?: { name: string }[];
  present?: boolean = false;
}