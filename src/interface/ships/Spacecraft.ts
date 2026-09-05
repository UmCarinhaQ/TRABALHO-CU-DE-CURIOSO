export abstract class Spacecraft {
    private id: number;
    private name: string;
    private fuel: number;
    private health: number;

    constructor(id: number, name: string, fuel: number, health: number) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        this.health = health;
    }

    public getId(): number {
        return this.id;
    }

    public getFuel(): number {
        return this.fuel;
    }

    public getName(): string {
        return this.name;
    }

    public getHealth(): number {
        return this.health;
    }


    public refuel(value: number): void {
        this.fuel += value;

        if (this.fuel < 0) {
            this.fuel = 0;
        }

    }

    public takeDamage(value: number): void {
        this.health -= value;

        if (this.health < 0) {
            this.health = 0
        }
    }

    public repair(value: number): void {
        this.health += value;

        if (this.health > 100) {
            this.health = 100
        }
    }

    public showStatus(): void {
        console.log(`
        =========== STATUS ATUAL ===============
        Id: ${this.id},
        Name: ${this.name},
        Fuel: ${this.fuel},
        Health: ${this.health}.
        ==========================
        `)
    }
    isOperational(): boolean {
        if (this.health > 0 && this.fuel > 0) {
            return true
        } else {
            return false
        }
    }
}