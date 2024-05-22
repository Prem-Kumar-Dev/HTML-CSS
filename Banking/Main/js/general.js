function deposit() {
    var depositAmount = parseInt(document.getElementById("depositAmount").value);
    var currentBalance = parseInt(document.getElementById("currentBalance").textContent.slice(1));
    var totalDeposit = parseInt(document.getElementById("totalDeposit").textContent.slice(1));

    currentBalance += depositAmount;
    totalDeposit += depositAmount;

    document.getElementById("currentBalance").textContent = "$" + currentBalance.toFixed(2);
    document.getElementById("totalDeposit").textContent = "$" + totalDeposit.toFixed(2);
    document.getElementById("totalBalance").textContent = "$" + currentBalance.toFixed(2);
}

function withdraw() {
    var withdrawAmount = parseInt(document.getElementById("withdrawAmount").value);
    var currentBalance = parseInt(document.getElementById("currentBalance").textContent.slice(1));
    var totalWithdraw = parseInt(document.getElementById("totalWithdraw").textContent.slice(1));

    if (currentBalance >= withdrawAmount) {
        currentBalance -= withdrawAmount;
        totalWithdraw += withdrawAmount;

        document.getElementById("currentBalance").textContent = "$" + currentBalance.toFixed(2);
        document.getElementById("totalWithdraw").textContent = "$" + totalWithdraw.toFixed(2);
        document.getElementById("totalBalance").textContent = "$" + currentBalance.toFixed(2);
    } else {
        alert("Insufficient balance.");
    }
}