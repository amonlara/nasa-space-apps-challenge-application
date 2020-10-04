import { Point } from './point'
import { Statistical } from './statistical';
import { ArgumentOutOfRangeError } from 'rxjs';
import { Agent } from './agent';

export class Acting {

    id: number;
    name: string;
    address: Point;

    lat: string;
    lng: string;

    agent: Agent;

    statistical: Statistical;
}