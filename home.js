let Doughnut = document.getElementById('Doughnut').value * 3
let Coffee = document.getElementById('Coffee').value * 5
let Breakfast = document.getElementById('Breakfast').value * 15
document.getElementById('button').addEventListener('click', function(){
    console.log(document.getElementById("Coffee").value)
    document.getElementById("total").value = Doughnut + Coffee + Breakfast
})