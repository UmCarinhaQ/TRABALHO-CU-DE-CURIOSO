import { Spacecraft } from "./Spacecraft";
import { CombatCapable } from "../CombatCapable";

class Fighter extends Spacecraft implements CombatCapable {
    private weaponPower: number;

    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number,
        weaponPower: number
    ) {
        super(id, name, fuel, health);

        this.weaponPower = weaponPower;
    }

    public getWeaponPower(): number {
        return this.weaponPower;
    }

    public attack(target: Spacecraft): number {

        if (this.isOperational()) {
    
            target.takeDamage(this.weaponPower);
    
            return this.weaponPower;
    
        } else {
            return 0;
        }
    }

}