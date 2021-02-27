describe('Cypress Shopify', () => {
  it('Loads local shopify theme', () => {
    cy.visit('https://localhost:3000/?preview_theme_id=120240898208')
  })
})