let body=document.querySelector("body");
let num1=document.querySelector("#box1");
let num2=document.querySelector("#box2");

let sumbtn=document.querySelector("#add");
let subbtn=document.querySelector("#sub");
let divbtn=document.querySelector("#div");
let mulbtn=document.querySelector("#mul");

let reset=document.querySelector("#resetbtn");

reset.addEventListener("click",function(){
    num1.value="";
    num2.value="";
    result.innerText="";
});


let result=document.querySelector("#result");
setTimeout(()=>{
  result;
},5000)

sumbtn.addEventListener("click",function(){
  let n1=Number(num1.value);
  let n2=Number(num2.value);
  res=n1+n2;
  return res;
});

subbtn.addEventListener("click",function(){
  let n1=Number(num1.value);
  let n2=Number(num2.value);
  res=n1-n2;
  return result.innerText=res;
});


mulbtn.addEventListener("click",function(){
  let n1=Number(num1.value);
  let n2=Number(num2.value);
  res=n1*n2;
  return result.innerText=res;
});

divbtn.addEventListener("click",function(){
    let n1=Number(num1.value);
  let n2=Number(num2.value);
  if(n2==0){
    alert("can't be divide with 0");
    result.innerText="";
    num1.value="";
    num2.value="";
  }
  else{
    res=n1/n2;
  }
  return result.innerText=res;
});
