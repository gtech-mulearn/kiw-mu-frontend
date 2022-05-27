baseURL="https://kiw-staging.herokuapp.com/"

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
id=urlParams.get('id')
if(id){
    
    console.log(id)

    axios.get(`${baseURL}/status`,{
        headers:{
            "Authorization":id
        }
    }).then(res=>{
        console.log(res.data)
        document.getElementById("name").innerText=res.data.name  
        document.getElementById("code").innerText=res.data.code
        // document.getElementById("result").innerHTML=res.data.message        
    }).catch(err=>{
        document.getElementById("initial").innerHTML="<h2>Some Error Occured. Please check your URL</h2>";
    })
}
else{
    document.getElementById("initial").innerHTML="<h2>Some Error Occured. Please check your URL</h2>";
}
