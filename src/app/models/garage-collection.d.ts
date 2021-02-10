import { GarageJsonld } from "./garage-jsonld";

export interface GarageCollection {
    'hydra:member': Array<GarageJsonld>;
    'hydra:totalItems': number;
    'hydra:view': {
        '@id': string;
        '@type': string;
        'hydra:first': string;
        'hydra:last': string;
        'hydra:previous'?: string;
        'hydra:next'?: string;
    }
}


