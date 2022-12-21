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

      // masuk ke fitur data pengembalian
      cy.get(':nth-child(3) > .cursor').click()
    })
  })
  
  describe('memasukkan ISBN buku yang tersedia', () => {
    it('memasukkan ISBN buku yang tersedia', () => {
      cy.get('#example1_filter > label > .form-control').type('132-123-234-231')
    })
  
    it('mengecek apakah buku yang dicari tersedia', () => {
      cy.get('.sorting_1').should('be.visible')
    })
  })
  
  
  describe('memasukkan ISBN buku yang tidak tersedia', () => {
    it('menghapus isi kolom pencarian', () => {
      cy.get('#example1_filter > label > .form-control').clear()
    })
  
    it('memasukkan ISBN buku yang tidak tersedia', () => {
      cy.get('#example1_filter > label > .form-control').type('132-123-234-XXX')
    })
  
    it('mengecek apakah buku yang dicari tidak tersedia', () => {
      cy.get('.sorting_1').should('not.exist')
    })
  })