class rankeamento{
    private _id: number 
    private _numeroPontos: number 
    private _nomeUsuario: string

    public get id(): number{
        return this._id
    }

    public get numeroPontos(): number {
        return this._numeroPontos
    }

    public get nomeUsuario(): string{
        return this._nomeUsuario
    }

    public set id( theId:number){
        if (theId == 0) {
            throw new Error()
        }
    }
}