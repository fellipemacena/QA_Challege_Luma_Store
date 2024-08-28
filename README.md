# QA_Challege_Luma_Store

Teste Automatizado Luma Store challege by Coodesh 

A utilização do Cypress é devido a sua facilidade em preparar o ambiente, pacotes para interface com navegadores já é nativo e seleção de seletores mais amigável. Além disso, não há a necessidade de realizar a maninupalação de WebDrivers como Chromedriver, Gekkodriver e outros. Mesmo que seja construído para trabalhar somente com Javascript ele atende muito bem a demanda proposta. Outro ponto positivo, são suas esperas configuráveis como defaultCommandTimeout e pageLoadTimeout no cypress.config.js. Além disso, posso realizar manipulação de APIs de forma mais amigável. 

Diante disso, não optei pelo Selenium com Junit, mesmo sendo robusto e com a possibilidade de realizar testes em mais de uma instância, o que o Cypress não é possível fazer a não ser que pague. O Selenium dispõe dessa infraestrutura de forma gratuita e nativa pelo Selenium Grid. Além disso, o Selenium tem a possibilidade de ser executado em diversas linguagens como C#, Java, Ruby, Python e etc. Entretanto, é preciso manter uma versão do chromium do navegador para que os testes estejam rodando, as esperar esplícitas ou implícitas tem uma manuseio maior e a estrutura de teste é um pouco maior para atender a mesma demanda que o Cypress pode atender.

Com isso, para a demanda do desáfio foi escolhido o Cypress devido a sua versatilidade, arquitetura de acessar browser e visualizar logs, além das demais vantagens já citadas.
***************************************************************************************************************
Para o desenvolvido deste projeto além da instalação do Cypress, os testes foram escritos em Javascript e com os seguintes plugins:

├── @cypress/webpack-preprocessor@6.0.2

├── @types/cypress@1.1.3

├── cypress-mochawesome-reporter@3.8.2

├── cypress-plugin-xhr-toggle@1.2.1

└── cypress@13.13.3

Para o BDD (Behavior Driven Development), foi utilizada a própria estrutura do Cypress describe, context e it, onde o Describe foi utilizado para "feature", context para "given" e "when" e o it para "when", 'and" e "then".

Projeto desenvolvido em Page Object Model (POM), 
DESCREVER ESTRUTURA, ORGANIZAÇÃO E ARQUIVOS DE TIPOS(ALÉM DA DISTRIBUIÇÃO DOS DESAFIOS E DIFERENCIAIS)

Além disso, o rodar o teste em modo headless digitando npx cypress run serão gerados relatórios em html e em vídeo, além de screenshot de erro caso ocorra.
Os arquivos de teste em html ficam na pasta *\MetaLumaStore\cypress\report,os arquivos de vídeo ficam na pasta *\MetaLumaStore\cypress\videos e os screenshots ficam na pasta *\MetaLumaStore\cypress\screenshots
***************************************************************************************************************
Para instalação do Cypress e demais plugins é necessário seguir os seguintes passos:
1) Tenha instalado na sua máquina o node.js
2) Depois de clonar o projeto
3) Abra o VS Code e acesse a pasta do projeto clonado
4) No terminal digite npm init para inicializar o projeto node.js
5) Após concluir a instalação do node
6) Digite: npm install cypress@13.13.3 --save-dev
7) Após concluir a instalação do cypress
8) Digite:npx cypress open
9) Assim o Cypress será executado pela primeira vez e irá instalar os demais arquivos necessários
10) Ao acessar sua interface clique em E2E Testing
11) Selecione uma das opções de browser
12) Após abrir uma segunda janela irá se deparar com os arquivos de teste
13) Feche a Janela
14) Abra o terminal novamente
15) Digite: npm install @cypress/webpack-preprocessor@6.0.2 --save-dev
16) Após concluir a instalação
17) Digite: npm install cypress-mochawesome-reporter@3.8.2 --save-dev
18) Após concluir a instalação
19) O próximo plugin é opcional, pois ele permite habilitar ou desabilitar o log de requisições XHR e fetch,e assim, o Cypress fica menos poluído com a quantidade de requisições em tela. Caso queira instalar siga com o passo 20
20) Digite: npm install cypress-plugin-xhr-toggle@1.2.1 --save-dev
21) As configurações para o report Mochawesome e modo headless já estão nos arquivos cypress.config.js e package.json

***************************************************************************************************************

This is a challenge by Coodesh
