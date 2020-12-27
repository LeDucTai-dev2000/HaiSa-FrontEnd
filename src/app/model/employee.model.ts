export class Employee{
     employeeId:number;
	 name:string;
	 password:string;
	 listRole:any;
	 email:string;
	 phone:string;
	 address:string;
	 birthday:Date;
	 idCard:string;
	 cinemaId:number;
	 status:number;

     constructor(   employeeId:number,  name:string, password:string,  listRole:any,  email:string,  phone:string, address:string, birthday:Date, idCard:string, cinemaId:number, status:number){
        this.employeeId=employeeId;
        this.name=name;
        this.password=password;
        this.listRole=listRole;
        this.email=email;
        this.phone=phone;
        this.address=address;
        this.birthday=birthday;
        this.idCard=idCard;
        this.cinemaId=cinemaId;
        this.status=status;
        }
}
