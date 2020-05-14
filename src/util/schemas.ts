/**
 * 
 */
export interface UserSchema {
    ers_user_id: number,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string
}

/**
 * 
 */
export interface ReimbursementSchema {
    id: number;
    amount: number;
    submitted: Date;
    resolved: Date;
    description: string;
    receipt: number;
    author: string;
    resolver: string;
    reimb_status_id: number;
    reimb_type_id: number;
}