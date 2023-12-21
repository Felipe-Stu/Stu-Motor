var navStatus = false;

$(document).ready(function(){ //busco o documento
    $('#menuIcon').click(function(){ //busco o botão MENU burgão e aplico a função de click
        if (navStatus === false) {
            $('header nav').slideDown();
            navStatus = true;
        } else {
            $('header nav').slideUp();
                navStatus = false;
            }
        });
});

//No código acima é o seguinte. Eu criei uma variável que está como "falsa"
//Ao clicar no botão MENU, se for falso a variável, o botão irá dar slideDown
//Como já indiquei que é falso, então vai rolar pra baixo o menu e ganhar a propriedade "true"
//E se a propriedade for veradeira e clicar novamente no botão, irá dar slideUp e virará "false"


//Esse comando é apenas para rodar o carrossel
$(document).ready(function(){
    $('#carrossel').slick({
            slidesToScroll: 1, //uma imagem por vez
            autoplay: true, //irá rodar sozinho
            autoplaySpeed: 3500, //velocidade para rodar
            fade: true, //se vai desaparecer
            speed: 800, //velocidade de transição
            arrows: false, //retira as setas do carrossel
    });
})


// Função para lidar com o clique nos botões "Tenho Interesse"
$(document).ready(function(){
    $('.tenhoInteresse').click(function(){
        var veiculoInteresse = $(this).attr('id'); //Obtenho o ID que está no botão clicado
        var targetId=$(this).data('target');//Obtenho o ID destino da rolagem
        scrollToSection(targetId);//Essa função az a rolagem até o destino, porém não está criada ainad a função, irei criar abaixo
        $('#veiculoDeInteresse').val(veiculoInteresse); // Define o valor do campo veiculoDeInteresse
    });

    //Essa é a criação da rolagem da página até chegar no formulário de contato
    function scrollToSection(targetId){
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 800);
    }

    // Função para lidar com o clique no botão de envio
    $('#enviar').click(function(e){ //Busca o botão de enviar e cria uma fução com evento
        // Verifica se o campo veiculoDeInteresse está vazio
        if ($('#veiculoDeInteresse').val().trim() === '') { //se o input estiver vazio...
            $('#informeVeiculo .necessario').slideDown(); //slideDown no texto de necessidade
            e.preventDefault(); // Impede o envio do formulário se o campo for necessário
        } else {
            $('#informeVeiculo .necessario').slideUp();//Se estiver informado o veículo, slideUp na mensagem de necessidade
        }

        // Verifica se o campo telefone está vazio
        if ($('#telefone').val().trim() === '') {//Se o telefone estiver vazio...
            $('#informeTelefone .necessario').slideDown();//Desce o informativo de necessidade
            e.preventDefault(); // Impede o envio do formulário se o campo for necessário
        } else {
            $('#informeTelefone .necessario').slideUp();//Se tiver informado o campo, sobe a mensagem
        }
    });
});



/* Em teste
*/
/* O que preciso fazer ainda:
Quando apertar o botão "tenho interesse" deve ur até o formulário
e colocar um placeholder no "Veículo de Interesse" */