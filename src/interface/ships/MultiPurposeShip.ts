import { CargoCarrier } from "../CargoCarrier";
import { CombatCapable } from "../CombatCapable";
import { Spacecraft } from "./Spacecraft";

class MultiPurposeShip extends Spacecraft implements CombatCapable, CargoCarrier, Exploratory{
    loadCargo(amount: number): void {
        throw new Error("Method not implemented.");
    }
    unloadCargo(amount: number): void {
        throw new Error("Method not implemented.");
    }
    getCargoCapacity(): number {
        throw new Error("Method not implemented.");
    }
    getCurrentCargo(): number {
        throw new Error("Method not implemented.");
    }
    attack(target: Spacecraft): number {
        throw new Error("Method not implemented.");
    }
    explore(location: string): string {
        throw new Error("Method not implemented.");
    }
    collectData(): string {
        throw new Error("Method not implemented.");
    }
        
    }