function calculaPrecoTotal(quantidade) {
let custoTotal;
if(quantidade < 12){
  custoTotal = quantidade * 1.30
} else {
  custoTotal = quantidade * 1
}
 return custoTotal
}
