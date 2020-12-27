export class Room{
    public roomId:number;
    public roomName:number;
    public seatAmount:number;
    public cinemaId:number;

    constructor(roomId:number,roomName:number,seatAmount:number,cinemaId:number){
        this.roomId=roomId;
        this.roomName=roomName;
        this.seatAmount=seatAmount;
        this.cinemaId=cinemaId

    }
}
