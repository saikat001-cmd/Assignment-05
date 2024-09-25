
document.getElementById('tab-history').style.backgroundColor='transparent';

document.getElementById('btn-donation').addEventListener('click',function(){
    document.getElementById('btn-donation').style.backgroundColor='transparent';
    document.getElementById('tab-history').style.backgroundColor='transparent';
    document.getElementById('btn-donation').style.backgroundColor="";

    historyBtn('button_main');
})


document.getElementById('tab-history').addEventListener('click',function(){
    document.getElementById('btn-donation').style.backgroundColor='transparent';
    document.getElementById('tab-history').style.backgroundColor='transparent';
    document.getElementById('tab-history').style.backgroundColor="";
    historyBtn('history_section');
})


// part-1
document.getElementById('btn-add-donate').addEventListener('click',function(){  
    const addMoney = getInputFieldValueById('input-add-money');
    const mainMain = getNumberFieldValueById('account-bdt');
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
const donateFood = document.getElementById('donate-food')

moneyNotification(addMoney, donateFood);
})

// part-2
document.getElementById('btn-add-donate-2').addEventListener('click',function(){  
    const addMoney = getInputFieldValueById('input-add-money-2');
    const mainMain = getNumberFieldValueById('account-bdt');
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
const donateFood2 = document.getElementById('donate-food-2')
moneyNotification(addMoney, donateFood2);

})
// part-3
document.getElementById('btn-add-donate-3').addEventListener('click',function(){  
    const addMoney = getInputFieldValueById('input-add-money-3');
    const mainMain = getNumberFieldValueById('account-bdt');
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
const donateFood3 = document.getElementById('donate-food-3')
moneyNotification(addMoney, donateFood3);

})
  



