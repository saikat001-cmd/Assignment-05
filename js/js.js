
// function showSectionById(id){
//     document.getElementById('section').classList.add('hidden');
//     document.getElementById('tab-history').classList.add('hidden');
//     document.getElementById(id).classList.remove('hidden');
// }


// card-function
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValue2=parseFloat(inputValue);
    return inputValue2;
}
function getTextFieldValueById(id){
    const inputValue3 = document.getElementById(id).innerText;
    const inputValue4=parseFloat(inputValue3);
    return inputValue4;
}
function getNumberFieldValueById(id){
    const inputValue5= document.getElementById(id).innerText;
    const inputValue6=parseFloat(inputValue5);
    return inputValue6;
}


function historyBtn(id){
        
        document.getElementById('button_main').classList.add('hidden');
        document.getElementById('history_section').classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
       
}
function moneyNotification(Tk, NAME){
    const div= document.createElement('div');

    div.style.padding='20px'
    div.style.margin='20px'
    div.style.border="2px solid black"
    div.style.borderRadius='10px'
    const date=new Date();
    div.innerHTML=`
    <h1> ${Tk} Taka is ${NAME} </h1>
    <br>
    <p>Date:${date}</P>
    `
    
          
  document.getElementById('history_section').appendChild(div);
  
  }

