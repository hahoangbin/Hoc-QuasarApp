import { Referral } from "./Referral";

export class RegisterUserResponse {
    public id: string="";
    public createdAt: Date=new Date();
    public updatedAt: Date=new Date();
    public firstName: string="";
    public lastName: string="";
    public userName: string="";
    public role: string="";
    public email: string="";
    public avatar: string="";
    public phone: string="";
    public level: string="";
    public diamond: string="";
    public follewer: string="";
    public bio: string="";
    public walletAddress: string="";
    public referral: Referral = new Referral();
    public shop: string="";
    public task: string="";
    public isActive: string="";
} 
