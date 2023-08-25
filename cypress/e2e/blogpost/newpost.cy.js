/// <reference types="cypress" />

import { describe, beforeEach, cy, it } from 'mocha'

describe('Test for newpost page', () => {
  beforeEach(() => {
    cy.visit('https://blog-fullstack-one.vercel.app/')
  })

  it('Deve ser redirecionado para newpost page', () => {
    cy.get('.sc-fbJfA').click()

    cy.visit('https://blog-fullstack-one.vercel.app/newpost')

    cy.get(':nth-child(1) > label').should('have.html', 'Title')
  })

  it('Deve ser redirecionado para a Homepage', () => {
    cy.get('.sc-fbJfA').click()

    cy.visit('https://blog-fullstack-one.vercel.app/newpost')

    cy.get('h1').click()

    cy.visit('https://blog-fullstack-one.vercel.app/')

    cy.get('.sc-ktEKTO > div').should('have.length', 2)
  })

  it('Também deve ser redirecionado para a Homepage', () => {
    cy.get('.sc-fbJfA').click()

    cy.visit('https://blog-fullstack-one.vercel.app/newpost')

    cy.get('.sc-lnAgIa')

    cy.visit('https://blog-fullstack-one.vercel.app/')

    cy.get('.sc-ktEKTO > div').should('have.length', 2)
  })

  it('Deve criar um novo post', () => {
    cy.get('.sc-fbJfA').click()

    cy.visit('https://blog-fullstack-one.vercel.app/newpost')

    cy.get('input').click().type('Post criado via cypress')

    cy.get('textarea')
      .click()
      .type('Este post esta foi criado pelo teste de cypress')

    cy.get('button').click()

    cy.get('.sc-ktEKTO > div').should('have.length', 3)

    cy.end()
  })
})
