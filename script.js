

let expenses=JSON.parse(localStorage.getItem("expenses")) || [];

document.getElementById("add").addEventListener("click",()=>
{
    let item=document.getElementById("item").value;
    let category=document.getElementById("cate").value;
    let amount=document.getElementById("amm").value;
    if(item=="" || category=="" || amount=="")
    {
        alert("Please fill all fields!");
        return;
    }
    let expense=
    {
        item: item,
        category: category,
        amount: parseFloat(amount)
    };
    expenses.push(expense);
    localStorage.setItem("expenses",JSON.stringify(expenses));
    displayexp();

    document.getElementById("item").value="";
    document.getElementById("cate").value="";
    document.getElementById("amm").value="";
})

function displayexp()
{
    let table=document.getElementById("table");

    while(table.rows.length>1)
    {
        table.deleteRow(1);
    }
    let total=0;
    expenses.forEach(function(expense,index)
{
    let row= table.insertRow();

    row.innerHTML=`
    <td>${expense.item}</td>
    <td>${expense.category}</td>
    <td>$${expense.amount}</td>
    <td><button class="id" onclick="deleteExpense(${index})"><i class="fa-solid fa-trash" style="color:red"></i></button></td>`;
    total=total+expense.amount;
})
document.getElementById("total").textContent=`Total: $${total}`;
}
displayexp();
function deleteExpense(index)
{
    expenses.splice(index,1);
    localStorage.setItem("expenses",JSON.stringify(expenses));
    displayexp();
}