// JavaScript   
  
// Banner Autoslide  
var currentSlideIndex = 1; // Indeks slider awal  
showSlides(currentSlideIndex); // Menampilkan slide pertama  
  
// Fungsi untuk mengubah slide  
function changeSlide(n) {  
    showSlides(currentSlideIndex += n); // Mengubah indeks slide  
}  
  
// Fungsi untuk menampilkan slide berdasarkan indeks  
function showSlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("slide"); // Mengambil semua elemen slide  
    if (n > slides.length) { currentSlideIndex = 1 } // Jika indeks lebih dari jumlah slide, kembali ke slide pertama  
    if (n < 1) { currentSlideIndex = slides.length; } // Jika indeks kurang dari 1, kembali ke slide terakhir  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none"; // Menyembunyikan semua slide  
    }  
    slides[currentSlideIndex - 1].style.display = "block"; // Menampilkan slide yang sesuai dengan indeks  
}  
  
// Mengatur interval untuk mengubah slide secara otomatis  
setInterval(() => {  
    changeSlide(1); // Mengubah slide setiap 2 detik  
}, 2000);  

function calculateBMI() {
    const weight = parseFloat(document.getElementById('input-berat-badan').value);
    const heightCm = parseFloat(document.getElementById('input-tinggi-badan').value);
    const height = heightCm / 100; 
    const gender = document.querySelector('input[name="gender"]:checked').value; 

    if (!weight || !height) {
        alert("Pastikan semua kolom terisi sesuai");
        return;
    }

    const bmi = weight / (height * height);
    let status;

    if (bmi < 18.5) {
        status = "Anda kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Berat badan normal (ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Anda kelebihan berat badan";
    } else {
        status = "Anda mengalami Kegemukan (Obesitas)";
    }

    const resultText = `
        Hasil BMI
        Jenis Kelamin: ${gender}
        Berat Badan: ${weight} kg
        Tinggi Badan: ${heightCm} cm
        Hasil BMI: ${bmi.toFixed(2)}
        Status: ${status}

        ${getHealthAdvice(status)}`;

    document.getElementById('result-bmi').innerHTML = `
        <div class="result-box">     
            <p>Jenis Kelamin: <strong>${gender}</strong></p>
            <p><strong>${status}</strong></p>
            <p><strong>${bmi.toFixed(2)}</strong></p>
            <p>${getHealthAdvice(status)}</p>
        </div>
    `;

    // Tampilkan tombol cetak
    const downloadLink = document.getElementById('download-link');
    downloadLink.style.display = 'block';
}

function printResult() {
    const resultContent = document.getElementById('result-bmi').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Hasil BMI</title>
            <style>
                body { font-family: Arial, sans-serif; }
                .result-box { border: 1px solid #ccc; padding: 5px; margin: 10px; }
            </style>
        </head>
        <body>
            <h2>Hasil BMI</h2>
            ${resultContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

function getHealthAdvice(status) {
    switch (status) {
        case "Anda kekurangan berat badan":
            return "Anda berada dalam kategori kekurangan berat badan."
        case "Berat badan normal (ideal)":
            return "Anda berada dalam kategori normal (ideal)."
        case "Anda kelebihan berat badan":
            return "Anda berada dalam kategori kelebihan berat badan."
        case "Anda mengalami kegemukan (Obesitas)":
            return "Anda berada dalam kategori obesitas."
        default:
            return "";
    }
}

function resetForm() {
    document.getElementById('input-berat-badan').value = '';
    document.getElementById('input-usia').value = '';
    document.getElementById('input-tinggi-badan').value = '';
    document.getElementById('result-bmi').innerHTML = '';
    document.getElementById('download-link').style.display = 'none'; 
}