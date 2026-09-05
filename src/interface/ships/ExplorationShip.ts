import { Spacecraft } from "./Spacecraft";


export class ExplorationShip extends Spacecraft implements Exploratory {
    public explore(location: string): string {
        this.refuel(-10); 
        return `A nave esta iniciando a exploraçao em ${location}`

    }
    public collectData(): string {
        return "Dados científicos foram coletados";
    }
}   