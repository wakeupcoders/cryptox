function CalcLumpsum() {

    let amount = document.getElementById('lAmount').value;
    let percentage = document.getElementById('lPercentage').value;
    let months = document.getElementById('lMonths').value;
    console.log(amount)
    console.log(percentage)

    let result = parseInt(amount) * (parseInt(percentage) / 100);

    //result = parseInt(amount) * (1 + (parseInt(percentage) / 100) * parseInt(months));

    document.getElementById('lResult').innerHTML = "Maturity Amount: $ " + result;
}


function CalcSIP() {

    let amount = document.getElementById('samount').value;
    let percentage = document.getElementById('lPercentage').value;
    let months = document.getElementById('lMonths').value;


    let result = parseInt(amount) * (parseInt(11) / 100);


    document.getElementById('sResult').innerHTML = "Maturity Amount: $ " + result;
}