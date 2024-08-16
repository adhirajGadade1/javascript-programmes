let sbiBank  = {
bankName : "SBI ank ",
location : "Sangli",
accountNo : 10990100004431,
ifsc : "Sangli Vakharbhag",
interestRate : "7.5",
details: function shwoDetails() {
    console.log(`bankName = ${this.bankName}, Location = ${this.location}, Account No. = ${this.accountNo}, IFSC Code = ${this.ifsc}, Intrest Rate : ${this.interestRate} `);  
}
}

let axisBank  = {
    bankName : "Axis Bank",
    location : "Miraj",
    accountNo : 9089900011900,
    ifsc : "Miraj",
    interestRate : "7.5",
    details: function shwoDetails() {
        console.log(`bankName = ${this.bankName}, Location = ${this.location}, Account No. = ${this.accountNo}, IFSC Code = ${this.ifsc}, Intrest Rate : ${this.interestRate} `);
    }    
}

let hdfcBank  = {
        bankName : "HDFC Bank",
        location : "Kupwad",
        accountNo : 8982324000725,
        ifsc : "Kupwad-Savali",
        interestRate : "7.5",
        details: function shwoDetails() {
    console.log(`bankName = ${this.bankName}, Location = ${this.location}, Account No. = ${this.accountNo}, IFSC Code = ${this.ifsc}, Intrest Rate : ${this.interestRate} `);
    
        }
        
}

let yesBank  = {
    bankName : "Yes Bank",
    location : "VishramBag",
    accountNo : 10190889900012,
    ifsc : "V.BAg Branch",
    interestRate : "7.5",
    details: function shwoDetails() {
        console.log(`bankName = ${this.bankName}, Location = ${this.location}, Account No. = ${this.accountNo}, IFSC Code = ${this.ifsc}, Intrest Rate : ${this.interestRate} `);
    }
    
}

sbiBank.details();
axisBank.details();
hdfcBank.details();
yesBank.details();

