'use strict';

angular.module('projetobrasil.dados.propostas.services', [])
.factory('propostasServ', [function(){
  var propostasService = {};

  propostasService.propostas = JSON.parse('{"name":"candidatos","children":[{"name":"Eduardo Jorge","children":[{"name":"Democracia e Reforma Política","children":[{"name":"Pacto Federativo","size":2},{"name":"Reforma Política","size":20}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":2},{"name":"Comércio Exterior","size":1}]},{"name":"Esporte e lazer","children":[]},{"name":"Gestão Pública","children":[{"name":"Administração e Serviço Público","size":5}]},{"name":"Infraestrutura","children":[{"name":"Energia","size":10},{"name":"Transporte","size":3}]},{"name":"Liberdades civis","children":[{"name":"Liberdades civis","size":2}]},{"name":"Meio-ambiente","children":[{"name":"Meio-ambiente","size":4}]},{"name":"Outros","children":[{"name":"Outros","size":2}]},{"name":"Política Econômica","children":[{"name":"Renda, Trabalho e Emprego","size":3}]},{"name":"Política Externa e Defesa Nacional","children":[{"name":"Defesa Nacional","size":6}]},{"name":"Saúde","children":[{"name":"Saúde","size":5},{"name":"Saúde","size":5}]},{"name":"Segurança Pública","children":[{"name":"Segurança Pública","size":1},{"name":"Segurança Pública","size":1}]}]},{"name":"Marina Silva","children":[{"name":"Cultura e Turismo","children":[{"name":"Cultura","size":7},{"name":"Turismo","size":4}]},{"name":"Democracia e Reforma Política","children":[{"name":"Pacto Federativo","size":3},{"name":"Participação e Instituições democráticas","size":7},{"name":"Reforma Política","size":3}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":8},{"name":"Desenvolvimento Econômico","size":2},{"name":"Desenvolvimento Regional","size":4},{"name":"Empreendedorismo","size":7},{"name":"Fomento e subsídios","size":1}]},{"name":"Direitos Humanos e Inclusão social","children":[{"name":"Direitos Humanos e Inclusão social","size":1},{"name":"Direitos Humanos e Inclusão social","size":1}]},{"name":"Educação","children":[{"name":"Educação Superior","size":1},{"name":"Educação","size":15}]},{"name":"Esporte e lazer","children":[]},{"name":"Gestão Pública","children":[{"name":"(Des)Estatização e terceiro setor","size":1},{"name":"Administração e Serviço Público","size":12}]},{"name":"Infraestrutura","children":[{"name":"Água e Saneamento Básico","size":8},{"name":"Energia","size":7},{"name":"Infraestrutura","size":1},{"name":"Transporte","size":7}]},{"name":"Meio-ambiente","children":[{"name":"Meio-ambiente","size":14}]},{"name":"Outros","children":[{"name":"Outros","size":1}]},{"name":"Política Econômica","children":[{"name":"Renda, Trabalho e Emprego","size":2}]},{"name":"Política Externa e Defesa Nacional","children":[{"name":"Defesa Nacional","size":5}]},{"name":"Políticas Sociais","children":[{"name":"Assistência Social e Combate à Pobreza","size":1}]},{"name":"Saúde","children":[{"name":"Saúde","size":13},{"name":"Saúde","size":13}]}]},{"name":"Aecio Neves","children":[{"name":"Cultura e Turismo","children":[{"name":"Cultura","size":21},{"name":"Turismo","size":7}]},{"name":"Democracia e Reforma Política","children":[{"name":"Pacto Federativo","size":2},{"name":"Reforma Política","size":20}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":2},{"name":"Comércio Exterior","size":1}]},{"name":"Gestão Pública","children":[{"name":"Administração e Serviço Público","size":5}]},{"name":"Infraestrutura","children":[{"name":"Água e Saneamento Básico","size":1},{"name":"Energia","size":10},{"name":"Transporte","size":3}]},{"name":"Liberdades civis","children":[{"name":"Liberdades civis","size":2}]},{"name":"Meio-ambiente","children":[{"name":"Meio-ambiente","size":4}]},{"name":"Outros","children":[{"name":"Outros","size":2}]},{"name":"Política Econômica","children":[{"name":"Renda, Trabalho e Emprego","size":3}]},{"name":"Política Externa e Defesa Nacional","children":[{"name":"Defesa Nacional","size":6}]},{"name":"Saúde","children":[{"name":"Saúde","size":5},{"name":"Saúde","size":5}]},{"name":"Segurança Pública","children":[{"name":"Segurança Pública","size":1},{"name":"Segurança Pública","size":1}]}]},{"name":"Dilma","children":[{"name":"Cultura e Turismo","children":[{"name":"Cultura","size":6}]},{"name":"Democracia e Reforma Política","children":[{"name":"Participação e Instituições democráticas","size":5},{"name":"Reforma Política","size":4}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Empreendedorismo","size":4},{"name":"Tecnologia e Inovação","size":1}]},{"name":"Direitos Humanos e Inclusão social","children":[{"name":"Direitos Humanos","size":1},{"name":"Direitos Humanos e Inclusão social","size":1},{"name":"Direitos Humanos e Inclusão social","size":1}]},{"name":"Educação","children":[{"name":"Educação Profissional e Tecnologia","size":1},{"name":"Educação","size":10}]},{"name":"Esporte e lazer","children":[{"name":"Esporte e Lazer","size":8}]},{"name":"Gestão Pública","children":[{"name":"Administração e Serviço Público","size":7},{"name":"Transparência e controle da corrupção","size":1}]},{"name":"Infraestrutura","children":[{"name":"Água e Saneamento Básico","size":2},{"name":"Energia","size":4},{"name":"Infraestrutura","size":4},{"name":"Telecomunicações","size":1},{"name":"Transporte","size":4}]},{"name":"Meio-ambiente","children":[{"name":"Meio-ambiente","size":7}]},{"name":"Saúde","children":[{"name":"Saúde","size":9},{"name":"Saúde","size":9}]},{"name":"Segurança Pública","children":[{"name":"Segurança Pública","size":1},{"name":"Segurança Pública","size":1}]}]},{"name":"Luciana Genro","children":[{"name":"Democracia e Reforma Política","children":[{"name":"Participação e Instituições democráticas","size":4},{"name":"Reforma Política","size":2}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":3},{"name":"Comércio Exterior","size":1}]},{"name":"Educação","children":[{"name":"Educação","size":2}]},{"name":"Gestão Pública","children":[{"name":"(Des)Estatização e terceiro setor","size":2},{"name":"Administração e Serviço Público","size":1}]},{"name":"Infraestrutura","children":[{"name":"Transporte","size":1}]},{"name":"Liberdades civis","children":[{"name":"Liberdades civis","size":3}]},{"name":"Políticas Sociais","children":[{"name":"Habitação","size":1}]},{"name":"Saúde","children":[{"name":"Saúde","size":2},{"name":"Saúde","size":2}]}]},{"name":"Levy Fidelix","children":[{"name":"Democracia e Reforma Política","children":[{"name":"Participação e Instituições democráticas","size":5},{"name":"Reforma Política","size":5}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":2},{"name":"Desenvolvimento Econômico","size":1},{"name":"Desenvolvimento Regional","size":1}]},{"name":"Gestão Pública","children":[{"name":"Administração e Serviço Público","size":1}]},{"name":"Infraestrutura","children":[{"name":"Energia","size":5},{"name":"Transporte","size":5}]},{"name":"Outros","children":[{"name":"Outros","size":2}]},{"name":"Política Econômica","children":[{"name":"Renda, Trabalho e Emprego","size":9}]},{"name":"Saúde","children":[{"name":"Saúde","size":3},{"name":"Saúde","size":3}]}]},{"name":"Pastor Everaldo","children":[{"name":"Cultura e Turismo","children":[{"name":"Cultura","size":1}]},{"name":"Democracia e Reforma Política","children":[{"name":"Participação e Instituições democráticas","size":6},{"name":"Reforma Política","size":2},{"name":"Relação com demais poderes","size":1}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":9},{"name":"Comércio Exterior","size":5},{"name":"Empreendedorismo","size":3}]},{"name":"Educação","children":[{"name":"Educação Básica","size":1},{"name":"Educação","size":5}]},{"name":"Esporte e lazer","children":[{"name":"Esporte e Lazer","size":1}]},{"name":"Gestão Pública","children":[{"name":"(Des)Estatização e terceiro setor","size":8},{"name":"Administração e Serviço Público","size":8}]},{"name":"Infraestrutura","children":[{"name":"Energia","size":3},{"name":"Transporte","size":7}]},{"name":"Liberdades civis","children":[{"name":"Liberdades civis","size":10}]},{"name":"Meio-ambiente","children":[{"name":"Meio-ambiente","size":7}]},{"name":"Outros","children":[{"name":"Outros","size":3}]},{"name":"Política Externa e Defesa Nacional","children":[{"name":"Política Externa","size":1}]},{"name":"Saúde","children":[{"name":"Saúde","size":11},{"name":"Saúde","size":11}]},{"name":"Segurança Pública","children":[{"name":"Segurança Pública","size":11},{"name":"Segurança Pública","size":11}]}]},{"name":"Mauro Iasi","children":[{"name":"Cultura e Turismo","children":[{"name":"Cultura","size":2}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":1},{"name":"Desenvolvimento Econômico","size":1}]},{"name":"Educação","children":[{"name":"Educação","size":4}]},{"name":"Gestão Pública","children":[{"name":"(Des)Estatização e terceiro setor","size":5}]},{"name":"Infraestrutura","children":[{"name":"Energia","size":1},{"name":"Transporte","size":3}]},{"name":"Outros","children":[{"name":"Outros","size":5}]},{"name":"Saúde","children":[{"name":"Saúde","size":2},{"name":"Saúde","size":2}]},{"name":"Segurança Pública","children":[{"name":"Segurança Pública","size":4},{"name":"Segurança Pública","size":4}]}]},{"name":"Eymael","children":[{"name":"Cultura e Turismo","children":[{"name":"Cultura","size":4}]},{"name":"Democracia e Reforma Política","children":[{"name":"Participação e Instituições democráticas","size":2}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":1},{"name":"Desenvolvimento Econômico","size":1},{"name":"Empreendedorismo","size":1}]},{"name":"Educação","children":[{"name":"Educação","size":3}]},{"name":"Esporte e lazer","children":[{"name":"Esporte e Lazer","size":4}]},{"name":"Gestão Pública","children":[{"name":"Administração e Serviço Público","size":8}]},{"name":"Infraestrutura","children":[{"name":"Infraestrutura","size":1}]},{"name":"Meio-ambiente","children":[{"name":"Meio-ambiente","size":1}]},{"name":"Outros","children":[{"name":"Outros","size":3}]},{"name":"Política Econômica","children":[{"name":"Renda, Trabalho e Emprego","size":19}]},{"name":"Saúde","children":[{"name":"Saúde","size":4},{"name":"Saúde","size":4}]},{"name":"Segurança Pública","children":[{"name":"Segurança Pública","size":5},{"name":"Segurança Pública","size":5}]}]},{"name":"Rui Costa Pimenta","children":[{"name":"Cultura e Turismo","children":[{"name":"Cultura","size":7}]},{"name":"Democracia e Reforma Política","children":[{"name":"Participação e Instituições democráticas","size":5}]},{"name":"Desenvolvimento Econômico","children":[{"name":"Agricultura","size":3},{"name":"Comércio Exterior","size":1},{"name":"Empreendedorismo","size":1}]},{"name":"Direitos Humanos e Inclusão social","children":[{"name":"Direitos Humanos e Inclusão social","size":14},{"name":"Direitos Humanos e Inclusão social","size":14}]},{"name":"Educação","children":[{"name":"Educação","size":7}]},{"name":"Gestão Pública","children":[{"name":"Administração e Serviço Público","size":8}]},{"name":"Infraestrutura","children":[{"name":"Água e Saneamento Básico","size":1}]},{"name":"Liberdades civis","children":[{"name":"Liberdades civis","size":4}]},{"name":"Saúde","children":[{"name":"Saúde","size":6},{"name":"Saúde","size":6}]},{"name":"Segurança Pública","children":[{"name":"Segurança Pública","size":9},{"name":"Segurança Pública","size":9}]}]}]}');

  return propostasService;
}]);
