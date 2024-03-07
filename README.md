
let num1 = Number(prompt("digite sua nota 1:"))
let num2 = Number(prompt("digite sua nota 2:"))
let media = (num1 + num2)/2;

if (media<10 && media >=9) {
    alert (`A nota final foi ${media} e o aluno foi Aprovado por conceito A´`)
}
else if (media < 9 && media >= 7.5){
    alert(`A nota final foi ${media} e o aluno foi Aprovado por conceito B´`)
}
else if (media < 7.5 && media >= 6){
    alert(`A nota final foi ${media} e o aluno foi Aprovado por conceito C´`)
}
else if (media < 6 && media >= 4){
    alert(`A nota final foi ${media} e o aluno foi Reprovado por conceito D´`)
}
else if(media < 4 && media >= 0){
    alert(`A nota final foi ${media} e o aluno foi Reprovado por conceito E´`)
}
