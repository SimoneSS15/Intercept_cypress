/// <reference types="cypress"/>

describe('Usando Intercept', () => {
    it('exemplo', () => {
      cy.visit('www.google.com.br')
       cy.intercept('POST', ' /log?format=json&authuser=0').as('IconeCamera') /*ESSE INTERCEPT SERVE PARA PEGAR UMA ROTA DE UMA API */
       cy.get('.Gdd5U').click({force:true}).wait('@IconeCamera')  /*AQUI DENTRO DO WAIT É AGUARDADO PELA ROTA PARA DEPOIS TRABALHAR EM CIMA DELA SEM USAR WAIT FIXO */
    });                                                           /*COLOQUEI UM FORCE TRUE DENTRO DO CLICK PARA FORÇAR O CLICK NESSE ELEMENTO ELE ESTAVA SE PERDENDO */
                                                                
   });