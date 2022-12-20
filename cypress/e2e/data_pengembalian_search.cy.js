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
      cy.get(':nth-child(2) > .cursor').click()
    })
  })
  
  describe('memasukkan no peminjaman yang tersedia', () => {
    it('memasukkan no peminjaman yang tersedia', () => {
      cy.get('#example1_filter > label > .form-control').type('PJ001')
    })
  
    it('mengecek apakah peminjaman yang dicari tersedia', () => {
      cy.get('.sorting_1').should('be.visible')
    })
  })
  
  
  describe('memasukkan no peminjaman yang tidak tersedia', () => {
    it('menghapus isi kolom pencarian', () => {
      cy.get('#example1_filter > label > .form-control').clear()
    })
  
    it('memasukkan no peminjaman yang tidak tersedia', () => {
      cy.get('#example1_filter > label > .form-control').type('PJXXX1')
    })
  
    it('mengecek apakah peminjaman yang dicari tidak tersedia', () => {
      cy.get('.sorting_1').should('not.exist')
    })
  })