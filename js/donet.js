// function Button (id){
//     document.getElementById('main').classList.add('hidden');
//     document.getElementById('history').classList.add('hidden');
//     document.getElementById('id').classList.remove('hidden');

// }

// document.getElementById("dd").style.backgroundColor = "transparent";
// function bgColor(id){
//     document.getElementById("cc").style.backgroundColor = "transparent";
//     document.getElementById("dd").style.backgroundColor = "transparent";
//     document.getElementById(id).style.backgroundColor='';
// }

// document.getElementById('btn-donation').addEventListener('click',function(){
//     Button('main');
//     bgColor('cc');
// })
// document.getElementById('btn-donation').addEventListener('click',function(){
//     Button('tab-history');
//     bgColor('dd');
// })


// const historyTab = document.getElementById('tab-history');
// const btnDonation = document.getElementById('btn-donation');
// historyTab.addEventListener("click", function (){
//     historyTab.classList.add("bg-background");
//     btnDonation.classList.remove("bg-background");  
// });
//     btnDonation.addEventListener("click", function (){
//     btnDonation.classList.remove("bg-background");  
// });



// part-1
document.getElementById('btn-add-donate').addEventListener('click',function(){  
    const addMoney = getInputFieldValueById('input-add-money');
    const mainMain = getNumberFieldValueById('account-bdt');
    console.log(addMoney);
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
    if(mainMain < addMoney){
        alert('Failed to');
        return;
    }
const accountBalance=getTextFieldValueById('account-balance');
const newBalance=accountBalance+addMoney;
document.getElementById('account-balance').innerText=newBalance;
const balance=mainMain-addMoney;
document.getElementById('account-bdt').innerText=balance;
history();
})

// part-2
document.getElementById('btn-add-donate-2').addEventListener('click',function(){  
    const addMoney = getInputFieldValueById('input-add-money-2');
    const mainMain = getNumberFieldValueById('account-bdt');
    console.log(addMoney);
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
    if(mainMain < addMoney){
        alert('Failed to');
        return;
    }
const accountBalance=getTextFieldValueById('account-balance-2');
const newBalance=accountBalance+addMoney;
document.getElementById('account-balance-2').innerText=newBalance;
const balance=mainMain-addMoney;
document.getElementById('account-bdt').innerText=balance;
history();
})
// part-3
document.getElementById('btn-add-donate-3').addEventListener('click',function(){  
    const addMoney = getInputFieldValueById('input-add-money-3');
    const mainMain = getNumberFieldValueById('account-bdt');
    console.log(addMoney);
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
    if(mainMain < addMoney){
        alert('Failed to');
        return;
    }
const accountBalance=getTextFieldValueById('account-balance-3');
const newBalance=accountBalance+addMoney;
document.getElementById('account-balance-3').innerText=newBalance;
const balance=mainMain-addMoney;
document.getElementById('account-bdt').innerText=balance;
history();
})
  



