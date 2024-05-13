import {faker} from '@faker-js/faker'
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    
    cy.get('#main-navigation div >nav > div >ul >li:nth-child(6)').trigger('mouseover')
    cy.contains('Register'). click({force:true})
    cy.get('aside a:nth-child(2)') .should('be.visible').invoke('attr','href').then(link=>{
      expect(link).to.include('account/register')
    })
    cy.get('#input-firstname').type('Mariam')
    cy.get('#input-firstname').should('be.visible').invoke('val').then(function(text){
expect(text).to.eq('Mariam')
    })

    cy.get('#input-lastname').type('Ismail')
    cy.get('input#input-email').type(faker.internet.email())
    cy.get('#input-telephone').type(faker.phone.number())
    cy.get('#input-password').type('test@1234')
    cy.get('#input-confirm').type('test@1234')
    cy.get('.float-right label').click()
    cy.contains('Continue').click()
    cy.get('div#content > p:nth-of-type(2)').should('be.visible').invoke('text').then(function(text){
      expect(text).to.eq('Congratulations! Your new account has been successfully created!')
    })
  })
})