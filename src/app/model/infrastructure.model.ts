export class Infrastructure{
    public name :string
    public address :string
    public roomName : number
    public seatAmount :number

    constructor(name:string,address:string,roomName:number,seatAmount:number){
        this.name = name
        this.address =address
        this.roomName = roomName
        this.seatAmount = seatAmount

    }
}