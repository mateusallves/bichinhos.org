class perfilUsuario{
    private _id: number
    private _usuario: string 
    private _numeroCurtidas:number 
    private _numeroComentarios: number
    
    public get id(): number{
        return this._id
    }

    public get usuario(): string{
        return this._usuario
    }

    public get numeroCurtidas(): number{
        return this._numeroCurtidas
    }

    public get numeroComentarios():number {
        return this._numeroComentarios
    }

    public set id(theId : number){ 
        if (theId == 0) {
            throw new Error()
        }
    }
}