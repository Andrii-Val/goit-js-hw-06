const formEl = document.querySelector(".login-form");



formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    
    const{elements:{email, password}}=event.currentTarget;
    if(email.value ==="" || password.value ===""){
    alert("Заповніть будь-ласка пусті поля!")
    } else{
       const formData={
            login:email.value,
            password:password.value,
        };
        console.log(formData);
    }

event.currentTarget.reset();
}
