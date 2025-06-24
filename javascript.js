
function prac() {
    alert("submited");
    console.log("clicked");
}
       document.getElementById("cl").addEventListener("click",function(event){
        event.preventDefault();
        document.getElementById("para1").textContent="your resbonse submitted";
    }) 