/* eslint-disable @typescript-eslint/no-unused-vars */

import { type } from "cypress/types/jquery";
import { has, includes } from "cypress/types/lodash";


describe('recept', () => {
  

  it('it should not submit if the form is invalid', () => {

    cy.visit('http://localhost:4200/recepttoevoegen');

    cy.get('[formControlName="name"]').type(' maag tapletten');
    cy.get('[formControlName="tapletten"]').type('10');
    cy.get('[formControlName="Beschrijving"]').type('2 keer per dag');
    

  
    cy.get('button').click();
    
    
   // cy.get('[formControlName="table"]').should('includes', 'maag tapletten');
   //cy.get (' [formControlName="recept name"]').should('have.text' , ' maag tapletten');
    
   cy.get ('body > spoed-epd-use-case-root > spoed-epd-use-case-header > spoed-epd-use-case-nieuws > div > div > table > tbody > tr > td:nth-child(1)').contains('maag tapletten')
   cy.get('body > spoed-epd-use-case-root > spoed-epd-use-case-header > spoed-epd-use-case-nieuws > div > div > table > tbody > tr > td:nth-child(2)').contains('10')
   cy.get('body > spoed-epd-use-case-root > spoed-epd-use-case-header > spoed-epd-use-case-nieuws > div > div > table > tbody > tr > td:nth-child(3)').contains('2 keer per dag')
   


     });

     
});
  