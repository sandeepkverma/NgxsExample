export class AddHero{
    static readonly type = '[Hero] add hero';
    constructor(public name:string){}
}


export class RemoveHero{
    static readonly type = "[Hero] remove hero";
}