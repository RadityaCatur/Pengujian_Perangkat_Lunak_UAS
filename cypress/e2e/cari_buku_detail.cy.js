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

      // masuk ke fitur cari buku
      cy.get(':nth-child(3) > .cursor').click()
  
      // mengklik tombol detail peminjaman
      cy.get('.btn').click()
  
      // mengklik detail transaksi peminjaman buku
      cy.get(':nth-child(2) > .btn').click()

      // mengklik close detail transaksi peminjaman buku
      cy.get('.modal-footer > .btn').click()
    })
  })

