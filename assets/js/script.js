function CalcLumpsum() {

    let amount = document.getElementById('lAmount').value;
    let percentage = document.getElementById('lPercentage').value;
    let months = document.getElementById('lMonths').value;
    let currency = document.getElementById('currency').value;


    let result = parseInt(amount) + (parseInt(amount) * (parseInt(percentage) / 100));

    //result = parseInt(amount) * (1 + (parseInt(percentage) / 100) * parseInt(months));

    document.getElementById('lResult').innerHTML = "Maturity Amount:  " + currency + " " + result;
}


function CalcSIP() {

    let amount = document.getElementById('samount').value;
    let percentage = document.getElementById('lPercentage').value;
    let months = document.getElementById('lMonths').value;
    let SIPcurrency = document.getElementById('SIPcurrency').value;
    let result = parseInt(amount) + (parseInt(amount) * (parseInt(9) / 100));
    document.getElementById('sResult').innerHTML = "Maturity Amount: " + SIPcurrency + " " + result;
}
