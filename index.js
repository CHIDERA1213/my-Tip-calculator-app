const Button = document.querySelector('.btn')
const calculateTipBtn = document.querySelector('#calculateTip')
const Amount = document.querySelector('#Amount')
const PT = document.querySelector('#PT') 
const NOP = document.querySelector('#NOP')
const Tip = document.querySelector('.tipamount')
const TP = document.querySelector('.totalamount')
const Err = document.querySelector('.error')

calculateTipBtn.addEventListener('click', function(){
    if(Amount.value === "" || PT.value === "" || NOP.value === ""){
        Err.innerHTML = '<em class="errMsg">Please validate all fields</em>'
    }else{
        let BillAmount = Number(Amount.value);
        let Percent = Number(PT.value);
        let Persons = Number(NOP.value)
    
        let tipPercent = Percent/100;
        let tipAmt = tipPercent*BillAmount
        let tipperPerson = tipAmt/Persons
    
        let amtperPerson = BillAmount/Persons
        let TotalamtperPerson = tipperPerson + amtperPerson
        console.log(TotalamtperPerson)
        console.log(tipperPerson)
    
        Tip.textContent = `$${tipperPerson}`
        TP.textContent = `$${TotalamtperPerson}`
    }

    setTimeout(() =>{
        Err.innerHTML =""
    },2000)
    
})


