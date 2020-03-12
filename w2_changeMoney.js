let from;
let to;
function fromMoney(obj) {
    from  = obj.value;
    return from;
}
function toMoney(obj) {
    to = obj.value;
}
function Calculator(a, b) {
    let input = document.getElementById('mount').value;
    let result;
    if(a === '1' && b === '3' )
        result = Number(input)*(1/23000);
    else if(a === '1' && b ==='2')
        result = Number(input)*(1/20000);
    else if(a === '2' && b === '1')
        result = Number(input)*20000;
    else if(a === '2' && b === '3')
        result = Number(input)*(20/23);
    else if(a ==='3' && b === '1')
        result = Number(input)*23000;
    else
        result = Number(input)*(23/22);
    document.getElementById('result').innerHTML = result;
}
function ChangeMoney() {
    Calculator(from, to);
}
