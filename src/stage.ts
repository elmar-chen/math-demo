class Station {
  label: string;
  distance: number;
  constructor(label: string, distance: number) {
    this.label = label;
    this.distance = distance;
  }
}
class Player {
  label: string;
  constructor(label: string) {
    this.label = label;
  }
}

export default class Stage {
  move(arg0: string, arg1: number) {
      throw new Error("Method not implemented.");
  }
  private stations: Map<string, Station> = new Map();
  private players: Map<string, Player> = new Map();
  private rounds: Map<string, number>[] = [new Map()];

  station(label: string, distance: number) {
    this.stations.set(label, new Station(label, distance));
  }

  player(label: string, station: string) {
    this.players.set(label, new Player(label));
    var s = this.stations.get(station);
    this.rounds[0].set(label, s.distance);
  }
  newRound() {
    this.rounds.push(new Map());
  }
}
