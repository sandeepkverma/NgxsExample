import { State, Selector, Action, StateContext, NgxsOnInit } from '@ngxs/store';
import { AddHero, GetHeros } from './hero.action';
import { Hero } from './hero.model';

export class HeroStateModel{
    herolist:Hero[]
}

@State<HeroStateModel>({
    name: 'herolist',
    defaults: {herolist:[]},
})

export class HeroState implements NgxsOnInit {

    @Selector()
    static herolist(state: HeroStateModel) {
        if (state.herolist.length > 0) {
            return state.herolist
        }
        alert('go for http');
    }

    @Action(AddHero)
    AddHero({getState,patchState}: StateContext<HeroStateModel>, {hero}: AddHero) {
        // const state = ctx.getState();
        // ctx.setState({
        //     ...state,
        //     herolist:[...state.herolist,action.hero]
        // });
        patchState({herolist:[...getState().herolist,hero]});        
    }

    @Action(GetHeros)
    GetHeros({patchState}:StateContext<HeroStateModel>){
        alert('http call');
        patchState({
            herolist:[{name:'a',age:"23"},{name:'b',age:"24"},{name:'c',age:"25"}]
        })
    }

    ngxsOnInit(ctx:StateContext<HeroStateModel>){
        ctx.dispatch(new GetHeros());
    }


}