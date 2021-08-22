/* eslint-disable @typescript-eslint/no-unused-vars */

import { type } from "cypress/types/jquery";
import { includes } from "cypress/types/lodash";


describe('andere recept', () => {
  
  it('it should submit if the form valid ', () => {

    cy.visit('http://localhost:4200/andererecept');

    cy.get('[formControlName="anders"]').type('hoofd pijn')

    cy.get('[formControlName="tabletten nummer"]').type('9')

    cy.get('[formControlName="Beschrijving"]').type('3 tabletten per dag')

    cy.get('[name="submit"]').click();

    cy.url().should('include', 'opslaan'); 


     });

     it('it should submit if the optional field (beschrijving) empty  ', () => {

      cy.visit('http://localhost:4200/andererecept');
  
      cy.get('[formControlName="anders"]').type('hoofd pijn')
  
      cy.get('[formControlName="tabletten nummer"]').type('9')
  
      cy.get('[name="submit"]').click();
  
      cy.url().should('include', 'opslaan'); 
  

    });

    it('it will not submit if the required field is emptay becaus the button is disabled and will go back to recepten page if i press aanuleren button ', () => {

      cy.visit('http://localhost:4200/andererecept');
  
      cy.get('[name="aanuleren"]').click();
  
      cy.url().should('include', 'recepten'); 
  

    });
 
 
    
});
  