import { CargoCarrier } from "../CargoCarrier";
import { CombatCapable } from "../CombatCapable";
import { Exploratory } from "../Exploratory";
import { Spacecraft } from "./Spacecraft";

export class MultiPurposeShip extends Spacecraft
    implements CombatCapable, CargoCarrier, Exploratory {

    private currentCargo: number = 0;
    private cargoCapacity: number = 100;

    loadCargo(amount: number): void {
        if (this.currentCargo + amount <= this.cargoCapacity) {
            this.currentCargo += amount;
        }
    }

    unloadCargo(amount: number): void {
        if (amount <= this.currentCargo) {
            this.currentCargo -= amount;
        }
    }

    getCargoCapacity(): number {
        return this.cargoCapacity;
    }

    getCurrentCargo(): number {
        return this.currentCargo;
    }

    attack(target: Spacecraft): number {
        return 10;
    }

    explore(location: string): string {
        return `Explorando ${location}`;
    }

    collectData(): string {
        return "Dados coletados com sucesso!";
    }
}