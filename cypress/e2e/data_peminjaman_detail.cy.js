describe('login', () => {
  it('menuju ke website perpustakaan', () => {
    cy.visit('http://localhost/sistem_perpustakaan-projek2/')
  })

  it('melakukan login sebagai anggota/siswa', () => {

    // memasukkan username
    cy.get('#user').type('rendra')

    // memasukkan password
    cy.get('#pass').type('123')

    // menekan tombol masuk
    cy.get('#loding').click()
  })
})

describe('menguji fitur detail peminjaman', () => {
  it('klik tombol detail peminjaman', () => {
    cy.get('.btn').click()
  })

  it('klik tombol kembali', () => {
    cy.get('.btn').click()
  })
})