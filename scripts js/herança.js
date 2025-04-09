//Esse código trata da herança de classes, onde as subclasses (Cachorro,Gato) herdam atributos da superclasse (Pet)
class Pet { //Inicializando a superclasse
    constructor(nome, idade, especie, peso,estadoSaude) { //O metódo construtor foi usado para a inicialização das propriedades dos objetos da classe
      this.nome = nome;
      this.idade = idade;   //this é usado para se referir a própria classe
      this.especie = especie;
      this.peso = peso;
      this.estadoSaude = estadoSaude;
    }
  
    mostrarInfo() {//Função que serve para mostrar as informações do animal
        //Retorna uma string de informações sobre o animal
      return `${this.nome} é um(a) ${this.especie} com ${this.idade} anos.`;
    }
  } 
  class Cachorro extends Pet {//Usado para que a subclasse Cachorro seja uma extensão da superclasse Pet
    constructor(nome, idade, especie, peso, estadoSaude, porte, raca) {
      super(nome, idade, especie, peso, estadoSaude); //O super é usado para que chame o construtor da superclasse para passar os parâmetros necessários
      this.raca = raca;  // Inicializa as propriedades específicas do cachorro
      this.porte = porte;

      }
  
    mostrarInfo() {
      return `${super.mostrarInfo()} É um cão de raça ${this.raca} que tem o porte ${this.porte}.`;
    }
  }
  
  class Gato extends Pet{//Usado para que a subclasse Gato seja uma extensão da superclasse Pet
    constructor(nome, idade, especie, peso, estadoSaude, porte,  cor) {
      super(nome, idade, especie, peso, estadoSaude);
        this.cor = cor;      //Inicializa as propriedades específicas do gato
        this.porte = porte;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()} É um gato de cor ${this.cor} e porte ${this.porte}.`;
    }
  }