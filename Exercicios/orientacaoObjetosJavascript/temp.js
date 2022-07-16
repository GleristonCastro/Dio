// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos s e a função print para imprimir a saída (output) de s e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var s = gets().split(" ");

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let n = parseInt(s[0])
let Amin = parseInt(s[1])
let Amax = parseInt(s[2])
let altura, conta = 0;

for (let i = 1; i <= n; i++) {
  altura = parseInt(gets());
  
  if(altura >= Amin && altura <= Amax){
    conta++
  }
}
print(conta)