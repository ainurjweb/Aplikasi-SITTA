const { createApp } = Vue;
createApp({
  data() { return { email:'', password:'', modal: null }; },
  methods: {
    doLogin() {
      const u = dataPengguna.find(x => x.email === this.email && x.password === this.password);
      if (u) {
        sessionStorage.setItem('sitta_user', u.nama);
        alert('Login berhasil! Selamat datang ' + u.nama);
        window.location.href = 'dashboard.html';
      } else {
        alert('Email atau password salah!');
      }
    },
    open(m) { this.modal = m; },
    close() { this.modal = null; }
  }
}).mount('#app');
