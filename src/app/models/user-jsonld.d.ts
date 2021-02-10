export interface UserJsonld {
    '@context': string;
    '@id': string;
    '@type': string;
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    phone?: string;
    siret?: string;
    garages: Array<string>;
}