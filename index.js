let baseURL="https://kiw-api.mulearn.org"

let qid=""
axios.get(`${baseURL}/question`).then(res=>{
    console.log(res.data)
    document.getElementById("q-title").innerHTML=res.data.title;
    document.getElementById("q-desc").innerHTML=res.data.desc 
    document.getElementById("q-img").setAttribute("src",res.data.image)
    qid=res.data.id
})


function submit(){
    document.getElementById("result").innerHTML=""
    // let url=document.getElementById("urlbox").value
    // "shirt_size":document.getElementById("tshirt-size").value,
    axios.post(`${baseURL}/new`,{
        "name":document.getElementById("name").value,
        "email":document.getElementById("email").value,
        "answer":document.getElementById("answer").value.toLowerCase().trim(),
        "qid":qid,
        "shirt_size":"-",
        "int-intern":document.getElementById("int-intern").checked,
        "int-job":document.getElementById("int-job").checked,
        "int-entrep":document.getElementById("int-entrep").checked,
        "int-network":document.getElementById("int-network").checked,
        "int-skill":document.getElementById("int-skill").checked,
        
      }).then(res=>{
        console.log(res.data)
        document.getElementById("result").innerHTML=res.data.message
        alert(`${res.data.message}`)
        
        if(res.data["id"]!=undefined){
            window.location=`user?id=${res.data.id}`
        }
        
    })
    .catch(err=>{
        console.log(err)
        document.getElementById("result").innerHTML=`<h4>Some Error Occured</h4>${err.response.data.message}`
        alert(`Error: ${err.response.data.message}`)
    })
}
