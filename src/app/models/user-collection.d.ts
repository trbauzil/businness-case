import { UserJsonld } from "./user-jsonld";

export interface UserCollection {
    'hydra:member': Array<UserJsonld>;
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