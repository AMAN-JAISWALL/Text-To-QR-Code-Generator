console.log("QR code generator app");
let apiURL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example';
let qrImgDiv= document.getElementById("qrImgDiv");
let qrImg = document.getElementById("qrImg"); 
let inputBox = document.getElementById("inputBox");


  async function generateQR(){
    if(inputBox.value.length > 0){
        qrImg.src= 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ inputBox.value;
        qrImgDiv.classList.add('show-img');
    }else{
        inputBox.classList.add("error");
       
        setTimeout(()=>{
            inputBox.classList.remove("error")
            // inputBox.value = "Please enter text"
            // inputBox.style.color = "red";
        },1000)

    }
}