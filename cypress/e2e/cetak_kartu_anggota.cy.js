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

      // masuk ke fitur cetak kartu anggota
      cy.get(':nth-child(5) > .cursor').click()

      // menuju ke halaman baru
      cy.visit('http://localhost/sistem_perpustakaan-projek2/user/detail/2')

      // mengklik tombol cetak kartu
      cy.get('.btn').click()
    })
  })

