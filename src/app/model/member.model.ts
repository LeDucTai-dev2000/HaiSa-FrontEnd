export class Member{
    public memberId:number
    public membername:string
    public email:string
    public password:string
    public phone:string
    public address:string
    public birthday:Date
    public idCard:number
    public totalMoney:number

    constructor(memberId:number, membername:string, email:string, password:string, phone:string,address:string,birthday:Date,idCard:number,totalMoney:number){
        this.memberId=memberId
        this.membername=membername
        this.email=email
        this.password=password
        this.phone=phone
        this.address=address
        this.birthday=birthday
        this.idCard=idCard
        this.totalMoney=totalMoney
    }
}