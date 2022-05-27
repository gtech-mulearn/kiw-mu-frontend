baseURL="https://kiw-api.mulearn.org"

greenTick="https://cdn.discordapp.com/attachments/931180902120312853/979791007463899166/green-tick.png"
greyTick="https://cdn.discordapp.com/attachments/931180902120312853/979791007761715200/grey-tick.png"

let stations=[
    {
        "id":"station1",
        "title":"The 1st station"
    },
    {
        "id":"station2",
        "title":"The 2nd station"
    }

]

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

        stations.forEach((station)=>{
            console.log(res.data[station.id])
            if(res.data[station.id]=="yes"){
                document.getElementById("refCard").innerHTML+=`<div class="col-md-4"> <div class="card mb-4 box-shadow"><div class="card-body">${station.title}<br><img src="${greenTick}" id="${station.id}" class="status"></div></div>`

            }
            else{
                document.getElementById("refCard").innerHTML+=`<div class="col-md-4"> <div class="card mb-4 box-shadow"><div class="card-body">${station.title}<br><img src="${greyTick}" id="${station.id}" class="status"></div></div>`
            }
            
        })
        
        
        

    }).catch(err=>{
        document.getElementById("initial").innerHTML="<h2>Some Error Occured. Please check your URL</h2>";
    })
}
else{
    document.getElementById("initial").innerHTML="<h2>Some Error Occured. Please check your URL</h2>";
}
