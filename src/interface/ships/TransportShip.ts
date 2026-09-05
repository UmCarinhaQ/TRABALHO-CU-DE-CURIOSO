import { Spacecraft } from "./Spacecraft";
import { CargoCarrier } from "../CargoCarrier";

export class TansportShip extends Spacecraft implements CargoCarrier {

    private cargoCapacity: number;
    private currentCargo: number;

    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number,
        cargoCapacity: number,
        currentCargo: number
    ) {
        super(id, name, fuel, health);

        this.cargoCapacity = cargoCapacity;
        this.currentCargo = currentCargo;
    }

    public loadCargo(amount: number): void {
        this.currentCargo += amount;

        if (this.currentCargo > this.cargoCapacity) {
            this.currentCargo = this.cargoCapacity;
        }
    }

    public unloadCargo(amount: number): void {
        this.currentCargo -= amount;

        if (this.currentCargo < 0) {
            this.currentCargo = 0;
        }
    }

    public getCargoCapacity(): number {
        return this.cargoCapacity;
    }

    public getCurrentCargo(): number {
        return this.currentCargo;
    }
}