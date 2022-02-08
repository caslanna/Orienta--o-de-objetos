



//console.log (cliente1Nome);


class cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
    sacar (valor){
    
    if (this.saldo >= valor) {
        this.saldo -= valor;
        return valor;
      }
    }
    depositar (valor){
        if (valor >0){
            this.saldo += valor;
        }
    }
   }   

const cliente1 = new cliente ();
cliente1.nome = "Ricardo";
cliente1.cpf = 112233009;

const cliente2 = new cliente ();
cliente2.nome = "Alice";
cliente2.cpf = 2223330201

const contaCorrenteRicardo = new ContaCorrente ();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);

const valorSacado = contaCorrenteRicardo.sacar (50);

console.log (valorSacado);


console.log (contaCorrenteRicardo)

