interface State {
    pos: number,
    src: string
};

type ParserFn = (state:State) => [State, any];

export class Parser {
    parserFn: ParserFn;
    
    constructor(parserFn: ParserFn){
        this.parserFn = parserFn;
    }

    parse(state: State):[State, any]  {
        return this.parserFn(state);
    }
}