const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

soma = idade + contribuicao

const homemPodeAposentar = sexo == 'M' &&contribuicao >= 35 && soma >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && soma >=85

if(homemPodeAposentar || mulherPodeAposentar){
    console.log("Silvana, você pode se aposentar")

}else{
    console.log("Silvana você ainda não pode se aposentar!")
}