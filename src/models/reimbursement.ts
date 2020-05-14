export class Reimbursement {
    reimId: number;
    amount: number;
    submitted: Date;
    resolved: Date;
    description: string;
    receipt: Blob;
    authorId: number;
    resolverId: number;
    status: string;
    reimType: string;

    constructor(id:number,am: number,sub: Date, res: Date, des: string, rec: Blob, aid: number, rid: number, st: string, ret: string){
        this.reimId = id;
        this.amount = am;
        this.submitted = sub;
        this.resolved = res;
        this.description = des;
        this.receipt = rec;
        this.authorId = aid;
        this.resolverId = rid;
        this.status = st;
        this.reimType = ret;
    }
}