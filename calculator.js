let results = [];

function addCalculation() {
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Invalid input!";
    } else {
        switch (operator) {
            case "+":
                result = x + y;
                results.push(result);
                break;
            case "-":
                result = x - y;
                results.push(result);
                break;
            case "*":
                result = x * y;
                results.push(result);
                break;
            case "/":
                result = y !== 0 ? x / y : "Cannot divide by zero";
                if (y !== 0) results.push(result);
                break;
            case "%":
                result = y !== 0 ? x % y : "Cannot divide by zero";
                if (y !== 0) results.push(result);
                break;
            default:
                result = "Invalid operator!";
        }
    }

    updateTable(x, operator, y, result);
    if (results.length > 0) {
        displaySummary();
    }
}

function updateTable(x, operator, y, result) {
    let resultContainer = document.getElementById("result");
    let table = resultContainer.querySelector("table") || document.createElement("table");
    
    if (table.rows.length === 0) {
        let headerRow = table.insertRow();
        headerRow.innerHTML = "<th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th>";
    }

    let newRow = table.insertRow();
    newRow.innerHTML = `<td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td>`;

    resultContainer.appendChild(table);
}

// Function to display the summary table
function displaySummary() {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    let summaryHTML = "<h2>Summary</h2>";
    summaryHTML += "<table class='summary'>";
    summaryHTML += "<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>";
    summaryHTML += "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>";
    summaryHTML += "</table>";

    // Find or create the summary section
    let resultContainer = document.getElementById("result");
    let existingSummary = document.querySelector('.summary');
    
    if (existingSummary) {
        existingSummary.parentNode.removeChild(existingSummary); // Remove existing summary
    }
    
    resultContainer.innerHTML += summaryHTML;
}

window.onload = function() {
    console.log("Window loaded, ready to calculate!");
};

