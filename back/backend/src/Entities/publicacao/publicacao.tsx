class publicacao{
    private _id: number
    private _titulo: string 
    private _descricao: string 
    private _conteudo: string
    private _tags: string

    public get id() : number{
        return this._id
    }

    public get titulo() : string{
        return this.titulo
    }

    public get descricao() : string{
        return this._descricao    
    }

    public get conteudo() : string{
        return this._conteudo
    }

    public get tags() : string{
        return this._tags
    }
    
    public set id( theId: number){
        if (theId == 0) {
            throw new Error()
        }
    }
}