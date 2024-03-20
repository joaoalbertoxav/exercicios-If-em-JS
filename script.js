 let num1 = 100
 let num2 = 80
 if (num2 === 80) {
    console.log("num2 é maior que o num1")
 }
 else{
    console.log("num1 é maior que o num2")
}


let idade = 2024 - 2000
if (idade >= 16) {
   console.log("pode votar")
}
else
{ 
 console.log("não pode votar")
 }


 let senha = 1111
 if (senha === 1234) {
    console.log("Acesso Permitido")
}
 else{
 console.log("Acesso Negado")
 }


// // // // let quantidade = 40
// // // // let valorvarejo = 0.30
// // // // let valoratacado = 0.25 
// // // // let compravarejo = quantidade * valorvarejo
// // // // let compraatacado = quantidade * valoratacado

// // // // if (quantidade >= 12) {
// // // //     console.log(` valor da compra em atacado fica ${compraatacado} reais, valor da compraem varejo fica ${compravarejo} reais´`)
// // // // }
// // // // else {
// // // //     console.log("não atendeu o requisito para ganhar o desconto")
// // // // }



// // // // let num1 = 10; 
// // // // let num2 = 20; 
// // // // let num3 = 30; 
// // // // if (num1 > num2 && num3) {
// // // //     console.log("Ok")
// // // // }
// // // // else if (num1 > num2 && num2 >num3){
// // // //     console.log("Ok2")
// // // // }
// // // // else if (num3 > num1 && num3 > num2) {
// // // //     console.log("Ok3")
// // // // }



// // // let altura = 1.86 
// // // let sexo = "masculino"

// // // if (sexo === "masculino") {
// // //     let pesoideal = (72.7*altura) - 58;
// // //     console.log(pesoideal);
// // // }
// // let alturaF = 1.65
// // let sexoF = "feminino"
// // if (sexoF === "feminino"){
// //     let pesoIdeal = (62.1*alturaF) - 44.7;
// //     console.log(pesoIdeal);
// // }

2)Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule
  a sua média. A atribuição de conceitos obedece à tabela abaixo:

    Média de Aproveitamento  Conceito
      Entre 9.0 e 10.0                      A
      Entre 7.5 e 9.0                       B
      Entre 6.0 e 7.5                       C
      Entre 4.0 e 6.0                       D
      Entre 4.0 e zero                      E
    O algoritmo deve mostrar numa janela de alertas notas, a média, o conceito correspondente e a mensagem “APROVADO” se 
      o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

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



//Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//  salários até R$ 280,00 (incluindo) : aumento de 20%
//salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//o salário antes do reajuste;
//o percentual de aumento aplicado;
//o valor do aumento;
//o novo salário, após o aumento.

     let salario = 200;
let porcentagem1 = salario * 0.2
let porcentagem2 = salario * 0.15
let porcentagem3 = salario * 0.10
let porcentagem4 = salario * 0.05

if (salario <= 280) {
    console.log(`salario antes do reajuste:${salario}`)
    console.log(`valor do aumento: ${porcentagem1} reais`)
    console.log(`percentual do aumento aplicado: 20%`)
    console.log(`novo salario: ${salario + porcentagem1}`)
    
}

else if(salario>= 280 && salario<=700) {
    console.log(`salario antes do reajuste:${salario}`)
    console.log(`valor do aumento: ${porcentagem2} reais`)
    console.log(`percentual do aumento aplicado: 15%`)
    console.log(`novo salario: ${salario + porcentagem2}`)
    
}

else if(salario>= 700 && salario<=1500) {
    console.log(`salario antes do reajuste:${salario}`)
    console.log(`valor do aumento: ${porcentagem3} reais`)
    console.log(`percentual do aumento aplicado: 10%`)
    console.log(`novo salario: ${salario + porcentagem3}`)
    
}
else if(salario>1500) {
    console.log(`salario antes do reajuste:${salario}`)
    console.log(`valor do aumento: ${porcentagem4} reais`)
    console.log(`percentual do aumento aplicado: 5%`)
    console.log(`novo salario: ${salario + porcentagem4}`)
    
}
