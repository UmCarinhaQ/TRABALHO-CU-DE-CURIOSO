import { Spacecraft } from "../Spacecraft";

export class Fleet {
    private ships: Spacecraft[];

    constructor() {
        this.ships = [];
    }

    addShip(ship: Spacecraft): void {
        this.ships.push(ship);
    }

    removeShip(id: number): void {
        this.ships = this.ships.filter(ship => ship.getId() !== id);
    }

    findShip(id: number): Spacecraft | undefined {
        return this.ships.find(ship => ship.getId() === id);
    }

    showFleet(): void {
        this.ships.forEach(ship => {
            console.log(ship);
        });
    }
}