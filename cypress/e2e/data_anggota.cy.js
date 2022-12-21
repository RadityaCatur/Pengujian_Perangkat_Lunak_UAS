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

      // masuk ke fitur data anggota
      cy.get(':nth-child(4) > .cursor').click()
  
      // mengosongkan form control nama pengguna
      cy.get(':nth-child(1) > :nth-child(1) > .form-control').clear()

      // mengedit form control nama pengguna
      cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('Raditya')

      // mengosongkan form control tempat lahir
      cy.get(':nth-child(1) > :nth-child(2) > .form-control').clear()

      // mengedit form control tempat lahir
      cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Batu, Malang')

      // mengosongkan form control password
      cy.get(':nth-child(5) > .form-control').clear()

      // mengedit form control password
      cy.get(':nth-child(5) > .form-control').type('123')

      // mengosongkan form control telepon
      cy.get('#uintTextBox').clear()

      // mengedit form control telepon
      cy.get('#uintTextBox').type('085234210330')

      // mengosongkan form control alamat
      cy.get('textarea.form-control').clear()

      // mengedit form control alamat
      cy.get('textarea.form-control').type('Jl. Patimura Gg. 01 Kav. 23, Temas, Batu')

      // klik edit button
      cy.get('.btn-primary').click()
    })
  })

