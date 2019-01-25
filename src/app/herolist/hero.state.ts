import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddHero } from './hero.action';

@State<any[]>({
    name: 'herolist',
    defaults: [{ name: "a", age: "27" }, { name: "b", age: "27" }, { name: "c", age: "29" }]
})

export class HeroState {

    @Selector()
    static herolist(state: any[]) {
        if (state.length > 1) {
            return state
        }
        alert('go for http');
    }

    @Action(AddHero)
    AddHero(ctx: StateContext<string>, action: any) {
        const state = ctx.getState();
        debugger
        ctx.setState({
            ...state,
            defaults:[
                ...state,
                action.name
            ]
            
        });
    }


}