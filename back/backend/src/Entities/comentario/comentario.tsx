class comentario{
    private _id: number  
    private _comentario: string  
    private _usuarioComentario: string  

    public get id(): number{
        return this._id
    }

    public get comentario():string {
        return this._comentario
    }

    public get usuarioComentario(): string{
        return this._usuarioComentario
    }

    public set id( theId: number){
        if (theId == 0) {
            throw new Error()
        }
    }
}