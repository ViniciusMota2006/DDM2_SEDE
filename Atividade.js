<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Atividade de DDM</title>

  <style>
    .caixa {
      width: 100px;
      height: 100px;
      background-color: blue;
    }
  </style>

</head>
<body>

<button id="botaoAlerta">Clique aqui para ver o alerta!</button>

    <script>
        //1)
        alert("Olá! Esta é uma informação qualquer para o usuário.");
        //2)
        function exibirAlerta() {
            alert("Esta é uma mensagem de alerta!");
        }

        document.getElementById("botaoAlerta").addEventListener("click", exibirAlerta);
    </script>
    <hr>
<br><br>

<div id="meuElemento">Este é um elemento com ID.</div>

    <script>
        var elemento = document.getElementById("meuElemento");
        console.log(elemento.textContent); 
    </script>
    <hr>
    <br><br>

    <p>Parágrafo 1</p>
    <p>Parágrafo 2</p>

    <script>
        var paragrafos = document.getElementsByTagName("p");
        console.log(paragrafos.length); 
    </script>
    <hr>
    <br><br>

     <!-- 3) -->

    <p class="destaque">Este é um parágrafo destacado.</p>
    <p class="destaque">Este é outro parágrafo destacado.</p>

    <script>
        var elementosDestaque = document.getElementsByClassName("destaque");
        console.log(elementosDestaque.length); 
    </script>
    <hr>
    <br><br>

    <div class="container">
        <p class="destaque">Este é um parágrafo destacado.</p>
    </div>
  
    <script>
        var elementoDestaque = document.querySelector(".container .destaque");
        console.log(elementoDestaque.textContent);
    </script>
    <hr>
    <br><br>

    <div class="container">
        <p class="destaque">Este é um parágrafo destacado 1.</p>
        <p class="destaque">Este é um parágrafo destacado 2.</p>
    </div>
      
    <script>
        var elementosDestaque = document.querySelectorAll(".container .destaque");
        elementosDestaque.forEach(function(elemento) {
          console.log(elemento.textContent); 
        });
    </script>
    <hr>
    <br><br>
     <!-- 4) -->

    onmouseover
    <div class="caixa" onmouseover="this.style.backgroundColor='red'"></div>
    <hr>
    <br><br>

    onfocus
    <input type="text" onfocus="this.value='Campo em foco'" onblur="this.value='Campo fora de foco'">
    <hr>
    <br><br>

    onchange
    <select onchange="alert('Opção selecionada: ' + this.value)">
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
        <option value="3">Opção 3</option>
    </select>
      <hr>
      <br><br>

    <!-- 5) Exemplo de funções-->
    <script>
        // Função nomeada
        function soma(a, b) {
            return a + b;
            }
            console.log(soma(2, 3)); // Saída: 5
    </script>

    <script>
        // Função nomeada com argumento
        function calcularAreaRetangulo(base, altura) {
            return base * altura;
             }
            console.log(calcularAreaRetangulo(5, 3)); // Saída: 15
    </script>

    <script>
        // Função com construtor
        function Carro(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
            this.descricao = function() {
                return this.marca + ' ' + this.modelo;
          };
        }
        var meuCarro = new Carro('Toyota', 'Corolla');
        console.log(meuCarro.descricao()); // Saída: Toyota Corolla
    </script>

    <script>
        // Função Literal (variável)
        var multiplicacao = function(a, b) {
            return a * b;
        };
        console.log(multiplicacao(4, 5)); // Saída: 20

    </script>

    <script>
        //Função de Flecha(Arrow functions):
        var dobrar = (num) => num * 2;
        console.log(dobrar(4)); // Saída: 8
            
    </script>
    <!--6)
     -->
    <button id="botao">Clique Aqui</button>
        <p id="contador">Número de cliques: <span id="contador-numero">0</span></p>

    <script>
        var botao = document.getElementById('botao');
        var contadorNumero = document.getElementById('contador-numero');

        var contador = 0;
        botao.addEventListener('click', function() {
            contador++;
            contadorNumero.textContent = contador;
        });
        </script>

        <script>
            // 7)
            function converterParaCaixaAlta(string) {
                 return string.toUpperCase();
            }

            // Exemplos de uso da função
            var exemplo1 = converterParaCaixaAlta("Olá, Mundo!");
            console.log(exemplo1); // Saída: "OLÁ, MUNDO!"

            var exemplo2 = converterParaCaixaAlta("Esta é uma STRING de Exemplo.");
            console.log(exemplo2); // Saída: "ESTA É UMA STRING DE EXEMPLO."

            var exemplo3 = converterParaCaixaAlta("JavaScript é incrível!");
            console.log(exemplo3); // Saída: "JAVASCRIPT É INCRÍVEL!"
        </script>

        <script>
            // 8)
            function somarNumeros(num1, num2) {
                return num1 + num2;
            }

            // Exemplos de uso da função
            var resultado1 = somarNumeros(5, 3);
            console.log(resultado1); // Saída: 8

            var resultado2 = somarNumeros(-10, 20);
            console.log(resultado2); // Saída: 10

            var resultado3 = somarNumeros(7.5, 2.5);
            console.log(resultado3); // Saída: 10
        </script>

</body>
</html>
