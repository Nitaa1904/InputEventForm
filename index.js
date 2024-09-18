document.addEventListener('DOMContentLoaded', function () {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;
    
    document.getElementById('inputNama').addEventListener('input', function () {
      const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
      const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;
      
      console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
      console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
      const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
      document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();
      
      if (sisaKarakterUpdate === 0) {
        document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
      } else if (sisaKarakterUpdate <= 5) {
        document.getElementById('notifikasiSisaKarakter').style.color = 'red';
      } else {
        document.getElementById('notifikasiSisaKarakter').style.color = 'black';
      }
    });


    // menampilkan pesan sisa karakter ketika kita mulai melakukan proses penulisan (fokus) pada elemen <input id="inputNama">.
    document.getElementById('inputNama').addEventListener('focus', function () {
        console.log('inputNama: focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
    });
    // “menyembunyikan” kembali pesan notifikasi jumlah sisa karakter yang diperbolehkan.
    document.getElementById('inputNama').addEventListener('blur', function () {
        console.log('inputNama: blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    });


    // memeriksa apakah user memasukkan teks yang sesuai dengan captcha-nya. 
    //Jika sesuai, tombol “Submit Data” menjadi aktif.
    document.getElementById('inputCaptcha').addEventListener('change', function () {
        console.log('inputCaptcha: change');
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');
        if (inputCaptcha === 'PRNU') {
          submitButtonStatus.removeAttribute('disabled');
        } else {
          submitButtonStatus.setAttribute('disabled', '');
        }
    });
    // NOTIF alert dialog box validasi saat formulir di submit.
    document.getElementById('formDataDiri').addEventListener('submit', function (event) {
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        if (inputCaptcha === 'PRNU') {
          alert('Selamat! Captcha Anda lolos :D');
        } else {
          alert('Captcha Anda belum tepat :(');
          document.getElementById('submitButton').setAttribute('disabled', '');
        }
        event.preventDefault();
      });

    // memunculkan alert dialog box ketika menyalin tulisan dari elemen <input> tersebut.
    document.getElementById('inputCopy').addEventListener('copy', function () {
        alert('Anda telah men-copy sesuatu...');
    });
    document.getElementById('inputPaste').addEventListener('paste', function () {
        alert('Anda telah mem-paste sebuah teks...');
    });
});
