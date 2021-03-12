export default interface IChance {
    id: number | undefined;
    service: string;
    link: string;
    logo: string;
    amount: number;
    chance: string;
    title: string,
}

export interface ISelectionPage {
    id: number | undefined;
    title: string;
}
