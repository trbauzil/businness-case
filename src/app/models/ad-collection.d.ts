import { AdJsonld } from "./ad-jsonld";

export interface AdCollection {
    'hydra:member': Array<AdJsonld>;
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