import { Hero } from "./hero.model";

export class AddHero{
    static readonly type = '[Hero] add hero';
    constructor(public hero:Hero){}
}


export class RemoveHero{
    static readonly type = "[Hero] remove hero";
}


export class GetHeros{
    static readonly type = "[Hero] get hero list";
}