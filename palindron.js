let s="shailja";
let b="";
for(let i=s.length-1;i>=0;i--){
    b += s[i];
    
}
if(b==s){
    console.log("yes");
}else{
    console.log("no");
}


// chech in for prime number
let x = 13;
let fac=0;
for(let i=1;i<=x;i++){
    if(x%i==0){
        fac++
    }
}
if(fac==2){
    console.log(x,"is prime");

}else{
    console.log(x,"is not a prime");
}