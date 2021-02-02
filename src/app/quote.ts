export class Quote {
    public showDetails: boolean;
    constructor(public id: number, public name: string, public quote: string, public author: string, public downVotes: number, public upVotes: number, public daysPassed: Date){
        this.showDetails = true;
   }
}
