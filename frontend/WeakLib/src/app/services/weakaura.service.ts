import { Injectable } from '@angular/core';

import { Weakaura } from '../util/weakaura';
import { WEAKAURAS } from '../mockdata/weakauras';
import { List } from "../util/list";

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

    getWeakauraWithHash(hash: String) {
        for (let weakaura of WEAKAURAS) {
            if (weakaura.hash == hash) {
                return weakaura;
            }
        }
        return null;
    }

    getWeakaurasFromUser(username: String): Weakaura[] {
        var tmp: Weakaura[] = [];
        for (let weakaura of WEAKAURAS) {
            if (weakaura.author == username) {
                tmp.push(weakaura);
            }
        }
        return tmp;
    }
}