//step-1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2:get the deposit amount from the deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3 get the current deposit total 
    const depositTotalElement = document.getElementById('deposite-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Step:4 add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //Step-5:Get ballence current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previouseBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previouseBalanceTotalString);

    // step:6: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7 clear the field
    depositField.value = '';
})