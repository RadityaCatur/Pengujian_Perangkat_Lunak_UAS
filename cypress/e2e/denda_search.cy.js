describe('melakukan search testing', () => {
  it('menuju ke website perpustakaan', () => {
    cy.visit('http://localhost/sistem_perpustakaan-projek2/')
  })

  it('melakukan login sebagai admin/petugas perpustakaan dan menuju ke halaman denda', () => {

    // memasukkan username
    cy.get('#user').type('farah')

    // memasukkan password
    cy.get('#pass').type('123')

    // menekan tombol masuk
    cy.get('#loding').click()

    // menuju ke fitur denda
    cy.get(':nth-child(6) > .cursor').click()
  })
})

describe('memasukkan nominal denda yang tersedia', () => {
  it('memasukkan nominal denda yang dicari', () => {
    cy.get('#example1_filter > label > .form-control').type('4000')
  })

  it('mengecek apakah denda yang dicari tersedia', () => {
    cy.get('.sorting_1').should('be.visible')
  })
})

describe('memasukkan nominal denda yang tidak tersedia', () => {
  it('menghapus isi kolom pencarian', () => {
    cy.get('#example1_filter > label > .form-control').clear()
  })

  it('memasukkan nominal denda yang dicari', () => {
    cy.get('#example1_filter > label > .form-control').type('5000')
  })

  it('mengecek apakah denda yang dicari tidak tersedia', () => {
    cy.get('.sorting_1').should('not.exist')
  })
})