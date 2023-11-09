document.write("Find leap years between two years using setInterval() method"+"<br>");;
document.write("-----------------------------"+"<br>");
let k=prompt("Enter the starting year :");
let l=prompt("Enter End of year :");
document.write("The leap years are :"+"<br>");
if(k<l){
let x=setInterval(function()
{
    
    if((k%4==0) && (k%100!=0)){
        document.write(k+"<br>");
    }
    k++;
    if(k>=l)
    {
        clearInterval(x);
    }
    
},100);}
else if(k>l){
    let x=setInterval(function()
    {
        
        if((k%4==0) && (k%100!=0)){
            document.write(k+"<br>");
        }
        k--;
        if(l>=k)
        {
            clearInterval(x);
        }
        
    },100);
}
else{
    document.write("Both years are equal");
}