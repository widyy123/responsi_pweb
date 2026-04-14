document.getElementById('personaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('inputName').value;
    const hobi = document.getElementById('inputHobby').value;
    const angka = parseInt(document.getElementById('inputLucky').value);

    // Array berisi 10 persona unik untuk angka 1-10
    const listPersona = [
        "The Pioneer Leader",      // Angka 1
        "The Strategic Thinker",   // Angka 2
        "The Creative Soul",       // Angka 3
        "The Analytical Mind",     // Angka 4
        "The Dynamic Explorer",    // Angka 5
        "The Harmonious Mentor",   // Angka 6
        "The Silent Scholar",      // Angka 7
        "The High Achiever",       // Angka 8
        "The Visionary Dreamer",   // Angka 9
        "The Digital Mastermind"   // Angka 10
    ];

    // Ambil persona berdasarkan angka (index array mulai dari 0, jadi angka-1)
    let personaTerpilih = listPersona[angka - 1] || "The Mysterious Legend";

    // Update konten di halaman
    document.getElementById('personaText').innerText = `${personaTerpilih} (${hobi} Enthusiast)`;
    document.getElementById('profileNameDisplay').innerText = nama;
    
    // Tampilkan kotak hasil
    document.getElementById('resultBox').classList.remove('hidden');
});