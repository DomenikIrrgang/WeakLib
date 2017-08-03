import { Injectable } from '@angular/core';

import { Weakaura } from '../util/weakaura';
import { WEAKAURAS } from '../mockdata/weakauras';

@Injectable()
export class WeakauraService {
    getWeakauras(): Promise<Weakaura[]> {
        return Promise.resolve(WEAKAURAS);
    }

    getWeakaurasWithLatency(): Promise<Weakaura[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getWeakauras()), 2000);
        });
    }
}