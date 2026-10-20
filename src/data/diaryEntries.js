const happyImage = require('../../assets/moods/happy.png');

export const diaryEntries = [
  { id: 1, mood: 'happy', title: 'Pagi yang Tenang', date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodSource: happyImage }, // gambar lokal
  { id: 2, mood: 'focus', title: 'Produktif di Kampus', date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodSource: { uri: 'https://picsum.photos/seed/focus/80' } },
  { id: 3, mood: 'calm', title: 'Senja di Taman', date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodSource: { uri: 'https://picsum.photos/seed/calm/80' } },
  { id: 4, mood: 'sad', title: 'Hujan Seharian', date: '2025-10-03',
    preview: 'Rencana jalan-jalan batal karena hujan deras. Akhirnya hanya rebahan di kamar...',
    moodSource: { uri: 'https://picsum.photos/seed/sad/80' } },
  { id: 5, mood: 'excited', title: 'Demo Proyek Berhasil', date: '2025-10-02',
    preview: 'Presentasi aplikasi mobile berjalan lancar dan dosen memberi pujian. Senang sekali!',
    moodSource: { uri: 'https://picsum.photos/seed/excited/80' } },
];
