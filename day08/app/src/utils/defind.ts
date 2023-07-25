interface Login {
    mobile: string,
    password: string
}

interface List {
    user: string,
    antherName: string,
    cardNumber: string,
    status: boolean,
    balance: string,
    grade: string,
    userId: string,
    id: string
}

interface ListMoney {
    receiver:string,
    receiverNumber:string,
    receiverId:number
    payer:string,
    payerNumber:string,
    payerId:number,
    amount:string,
    remark:string
}

export {
    Login,
    List,
    ListMoney
}


