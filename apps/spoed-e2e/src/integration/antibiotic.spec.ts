/* eslint-disable @typescript-eslint/no-unused-vars */

import { type } from "cypress/types/jquery";
import { includes } from "cypress/types/lodash";


describe('antibiotic', () => {
  

  it('it should submit because the form default valid', () => {

    cy.visit('http://localhost:4200/antibiotic');

    cy.get('[name="submit"]').click();

    cy.url().should('include', 'opslaan'); 

 

     });


     it('it should go back to recepten page if i click aanuleren button', () => {

      cy.visit('http://localhost:4200/antibiotic');
  
      cy.get('[name="aanuleren"]').click();
  
      cy.url().should('include', 'recepten'); 
  
    
});
});
  