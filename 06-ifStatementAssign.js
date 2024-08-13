function voteEligible(age) {
    if(age==0 || age<0 || age>130 || age==null){
        console.log(`Invaild Data. Age: ${age}`);
    }else{
        console.log(`valid data: ${age}`);
        if (age>=18) {
            console.log(`Age is eligible for vote.`); 
        }else{
            console.log(`Age is not eligible for vote.`);
         }
        }
        
}
var age = voteEligible(45);

var age = voteEligible(17);

var age = voteEligible(20);

var age = voteEligible(0);

var age = voteEligible(-10);

var age = voteEligible(200);

var age = voteEligible(null);