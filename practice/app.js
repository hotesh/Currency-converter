const URL="https://cat—fact.herokuapp.com/facts" ;

const parafact=document.querySelector("facts");
const button=document.querySelector("btn");


//const getFacts=async ()=>{
 // console.log("getting data ......");
 // let response=await fetch(URL);
 // console.log(response.status);

  //let data= await response.json();
 // console.log(data);
 // parafact.innerHTML=data[3].text;
//};

// below is using promise chain
function getFacts(){
  fetch(URL).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data);
    parafact.innerHTML=data[2].text;
  });
  
}

button.addEventListener("click", getFacts);