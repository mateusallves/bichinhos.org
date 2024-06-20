
class users{
    private _nome : string 
    private _id : number
    private _email : string 

    public get nome() : string{
        return this._nome
    }
    public get id(): number{
        return this._id
    }
    public get email(): string{
        return this._email
    }

    public set id( theId:number){
        if (theId == 0){
            throw new Error()
        }
    }
}