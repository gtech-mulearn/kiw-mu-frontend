baseURL="https://kiw-staging.herokuapp.com"

qid=""
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
    axios.post(`${baseURL}/new`,{
        "name":document.getElementById("name").value,
        "email":document.getElementById("email").value,
        "answer":document.getElementById("answer").value,
        "qid":qid
      }).then(res=>{
        console.log(res.data)
        document.getElementById("result").innerHTML=res.data.message        
    })
    .catch(err=>{
        console.log(err)
        document.getElementById("result").innerHTML=`<h4>Some Error Occured</h4>${err.response.data}`
    })
}

// function clearData(){
//     console.log("trigger")
//     document.getElementById("urlbox").value=""
//     document.getElementById("content").innerHTML=""
// }