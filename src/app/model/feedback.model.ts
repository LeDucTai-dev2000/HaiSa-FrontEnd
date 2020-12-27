export class Feedback{
    public responseId : number;
    public email : string;
    public phone : string;
    public content: string;

    constructor(responseId :number,email:string,phone: string, content: string){
        this.responseId = responseId;
        this.email = email;
        this.phone = phone;
        this.content = content;

    }

}