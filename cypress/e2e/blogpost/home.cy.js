/// <reference types="cypress" />

import { describe, beforeEach, cy, it } from 'mocha'

describe('Test for homepage blog', () => {
  beforeEach(() => {
    cy.visit('https://blog-fullstack-one.vercel.app/')
  })

  it('Deve renderizar 2 Posts', () => {
    cy.get('.sc-ktEKTO > div').should('have.length', 2)
  })

  it('Deve abrir o modal e verificar o titulo', () => {
    cy.get(':nth-child(1) > .sc-qRumB').click()

    cy.get('.sc-blLsxD > h3').should('have.html', 'Titulo editado')
  })

  it('Não deve editar com titulo em branco', () => {
    cy.get(':nth-child(1) > .sc-qRumB').click()

    cy.get(':nth-child(2) > .sc-dKfzgJ > :nth-child(1)').click()

    cy.get('.sc-ieZDjg > input').click()

    cy.get('.sc-ieZDjg > input').clear()

    cy.get('.sc-dKfzgJ > :nth-child(1)').click()

    cy.get(':nth-child(2) > .sc-dKfzgJ > :nth-child(1)').should(
      'not.have.length'
    )
  })

  it('Deve editar com sucesso e retornar os mesmos 2 Posts', () => {
    cy.get(':nth-child(1) > .sc-qRumB').click()

    cy.get(':nth-child(2) > .sc-dKfzgJ > :nth-child(1)').click()

    cy.get('.sc-ieZDjg > input').click().clear().type('Titulo editado')

    cy.get('.sc-dKfzgJ > :nth-child(1)').click()

    cy.get('.sc-ktEKTO > div').should('have.length', 2)

    cy.end()
  })

  it('Deve pesquisar e retornar um post', () => {
    cy.get('input').click().type('Titulo editado')

    cy.get('.sc-ktEKTO > div').should('have.length', 1)
  })

  it('Deve excluir um post', () => {
    cy.get(':nth-child(1) > .sc-qRumB').click()

    cy.get('.sc-dKfzgJ > :nth-child(2)').click()

    cy.get('.sc-dKfzgJ > :nth-child(2)').click()

    cy.get('.sc-ktEKTO > div').should('have.length', 1)

    cy.end()
  })
})
