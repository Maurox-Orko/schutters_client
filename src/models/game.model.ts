export interface GameModel {
    _id: string,
    type: 'peloton' | 'schutter',
    name: string,
    points?: number,
    score?: string[]
}