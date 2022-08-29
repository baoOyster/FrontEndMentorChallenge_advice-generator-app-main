async function getData(url){
    try{
        const response = await fetch(url, { cache: 'no-cache' });
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const adviceNumber = document.getElementById('advice_number');
            const advice = document.getElementById('advice');
            adviceNumber.innerHTML = jsonResponse.slip.id;
            advice.innerHTML = jsonResponse.slip.advice;

        }
    }catch(e){
        console.log(e);
    }
}



function init(){
    const url = "https://api.adviceslip.com/advice";
    const changeAdvice = document.getElementById("changeAdvice");
    getData(url);
    changeAdvice.addEventListener("click", function(){
        getData(url);
    });
    


}

window.onload = init;