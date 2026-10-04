const topics = [
  {
    id: "about-me", title: "About Me", category: "Personal", question: "Ceritakan tentang diri Anda.", duration: 90,
    quick: "Perkenalkan, saya Fawwaz Athar Suandhito, lulusan Teknik Mesin ITB. Selama kuliah saya sempat mengeksplor beberapa bidang, dari aviasi, energi, sampai oil & gas. Titik yang paling meyakinkan buat saya adalah saat KP di PHR, karena saya mendapat exposure ke drilling, workover dan completion, well intervention, serta routine service. Dari pengalaman itu saya sadar saya paling menikmati pekerjaan yang dekat dengan real equipment, operasi, data, dan problem solving. Karena itu posisi Operation Engineer di Well Services terasa sangat sesuai dengan pengalaman dan arah karier yang ingin saya tekuni.",
    full: "Perkenalkan, saya Fawwaz Athar Suandhito, lulusan Teknik Mesin ITB. Selama kuliah saya aktif mengeksplor beberapa area engineering, mulai dari aviasi melalui Aksantara dan KRTI, electrical dan energy melalui project serta internship di PLN Indonesia Power, sampai oil & gas melalui Kerja Praktik di PHR dan International Mud Design Competition. Saat KP di PHR, saya mendapat exposure ke drilling, workover dan completion, well intervention, routine service, serta mengerjakan analisis struktural drawworks. Tugas akhir saya membahas repeated calcium looping untuk CO2 capture menggunakan limestone Indonesia, jadi saya juga cukup terbiasa dengan eksperimen dan analisis data. Dari semua pengalaman itu saya menemukan pola bahwa saya paling menikmati pekerjaan yang dekat dengan real equipment, operasi, data, dan technical problem solving. Karena itu saya melihat posisi Operation Engineer di Well Services sangat selaras dengan pengalaman yang sudah saya bangun dan arah karier yang ingin saya tekuni.",
    points: ["Teknik Mesin ITB", "Exposure langsung di PHR", "Equipment + operation + data", "Tutup dengan alasan fit ke posisi"],
    note: "Bawakan seperti cerita, bukan membaca CV. Target 60–90 detik dan beri jeda di tiap perpindahan pengalaman.",
    reference: "Framework SIPT: Study → Industrial exposure → Projects → Target/Fit."
  },
  {
    id: "current-status", title: "Current Status", category: "Personal", question: "Sekarang kesibukan atau status pekerjaan Anda apa?", duration: 25,
    quick: "Saat ini saya sudah lulus dari Teknik Mesin ITB dan belum memiliki keterikatan dinas dengan pekerjaan rutin. Jadi saya siap untuk mulai bekerja dan menekuni tanggung jawab penuh pada posisi yang dibutuhkan.",
    full: "Saat ini saya sudah lulus dari Teknik Mesin ITB dan belum memiliki keterikatan dinas dengan pekerjaan rutin. Waktu saya sekarang saya gunakan untuk memperkuat beberapa skill pendukung dan menyiapkan diri masuk ke dunia kerja. Karena itu saya siap untuk mulai bekerja, mengikuti proses onboarding, dan menekuni tanggung jawab penuh pada posisi yang dibutuhkan.",
    points: ["Sudah lulus", "Tidak ada ikatan kerja", "Siap mulai dan berkomitmen"],
    note: "Jawab singkat dan tegas. Tidak perlu memberi kesan bahwa Anda hanya sedang menunggu pekerjaan.", reference: "Bagian A — Personal, Status, dan Motivation."
  },
  {
    id: "completion-engineer", title: "Completion Engineer", category: "Technical", question: "Apa yang Anda ketahui tentang posisi Completion Engineer?", duration: 60,
    quick: "Yang saya pahami, Completion Engineer menjadi penghubung antara well recommendation atau program dari sisi subsurface dengan tim operasi yang mengeksekusi pekerjaan. Engineer perlu me-review history sumur, objective pekerjaan, kebutuhan teknis, waktu, biaya, risiko, dan kesiapan eksekusi. Tujuannya memastikan program bisa dijalankan dengan aman, efisien, dan tetap sesuai objective sumur.",
    full: "Yang saya pahami, Completion Engineer bertugas me-review program atau rekomendasi yang datang dari Petroleum Engineer, lalu menerjemahkannya menjadi program yang siap dieksekusi oleh tim operasi. Yang dilihat bukan hanya pekerjaan berikutnya, tetapi juga well history, kondisi aktual sumur, kebutuhan equipment dan material, sequence pekerjaan, waktu, biaya, risiko, serta kesiapan pihak-pihak yang terlibat. Saat ada perbedaan antara program dan kondisi lapangan, engineer juga perlu mengumpulkan fakta, menilai dampak, berkoordinasi, dan melakukan eskalasi ke pihak yang berwenang. Jadi fokus akhirnya adalah membuat pekerjaan berjalan aman, efisien, terdokumentasi, dan tetap mencapai objective sumur.",
    points: ["Review well history dan objective", "Cek technical readiness, time, cost, risk", "Jembatan antara program dan eksekusi", "Aman dan sesuai objective"],
    note: "Gunakan frasa ‘yang saya pahami’ agar terdengar percaya diri tetapi tetap rendah hati sebagai fresh graduate.", reference: "Rig Hub hal. 15–17: peran CE dalam IODSC dan alur komunikasi/troubleshooting."
  },
  {
    id: "continuous-improvement", title: "Continuous Improvement", category: "Problem Solving", question: "Apa yang Anda pahami tentang continuous improvement?", duration: 50,
    quick: "Buat saya, continuous improvement adalah perbaikan berkelanjutan yang berbasis data, bukan sekadar coba-coba. Alurnya bisa memakai PDCA: tentukan masalah dan target, jalankan perbaikan, cek hasilnya, lalu standardisasi kalau efektif. Tools seperti RCA, 5 Why, Fishbone, dan Pareto membantu supaya kita memperbaiki akar masalah, bukan hanya gejalanya.",
    full: "Saya memahami continuous improvement sebagai usaha perbaikan yang dilakukan terus-menerus untuk meningkatkan safety, reliability, quality, cost, maupun productivity. Pendekatannya harus berbasis data. Misalnya ada penurunan performa equipment: pertama saya akan memastikan fakta dan trend-nya, lalu mencari akar masalah memakai RCA, 5 Why, Fishbone, atau Pareto sesuai kebutuhan. Setelah tindakan perbaikan dijalankan, hasilnya perlu dimonitor dan dibandingkan dengan baseline. Kalau efektif, perbaikannya bisa distandardisasi melalui siklus PDCA supaya masalah yang sama tidak berulang.",
    points: ["Berbasis data", "Cari akar masalah", "PDCA", "Monitor dan standardisasi"],
    note: "Kalau diminta contoh, kaitkan dengan analisis drawworks, HPH di PLN, atau eksperimen tugas akhir—pilih yang paling Anda kuasai.", reference: "Rig Hub hal. 14 dan 33–34: milestone cycle time serta database failure/LPO."
  },
  {
    id: "drilling-to-completion", title: "Drilling to Completion", category: "Technical", question: "Jelaskan alur high-level dari drilling sampai completion.", duration: 75,
    quick: "Secara high level, sumur dibor sampai target depth sesuai well plan, sambil mengambil directional dan formation data bila dibutuhkan. Setelah itu dilanjutkan dengan evaluasi formasi, casing, dan cementing. Untuk cased-hole completion, kualitas cement diperiksa lalu interval produktif diperforasi agar reservoir terhubung dengan wellbore. Berikutnya completion equipment, artificial lift atau wellhead, testing, dan persiapan menuju production diselesaikan sesuai desain sumurnya.",
    full: "Secara high level, sumur dibor sampai target depth sesuai well plan. Selama drilling, data arah dan formasi bisa diperoleh melalui MWD atau LWD sesuai program. Evaluasi tambahan dapat dilakukan dengan wireline logging dan formation-pressure atau sampling tools bila memang dibutuhkan. Setelah itu well construction dilanjutkan dengan casing dan cementing. Pada cased-hole completion, kualitas cement atau bonding dievaluasi, kemudian interval produktif dapat diperforasi agar reservoir berkomunikasi dengan wellbore. Tahap berikutnya adalah pemasangan completion equipment, artificial lift atau wellhead, testing, dan persiapan menuju production. Tentu sequence detail-nya bisa berbeda untuk tiap sumur dan tidak semua well memakai seluruh tools tersebut.",
    points: ["Drill & collect data", "Evaluate formation", "Casing & cementing", "Perforation/completion", "Testing menuju production"],
    note: "Tekankan bahwa urutan detail tergantung desain dan kondisi sumur. Jangan mengklaim semua tools selalu dipakai.", reference: "MAB II buku hal. 195–199 dan 109–110; Rig Hub hal. 29 dan 36."
  },
  {
    id: "english", title: "English Answer", category: "Personal", question: "Can you introduce yourself in English?", duration: 75,
    quick: "Hello, my name is Fawwaz Athar Suandhito, and I am a Mechanical Engineering graduate from ITB. During college, I explored several engineering fields, including aviation, energy, and oil and gas. My internship at PHR gave me exposure to drilling, workover and completion, well intervention, and routine well service. Through these experiences, I realized that I enjoy work involving real equipment, operations, data, and technical problem-solving. That is why I see this Operation Engineer role as a strong fit for my background and long-term career direction.",
    full: "Hello, my name is Fawwaz Athar Suandhito, and I am a Mechanical Engineering graduate from ITB. During college, I explored several engineering areas, from aviation through Aksantara and KRTI, to energy through projects and an internship at PLN Indonesia Power, and finally oil and gas through my internship at PHR and the International Mud Design Competition. At PHR, I gained exposure to drilling, workover and completion, well intervention, and routine well service, while also working on a structural analysis of a drawworks system. These experiences helped me realize that I am most interested in work involving real equipment, field operations, data, and technical problem-solving. For that reason, I believe this Operation Engineer role is highly relevant to my background and the career path I want to pursue.",
    points: ["Keep the vocabulary natural", "Mention PHR exposure", "End with role fit"],
    note: "Speak a little slower than Indonesian. It is better to sound clear and natural than to use overly complex vocabulary.", reference: "Materi 1 menyarankan menyiapkan versi Inggris untuk jawaban-jawaban utama."
  },
  {
    id: "excel", title: "Excel", category: "Data & Software", question: "Seberapa mahir Anda menggunakan Excel?", duration: 55,
    quick: "Saya cukup nyaman memakai Excel untuk pengolahan dan analisis data engineering. Saya lebih suka menjelaskan lewat contoh pekerjaan nyata daripada memberi label advanced. Saat ini saya menyiapkan workbook dari data tugas akhir calcium looping untuk cleaning data, melihat trend tiap cycle, membandingkan material, dan membuat dashboard ringkas. Fitur yang saya sebutkan tentu hanya yang benar-benar sudah saya gunakan dengan lancar.",
    full: "Saya cukup nyaman menggunakan Excel untuk pengolahan dan analisis data engineering. Dalam konteks operasi, saya memahami Excel bisa dipakai untuk tracking progress, melihat trend, KPI, downtime, equipment performance, cost, dan reporting. Pengalaman langsung saya lebih banyak pada data engineering, seperti analisis performa HPH di PLN dan eksperimen tugas akhir. Saat ini saya menyiapkan workbook calcium looping yang berisi raw-to-clean data, trend per cycle, perbandingan enam limestone, degradation metric, dan dashboard ringkas. Jadi saya lebih memilih menunjukkan contoh kerja nyata dan menyebut fitur seperti Pivot Table, lookup, atau Power Query hanya kalau memang sudah saya gunakan dengan lancar.",
    points: ["Nyaman untuk data engineering", "Contoh konkret TA/PLN", "Relevansi ke operasi", "Jujur soal fitur yang dikuasai"],
    note: "Jangan menyebut ‘advanced’ kalau belum siap mendemonstrasikan fiturnya saat itu juga.", reference: "Bagian C — Software, Data, WellView, dan Programming."
  },
  {
    id: "five-years", title: "Five-Year Plan", category: "Personal", question: "Dalam lima tahun ke depan Anda ingin menjadi seperti apa?", duration: 40,
    quick: "Dalam lima tahun saya ingin sudah punya fondasi yang kuat di operasi lapangan dan Well Services, mampu menangani masalah teknis serta data operasional dengan lebih mandiri, dan dipercaya mengambil tanggung jawab yang lebih besar. Fokus terdekat saya adalah membangun pengalaman kerja dan menjadi engineer yang konsisten serta bisa diandalkan.",
    full: "Dalam lima tahun ke depan saya berharap sudah memiliki pemahaman yang kuat tentang operasi lapangan, Well Services, keselamatan, dan workflow lintas fungsi. Saya ingin mampu menangani permasalahan teknis serta data operasional dengan lebih mandiri, ikut berkontribusi dalam peningkatan kinerja, dan dipercaya mengambil tanggung jawab yang lebih besar. Untuk saat ini S2 bukan prioritas terdekat; saya ingin membangun pengalaman nyata dan fondasi profesional yang kuat terlebih dahulu.",
    points: ["Fondasi operasi kuat", "Lebih mandiri", "Tanggung jawab bertambah", "Fokus pengalaman kerja"],
    note: "Hindari menyebut jabatan spesifik yang terlalu agresif. Fokus pada kompetensi dan kontribusi.", reference: "Bagian F dan Bonus — rencana lima tahun."
  },
  {
    id: "hobby", title: "Hobby", category: "Personal", question: "Apa hobi Anda?", duration: 25,
    quick: "Saya suka olahraga karena membantu menjaga stamina dan konsistensi. Selain itu saya juga suka mengaransemen lagu. Buat saya keduanya cukup seimbang: olahraga menjaga energi, sedangkan musik melatih kreativitas dan perhatian terhadap detail.",
    full: "Saya suka olahraga karena membantu saya tetap aktif, menjaga stamina, dan melatih konsistensi. Selain itu saya juga suka mengaransemen lagu. Saya menikmati proses menyusun bagian-bagian kecil supaya akhirnya terdengar harmonis. Buat saya dua hobi ini cukup seimbang: olahraga menjaga energi, sementara musik memberi ruang untuk kreativitas dan perhatian terhadap detail.",
    points: ["Olahraga = stamina dan konsistensi", "Musik = kreativitas dan detail"],
    note: "Cukup 15–25 detik kecuali interviewer terlihat ingin menggali lebih jauh.", reference: "Pertanyaan Personal Tambahan A2."
  },
  {
    id: "hse", title: "HSE", category: "HSE", question: "Apa arti HSE bagi Anda?", duration: 35,
    quick: "Buat saya, HSE adalah dasar dari setiap keputusan operasi. Target produksi tetap penting, tetapi tidak ada hasil yang layak kalau dicapai dengan mengorbankan keselamatan orang, lingkungan, well integrity, atau aset. Karena itu pekerjaan harus dimulai dari identifikasi hazard, kontrol yang tepat, dan keberanian untuk intervensi kalau kondisinya tidak aman.",
    full: "Buat saya, HSE bukan hanya checklist, tetapi dasar dari setiap keputusan operasi. Produksi, waktu, dan biaya memang penting, tetapi semuanya tidak berarti kalau dicapai dengan mengorbankan keselamatan personel, lingkungan, well integrity, atau aset. Karena itu sebelum pekerjaan dimulai kita perlu memahami hazard, barrier, prosedur, JSA, PPE, dan kontrol kerja yang relevan. Saat kondisi berubah atau ada situasi tidak aman, saya juga harus berani intervensi, berkoordinasi, dan memastikan mitigasi sudah efektif sebelum pekerjaan dilanjutkan.",
    points: ["Dasar setiap keputusan", "People, environment, integrity, asset", "Hazard dan barrier", "Berani intervensi"],
    note: "Kata kunci Pertamina: Patuh, Intervensi, Peduli. Jangan berhenti di slogan—jelaskan perilakunya.", reference: "MAB I hal. 115 — Fundamental Safe Work Practices; Golden Rules PIP."
  },
  {
    id: "integrity", title: "Integrity", category: "Behavioral", question: "Apa arti integritas bagi Anda?", duration: 30,
    quick: "Integritas adalah tetap jujur, konsisten, dan bertanggung jawab, termasuk saat hasil atau kondisi di lapangan tidak sesuai harapan. Artinya saya tidak menutupi data, tidak mengambil shortcut yang melanggar prosedur, dan tetap menyampaikan kondisi sebenarnya meskipun tidak ada yang mengawasi.",
    full: "Buat saya, integritas berarti bertindak jujur, konsisten, dan bertanggung jawab, bukan hanya ketika diawasi. Dalam pekerjaan operasi, bentuknya bisa sangat konkret: mencatat data apa adanya, menyampaikan deviasi atau kesalahan lebih awal, tidak mengambil shortcut yang melanggar prosedur, dan berani mengatakan kalau informasi yang saya punya belum cukup. Kepercayaan tim dibangun dari kebiasaan-kebiasaan itu.",
    points: ["Jujur pada data", "Tidak mengambil shortcut", "Berani menyampaikan deviasi", "Konsisten tanpa pengawasan"],
    note: "Kalau diminta contoh, pilih pengalaman nyata. Jangan membuat insiden yang tidak pernah terjadi.", reference: "Bonus — Apa arti integritas bagi Anda?"
  },
  {
    id: "job-expectation", title: "Job Expectation", category: "Personal", question: "Apa ekspektasi Anda jika diterima?", duration: 40,
    quick: "Saya ingin mendapat tanggung jawab yang jelas lalu menekuninya dengan serius. Saya akan memahami objective, workflow, standard, dan ekspektasi tim, kemudian menjalankannya dengan disiplin. Saya tentu ingin terus berkembang, tapi saya datang bukan sekadar untuk belajar—saya ingin menjadi orang yang bisa diandalkan untuk menyelesaikan tanggung jawab.",
    full: "Ekspektasi saya adalah mendapat tanggung jawab yang jelas dan kesempatan untuk menekuninya dengan serius. Di awal saya ingin memahami objective pekerjaan, workflow, standard, safety requirement, serta ekspektasi tim. Setelah itu fokus saya adalah menjalankan pekerjaan secara disiplin, terbuka terhadap feedback, dan terus memperkuat kompetensi dari pekerjaan sehari-hari. Jadi saya tidak ingin membingkainya sekadar sebagai tempat belajar; saya ingin bertumbuh sambil memberi kontribusi nyata dan menjadi orang yang bisa diandalkan.",
    points: ["Pahami objective dan standard", "Disiplin menjalankan tugas", "Growth + kontribusi", "Menjadi dapat diandalkan"],
    note: "Frasa ‘ingin belajar’ boleh dipakai, tetapi jangan menjadi pesan utama.", reference: "Pertanyaan Personal Tambahan A1."
  },
  {
    id: "kp-phr", title: "KP di PHR", category: "Experience", question: "Ceritakan pengalaman Kerja Praktik Anda di PHR.", duration: 75,
    quick: "Saya KP di tim Drilling & Well Intervention PHR dari 20 Januari sampai 28 Februari 2025. Selama sekitar satu setengah bulan itu saya mendapat exposure ke lebih dari 20 sumur, termasuk drilling, workover dan completion, well intervention, routine service, serta fasilitas produksi. Saya juga mengamati pekerjaan Rig Hub dan berinteraksi dengan kru BMS sebagai mitra kerja PHR. Project teknis saya adalah analisis pasak transmisi, poros, dan drum drawworks pada kondisi tubing pump stuck menggunakan perhitungan analitik, SOLIDWORKS, dan ANSYS.",
    full: "Pengalaman oil & gas utama saya adalah Kerja Praktik di tim Drilling & Well Intervention PHR dari 20 Januari sampai 28 Februari 2025, sekitar 30 hari kerja atau satu setengah bulan. Saya mendapat exposure ke lebih dari 20 sumur yang mencakup drilling, workover dan completion, well intervention, routine service, serta fasilitas produksi. Saya cukup banyak mengamati workflow Rig Hub Routine Service dan berinteraksi dengan kru rig BMS sebagai mitra kerja PHR. Untuk project teknis, saya menganalisis pasak transmisi, poros, dan drum drawworks pada kondisi tubing pump stuck menggunakan perhitungan analitik, SOLIDWORKS, dan ANSYS Mechanical. Dari sana saya belajar bahwa hasil operasi tidak hanya bergantung pada pemahaman teknis, tetapi juga pada HSE, readiness equipment, koordinasi lapangan, dan dokumentasi.",
    points: ["Tanggal resmi: 20 Jan–28 Feb 2025", "Exposure >20 sumur", "Rig Hub dan BMS", "Analisis drawworks", "Learning: technical + HSE + coordination"],
    note: "Sebut sekitar 1,5 bulan, bukan tepat dua bulan. Nama personel BMS hanya disebut kalau benar-benar sudah dikonfirmasi dari catatan pribadi.", reference: "Laporan KP resmi dan Bagian J.3 — Kerja Praktik PHR & Interaksi dengan BMS."
  },
  {
    id: "maintenance", title: "Maintenance", category: "Technical", question: "Apa perbedaan preventive dan corrective maintenance?", duration: 35,
    quick: "Preventive maintenance dilakukan sebelum equipment gagal, berdasarkan jadwal, jam operasi, atau kondisi tertentu, supaya kemungkinan breakdown bisa dikurangi. Corrective maintenance dilakukan setelah ditemukan kerusakan atau penurunan fungsi untuk mengembalikan equipment ke kondisi yang dibutuhkan. Keduanya tetap perlu didukung data dan prioritas risiko.",
    full: "Preventive maintenance adalah pekerjaan yang dilakukan sebelum terjadi kegagalan, misalnya berdasarkan interval waktu, jam operasi, inspeksi, atau trend kondisi equipment. Tujuannya mencegah breakdown dan menjaga reliability. Corrective maintenance dilakukan setelah ada kerusakan, deviasi, atau penurunan fungsi untuk mengembalikan equipment ke kondisi operasional yang dibutuhkan. Dalam praktiknya, prioritas maintenance tetap perlu melihat criticality, risiko HSE, dampak produksi, resource, dan rekomendasi teknis.",
    points: ["Preventive = sebelum gagal", "Corrective = setelah ada masalah", "Lihat condition dan criticality", "Tujuan: reliability"],
    note: "Jangan menyamakan corrective maintenance dengan selalu menunggu kerusakan total.", reference: "Bagian G — simulasi pertanyaan teknis dasar."
  },
  {
    id: "mud-competition", title: "Mud Design Competition", category: "Experience", question: "Apa yang Anda kerjakan di International Mud Design Competition?", duration: 65,
    quick: "Tim saya mengembangkan mechanical cuttings-bed remover untuk high-angle atau horizontal well. Kami membandingkan beberapa blade geometry dengan ANSYS Fluent dan prototype 3D printing, lalu mengembangkan konsep drilling fluid yang mempertimbangkan performance, HSSE, dan cost. Pengalaman itu membuat istilah drilling terasa lebih nyata karena terhubung langsung dengan masalah hole cleaning.",
    full: "Di International Mud Design Competition, tim saya mengembangkan mechanical cuttings-bed remover untuk high-angle atau horizontal well. Kami membandingkan beberapa alternatif blade geometry menggunakan ANSYS Fluent dan prototype 3D printing. Kami juga mengembangkan konsep drilling fluid dengan mempertimbangkan performance, HSSE, dan cost. Dalam proses belajar drilling dan completion, saya mendapat bimbingan mentor dari Matra Unikatama di Duri. Pengalaman ini menguatkan ketertarikan saya ke oil & gas karena saya melihat langsung bagaimana desain, fluid behavior, equipment, dan kondisi operasi bertemu pada problem nyata seperti hole cleaning.",
    points: ["Problem: cuttings bed", "CFD + prototype", "Performance, HSSE, cost", "Relevansi ke drilling"],
    note: "Dashboard Power BI adalah portfolio extension. Jangan katakan dashboard tersebut bagian asli dari kompetisi jika belum selesai.", reference: "Bagian J.4 — International Mud Design Competition."
  },
  {
    id: "operation-engineer", title: "Operation Engineer", category: "Technical", question: "Apa tugas seorang Operation Engineer?", duration: 50,
    quick: "Menurut saya, Operation Engineer memastikan pekerjaan berjalan aman, efisien, dan sesuai program. Perannya mencakup monitoring operasi, verifikasi data, analisis masalah, koordinasi dengan tim lapangan, engineer, vendor, dan support function, serta memastikan action dan reporting jelas. Jadi bukan hanya menyelesaikan masalah teknis, tetapi juga menjaga safety, schedule, cost, dan objective pekerjaan.",
    full: "Menurut saya, Operation Engineer bertanggung jawab memastikan operasi berjalan aman, efisien, sesuai prosedur, dan tetap mendukung objective pekerjaan. Aktivitasnya mencakup monitoring kondisi dan progress, memastikan data serta laporan akurat, menganalisis masalah, menilai dampaknya terhadap safety, integrity, waktu, biaya, dan produksi, lalu berkoordinasi dengan tim lapangan, engineer, vendor, maintenance, maupun fungsi pendukung. Operation Engineer juga perlu memastikan action owner dan next step jelas serta mendorong continuous improvement dari data operasi. Jadi perannya adalah gabungan technical understanding, coordination, decision support, dan disciplined reporting.",
    points: ["Safe and efficient execution", "Monitoring dan analisis", "Koordinasi lintas fungsi", "Report, action owner, next step"],
    note: "Jangan menggambarkan Operation Engineer seolah mengoperasikan atau memperbaiki semua alat sendiri.", reference: "Rig Hub hal. 15–17 dan simulasi pertanyaan Bagian G."
  },
  {
    id: "phr", title: "PHR", category: "Company", question: "Apa yang Anda ketahui tentang PHR?", duration: 50,
    quick: "PHR mengelola Wilayah Kerja Rokan di Riau, salah satu wilayah operasi migas yang sangat penting bagi produksi nasional. Operasinya mencakup drilling, workover, well intervention, routine service, fasilitas produksi, serta upaya peningkatan recovery. Yang saya tangkap, lingkungan kerjanya menuntut empat hal utama: safety, production, reliability, dan environmental compliance.",
    full: "PT Pertamina Hulu Rokan mengelola Wilayah Kerja Rokan di Provinsi Riau dan menjadi salah satu kontributor penting produksi minyak Indonesia. Untuk menjaga dan meningkatkan produksi, kegiatannya mencakup drilling, workover, well intervention, routine service, pengelolaan fasilitas produksi, serta penerapan teknologi dan continuous improvement. Karena skalanya besar dan operasinya kompleks, budaya keselamatan, disiplin operasional, reliability equipment, dan kepedulian lingkungan menjadi sangat penting. Bagi Operation Engineer, empat kata kunci yang saya pegang adalah safety, production, reliability, dan environmental compliance.",
    points: ["Wilayah Kerja Rokan, Riau", "Kontributor penting produksi", "Operasi kompleks", "Safety–Production–Reliability–Environment"],
    note: "Hindari angka produksi yang tidak Anda verifikasi menjelang interview. Gunakan pemahaman operasional yang stabil.", reference: "Bagian E — Pengetahuan Lingkungan Operasi PHR."
  },
  {
    id: "pln-experience", title: "PLN Experience", category: "Experience", question: "Apa yang Anda kerjakan saat internship di PLN Indonesia Power?", duration: 70,
    quick: "Di PLN Indonesia Power UBP Suralaya saya berada di lingkungan maintenance Unit 8. Project utama saya menganalisis High Pressure Heater 2 yang out of service menggunakan data performa termal aktual, Rankine cycle, dan heat balance untuk melihat dampaknya pada sistem. Pengalaman itu melatih saya menghubungkan kondisi equipment, data operasi, dan dampaknya terhadap performa sistem.",
    full: "Di PLN Indonesia Power UBP Suralaya saya berada di lingkungan maintenance Unit 8. Project utama saya adalah menganalisis kondisi High Pressure Heater 2 yang out of service menggunakan data performa termal aktual serta reasoning Rankine cycle dan heat balance untuk melihat dampaknya terhadap performa sistem. Selain project tersebut, saya mengamati workflow boiler, turbine, Balance of Plant, inspection, maintenance, preservation, dan equipment reliability pada unit 625 MW. Hal yang paling relevan untuk Operation Engineer adalah saya belajar melihat equipment sebagai bagian dari sistem: kondisi satu equipment perlu dihubungkan dengan data operasi, risiko, dan dampaknya terhadap overall performance.",
    points: ["Maintenance Unit 8", "HPH 2 out of service", "Thermal data + heat balance", "Equipment dalam konteks sistem"],
    note: "Kalau ditanya hasil numerik, gunakan hanya angka yang memang ada di laporan atau yang Anda ingat dengan yakin.", reference: "Bagian J.1 — Pengalaman PLN Indonesia Power."
  },
  {
    id: "position-applied", title: "Position Applied", category: "Personal", question: "Apakah benar Anda melamar untuk posisi Completion Engineer?", duration: 20,
    quick: "Betul, posisi yang saya lamar adalah Operation Engineer pada area Drilling and Well Workover, Well Service Project, dengan title Jr. Completion / Operation Engineer.",
    full: "Betul. Posisi yang saya lamar adalah Operation Engineer pada area Drilling and Well Workover, Well Service Project, dengan title Jr. Completion / Operation Engineer. Dari scope tersebut, saya memahami bahwa perannya akan banyak bersinggungan dengan program readiness, koordinasi eksekusi well service atau workover, monitoring operasi, HSE, data, dan reporting.",
    points: ["Sebut jabatan dengan tepat", "Tunjukkan paham area kerja"],
    note: "Gunakan title persis seperti undangan atau lowongan terbaru bila interviewer mengoreksi penyebutannya.", reference: "Bagian A dan konteks posisi dari pengguna."
  },
  {
    id: "production-drop", title: "Production Drop", category: "Case Study", question: "Produksi turun 20% dalam satu minggu. Apa yang Anda lakukan?", duration: 60,
    quick: "Saya tidak akan langsung menyimpulkan penyebabnya. Pertama saya verifikasi data dan bandingkan dengan baseline serta trend historis. Setelah itu saya cek apakah penurunan berasal dari sumur, artificial lift, fasilitas permukaan, downtime, perubahan operasi, atau kualitas datanya. Saya nilai dampaknya, koordinasikan pemeriksaan dengan pihak terkait, lalu usulkan tindakan berdasarkan penyebab yang sudah terkonfirmasi dan monitor hasilnya.",
    full: "Saya akan mulai dengan memastikan data penurunan tersebut valid: source, periode, frekuensi pembacaan, dan apakah ada perubahan metode pencatatan. Lalu saya bandingkan trend historis dan breakdown per sumur atau fasilitas untuk mempersempit sumber masalah. Berikutnya saya cek kondisi well dan artificial lift, alarm, downtime, tekanan dan laju alir, flowline, separator, tank, serta perubahan aktivitas operasi. Saya pisahkan fakta dan hipotesis, lalu koordinasi dengan field operation, production, maintenance, atau fungsi lain sesuai scope. Setelah penyebab lebih jelas, saya nilai dampak safety dan production, susun opsi tindakan, eskalasi sesuai kewenangan, dan monitor apakah produksi pulih setelah tindakan dilakukan.",
    points: ["Validate data", "Bandingkan baseline dan trend", "Narrow down source", "Coordinate and act", "Monitor recovery"],
    note: "Jangan langsung menjawab ‘pompa rusak’. Interviewer biasanya menilai cara berpikir, bukan tebakan diagnosis.", reference: "Framework FACT → IMPACT → VERIFY → ACTION → ESCALATE → REPORT."
  },
  {
    id: "pump-failure", title: "Pump Failure", category: "Case Study", question: "Pompa tiba-tiba berhenti. Apa langkah pertama Anda?", duration: 55,
    quick: "Langkah pertama tetap memastikan kondisi aman. Setelah itu saya verifikasi apakah pompanya benar-benar stop dari data, alarm, dan kondisi lapangan. Saya cek power supply, parameter operasi sebelum trip, kondisi suction dan discharge, serta indikasi mekanis atau proses. Setelah masalah dipersempit, saya koordinasi dengan operator atau maintenance sesuai kewenangan, menilai dampaknya, lalu memastikan status dan next action terlaporkan.",
    full: "Pertama saya pastikan kondisi aman untuk personel dan equipment, termasuk potensi pressure, electrical hazard, atau spill. Setelah itu saya verifikasi kondisi aktual dari alarm, data operasi, dan konfirmasi lapangan—bukan langsung melakukan restart. Saya cek power supply, interlock, parameter sebelum trip, suction dan discharge pressure, flow, temperature atau vibration bila tersedia, serta kemungkinan blockage, loss of prime, atau masalah mekanis. Temuan saya dokumentasikan, kemudian saya koordinasikan dengan operator, electrical, atau maintenance sesuai scope dan authority. Terakhir saya nilai dampak terhadap operasi, sampaikan status, action owner, dan waktu update berikutnya.",
    points: ["Safety first", "Verify actual condition", "Review alarm and parameters", "Coordinate by authority", "Report impact and next step"],
    note: "Jangan menyarankan restart sebelum penyebab trip dan kondisi aman diverifikasi.", reference: "Rig Hub hal. 37 dan 39; case study equipment/pump gagal."
  },
  {
    id: "relocation", title: "Relocation to Riau", category: "Personal", question: "Apakah Anda siap ditempatkan dan tinggal di Riau?", duration: 45,
    quick: "Saya siap. Saya masih lajang, jadi cukup fleksibel untuk pindah dan menetap sesuai kebutuhan pekerjaan. Riau, terutama Minas dan Duri, juga bukan lingkungan asing karena saya pernah tumbuh di sana saat kecil. Jadi secara personal saya familiar, dan secara profesional saya memang tertarik kembali untuk membangun karier di lingkungan operasi ini.",
    full: "Ya, saya siap ditempatkan dan tinggal di Riau. Saya masih lajang sehingga cukup fleksibel mengikuti kebutuhan perusahaan, baik penempatan lapangan, roster, shift, maupun call-out sesuai aturan kerja. Minas dan Duri juga bukan tempat yang asing bagi saya karena saya pernah tinggal di wilayah tersebut saat kecil mengikuti ayah saya yang bekerja di lingkungan migas. Jadi saya sudah cukup familiar dengan kondisi daerahnya dan melihat penempatan ini sebagai kesempatan untuk benar-benar membangun karier di operasi.",
    points: ["Siap dan fleksibel", "Lajang", "Familiar dengan Minas–Duri", "Komitmen profesional"],
    note: "Ungkapan ‘air Siak’ hanya dipakai sebagai ice-breaker kalau suasana sudah santai.", reference: "Bagian A — keluarga, relokasi, dan familiarity Duri/Minas."
  },
  {
    id: "risk-assessment", title: "Risk Assessment", category: "HSE", question: "Apa itu Risk Assessment?", duration: 45,
    quick: "Risk Assessment adalah proses untuk mengidentifikasi hazard, menilai likelihood dan consequence, lalu menentukan kontrol sampai risikonya bisa diterima sebelum pekerjaan dimulai. Kontrolnya sebaiknya mengikuti hierarchy of controls, dan assessment perlu ditinjau lagi kalau kondisi atau scope pekerjaan berubah.",
    full: "Risk Assessment adalah proses sistematis untuk mengidentifikasi hazard, menilai kemungkinan dan konsekuensinya, menentukan risk level, lalu menetapkan kontrol agar residual risk dapat diterima sebelum pekerjaan dilakukan. Kontrol sebaiknya mengikuti hierarchy of controls, bukan langsung mengandalkan PPE. Hasilnya perlu dikomunikasikan melalui JSA atau toolbox talk, dan harus direview kembali kalau ada perubahan scope, kondisi well, equipment, personel, atau pekerjaan simultan.",
    points: ["Identify hazard", "Assess likelihood × consequence", "Apply controls", "Check residual risk", "Review when conditions change"],
    note: "PPE adalah lapisan kontrol terakhir, bukan jawaban utama untuk semua hazard.", reference: "MAB I hal. 115; Rig Hub hal. 128 dan 142."
  },
  {
    id: "root-cause-analysis", title: "Root Cause Analysis", category: "Problem Solving", question: "Apa yang dimaksud Root Cause Analysis?", duration: 45,
    quick: "RCA adalah pendekatan untuk menemukan penyebab utama suatu masalah, bukan berhenti di gejalanya. Saya mulai dari fakta dan timeline, lalu memakai tools seperti 5 Why atau Fishbone untuk menguji kemungkinan penyebab. Setelah corrective action dijalankan, hasilnya perlu diverifikasi supaya masalah yang sama tidak terulang.",
    full: "Root Cause Analysis adalah pendekatan terstruktur untuk mencari penyebab utama suatu kejadian agar solusi tidak hanya menghilangkan gejala. Saya akan mulai dengan mengamankan kondisi, mengumpulkan fakta, data, dan timeline, lalu memisahkan apa yang sudah terkonfirmasi dari asumsi. Tools seperti 5 Why, Fishbone, atau Pareto dapat membantu menguji faktor manusia, mesin, metode, material, measurement, dan environment. Dari sana dibuat corrective dan preventive action dengan owner serta target waktu yang jelas, lalu efektivitasnya diverifikasi.",
    points: ["Fakta dan timeline", "Bedakan gejala vs akar", "Tools sesuai kebutuhan", "Action owner", "Verify effectiveness"],
    note: "RCA bukan mencari siapa yang salah. Fokusnya memahami sistem dan mencegah pengulangan.", reference: "Rig Hub hal. 17 dan 33–34; Bagian D — Continuous Improvement."
  },
  {
    id: "salary", title: "Salary Expectation", category: "Personal", question: "Berapa ekspektasi gaji Anda?", duration: 35,
    quick: "Berdasarkan informasi pada undangan yang saya terima, rate yang dicantumkan sekitar 16,5 juta rupiah per bulan dan angka tersebut sudah sesuai untuk saya. Saya tetap terbuka mengikuti struktur, benefit, scope tanggung jawab, dan ketentuan perusahaan.",
    full: "Berdasarkan informasi pada undangan yang saya terima, rate yang dicantumkan sekitar 16,5 juta rupiah per bulan dan angka tersebut sudah sesuai untuk saya. Saya memahami kompensasi juga berkaitan dengan scope tanggung jawab, pola kerja, benefit, serta struktur perusahaan, jadi saya tetap terbuka mendiskusikan keseluruhan package. Prioritas saya adalah mendapatkan peran yang tepat untuk membangun pengalaman profesional dan kontribusi jangka panjang.",
    points: ["Rujuk angka dari undangan", "Terbuka pada total package", "Tetap profesional"],
    note: "Pastikan angka 16,5 juta masih sama dengan undangan terbaru. Jangan spontan menurunkan ekspektasi sebelum diminta.", reference: "Bagian A — harapan besaran gaji."
  },
  {
    id: "safety-vs-production", title: "Safety vs Production", category: "Case Study", question: "Risiko keselamatan muncul saat target produksi sedang kritis. Apa pilihan Anda?", duration: 50,
    quick: "Saya prioritaskan keselamatan. Saya akan hentikan atau tahan pekerjaan bila diperlukan, pastikan hazard dan dampaknya dipahami, lalu terapkan mitigasi sebelum operasi dilanjutkan. Target produksi tetap penting, jadi setelah kondisi aman saya akan koordinasikan recovery plan yang paling efisien. Tapi produksi tidak boleh dicapai dengan mengorbankan orang, lingkungan, integrity, atau aset.",
    full: "Saya akan memprioritaskan keselamatan dan well integrity. Jika risikonya membutuhkan intervensi, pekerjaan harus dihentikan atau ditahan sesuai kewenangan. Setelah itu saya pastikan hazard, barrier yang gagal atau melemah, serta potensi konsekuensinya dipahami. Tim terkait perlu dilibatkan untuk menetapkan kontrol dan memastikan residual risk dapat diterima sebelum restart. Target produksi tetap dikelola melalui komunikasi dampak dan recovery plan, tetapi tidak boleh dicapai dengan mengorbankan personel, lingkungan, well integrity, atau aset.",
    points: ["Stop/intervene if needed", "Understand hazard and barrier", "Mitigate before restart", "Build recovery plan after safe"],
    note: "Jawaban harus tegas: safety lebih dulu. Efisiensi dibahas setelah kondisi aman.", reference: "MAB I hal. 115 — FSWP; Golden Rules Pertamina."
  },
  {
    id: "software", title: "Software Engineering", category: "Data & Software", question: "Software engineering apa saja yang pernah Anda gunakan?", duration: 55,
    quick: "Saya pernah menggunakan Excel, SOLIDWORKS, CATIA V5, ANSYS Mechanical dan Fluent, serta MATLAB dan Simulink untuk kebutuhan engineering. Untuk data, saya pernah belajar SQL dan Python saat kuliah. Sekarang saya sedang memperdalam Oracle SQL dan menyiapkan Power BI sebagai portfolio. Saya selalu membedakan software yang sudah dipakai dalam project dengan yang masih saya tingkatkan.",
    full: "Untuk engineering, saya pernah menggunakan SOLIDWORKS dan CATIA V5 untuk CAD, ANSYS Mechanical untuk analisis struktur, ANSYS Fluent untuk CFD, serta MATLAB dan Simulink dalam pembelajaran engineering. Saya juga cukup nyaman dengan Excel untuk pengolahan data. Untuk data dan programming, saya pernah mempelajari SQL serta Python saat kuliah, dan sekarang sedang memperdalam Oracle SQL serta menyiapkan portfolio Power BI. Saya akan menjelaskan levelnya secara jujur: mana yang memang pernah saya gunakan dalam project, mana yang saya pelajari saat kuliah, dan mana yang sedang saya upgrade sekarang.",
    points: ["CAD/CAE", "Engineering analysis", "Data tools", "Jujur soal level dan konteks"],
    note: "Siapkan satu contoh project untuk setiap software utama yang Anda sebut.", reference: "Bagian C — software dan cara menjawab level secara jujur."
  },
  {
    id: "strength", title: "Strength", category: "Behavioral", question: "Apa kelebihan utama Anda?", duration: 45,
    quick: "Kelebihan utama saya adalah growth mindset, kemampuan analitis, dan competitive drive yang sehat. Saya cukup nyaman memecah masalah menjadi fakta, asumsi, kemungkinan penyebab, dan tindakan. Pengalaman di beberapa bidang juga membuat saya cepat belajar dan beradaptasi, tetapi sekarang arah saya sudah jelas: saya ingin menekuni operasi migas.",
    full: "Kelebihan utama saya adalah growth mindset, kemampuan analitis, dan competitive drive yang sehat. Saat menghadapi masalah, saya cukup nyaman memecahnya menjadi fakta yang sudah ada, data yang masih dibutuhkan, asumsi, kemungkinan penyebab, dan tindakan. Pengalaman saya di aviasi, electrical dan energy, mechanical project, sampai oil & gas juga membuat saya cukup cepat memahami konteks teknis baru. Eksplorasi itu bukan membuat saya kehilangan arah; justru membantu saya memastikan bahwa pekerjaan operasi migas adalah bidang yang ingin saya tekuni.",
    points: ["Growth mindset", "Analytical thinking", "Adaptability", "Arah karier sudah jelas"],
    note: "Sertakan bukti bila digali. Sifat tanpa contoh mudah terdengar generik.", reference: "Bagian F dan G — potensi pengembangan dan kelebihan."
  },
  {
    id: "study-case", title: "Study Case Framework", category: "Case Study", question: "Bagaimana kerangka Anda saat menghadapi studi kasus operasi?", duration: 70,
    quick: "Saya pakai urutan: safety dulu, klarifikasi objective, kumpulkan fakta, identifikasi jenis masalah, nilai dampak, susun opsi dan risikonya, lalu koordinasi atau eskalasi. Terakhir, saya pastikan status, action owner, dan next update jelas. Intinya saya pisahkan fakta dari dugaan dan tidak mengubah program sendiri tanpa authority.",
    full: "Saya mulai dari safety: hazard, barrier, dan well integrity harus jelas. Lalu saya klarifikasi objective job serta kondisi awal sumur. Setelah itu saya pisahkan data yang confirmed, data yang belum tersedia, dan asumsi. Masalahnya saya kategorikan, misalnya program atau design, operational atau equipment, well condition, material dan logistics, atau data dan reporting. Saya nilai dampaknya ke safety, integrity, schedule, cost, dan production opportunity. Baru setelah itu saya susun opsi high-level beserta risikonya, koordinasi dengan pihak yang memiliki kewenangan, dan melakukan eskalasi bila perlu. Terakhir, saya sampaikan fakta, dampak, action owner, serta waktu update berikutnya secara ringkas.",
    points: ["Safety first", "Clarify objective", "Facts, not assumptions", "Impact and options", "Escalate by authority", "Report next step"],
    note: "Mnemonic: FACT → IMPACT → VERIFY → ACTION → ESCALATE → REPORT.", reference: "Rig Hub hal. 17 — Troubleshooting Problem Flow Chart."
  },
  {
    id: "supervisor-disagreement", title: "Supervisor Disagreement", category: "Behavioral", question: "Bagaimana jika Anda berbeda pendapat dengan supervisor?", duration: 45,
    quick: "Saya akan menyampaikan pandangan dengan data, risiko, dan alasan yang jelas, bukan sekadar opini. Saya juga akan dengarkan konteks yang mungkin belum saya ketahui. Kalau sudah diputuskan dan tidak ada pelanggaran safety atau aturan, saya akan mendukung keputusan tersebut. Tetapi kalau ada risiko serius, saya tetap wajib menyampaikan concern dan mengikuti jalur eskalasi yang berlaku.",
    full: "Saya akan menyampaikan analisis secara profesional dengan memisahkan fakta, asumsi, risiko, dan opsi yang saya lihat. Saya juga perlu mendengarkan karena supervisor mungkin memiliki konteks operasional atau informasi yang belum saya miliki. Setelah keputusan diambil, selama tetap sesuai prosedur, authority, dan tidak mengorbankan keselamatan, saya akan mendukung eksekusinya. Namun jika saya melihat risiko serius terhadap personel, well integrity, lingkungan, atau aset, saya tetap perlu menyampaikan concern dengan tegas dan mengikuti jalur intervensi atau eskalasi yang berlaku.",
    points: ["Data, bukan ego", "Dengarkan konteks", "Support final decision", "Escalate genuine safety concern"],
    note: "Tunjukkan respect dan keberanian sekaligus; jangan terdengar pasif atau konfrontatif.", reference: "Bagian G — berbeda pendapat dengan supervisor."
  },
  {
    id: "s2-plan", title: "S2 Plan", category: "Personal", question: "Apakah ada rencana melanjutkan S2?", duration: 30,
    quick: "Dalam waktu dekat belum menjadi prioritas. Saya ingin fokus membangun pengalaman nyata, memahami operasi secara mendalam, dan menekuni tanggung jawab profesional lebih dulu. Kalau nanti studi lanjut memang relevan dengan kebutuhan pengembangan, tentu bisa saya pertimbangkan pada waktu yang tepat.",
    full: "Dalam waktu dekat S2 belum menjadi prioritas saya. Saya ingin fokus bekerja terlebih dahulu, membangun pengalaman nyata, memahami operasi secara mendalam, dan menekuni tanggung jawab profesional sampai memiliki fondasi yang kuat. Ke depan saya tetap terbuka terhadap studi lanjut kalau memang relevan dengan kebutuhan pengembangan dan pekerjaan, tetapi fokus saya sekarang adalah memberikan kontribusi yang konsisten melalui pekerjaan.",
    points: ["Tidak dalam waktu dekat", "Fokus kerja dan pengalaman", "Terbuka bila relevan nanti"],
    note: "Pastikan jawaban menunjukkan komitmen kerja, bukan menutup diri terhadap pengembangan.", reference: "Pertanyaan Personal Tambahan A3."
  },
  {
    id: "ta-calcium-looping", title: "Tugas Akhir", category: "Experience", question: "Ceritakan tugas akhir Anda.", duration: 75,
    quick: "Tugas akhir saya membahas repeated calcium looping untuk CO2 capture menggunakan enam sumber limestone Indonesia. Saya menjalankan sepuluh siklus calcination–carbonation, termasuk sample preparation, operasi reaktor temperatur tinggi, kontrol aliran gas, kalibrasi flowmeter, pengukuran massa, serta evaluasi XRD dan SEM-EDS. Pelajaran utamanya adalah menjaga konsistensi prosedur, membaca trend degradasi material, dan menghubungkan data dengan mekanisme fisiknya.",
    full: "Tugas akhir saya membahas repeated calcium looping for CO2 capture menggunakan limestone Indonesia. Saya menguji enam sumber limestone melalui sepuluh siklus calcination–carbonation. Pekerjaannya mencakup sample preparation, operasi reaktor temperatur tinggi, gas-flow control, kalibrasi flowmeter, mass measurement, serta evaluasi XRD dan SEM-EDS. Saya tidak hanya mengumpulkan hasil, tetapi juga melihat trend degradasi antar siklus dan mencoba menjelaskannya melalui mekanisme seperti sintering, pore narrowing, agglomeration, dan diffusion limitation. Dari project ini saya belajar pentingnya prosedur yang konsisten, repeatability, pengecekan data, dan kemampuan menghubungkan hasil eksperimen dengan penjelasan engineering.",
    points: ["6 limestone × 10 cycles", "High-temperature experiment", "Flow and measurement control", "XRD + SEM-EDS", "Trend and mechanism"],
    note: "Untuk pertanyaan kendala terbesar, pilih masalah yang benar-benar terjadi. Jangan mengambil contoh hipotetis dari dokumen.", reference: "Bagian J.2 — Tugas Akhir Calcium Looping."
  },
  {
    id: "tight-deadline", title: "Tight Deadline", category: "Behavioral", question: "Tim harus menyelesaikan pekerjaan dalam waktu sangat terbatas. Apa yang Anda lakukan?", duration: 45,
    quick: "Saya akan mulai dengan menentukan pekerjaan yang paling critical berdasarkan safety, impact, dan dependency. Tugas dan owner harus jelas, progress dipantau lebih sering, dan hambatan diangkat lebih awal. Saya akan mencari cara kerja yang lebih efisien, tetapi tidak menghapus kontrol keselamatan atau mengambil shortcut yang berisiko.",
    full: "Saya akan menyelaraskan dulu objective dan batas waktu, kemudian memecah pekerjaan menjadi aktivitas, dependency, dan milestone. Prioritas ditentukan dari safety, critical path, dampak operasional, serta resource yang tersedia. Setiap action perlu punya owner dan waktu update yang jelas, sementara bottleneck atau konflik prioritas harus dikomunikasikan lebih awal. Saya juga akan meningkatkan frekuensi monitoring dan koordinasi. Efisiensi tetap dicari, tetapi prosedur, quality check, dan kontrol keselamatan tidak boleh dikorbankan demi terlihat cepat.",
    points: ["Prioritize by risk and impact", "Clarify owner and dependency", "Frequent progress check", "No unsafe shortcut"],
    note: "Interviewer ingin melihat prioritas dan komunikasi, bukan jawaban ‘saya akan bekerja lebih keras’.", reference: "Bagian G — tim dengan waktu sangat terbatas."
  },
  {
    id: "unsafe-condition", title: "Unsafe Condition", category: "HSE", question: "Apa yang Anda lakukan jika melihat kondisi tidak aman?", duration: 45,
    quick: "Saya akan intervensi dan meminta pekerjaan dihentikan bila memang diperlukan. Setelah area aman, saya laporkan kondisinya, pastikan hazard dan penyebabnya dipahami, lalu koordinasikan mitigasi dengan pihak terkait. Pekerjaan baru dilanjutkan setelah kontrolnya diterapkan, dikomunikasikan, dan kondisi dinilai aman.",
    full: "Jika saya melihat kondisi tidak aman, saya akan segera mengingatkan orang yang terlibat dan menggunakan Stop Work Authority bila tingkat risikonya memang membutuhkan penghentian. Prioritas pertama adalah membuat kondisi aman tanpa menambah paparan. Setelah itu saya dokumentasikan dan laporkan kondisi tersebut kepada pihak yang berwenang, lalu ikut memastikan hazard, perubahan kondisi, dan barrier yang dibutuhkan sudah dipahami. Mitigasi harus diterapkan serta dikomunikasikan melalui briefing atau JSA update sebelum pekerjaan dilanjutkan.",
    points: ["Intervene", "Make condition safe", "Report and assess", "Apply controls", "Rebrief before restart"],
    note: "Gunakan nada tegas tetapi tidak menyalahkan orang. Fokus pada kondisi dan kontrol.", reference: "MAB I hal. 115; SWA dan Golden Rules PIP."
  },
  {
    id: "weakness", title: "Weakness", category: "Behavioral", question: "Apa kelemahan Anda?", duration: 55,
    quick: "Kadang saya terlalu mudah menerima banyak pekerjaan karena ingin membantu dan menyelesaikan semuanya. Kalau tidak dikendalikan, workload bisa menumpuk. Sekarang saya lebih disiplin membuat prioritas berdasarkan urgency dan impact, memperkirakan kapasitas sejak awal, membagi pekerjaan menjadi milestone, dan lebih cepat berkomunikasi kalau ada konflik prioritas.",
    full: "Salah satu kekurangan saya adalah kadang terlalu mudah menerima banyak pekerjaan karena ingin membantu dan punya sense of ownership yang tinggi. Saya belajar bahwa kalau tidak dikendalikan, hal itu bisa membuat beban menumpuk dan fokus terpecah. Sekarang saya lebih disiplin memetakan urgency, impact, effort, dan deadline sebelum berkomitmen. Saya membagi pekerjaan menjadi milestone, memantau kapasitas, dan berkomunikasi lebih awal jika ada konflik prioritas. Jadi saya tetap menjaga ownership, tetapi dengan pengelolaan workload yang lebih sehat.",
    points: ["Kelemahan nyata", "Dampak dipahami", "Ada sistem perbaikan", "Tetap menjaga ownership"],
    note: "Bila strength dan weakness ditanya bersamaan, materi menyarankan weakness dijawab lebih dulu lalu ditutup dengan strength.", reference: "Bagian G — Kelemahan."
  },
  {
    id: "well-completion", title: "Well Completion", category: "Technical", question: "Apa yang dimaksud dengan well completion?", duration: 60,
    quick: "Well completion adalah rangkaian pekerjaan untuk menyiapkan sumur yang sudah dibor agar bisa berproduksi atau diinjeksi dengan aman dan terkendali. Scope-nya bergantung desain sumur, tetapi bisa mencakup evaluasi casing dan cement, perforasi pada cased hole, pemasangan tubing dan downhole equipment, artificial lift, wellhead, serta testing sebelum sumur masuk produksi.",
    full: "Well completion adalah tahap untuk mengubah sumur yang sudah dibor menjadi sumur yang siap berproduksi atau melakukan injeksi secara aman, andal, dan sesuai objective reservoir. Konfigurasinya bisa open hole, open-hole liner, cased hole, atau cased-hole liner, tergantung kondisi formasi dan desain. Pada cased-hole completion, interval produktif biasanya dihubungkan ke wellbore melalui perforasi setelah casing dan cement dinilai memadai. Setelah itu dipasang completion string, tubing, downhole equipment, artificial lift atau wellhead sesuai kebutuhan, lalu dilakukan testing dan persiapan menuju production. Detail sequence selalu mengikuti well program dan kondisi aktual sumur.",
    points: ["Membuat sumur siap produksi/injeksi", "Desain berbeda tiap sumur", "Casing/cement/perforation", "Tubing, downhole equipment, lift/wellhead", "Testing"],
    note: "Bedakan ‘completion’ sebagai tahap/konstruksi sumur dengan jabatan Completion Engineer.", reference: "MAB II Bab VIII, buku hal. 195–199 (PDF 202–206)."
  },
  {
    id: "wellview", title: "WellView", category: "Data & Software", question: "Apa yang Anda ketahui tentang WellView?", duration: 60,
    quick: "WellView adalah aplikasi untuk mencatat dan mengelola data operasi sumur setelah atau selama job berlangsung. Saat KP, saya melihat WSR menginput informasi seperti well, program, waktu, cost, step pekerjaan, tubing string, dan HSSE. Data yang rapi kemudian bisa dipakai engineer untuk evaluasi, reporting, dan continuous improvement melalui Excel, Power BI, atau query database sesuai akses dan sistem perusahaan.",
    full: "WellView adalah aplikasi well information management untuk mencatat dan mengelola data operasi sumur. Saat KP di PHR, saya melihat WSR melakukan input data job seperti identitas well, program, waktu, cost, step-by-step pekerjaan sesuai well program, tubing string, serta informasi HSSE. Nilai utamanya bukan sekadar menyimpan data: engineer dapat memakai data historis tersebut untuk review pekerjaan, membandingkan plan versus actual, menganalisis cycle time atau failure, dan membuat reporting. Materi juga menjelaskan bahwa datanya terhubung ke database Oracle dan dapat diolah lebih lanjut melalui SQL, Excel, atau Power BI sesuai authority dan arsitektur perusahaan.",
    points: ["Well operations data", "Input oleh WSR", "Time, cost, steps, tubing, HSSE", "Historian for analysis and reporting"],
    note: "Katakan ‘saya melihat penggunaannya’, bukan mengklaim sebagai administrator atau expert WellView.", reference: "Rig Hub hal. 168, 171–172 — data requirement, setting, dan input tubing pump."
  },
  {
    id: "why-hire-me", title: "Why Hire Me", category: "Personal", question: "Mengapa perusahaan harus memilih Anda?", duration: 55,
    quick: "Saya membawa kombinasi dasar mechanical engineering, exposure langsung di PHR, pengalaman menganalisis equipment dan data operasi, serta kemauan belajar yang tinggi. Saya juga sudah mengeksplor beberapa bidang dan justru dari sana makin yakin bahwa pekerjaan yang menggabungkan field operation, mechanical equipment, data, problem solving, dan koordinasi adalah arah yang ingin saya tekuni serius.",
    full: "Saya membawa kombinasi yang relevan untuk posisi ini: dasar Teknik Mesin ITB, exposure langsung ke lingkungan PHR, pengalaman menganalisis equipment dan operational data, serta kebiasaan belajar lintas bidang. Saat KP saya melihat hubungan antara well program, kesiapan equipment, eksekusi lapangan, HSE, dan reporting. Pengalaman di PLN, tugas akhir, dan beberapa project juga melatih saya menghubungkan data dengan kondisi equipment dan mengambil pendekatan problem solving yang terstruktur. Saya memang masih di awal karier, tetapi saya datang dengan arah yang sudah jelas dan niat untuk menekuni tanggung jawab Operation Engineer secara serius.",
    points: ["Mechanical foundation", "PHR field exposure", "Equipment + data analysis", "Clear commitment to the role"],
    note: "Akui posisi sebagai fresh graduate secara elegan, lalu tekankan kesiapan dan bukti relevan.", reference: "Bagian G — Mengapa perusahaan harus memilih Anda?"
  },
  {
    id: "why-oil-gas", title: "Why Oil & Gas", category: "Motivation", question: "Kenapa Anda memilih karier di oil & gas?", duration: 60,
    quick: "Saya memang sempat mengeksplor aviasi, electrical, dan energy. Tapi saat mendapat exposure langsung di PHR lalu mengikuti Mud Design Competition, saya merasa oil & gas paling cocok karena problem-nya multidisiplin, dekat dengan real equipment, dan keputusan engineering-nya langsung berdampak ke operasi. Jadi eksplorasi itu justru membantu saya memastikan bidang yang ingin saya tekuni.",
    full: "Selama kuliah saya sengaja mengeksplor beberapa bidang: aviasi, electrical, renewable energy, power plant, dan beberapa kompetisi engineering. Ketika mendapat exposure langsung di PHR dan kemudian mengikuti Mud Design Competition, saya menemukan bahwa lingkungan oil & gas paling sesuai dengan hal yang saya nikmati. Problem-nya multidisiplin, dekat dengan real equipment, membutuhkan data dan koordinasi, serta keputusan engineering-nya langsung terkait dengan operasi dan keselamatan. Jadi perjalanan eksplorasi saya bukan tanda tidak fokus; justru proses yang membuat saya lebih yakin bahwa oil & gas adalah bidang yang ingin saya tekuni secara profesional.",
    points: ["Eksplorasi yang disengaja", "Titik konvergensi di PHR", "Multidisciplinary + real equipment", "Arah kini jelas"],
    note: "Jangan defensif soal pengalaman lintas bidang. Bingkai sebagai explorer → convergence.", reference: "Personal narrative — Explorer → Convergence to Oil & Gas."
  },
  {
    id: "why-phr", title: "Why PHR", category: "Motivation", question: "Mengapa ingin bergabung dengan PHR?", duration: 70,
    quick: "Alasannya personal sekaligus profesional. Saya pernah tumbuh di Minas–Duri dan sejak kecil familiar dengan lingkungan migas. Tapi keputusan karier saya bukan hanya karena itu: saya memilih Teknik Mesin, mencari exposure melalui KP di PHR, internship energi, mata kuliah upstream, dan Mud Design Competition. Dari proses itu saya makin yakin ingin menekuni operasi migas, dan PHR adalah tempat yang relevan untuk menggabungkan mechanical engineering, data, serta field problem solving.",
    full: "Ketertarikan saya ke PHR bersifat personal sekaligus profesional. Saya pernah tumbuh di Minas–Duri, jadi sejak kecil familiar melihat pumping unit dan mendengar cerita pekerjaan lapangan dari ayah saya. Tetapi keputusan karier saya tidak berhenti pada latar belakang tersebut. Saya memilih Teknik Mesin, lalu mencari exposure sendiri melalui KP di PHR, internship di sektor energi, mata kuliah upstream, dan International Mud Design Competition. Saat KP saya melihat skala operasi, pentingnya HSE, serta bagaimana program, equipment, data, dan koordinasi bertemu di lapangan. Pengalaman itu membuat saya semakin yakin ingin menekuni operasi migas dan memberi kontribusi lewat dasar mechanical engineering, analytical thinking, dan kemampuan belajar saya.",
    points: ["Personal connection", "Independent effort and proof", "Direct PHR exposure", "Clear professional fit"],
    note: "Jadikan cerita masa kecil sebagai hook, bukan satu-satunya alasan bergabung.", reference: "Bagian A dan G — motivasi serta alasan bergabung dengan PHR."
  },
  {
    id: "workover-vs-service", title: "Workover vs Well Service", category: "Technical", question: "Apa perbedaan workover dan routine well service?", duration: 65,
    quick: "Workover adalah pekerjaan ulang yang mengubah atau memperbaiki kondisi downhole maupun konfigurasi sumur, misalnya perforating, cementing, fishing, milling, casing repair, acidizing, atau zone isolation. Routine well service lebih ke pemeliharaan untuk mengembalikan fungsi sumur tanpa mengubah kondisi dasarnya, misalnya change-out pump karena stuck atau not pumping, serta clean out sand. Batas detailnya tetap mengikuti klasifikasi dan program perusahaan.",
    full: "Secara umum, workover adalah pekerjaan ulang atau perbaikan sumur yang melibatkan perubahan pada kondisi downhole atau konfigurasi sumur. Contohnya perforating, cementing, fishing, milling, casing repair, acidizing, fracturing, atau zone isolation. Sementara routine well service lebih bersifat pemeliharaan untuk memulihkan fungsi sumur tanpa mengubah kondisi dasar atau objective completion-nya, misalnya change-out pump karena pump stuck, not pumping, low production, clean out sand, atau pekerjaan routine service lainnya. Dalam praktiknya, klasifikasi job tetap harus mengikuti scope, complexity, well program, dan standard yang berlaku di perusahaan.",
    points: ["Workover = perubahan/perbaikan downhole", "Well service = restore function", "Berikan 2–3 contoh", "Ikuti klasifikasi perusahaan"],
    note: "Ini topik prioritas. Latih jawaban sampai bisa disampaikan tanpa menghafal daftar panjang.", reference: "MAB II buku hal. 104 dan 108–110 (PDF 111 dan 115–117)."
  },
  {
    id: "wows", title: "WOWS Program Development", category: "Technical", question: "Apa yang Anda pahami tentang WOWS Engineering / Program Development?", duration: 65,
    quick: "WOWS Program Development menentukan apa yang perlu dikerjakan: memilih kandidat sumur, menyusun business case, merancang program teknis, mengevaluasi keekonomian, dan menentukan prioritas. Sementara fungsi operation fokus pada bagaimana program itu dieksekusi dengan aman dan efisien—mengelola rig atau service unit, vendor, HSE, waktu, biaya, dan kondisi aktual lapangan.",
    full: "WOWS Engineering atau Program Development bertanggung jawab mengidentifikasi kandidat sumur, merancang program workover, well service, atau well intervention, melakukan evaluasi teknis dan ekonomi, serta menentukan prioritas agar setiap pekerjaan memberi peningkatan produksi yang optimal dengan biaya dan risiko yang terkendali. Sederhananya, Program Development menentukan apa yang perlu dikerjakan dan mengapa itu layak. Fungsi Operation menentukan bagaimana program tersebut dijalankan dengan aman dan efisien di lapangan, termasuk mengelola rig atau service unit, vendor, kesiapan equipment dan material, HSE, cycle time, cost, serta respons terhadap kondisi aktual.",
    points: ["Program: what and why", "Candidate + business case", "Operation: how", "Manage HSE, resources, time, cost"],
    note: "Tunjukkan bahwa kedua fungsi saling melengkapi dan perubahan program harus melalui authority yang tepat.", reference: "Rig Hub hal. 15 dan 17 — IODSC flow dan troubleshooting flow."
  },
  {
    id: "work-24-7", title: "Worksite & 24/7", category: "Personal", question: "Apakah Anda siap bekerja di wellsite atau operasi 24 jam?", duration: 45,
    quick: "Saya siap mengikuti pola kerja operasi, termasuk site, roster, shift, atau call-out sesuai kebutuhan perusahaan. Saya tertarik dengan lingkungan lapangan dan sudah pernah mendapat exposure di Duri. Tapi saya juga paham operasi 24/7 harus tetap mengikuti fatigue management, waktu istirahat, prosedur HSE, dan handover yang baik.",
    full: "Ya, saya siap mengikuti pola kerja operasional yang berlaku, termasuk penempatan wellsite, roster, shift, maupun kebutuhan call-out. Saya masih muda, cukup fleksibel, dan lingkungan lapangan justru menarik bagi saya karena dekat dengan equipment serta proses nyata. Saya juga sudah pernah merasakan exposure di Duri. Pada saat yang sama, kesiapan untuk operasi 24/7 bukan berarti mengabaikan kondisi fisik. Saya tetap akan mengikuti fatigue management, waktu istirahat, prosedur HSE, serta handover yang jelas agar pekerjaan tetap aman.",
    points: ["Siap site/roster/shift", "Punya field exposure", "Fatigue management", "Safe handover"],
    note: "Hindari kesan ‘siap bekerja tanpa istirahat’. Itu justru berlawanan dengan budaya keselamatan.", reference: "Pertanyaan Personal Tambahan A4 dan simulasi penempatan operasi."
  },
  {
    id: "closing", title: "Closing Statement", category: "Personal", question: "Apakah ada hal terakhir yang ingin Anda sampaikan?", duration: 45,
    quick: "Terima kasih atas kesempatan interview ini. Dari pendidikan Teknik Mesin, pengalaman di PHR dan PLN, serta beberapa project engineering, saya makin yakin ingin menekuni pekerjaan yang dekat dengan operasi, mechanical equipment, data, dan problem solving. Jika diberi kesempatan, saya siap menjalankan tanggung jawab dengan serius, bekerja sesuai standard dan HSE, serta membangun kontribusi yang makin kuat seiring pengalaman saya bertambah.",
    full: "Terima kasih atas kesempatan interview ini. Dari pendidikan Teknik Mesin ITB, pengalaman saya di PHR dan PLN, beberapa project engineering, serta proses mengeksplor berbagai bidang, saya semakin memahami bahwa saya ingin menekuni pekerjaan yang dekat dengan operasi, mechanical equipment, data, dan problem solving. Karena itu posisi Operation Engineer ini sangat menarik dan relevan bagi saya. Jika diberi kesempatan, saya siap menerima tanggung jawabnya dengan serius, bekerja sesuai standard dan HSE, terbuka terhadap arahan, dan membangun kontribusi yang semakin kuat seiring pengalaman saya bertambah.",
    points: ["Terima kasih", "Ringkas value proposition", "Tegaskan role fit", "Commitment + HSE"],
    note: "Jangan membuka topik baru di closing. Ucapkan tenang, singkat, dan tatap kamera.", reference: "Bagian M — Closing Statement Interview."
  }
];

const material2Topics = [
  {
    id: "well-lifecycle", title: "Well Lifecycle", category: "Technical", question: "Jelaskan alur hidup sebuah sumur secara high level.", duration: 60, sourceNo: 2,
    quick: "Secara high level, alurnya dimulai dari drilling untuk membuat wellbore, lalu formation evaluation untuk memahami zona target. Casing dan cement memberi integritas serta isolasi. Completion menyiapkan jalur produksi atau injeksi, kemudian well masuk tahap production. Saat performanya turun atau kondisinya berubah, dilakukan well service, workover, atau intervention yang sesuai, sampai akhirnya sumur masuk tahap plug and abandonment.",
    full: "Saya melihat well lifecycle sebagai rangkaian yang saling terhubung. Drilling membangun wellbore sampai target. Formation evaluation membantu memastikan karakter dan kelayakan zona. Casing dan cement memberi mechanical integrity, pressure containment, serta zonal isolation. Completion lalu menghubungkan reservoir dengan surface secara aman melalui konfigurasi tubing, packer, wellhead, perforation, atau artificial lift sesuai desain. Setelah masuk production, performa sumur dimonitor. Kalau ada penurunan atau masalah, intervensinya bisa berupa rigless job, routine well service, atau workover sesuai objective dan kompleksitas. Pada akhir masa ekonomisnya, sumur ditutup melalui plug and abandonment sesuai program dan regulasi.",
    points: ["Drilling", "Evaluation", "Casing & cement", "Completion", "Production", "Service/workover → P&A"],
    note: "Jelaskan tujuan setiap tahap, bukan hanya menyebut urutannya.", reference: "Materi 2 — Peta Belajar dan Big Picture Well Lifecycle."
  },
  {
    id: "formation-evaluation", title: "Formation Evaluation", category: "Technical", question: "Apa tujuan formation evaluation dan tools apa yang umum digunakan?", duration: 55, sourceNo: 2,
    quick: "Formation evaluation bertujuan memahami posisi dan karakter zona target sebelum keputusan completion dibuat. Data bisa diperoleh saat drilling melalui MWD atau LWD, setelah interval dibor melalui wireline logging, serta melalui formation pressure atau fluid sampling tools bila program membutuhkannya. Urutan dan tools-nya tidak selalu sama untuk setiap sumur.",
    full: "Formation evaluation membantu menjawab apakah zona target memang layak dan bagaimana completion sebaiknya dirancang. MWD terutama memberi measurement untuk arah dan parameter drilling, sedangkan LWD membawa sensor logging saat proses drilling. Wireline logging menurunkan tool dengan cable ke wellbore yang sudah dibor untuk mengukur properti formasi atau kondisi well. Formation pressure dan fluid sampling tools seperti RDT atau MDT dapat digunakan bila diperlukan. Saya memahami pemilihannya tergantung objective, kondisi well, data yang sudah ada, risiko, dan well program; bukan berarti semua well memakai seluruh tools tersebut.",
    points: ["Menilai zona target", "MWD/LWD saat drilling", "Wireline setelah interval dibor", "Pressure/sampling sesuai kebutuhan"],
    note: "Jangan mengklaim semua tools selalu dipakai atau menyamakan fungsi MWD dengan LWD.", reference: "Materi 2 — Sebelum Completion: Drilling, Casing & Evaluation."
  },
  {
    id: "casing-cementing", title: "Casing & Cementing", category: "Technical", question: "Apa fungsi casing dan cementing dalam konstruksi sumur?", duration: 60, sourceNo: 2,
    quick: "Casing adalah struktur baja yang menjaga integritas wellbore, memberi pressure containment, dan membantu mengisolasi interval. Cement mengisi annulus antara casing dan formasi untuk menyangga casing serta memberi zonal isolation. Secara konseptual ada conductor, surface, intermediate, dan production casing atau liner, tergantung desain sumurnya.",
    full: "Casing dan cementing membentuk fondasi integritas sumur. Casing menjadi dinding baja yang menahan kondisi mekanis dan tekanan, sementara cement ditempatkan di annulus untuk menyangga casing dan mengisolasi zona agar fluida tidak berpindah antarformasi secara tidak terkendali. Conductor atau stove pipe menstabilkan lubang awal, surface casing melindungi bagian dangkal sekaligus memberi fondasi well-control equipment, intermediate casing mengisolasi interval atau masalah tertentu, dan production casing atau liner berhubungan langsung dengan interval completion. Pada cased-hole completion, cement bond perlu dinilai sebelum zona target diakses melalui perforasi.",
    points: ["Mechanical integrity", "Pressure containment", "Zonal isolation", "Conductor → production casing", "Cement bond before perforation"],
    note: "Urutan casing aktual dan kebutuhan intermediate section selalu mengikuti well design.", reference: "Materi 2 — Casing & Cementing dan urutan cased-hole completion."
  },
  {
    id: "rig-components", title: "Rig Components", category: "Technical", question: "Komponen rig apa yang penting Anda pahami?", duration: 55, sourceNo: 2,
    quick: "Komponen yang paling dasar antara lain mast atau derrick sebagai struktur hoisting, crown block sebagai katrol tetap di atas, drawworks sebagai mesin utama untuk menaikkan dan menurunkan string, rig floor untuk handling tubular, serta engine dan transmission sebagai sumber dan penyalur tenaga. Saya juga memahami setiap aktivitas dijalankan oleh personel berwenang seperti driller dan rig crew sesuai prosedur.",
    full: "Untuk level interview, saya memahami fungsi komponen utamanya. Mast atau derrick adalah struktur tempat sistem hoisting bekerja. Crown block merupakan rangkaian sheave tetap di bagian atas. Drawworks adalah winch utama yang mengendalikan pengangkatan dan penurunan string melalui drilling line. Working floor menjadi area penyambungan dan handling tubular, sedangkan engine dan transmission menyediakan serta menyalurkan tenaga mekanik. Monkeyboard atau racking platform digunakan untuk menangani stand pada ketinggian. Dari sisi operasi, equipment tersebut dijalankan oleh personel yang kompeten dan berwenang; engineer perlu memahami fungsi, limit, status, dan dampaknya terhadap pekerjaan tanpa mengklaim sebagai operator semua alat.",
    points: ["Mast/derrick", "Crown block", "Drawworks", "Rig floor", "Powertrain", "Authority rig crew"],
    note: "Pahami fungsi sederhananya. Tidak perlu menghafal ukuran atau spesifikasi yang tidak diberikan.", reference: "Materi 2; MAB I buku hal. 193–194 — Rig Component and Terminology."
  },
  {
    id: "well-control", title: "Well Control", category: "Well Control", question: "Apa yang dimaksud dengan well control?", duration: 65, sourceNo: 2,
    quick: "Well control adalah menjaga tekanan dan barrier supaya fluida formasi tidak masuk secara tidak terkendali ke wellbore. Primary control mengandalkan hydrostatic pressure dari kolom fluida. Kalau primary gagal dan terjadi influx, secondary control memakai BOPE, early kick detection, dan shut-in sesuai prosedur. Tertiary control adalah respons darurat jika secondary tidak mampu mengendalikan kondisi.",
    full: "Well control adalah upaya menjaga tekanan dan barrier sumur agar formation fluid tidak masuk atau mengalir secara tidak terkendali. Konsep dasarnya adalah membandingkan formation pressure dengan tekanan penahan di wellbore. Primary well control menjaga hydrostatic pressure kolom fluida agar cukup untuk mencegah influx. Jika primary control tidak dapat dipertahankan dan kick terjadi, secondary control mengandalkan deteksi dini, shut-in yang cepat, serta BOPE sesuai prosedur untuk meminimalkan influx dan mengendalikan well. Materi juga mengenal tertiary control sebagai last-resort emergency response ketika secondary control tidak berhasil. Dalam praktik, tindakan detail harus mengikuti prosedur terbaru dan personel well-control yang berwenang.",
    points: ["Formation pressure vs hydrostatic", "Primary = fluid column", "Secondary = detect, shut-in, BOPE", "Tertiary = emergency"],
    note: "Tunjukkan pemahaman prinsip. Jangan mencoba menjelaskan langkah mengoperasikan BOP di luar kompetensi atau prosedur.", reference: "MAB II buku hal. 24 (PDF 31), bagian II.5 Well Control."
  },
  {
    id: "kick", title: "Kick / Influx", category: "Well Control", question: "Apa itu kick dan apa penyebab umumnya?", duration: 55, sourceNo: 2,
    quick: "Kick adalah masuknya fluida formasi ke wellbore karena tekanan formasi mengalahkan tekanan penahan di well. Penyebab yang dibahas antara lain fluid fill yang tidak cukup saat tripping, swabbing, lost circulation, dan density fluida yang terlalu rendah. Karena itu abnormal indication perlu dikenali lebih awal dan ditangani sesuai well-control procedure.",
    full: "Secara sederhana, kick atau influx terjadi ketika formation fluid masuk ke wellbore karena tekanan formasi lebih besar daripada tekanan yang menahannya di well. Beberapa penyebab yang disebut dalam materi adalah tidak atau terlambat mengisi fluida yang cukup saat tripping, swabbing akibat pergerakan pipe, lost circulation yang menurunkan tinggi kolom fluida, density fluida yang tidak cukup, serta kehilangan kolom fluida pada riser untuk konteks subsea. Prinsip responsnya adalah recognize abnormal condition early, jaga atau pulihkan control sesuai prosedur, dan koordinasikan dengan personel kompeten—bukan menebak atau meneruskan pekerjaan demi schedule.",
    points: ["Pf mengalahkan tekanan wellbore", "Insufficient fill", "Swabbing", "Lost circulation", "Insufficient density"],
    note: "Kick belum sama dengan blowout. Kick adalah influx yang harus dikendalikan sebelum berkembang menjadi loss of control.", reference: "MAB II buku 24 serta sekitar 162–164."
  },
  {
    id: "lost-circulation", title: "Lost Circulation", category: "Well Control", question: "Mengapa lost circulation berbahaya?", duration: 50, sourceNo: 2,
    quick: "Lost circulation berarti sebagian atau seluruh fluida hilang ke formasi. Dampaknya bukan hanya biaya dan rig time; tinggi kolom fluida bisa turun sehingga hydrostatic pressure ikut berkurang. Kalau tekanan penahan turun, formasi lain dapat mengalir masuk dan meningkatkan risiko kick. Karena itu penurunan return atau fluid level harus diperlakukan sebagai abnormal condition.",
    full: "Lost circulation terjadi ketika fluida yang dipompakan masuk ke formasi dan return berkurang atau hilang. Selain menambah rig time, biaya, dan potensi formation damage, kondisi ini bisa menurunkan tinggi kolom fluida di wellbore. Karena hydrostatic pressure bergantung pada density dan tinggi kolom, penurunannya dapat membuat tekanan formasi lain mengalahkan tekanan wellbore dan memicu kick. Jika return atau fluid level turun tidak normal, saya akan memperlakukannya sebagai abnormal condition, memastikan pekerjaan mengikuti prosedur, memonitor indikasi well control, dan segera berkoordinasi dengan personel yang berwenang.",
    points: ["Loss of return", "Fluid column turun", "Hydrostatic pressure turun", "Kick risk meningkat", "Respond by procedure"],
    note: "Jangan menawarkan treatment detail tanpa data loss zone, severity, well condition, dan authority.", reference: "MAB II sekitar buku hal. 162–164; mini case Materi 2."
  },
  {
    id: "well-barrier", title: "Well Barrier", category: "Well Control", question: "Apa yang Anda pahami tentang well barrier?", duration: 60, sourceNo: 2,
    quick: "Well barrier adalah satu atau kombinasi elemen yang mencegah uncontrolled flow. Barrier bisa berupa hydrostatic column, valve atau FOSV, tubing hanger, BOP, tubing, packer, maupun wellhead tergantung fase pekerjaan. Yang penting adalah tahu barrier aktif dan backup-nya, memastikan integritasnya sudah diverifikasi, dan tidak melepas satu barrier tanpa pengganti sesuai prosedur.",
    full: "Saya memahami well barrier sebagai satu elemen atau kombinasi elemen yang bersama-sama mencegah uncontrolled flow dari sumur. Barrier bukan selalu satu alat dan konfigurasinya berubah mengikuti fase pekerjaan. Contohnya dapat berupa hydrostatic column, FOSV atau IBOP, tubing hanger, BOP atau pressure-containing equipment, serta production barrier seperti tubing, packer, wellhead, dan valve sesuai desain. Cara berpikir yang saya pegang adalah: barrier apa yang aktif sekarang, apa backup-nya, apakah sudah diverifikasi, dan apa yang berubah saat equipment berikutnya dibuka, diturunkan, atau dilepas. Detail requirement selalu mengikuti program dan prosedur yang berlaku.",
    points: ["Barrier ≠ satu alat", "Know active and backup", "Verify integrity", "Maintain redundancy", "Track barrier changes"],
    note: "Materi lama dipakai untuk konsep. Requirement, test pressure, dan operasi satu barrier wajib merujuk prosedur PHR terbaru.", reference: "Rig Hub Handbook hal. 100 dan 123–124."
  },
  {
    id: "bop-bope", title: "BOP / BOPE", category: "Well Control", question: "Apa fungsi BOP atau BOPE?", duration: 50, sourceNo: 2,
    quick: "BOP adalah pressure-control equipment untuk secondary well control. BOP bukan alat yang mencegah kick terjadi; ketika primary control tidak cukup dan ada influx, BOP dipakai untuk mengisolasi atau mengendalikan well sesuai prosedur. Karena itu integrity dan pressure testing BOPE sangat penting sebelum dibutuhkan.",
    full: "BOP atau BOPE adalah pressure-control equipment yang menjadi bagian penting secondary well control. Primary control berusaha mencegah influx melalui hydrostatic pressure yang cukup. Jika primary gagal dan kick terjadi, BOP digunakan untuk menutup, mengisolasi, atau membantu mengendalikan well sesuai konfigurasi serta well-control procedure. Jadi BOP bukan alat yang membuat penyebab kick hilang dan bukan sekadar 'pencegah kick'. Karena fungsinya kritis saat kondisi abnormal, integrity, correct configuration, dan pressure testing harus dipastikan sesuai program dan prosedur sebelum operasi.",
    points: ["Secondary well control", "Isolate/control influx", "Not a kick-prevention tool", "Integrity and pressure test"],
    note: "Hindari menjelaskan urutan tombol atau operasi spesifik. Tindakan lapangan adalah kewenangan personel kompeten.", reference: "MAB II buku hal. 45 (PDF 52), pengujian BOP."
  },
  {
    id: "perforation", title: "Perforation", category: "Technical", question: "Apa fungsi perforasi pada cased-hole completion?", duration: 50, sourceNo: 2,
    quick: "Pada cased-hole completion, casing dan cement menutup komunikasi langsung antara reservoir dan wellbore. Perforasi membuat jalur terkontrol melalui casing dan cement pada interval target agar formation fluid bisa masuk ke well. Penempatan depth harus akurat; materi menyebut CCL dan Gamma Ray untuk membantu korelasi interval.",
    full: "Perforasi diperlukan pada cased-hole completion karena production casing dan cement yang memberi integritas sekaligus memisahkan reservoir dari wellbore. Perforating gun membuat jalur terkontrol melalui casing, cement, dan menuju formasi di interval target sehingga reservoir dapat berkomunikasi dengan well. Akurasi depth sangat penting agar perforasi berada pada zona yang benar dan tidak mengenai casing collar. Materi menyebut Casing Collar Locator dan Gamma Ray sebagai alat korelasi penempatan. Desain gun, metode, pressure condition, dan barrier harus mengikuti program serta risk assessment pekerjaan.",
    points: ["Reservoir-to-well communication", "Through casing and cement", "Correct interval", "CCL/GR correlation", "Program and barrier control"],
    note: "Perforation adalah contoh workover bila dilakukan sebagai pekerjaan pada existing well, tetapi juga bagian dari initial cased-hole completion.", reference: "MAB II buku hal. 109–110 (PDF 116–117)."
  },
  {
    id: "completion-equipment", title: "Completion Equipment", category: "Technical", question: "Jelaskan hubungan casing, tubing, packer, dan wellhead.", duration: 65, sourceNo: 2,
    quick: "Casing adalah struktur wellbore yang relatif permanen. Tubing menjadi jalur produksi atau injeksi di dalam casing. Packer menyegel annulus antara tubing dan casing agar flow serta pressure bisa dikendalikan, sedangkan wellhead menopang dan menghubungkan casing-tubing ke valve serta fasilitas permukaan. Bersama-sama komponen ini juga menjadi bagian dari pressure dan barrier architecture.",
    full: "Casing berfungsi sebagai struktur wellbore, pressure containment, dan isolasi zona. Di dalamnya terdapat tubing yang menjadi jalur utama fluida produksi atau injeksi dan lebih mudah ditarik atau diganti saat intervention dibanding casing. Packer adalah sealing element di annulus tubing-casing yang membantu mengisolasi interval annulus, mengarahkan flow, dan menjadi bagian dari barrier architecture. Di permukaan, wellhead adalah rangkaian fitting, hanger, dan valve yang menopang casing serta tubing sekaligus menyediakan pressure control dan koneksi ke fasilitas produksi. Konfigurasi detailnya bergantung pada desain completion dan jenis well.",
    points: ["Casing = structure", "Tubing = flow path", "Packer = annular seal", "Wellhead = support + surface pressure control"],
    note: "Jelaskan fungsi dan hubungan. Tidak perlu menyebut seluruh nama valve kalau tidak ditanya.", reference: "MAB II sekitar buku hal. 183–184 dan glosarium 287."
  },
  {
    id: "artificial-lift", title: "Artificial Lift", category: "Technical", question: "Mengapa artificial lift dibutuhkan dan apa contoh sistemnya?", duration: 60, sourceNo: 2,
    quick: "Artificial lift dibutuhkan ketika energi reservoir tidak cukup membawa fluida ke permukaan pada rate yang diinginkan. Contohnya SRP, ESP, dan PCP. SRP memakai pumping unit untuk menggerakkan rod dan downhole pump, ESP memakai multistage centrifugal pump serta motor di downhole, sedangkan PCP memakai rotor–stator sesuai konfigurasinya.",
    full: "Artificial lift membantu menghasilkan fluida ketika natural reservoir energy tidak lagi cukup atau rate alaminya tidak memenuhi target. Pada SRP, prime mover dan pumping unit mengubah gerak rotasi menjadi reciprocating motion yang diteruskan melalui rod string ke downhole pump. ESP menempatkan motor listrik dan multistage centrifugal pump di downhole untuk mengangkat fluida. PCP menggunakan pasangan rotor dan stator dengan drive sesuai desain. Pemilihan sistem tidak bisa hanya berdasarkan nama pompanya; perlu mempertimbangkan well condition, fluid properties, rate, depth, solids, reliability, operating envelope, dan keekonomian.",
    points: ["Supplement reservoir energy", "SRP", "ESP", "PCP", "Selection depends on well and fluid"],
    note: "Jika ditanya sistem yang paling familiar, gunakan SRP dan hubungkan dengan pengalaman melihat pumping unit di Minas–Duri.", reference: "Rig Hub Handbook hal. 37 dan 61–62 serta bagian artificial lift."
  },
  {
    id: "rigless-operation", title: "Rigless Operation", category: "Technical", question: "Apa yang dimaksud dengan rigless operation?", duration: 50, sourceNo: 2,
    quick: "Rigless operation adalah pekerjaan intervensi yang tidak membutuhkan conventional workover rig. Contohnya dapat memakai coiled tubing dan pump truck, slickline, wireline unit, atau surface team sesuai objective. Pemilihan metode tetap mempertimbangkan akses ke well, pressure control, barrier, risiko, dan kemampuan unit.",
    full: "Rigless operation adalah well intervention yang dilakukan tanpa conventional workover rig, selama objective pekerjaan dapat dicapai dengan unit yang lebih ringan atau metode lain. Materi memberi contoh CTU dan pump truck, slickline, WCT atau wireline-related unit, serta surface team sesuai jenis job. Keuntungannya bisa berupa mobilisasi dan cycle time yang lebih efisien, tetapi pemilihannya tidak otomatis selalu lebih baik. Engineer tetap perlu mengecek objective, depth dan akses, kebutuhan pulling atau handling tubular, pressure-control equipment, active barrier, well condition, risk, serta limit unit sebelum menentukan metode.",
    points: ["No conventional workover rig", "CTU/pump truck", "Slickline/wireline", "Objective and access", "Pressure control and barrier"],
    note: "Rigless bukan berarti risk-free atau tanpa well-control requirement.", reference: "MAB II Bab IV.1, Rigless Job sekitar buku hal. 94–103."
  },
  {
    id: "rig-hub-workflow", title: "Rig Hub Workflow", category: "Operations", question: "Bagaimana alur dari well recommendation sampai pekerjaan dieksekusi?", duration: 75, sourceNo: 2,
    quick: "Saya melihatnya sebagai alur recommendation sampai execution. WRO mengidentifikasi kebutuhan sumur, LSC memastikan well, material, location, dan pressure readiness, Scheduler mengalokasikan kandidat ke rig, rig site mengecek kondisi aktual secara operasional, lalu Completion Engineer membuat dan me-review program dari sisi engineering. Setelah kedua gate siap, program dan data pendukung diteruskan untuk eksekusi dan feedback.",
    full: "Workflow Rig Hub dimulai dari kebutuhan sumur, bukan dari rig kosong. WRO atau fungsi terkait mengevaluasi kondisi sumur dan menghasilkan well recommendation. LSC memastikan readiness lokasi, material, serta kondisi yang dipersyaratkan. Rig Scheduler mengatur kandidat, rig, dan timing. Di rig site, WSR melakukan operational feasibility check terhadap kondisi aktual wellpad dan equipment. Completion Engineer kemudian memastikan engineering feasibility dengan membuat atau me-review RS Program agar objective dapat dieksekusi. Setelah program package, well data, dan informasi pendukung siap, pekerjaan dijalankan di lapangan dan hasilnya kembali menjadi report serta feedback. Jadi ada dua gate penting: operationally executable dan engineering executable.",
    points: ["WRO: diagnose & recommend", "LSC: make it ready", "Scheduler: assign", "Rig site: operational gate", "CE: engineering gate", "Execute and feedback"],
    note: "Gunakan sebagai model workflow referensi. Jangan mengklaim struktur posisi sekarang pasti identik dengan diagram handbook 2021.", reference: "Rig Hub Handbook hal. 15–16, Gambar 3 — peran Rig Hub dalam IODSC."
  },
  {
    id: "reading-well-program", title: "Reading a Well Program", category: "Operations", question: "Apa yang Anda cek ketika membaca well program?", duration: 70, sourceNo: 2,
    quick: "Saya membacanya dengan enam lensa: objective job, current well condition dan history, sequence serta prerequisite, risk dan barrier di setiap step, progress atau deviation terhadap plan, lalu communication dan authority. Jadi saya tidak hanya tahu step berikutnya, tetapi juga kenapa dilakukan, apa yang bisa berubah, siapa yang perlu tahu, dan decision point-nya.",
    full: "Ketika membaca well program, pertama saya pahami objective: masalah apa yang ingin diselesaikan dan hasil apa yang ditargetkan. Kedua, saya cek current well condition, pressure, barrier, completion, history, dan status terakhir. Ketiga, saya pahami sequence, equipment, material, service company, serta prerequisite tiap step. Keempat, saya lihat hazard, active dan backup barrier, serta perubahan barrier selama pekerjaan. Kelima, saya bandingkan plan versus actual untuk mengenali deviation, delay, atau finding. Keenam, saya tentukan jalur komunikasi: siapa owner, siapa punya authority, dan kapan decision atau escalation dibutuhkan. Dengan begitu program dibaca sebagai sistem operasi, bukan daftar instruksi semata.",
    points: ["Objective", "Current condition & history", "Sequence & prerequisites", "Risk & barrier", "Progress & deviation", "Communication & authority"],
    note: "Jangan mengubah program sendiri ketika kondisi aktual berbeda. Amankan, dokumentasikan, dan eskalasikan dengan data.", reference: "Materi 2 — Cara Berpikir Operations Engineer Saat Membaca Well Program."
  },
  {
    id: "operational-update", title: "Operational Update", category: "Operations", question: "Bagaimana format update operasi yang ringkas dan aman?", duration: 55, sourceNo: 2,
    quick: "Saya gunakan urutan status, progress, issue, impact, action, dan next plan. Update harus memisahkan fakta dari dugaan, menyebut action owner, dan tidak menjanjikan root cause atau ETA sebelum terkonfirmasi. Contohnya: aktivitas saat ini, kapan issue ditemukan, dampaknya, siapa yang menangani, status HSE, lalu kapan update berikutnya.",
    full: "Update operasi yang baik harus singkat tetapi actionable. Saya gunakan struktur STATUS–PROGRESS–ISSUE–IMPACT–ACTION–NEXT PLAN. Mulai dari current activity dan posisi terhadap plan. Jelaskan issue yang sudah terverifikasi serta waktunya, lalu dampak terhadap safety, integrity, schedule, cost, atau production opportunity. Sebut tindakan yang sedang dilakukan dan action owner-nya. Tutup dengan next decision point atau waktu update berikutnya. Kalau root cause atau ETA belum confirmed, saya akan menyatakan masih dalam assessment, bukan mengisi kekosongan dengan asumsi. Status HSE dan barrier juga perlu disebut bila relevan.",
    points: ["Status & progress", "Verified issue", "Impact", "Action owner", "Next plan/update", "No speculation"],
    note: "Hindari hanya berkata ‘ada kendala’. Berikan informasi yang membantu orang lain mengambil keputusan.", reference: "Materi 2 — format morning update."
  },
  {
    id: "job-delay", title: "Job Delay", category: "Case Study", question: "Apa yang Anda cek saat pekerjaan terlambat dari rencana?", duration: 60, sourceNo: 2,
    quick: "Saya cek current activity dan planned versus actual, lalu alasan delay yang sudah terverifikasi. Saya lihat status HSE dan barrier, kondisi well, equipment serta material, dampak ke critical path, action owner, dan next plan. Saya tidak langsung menyebut semua delay sebagai NPT, menebak root cause, atau menjanjikan ETA sebelum ada konfirmasi.",
    full: "Saat job behind plan, saya mulai dari current activity dan membandingkan plan versus actual untuk memahami titik deviasinya. Saya pastikan HSE, well-control, dan barrier status tetap aman. Berikutnya saya kumpulkan fakta tentang kondisi well, equipment, material, personel, dan prerequisite yang mungkin menjadi constraint. Issue kemudian saya klasifikasikan: program atau design, operational, logistics atau material, wellpad, atau kondisi sumur. Saya nilai dampaknya ke critical path, cost, dan production opportunity, lalu pastikan ada action owner dan next decision point. Reporting harus jelas tanpa menganggap semua delay otomatis NPT, tanpa menebak root cause, dan tanpa memberi ETA yang belum confirmed.",
    points: ["Plan vs actual", "Safety/barrier status", "Verify the constraint", "Classify issue", "Impact + owner + next plan"],
    note: "Kecepatan update penting, tetapi akurasi dan pemisahan fact vs assumption lebih penting.", reference: "Materi 2 — Quick Q&A dan Operational Update."
  },
  {
    id: "material-discrepancy", title: "Material Discrepancy", category: "Case Study", question: "Apa yang Anda lakukan jika material tersedia tidak sesuai program?", duration: 55, sourceNo: 2,
    quick: "Saya tidak akan melakukan substitusi sendiri. Pertama saya verifikasi perbedaannya terhadap program, spesifikasi, inventory, dan serial number. Lalu saya klasifikasikan sebagai material atau logistics issue, cek apakah ada technical implication yang memerlukan Completion Engineer, dan koordinasikan melalui Scheduler atau LSC sesuai workflow. Dampak ke schedule dan next decision harus dilaporkan.",
    full: "Kalau material yang tersedia tidak align dengan program, saya tidak akan langsung menggantinya hanya karena bentuk atau fungsinya terlihat mirip. Saya verifikasi discrepancy terhadap program, specification, quantity, inventory, dan serial number. Kondisi well serta timing job juga perlu dipastikan tetap aman. Issue kemudian diarahkan melalui jalur material atau logistics, misalnya Scheduler dan LSC sesuai workflow. Jika substitusi berpotensi mengubah desain, performance, compatibility, atau barrier, Completion Engineer dan authority teknis terkait perlu melakukan review. Saya juga akan melaporkan impact ke schedule, action owner, serta next decision point.",
    points: ["No unilateral substitution", "Verify specification/serial", "Classify logistics vs design", "Right technical review", "Report schedule impact"],
    note: "Ownership berarti memastikan masalah sampai ke owner yang benar, bukan mengambil keputusan di luar authority.", reference: "Rig Hub Handbook Gambar 4; mini case material Materi 2."
  }
];

topics.push(...material2Topics);

const material3Topics = [
  {
    id: "data-tool-strategy", title: "Data Tool Strategy", category: "Data & Software", question: "Kapan Anda menggunakan SQL, Excel, dan Power BI?", duration: 60, sourceNo: 3,
    quick: "Saya membedakan perannya. SQL saya gunakan untuk mengambil, memfilter, dan merangkum data dari database. Excel cocok untuk validasi, ad-hoc analysis, lookup, PivotTable, atau pengecekan cepat. Power BI dipakai untuk monitoring berulang dan menyajikan KPI, trend, breakdown, serta detail secara interaktif. Alurnya: ambil data yang tepat, validasi logikanya, lalu sajikan untuk pengambilan keputusan.",
    full: "Saya melihat SQL, Excel, dan Power BI sebagai satu rangkaian, bukan tiga tools yang saling menggantikan. SQL digunakan sedekat mungkin dengan sumber data untuk memilih field, filter periode, join master data, dan membuat agregasi awal. Excel sangat berguna untuk quality check, rekonsiliasi, perhitungan cepat, lookup, PivotTable, dan eksplorasi ad-hoc. Power BI digunakan ketika monitoring perlu dilakukan berulang, konsisten, dan interaktif melalui KPI, trend, breakdown, slicer, serta drill-down ke detail. Apa pun tool-nya, saya tetap mulai dari pertanyaan operasional, memahami grain data, memvalidasi hasil, baru menarik insight dan action.",
    points: ["SQL = retrieve & summarize", "Excel = validate & analyze quickly", "Power BI = monitor & communicate", "Start from operational question"],
    note: "Jangan menggambarkan Power BI sebagai pengganti data cleaning atau SQL sebagai sekadar tempat menyimpan data.", reference: "Materi 3 — Integrasi SQL, Excel, dan Power BI."
  },
  {
    id: "sql-fundamentals", title: "SQL Fundamentals", category: "SQL", question: "Jelaskan logika dasar SELECT, FROM, WHERE, ORDER BY, dan LIMIT.", duration: 55, sourceNo: 3,
    quick: "SELECT menentukan kolom yang ingin dilihat, FROM memilih tabel sumber, WHERE menyaring row, ORDER BY mengurutkan hasil, dan LIMIT membatasi jumlah row. Secara cara berpikir, saya tentukan dulu sumbernya, filter datanya, pilih informasi yang dibutuhkan, urutkan, lalu batasi hasil kalau perlu.",
    full: "Basic SQL menjawab lima hal. FROM menentukan tabel atau sumber data yang dibuka. WHERE memfilter row berdasarkan kondisi. SELECT memilih kolom atau ekspresi yang ingin ditampilkan. ORDER BY mengurutkan hasil ascending atau descending, dan LIMIT membatasi jumlah row yang dikembalikan. Walaupun urutan penulisannya biasanya SELECT–FROM–WHERE–ORDER BY–LIMIT, saat menyusun logika saya berpikir dari sumber data, kondisi filter, field output, urutan, lalu jumlah hasil. Contoh operasionalnya adalah memilih job yang delayed, mengurutkannya berdasarkan NPT terbesar, dan menampilkan tiga job teratas.",
    points: ["SELECT: output", "FROM: source", "WHERE: row filter", "ORDER BY: sort", "LIMIT: top N"],
    note: "Saat lupa sintaks, jelaskan urutan logikanya dulu. Itu tetap menunjukkan problem solving.", reference: "Materi 3 — Basic SQL."
  },
  {
    id: "sql-filter-null", title: "SQL Filters & NULL", category: "SQL", question: "Bagaimana melakukan filtering dan menangani NULL di SQL?", duration: 60, sourceNo: 3,
    quick: "Filtering bisa memakai comparison operator, BETWEEN, IN, atau LIKE sesuai kebutuhan. NULL berarti nilai tidak tersedia atau tidak diketahui; NULL bukan nol dan bukan string kosong. Karena itu pengecekannya memakai IS NULL atau IS NOT NULL, bukan sama dengan NULL.",
    full: "Untuk memfilter data saya dapat memakai sama dengan atau tidak sama dengan, perbandingan lebih besar-kecil, BETWEEN untuk rentang, IN untuk beberapa nilai, dan LIKE untuk pola teks. Hal penting lain adalah NULL. NULL bukan angka nol dan bukan empty string; artinya nilainya tidak ada atau belum diketahui. Karena itu kondisi harus menggunakan IS NULL atau IS NOT NULL, bukan '= NULL'. Dalam analisis operasi, saya juga perlu memahami mengapa data kosong: apakah job masih ongoing, data belum diinput, tidak applicable, atau memang quality issue, karena perlakuannya bisa berbeda.",
    points: ["Comparison operators", "BETWEEN / IN / LIKE", "NULL ≠ 0", "Use IS NULL", "Understand why data is missing"],
    note: "Jangan langsung mengganti NULL menjadi nol tanpa memahami makna bisnisnya.", reference: "Materi 3 — Operator, filter dasar, dan missing data."
  },
  {
    id: "sql-aggregation", title: "SQL Aggregation", category: "SQL", question: "Apa perbedaan WHERE, GROUP BY, dan HAVING?", duration: 65, sourceNo: 3,
    quick: "WHERE memfilter row sebelum data diringkas. GROUP BY mengelompokkan row agar fungsi seperti COUNT, SUM, atau AVG dihitung per kategori. HAVING memfilter hasil kelompok setelah agregasi. Contohnya: filter job delayed, hitung total NPT per rig, lalu tampilkan hanya rig dengan total NPT di atas batas tertentu.",
    full: "Fungsi agregasi seperti COUNT, SUM, AVG, MIN, dan MAX membuat ringkasan angka. GROUP BY menentukan kelompok ringkasannya, misalnya per rig, activity, atau tanggal. WHERE bekerja sebelum agregasi sehingga menyaring row sumber, sedangkan HAVING bekerja setelah GROUP BY sehingga menyaring hasil agregat. Contoh logikanya: WHERE status delayed untuk mengambil row yang relevan, GROUP BY rig untuk menghitung total NPT per rig, lalu HAVING SUM NPT lebih dari threshold untuk menampilkan kelompok prioritas. Saya juga akan memastikan grain data benar supaya satu job tidak terhitung ganda akibat join.",
    points: ["WHERE before aggregation", "GROUP BY defines group", "HAVING after aggregation", "COUNT/SUM/AVG", "Watch the data grain"],
    note: "Kesalahan join dapat menggandakan row dan membuat hasil agregasi salah walaupun sintaksnya valid.", reference: "Materi 3 — Agregasi, GROUP BY, dan HAVING."
  },
  {
    id: "sql-case-when", title: "SQL CASE WHEN", category: "SQL", question: "Apa kegunaan CASE WHEN?", duration: 45, sourceNo: 3,
    quick: "CASE WHEN adalah logika if–else di SQL untuk membuat label atau klasifikasi berdasarkan kondisi. Misalnya NPT lima jam atau lebih diberi kategori High, dua sampai kurang dari lima Medium, dan sisanya Low. Urutan condition penting karena SQL mengevaluasinya dari atas.",
    full: "CASE WHEN digunakan untuk menerjemahkan rule menjadi klasifikasi di hasil query. Contohnya, NPT dapat dilabeli High, Moderate, atau Low berdasarkan threshold. SQL mengevaluasi kondisi secara berurutan, jadi kondisi yang lebih spesifik atau threshold tertinggi biasanya ditempatkan lebih dulu. CASE WHEN membantu reporting, tetapi rule dan threshold-nya harus datang dari definisi bisnis atau operasional yang jelas. Saya tidak akan membuat label 'High' seolah standar perusahaan kalau angkanya hanya berasal dari dataset latihan.",
    points: ["SQL if–else", "Classification/flag", "Order of conditions matters", "Threshold needs business definition"],
    note: "Angka threshold dalam materi adalah latihan sintetis, bukan limit resmi PHR.", reference: "Materi 3 — CASE WHEN."
  },
  {
    id: "erd-keys", title: "ERD & Database Keys", category: "SQL", question: "Mengapa ERD, primary key, dan foreign key penting?", duration: 55, sourceNo: 3,
    quick: "ERD adalah peta hubungan antartabel. Primary key mengidentifikasi row secara unik, sedangkan foreign key menghubungkan row ke tabel lain. Dengan memahami relationship dan grain, saya bisa memilih join yang benar serta menghindari duplicate row atau perhitungan KPI yang salah.",
    full: "ERD membantu saya memahami entitas apa yang tersedia, key-nya, cardinality, dan bagaimana tabel saling berhubungan. Primary key seharusnya mengidentifikasi satu row secara unik. Foreign key mereferensikan key dari tabel lain, misalnya Rig_ID pada tabel activity menuju master rig. Sebelum join, saya perlu tahu grain tiap tabel: apakah satu row berarti satu job, satu event, atau satu pengukuran. Kalau satu job memiliki banyak NPT event, join tanpa agregasi atau kontrol grain dapat menggandakan nilai job. Jadi membaca ERD adalah bagian dari data quality, bukan sekadar teori database.",
    points: ["ERD maps relationships", "Primary key = unique row", "Foreign key = connector", "Know cardinality and grain", "Prevent duplicate metrics"],
    note: "Key yang namanya sama belum otomatis berarti relasinya benar; cek definisi dan kualitas datanya.", reference: "Materi 3 — Membaca ERD."
  },
  {
    id: "sql-join-union", title: "SQL JOIN vs UNION", category: "SQL", question: "Apa perbedaan JOIN dan UNION?", duration: 65, sourceNo: 3,
    quick: "JOIN menambahkan kolom dengan menghubungkan tabel berdasarkan key. INNER JOIN hanya mengambil pasangan yang match, sedangkan LEFT JOIN menjaga semua row dari tabel utama. UNION menumpuk row dari dua hasil query dengan struktur kolom yang kompatibel; UNION menghapus duplikat, UNION ALL mempertahankan semuanya.",
    full: "JOIN digunakan ketika informasi tersebar di beberapa tabel dan perlu digabung secara horizontal berdasarkan key. INNER JOIN hanya menghasilkan row yang memiliki pasangan di kedua sisi. LEFT JOIN mempertahankan semua row tabel kiri, sehingga cocok ketika semua job harus tetap muncul meski belum punya NPT event atau master data tertentu. UNION menggabungkan hasil secara vertikal; jumlah dan tipe kolom harus kompatibel. UNION melakukan deduplication, sedangkan UNION ALL mempertahankan seluruh row dan biasanya lebih sesuai bila duplikasi memang bermakna. Sebelum memilih, saya cek objective, key, cardinality, grain, dan apakah unmatched row perlu tetap terlihat.",
    points: ["JOIN adds columns", "INNER = matched only", "LEFT = preserve main rows", "UNION stacks rows", "UNION ALL keeps duplicates"],
    note: "LEFT JOIN sering lebih aman untuk completeness check, tetapi tetap harus memeriksa duplicate matches.", reference: "Materi 3 — JOIN dan UNION."
  },
  {
    id: "sql-cte-subquery", title: "SQL CTE & Subquery", category: "SQL", question: "Apa perbedaan CTE dan subquery?", duration: 50, sourceNo: 3,
    quick: "Subquery adalah query di dalam query dan cocok untuk kebutuhan yang relatif kecil. CTE membuat hasil sementara bernama dengan WITH, sehingga query bertahap biasanya lebih mudah dibaca dan dijelaskan. Saya memilih berdasarkan readability dan kebutuhan logika, bukan karena salah satunya selalu lebih cepat.",
    full: "Subquery menempatkan query lain di dalam SELECT, FROM, atau WHERE dan praktis untuk logika singkat. CTE menggunakan WITH untuk memberi nama pada hasil antara, sehingga problem dapat dipecah menjadi langkah seperti filter delayed jobs, agregasi NPT per rig, lalu memilih rig prioritas. Untuk interview, CTE sering lebih mudah dijelaskan karena alurnya terlihat. Namun performa aktual tergantung database engine, optimizer, struktur query, dan data; jadi saya tidak akan mengatakan CTE selalu lebih cepat. Fokus saya adalah correctness, readability, dan kemudahan validasi.",
    points: ["Subquery = nested query", "CTE = named intermediate result", "CTE improves readability", "Performance depends on engine"],
    note: "CTE biasa bukan otomatis tabel fisik dan tidak selalu tersimpan permanen.", reference: "Materi 3 — Subquery vs CTE."
  },
  {
    id: "sql-window-functions", title: "SQL Window Functions", category: "SQL", question: "Apa perbedaan GROUP BY dan window function?", duration: 65, sourceNo: 3,
    quick: "GROUP BY mereduksi banyak row menjadi ringkasan. Window function mempertahankan row asli tetapi menambahkan hasil analitis pada setiap row. Dengan PARTITION BY saya bisa membuat perhitungan per rig, lalu ROW_NUMBER atau DENSE_RANK memberi ranking, sedangkan LAG dan LEAD membandingkan dengan row sebelum atau sesudahnya.",
    full: "Agregasi dengan GROUP BY mengurangi banyak row menjadi satu row per kelompok. Window function tetap mempertahankan detail tiap row, tetapi menghitung konteks analitis melalui OVER. PARTITION BY membagi perhitungan ke kelompok, misalnya per rig, dan ORDER BY menentukan urutan di dalam window. ROW_NUMBER memberi nomor unik, RANK dapat melompat saat tie, DENSE_RANK tidak melompat, sementara LAG dan LEAD melihat nilai pada row sebelumnya atau berikutnya. Dalam konteks operasi, window function berguna untuk ranking NPT per rig atau membandingkan perubahan nilai antarperiode tanpa kehilangan detail job.",
    points: ["GROUP BY reduces rows", "Window keeps row detail", "PARTITION BY groups window", "Ranking and trend comparison"],
    note: "Urutan waktu harus jelas sebelum memakai LAG atau LEAD untuk analisis trend.", reference: "Materi 3 — Window Functions."
  },
  {
    id: "sql-interview-logic", title: "SQL Interview Logic", category: "SQL", question: "Bagaimana jika lupa sintaks SQL saat interview?", duration: 50, sourceNo: 3,
    quick: "Saya akan tetap menjelaskan logikanya: filter data yang relevan, tentukan grain, join tabel yang diperlukan, group dan hitung metric, lalu sort atau rank hasilnya. Setelah itu saya tulis pseudocode atau sintaks sedekat yang saya ingat. Menurut saya, menunjukkan cara berpikir yang benar lebih baik daripada menebak fungsi secara acak.",
    full: "Kalau lupa detail sintaks, saya tidak akan diam atau mengarang. Saya akan menjelaskan langkah penyelesaiannya dengan kata-kata: pahami pertanyaannya, tentukan output dan grain, pilih tabel sumber, filter periodenya, hubungkan master data bila perlu, hitung metric, validasi duplicate atau NULL, lalu urutkan hasil. Misalnya untuk top NPT per rig, saya akan mengatakan menggunakan window function seperti ROW_NUMBER atau DENSE_RANK dengan partition per rig dan order by NPT descending. Setelah logikanya jelas, saya tulis pseudocode atau sintaks yang saya ingat dan menyebut bagian yang perlu saya cek.",
    points: ["Explain logic first", "Define output and grain", "Validate NULL/duplicates", "Use pseudocode", "Be honest about syntax"],
    note: "Ini menunjukkan reasoning, tetapi tetap perlu latihan menulis query dasar tanpa bantuan.", reference: "Materi 3 — Cara Menjawab Jika Lupa Sintaks."
  },
  {
    id: "excel-foundations", title: "Excel Foundations", category: "Excel", question: "Fondasi Excel apa yang penting untuk Operations Engineer?", duration: 60, sourceNo: 3,
    quick: "Fondasinya bukan hanya rumus. Saya perlu memahami cell dan range, relative serta absolute reference, format angka dan tanggal, sort/filter, dan Excel Table. Setelah itu baru fungsi agregasi, logika, lookup, cleaning, PivotTable, dan Power Query. Excel Table penting karena range menjadi dinamis dan formula lebih mudah dibaca.",
    full: "Fondasi Excel dimulai dari struktur data yang rapi: satu header, satu grain per row, tipe data konsisten, dan tidak memakai merged cell pada tabel analisis. Saya perlu memahami relative reference seperti B2 yang berubah ketika formula disalin, absolute reference seperti $F$1 yang dikunci, serta mixed reference. Format angka dan tanggal, sort, filter, dan Excel Table juga penting. Excel Table membuat range dinamis, menyediakan filter, dan structured reference. Setelah fondasinya benar, fungsi SUM, AVERAGE, IF, SUMIFS, XLOOKUP, FILTER, PivotTable, dan Power Query menjadi lebih aman digunakan.",
    points: ["Clean tabular structure", "Relative/absolute reference", "Correct data types", "Excel Table", "Build formulas on solid structure"],
    note: "Dashboard yang bagus tidak bisa memperbaiki data sumber yang strukturnya kacau.", reference: "Materi 3 — Roadmap dan Fondasi Excel."
  },
  {
    id: "excel-logic-aggregation", title: "Excel Logic & Aggregation", category: "Excel", question: "Fungsi Excel apa yang paling relevan untuk analisis operasi?", duration: 65, sourceNo: 3,
    quick: "Untuk dasar saya prioritaskan SUM, AVERAGE, MIN, MAX, COUNT, dan ROUND. Untuk flag atau rule saya pakai IF, IFS, AND, OR, dan IFERROR. Untuk KPI berdasarkan kondisi saya pakai SUMIFS, COUNTIFS, atau AVERAGEIFS. Contohnya menghitung total NPT untuk rig tertentu yang statusnya delayed.",
    full: "Saya memprioritaskan fungsi berdasarkan masalahnya. SUM, AVERAGE, MIN, MAX, COUNT, dan ROUND untuk ringkasan dasar. IF atau IFS memberi status berdasarkan rule, sedangkan AND dan OR menggabungkan kondisi. IFERROR menangani error secara terkontrol, tetapi tidak boleh dipakai untuk menyembunyikan masalah tanpa investigasi. SUMIFS, COUNTIFS, dan AVERAGEIFS menghitung metric berdasarkan beberapa kriteria seperti rig, status, activity, atau periode. Contoh operasionalnya adalah menghitung jumlah delayed jobs per rig, total NPT untuk activity tertentu, atau membuat escalation flag berdasarkan status dan threshold yang sudah disepakati.",
    points: ["Basic aggregations", "IF/IFS + AND/OR", "Conditional aggregation", "IFERROR with care", "Use defined business rules"],
    note: "Threshold pada dataset materi adalah latihan, bukan ketentuan resmi perusahaan.", reference: "Materi 3 — Fungsi Excel dari basic sampai analisis."
  },
  {
    id: "excel-lookup-cleaning", title: "Excel Lookup & Cleaning", category: "Excel", question: "Bagaimana Anda menggabungkan dan membersihkan data di Excel?", duration: 60, sourceNo: 3,
    quick: "Untuk mengambil informasi dari master table saya bisa memakai XLOOKUP, atau VLOOKUP dan INDEX-MATCH bila diperlukan. Untuk cleaning ada TRIM, CLEAN, UPPER atau LOWER, fungsi teks, dan data type yang benar. Setelah lookup saya cek unmatched key, duplicate ID, dan grain supaya hasil tidak terlihat benar padahal relasinya salah.",
    full: "Untuk lookup modern saya memilih XLOOKUP karena arah pencarian fleksibel dan bisa memberi nilai ketika key tidak ditemukan. VLOOKUP atau INDEX-MATCH tetap berguna tergantung versi dan struktur file. Sebelum lookup, saya membersihkan key dengan TRIM atau CLEAN, menyeragamkan kapitalisasi jika relevan, memastikan data type sama, dan memeriksa leading zero. Setelahnya saya cek 'Not Found', duplicate key pada master, dan jumlah row sebelum-sesudah. Fungsi LEFT, RIGHT, MID, LEN, CONCAT, atau TEXTJOIN membantu parsing dan penyusunan label, tetapi aturan cleaning harus repeatable dan terdokumentasi.",
    points: ["XLOOKUP / alternatives", "Clean keys first", "Check data types", "Audit unmatched and duplicates", "Preserve grain"],
    note: "Jangan memakai IFERROR untuk menutupi semua lookup error tanpa melihat penyebabnya.", reference: "Materi 3 — Lookup serta Text & Cleaning."
  },
  {
    id: "excel-pivottable", title: "Excel PivotTable", category: "Excel", question: "Bagaimana PivotTable membantu morning meeting?", duration: 55, sourceNo: 3,
    quick: "PivotTable merangkum banyak row tanpa menulis banyak formula. Misalnya Rig_ID di Rows, Status di Columns, Sum of NPT dan Count of Job di Values, lalu Activity atau Date menjadi slicer. Dari situ saya bisa mengurutkan rig dengan NPT terbesar dan drill down ke job penyumbangnya.",
    full: "PivotTable cocok untuk analisis cepat saat struktur data sudah rapi. Untuk monitoring well services, saya bisa menaruh Rig_ID pada Rows, Status pada Columns, Sum of NPT_Hours dan Count of Job_ID pada Values, lalu Activity atau Date sebagai filter dan slicer. Hasilnya dapat diurutkan descending untuk melihat hotspot. Tetapi saya tidak berhenti di angka summary; saya akan drill down ke job, activity, dan event penyumbang, mengecek apakah data terduplikasi, lalu menghubungkan temuan ke owner serta action. PivotChart dan conditional formatting dapat membantu komunikasi, tetapi insight tetap harus tervalidasi.",
    points: ["Fast summary", "Rows/Columns/Values", "Slicer for focus", "Drill from hotspot to job", "Validate source"],
    note: "Refresh PivotTable setelah sumber data berubah dan pastikan source range mencakup data terbaru.", reference: "Materi 3 — PivotTable untuk Operations Engineer."
  },
  {
    id: "excel-data-quality", title: "Excel Data Quality", category: "Excel", question: "Bagaimana menjaga kualitas data di Excel?", duration: 60, sourceNo: 3,
    quick: "Saya memakai Data Validation untuk membatasi input seperti status, conditional formatting untuk menandai anomali atau duplicate ID, dan pengecekan tipe data serta missing value. Remove Duplicates tidak boleh langsung dipakai sebelum memahami grain, karena dua row yang terlihat mirip bisa mewakili event berbeda.",
    full: "Data quality di Excel perlu dicegah sejak input. Data Validation dapat membatasi nilai status ke daftar yang disetujui sehingga penulisannya konsisten. Conditional Formatting membantu menandai threshold, missing field, atau duplicate Job_ID. Saya juga cek tipe data, whitespace, format tanggal, impossible value, dan relationship ke master. Remove Duplicates harus digunakan hati-hati: sebelumnya saya tentukan grain dan key yang benar, simpan raw data, serta pahami apakah duplicate itu kesalahan atau memang satu job memiliki beberapa event. Idealnya ada pemisahan raw, clean, dan report layer agar transformasi dapat diaudit.",
    points: ["Prevent bad input", "Highlight anomalies", "Understand grain before dedupe", "Preserve raw data", "Audit transformations"],
    note: "Jangan menghapus row hanya karena terlihat sama tanpa memahami key dan konteks operasionalnya.", reference: "Materi 3 — Conditional Formatting dan Data Validation."
  },
  {
    id: "power-query", title: "Power Query / ETL", category: "Data & Software", question: "Apa itu Power Query dan kapan digunakan?", duration: 60, sourceNo: 3,
    quick: "Power Query adalah tool untuk proses ETL: mengambil data, membersihkan atau mentransformasi, lalu memuatnya ke Excel atau data model. Cocok untuk pekerjaan berulang seperti append daily report, merge rig master, trim text, menyeragamkan status, mengubah data type, dan refresh tanpa mengulang langkah manual.",
    full: "Power Query menangani proses Extract, Transform, Load secara repeatable. Saya dapat mengambil file Excel, CSV, folder laporan harian, atau source lain; lalu memilih kolom, memperbaiki data type, trim dan clean text, mengganti value, filter row, merge master table, atau append beberapa file. Langkah transformasi tercatat sehingga saat data baru datang proses dapat di-refresh tanpa mengulang cleaning manual. Sebelum load, saya tetap memeriksa grain, key, row count, error, dan apakah merge menghasilkan unmatched atau duplicate. Power Query menyiapkan data; analisisnya kemudian dilakukan di Excel Data Model atau Power BI.",
    points: ["Extract–Transform–Load", "Repeatable cleaning", "Merge vs append", "Data type and key checks", "Refreshable process"],
    note: "Power Query tidak menggantikan pemahaman data. Transformasi yang konsisten tetap bisa salah jika rule-nya salah.", reference: "Materi 3 — Power Query di Excel dan Power BI."
  },
  {
    id: "power-bi-workflow", title: "Power BI Workflow", category: "Power BI", question: "Jelaskan alur kerja Power BI secara konsep.", duration: 60, sourceNo: 3,
    quick: "Alurnya adalah data source, lalu Power Query untuk cleaning, data model untuk relationship, DAX untuk measure, visual atau report, kemudian interpretasi dan decision. Saya tidak langsung membuat chart; saya pastikan tipe data, grain, key, dan KPI definition sudah benar lebih dulu.",
    full: "Saya menjelaskan alur Power BI sebagai Data Source → Power Query → Data Model → DAX Measures → Visual/Report → Interpretation and Decision. Power Query menyiapkan data sebelum load. Data model mengatur relationship antara fact dan dimension. DAX membuat metric yang dihitung sesuai filter context. Visual kemudian menyampaikan KPI, trend, breakdown, dan detail. Tahap terakhir adalah interpretasi: hotspot apa yang terlihat, apakah datanya valid, siapa owner-nya, dan action apa yang perlu dilakukan. Dashboard bukan tujuan akhir; ia alat untuk mempercepat pemahaman dan keputusan.",
    points: ["Source", "Clean", "Model", "Measure", "Visualize", "Interpret and decide"],
    note: "Jangan membuat visual sebelum memahami KPI definition dan relationship model.", reference: "Materi 3 — Roadmap dan Alur Kerja Power BI."
  },
  {
    id: "power-bi-data-model", title: "Power BI Data Model", category: "Power BI", question: "Apa itu relationship dan star schema dalam Power BI?", duration: 65, sourceNo: 3,
    quick: "Relationship menghubungkan tabel lewat key. Dalam star schema, fact table berisi transaksi atau event, sedangkan dimension menyimpan konteks seperti rig, well, activity, atau date. Model yang rapi mengurangi duplikasi, membuat filter lebih konsisten, dan mencegah perhitungan measure menjadi ambigu.",
    full: "Data model menentukan bagaimana filter mengalir antartabel. Fact table biasanya menyimpan event atau aktivitas pada grain tertentu, misalnya satu row per job atau NPT event. Dimension table menyimpan atribut deskriptif seperti rig, well, activity, contractor, dan date. Dalam star schema, dimension mengelilingi fact melalui relationship yang umumnya one-to-many. Model terstruktur mengurangi pengulangan atribut, menjaga konsistensi, dan membuat DAX lebih mudah dipahami. Sebelum membuat relationship saya cek uniqueness pada sisi 'one', cardinality, grain, active relationship, dan arah filter agar tidak menimbulkan duplicate atau ambiguous path.",
    points: ["Fact vs dimension", "One-to-many", "Star schema", "Unique key on one side", "Consistent filter flow"],
    note: "Jangan menghubungkan tabel hanya karena nama kolom sama. Pastikan definisi key dan grain cocok.", reference: "Materi 3 — Power BI Data Model."
  },
  {
    id: "dax-measures", title: "DAX Measures", category: "Power BI", question: "Apa perbedaan calculated column dan measure?", duration: 60, sourceNo: 3,
    quick: "Calculated column dihitung per row dan disimpan di model. Measure dihitung saat report digunakan sesuai filter context. Untuk KPI seperti Total NPT, Total Jobs, Delayed Jobs, Average NPT, atau Delayed Rate, measure biasanya lebih tepat karena nilainya berubah mengikuti slicer.",
    full: "Calculated column dievaluasi per row saat data diproses dan nilainya disimpan dalam model. Measure dievaluasi saat query report berjalan dan berubah sesuai filter context dari slicer, visual, atau selection. Karena itu KPI agregat seperti Total NPT dengan SUM, Total Jobs dengan DISTINCTCOUNT, Delayed Jobs dengan CALCULATE, Average NPT, dan Delayed Rate dengan DIVIDE biasanya dibuat sebagai measure. Saya juga memperhatikan denominator, duplicate Job_ID, blank value, dan konteks filter. DIVIDE lebih aman untuk pembagian karena dapat mengatur hasil ketika denominator nol.",
    points: ["Column = row-level stored", "Measure = dynamic filter context", "SUM/DISTINCTCOUNT/CALCULATE", "DIVIDE for safe ratios"],
    note: "Measure yang benar tetap membutuhkan model dan definisi KPI yang benar.", reference: "Materi 3 — DAX Dasar."
  },
  {
    id: "dashboard-storytelling", title: "Dashboard Storytelling", category: "Power BI", question: "Bagaimana menyusun dashboard operasi yang mudah dibaca?", duration: 65, sourceNo: 3,
    quick: "Saya susun dari atas ke bawah: KPI utama, trend waktu, breakdown penyebab atau rig, lalu tabel detail. Slicer dipakai untuk fokus pada rig, status, activity, atau tanggal. Saat mempresentasikan, urutannya juga sama: seberapa besar masalahnya, apakah membaik, di mana hotspot-nya, job mana yang perlu dibahas, lalu apa action-nya.",
    full: "Dashboard operasi sebaiknya mengikuti alur pertanyaan. Bagian atas menampilkan KPI seperti Total Jobs, Delayed Jobs, Total NPT, dan Average NPT untuk menunjukkan magnitude. Berikutnya line chart menjawab trend, bar chart menunjukkan breakdown per rig atau activity, dan table detail memungkinkan drill-down ke Job_ID serta well. Slicer membantu fokus pada periode, rig, status, atau activity tanpa mengubah query. Saya menghindari terlalu banyak visual atau warna. Saat membahas dashboard, saya mulai dari KPI, lanjut ke trend, breakdown, detail, validasi data, lalu owner dan action item. Visual harus mendukung keputusan, bukan hanya terlihat menarik.",
    points: ["KPI → trend → breakdown → detail", "Slicers for focus", "Minimal purposeful visuals", "End with owner and action"],
    note: "Dataset dan KPI materi adalah latihan sintetis; jangan menyebutnya sebagai dashboard produksi PHR.", reference: "Materi 3 — Layout Dashboard Well Services dan Storytelling."
  },
  {
    id: "npt-analysis", title: "NPT Data Analysis", category: "Case Study", question: "Apa yang Anda lakukan setelah melihat satu rig memiliki NPT tertinggi?", duration: 65, sourceNo: 3,
    quick: "Saya tidak berhenti di ranking. Saya validasi dulu definisi dan kelengkapan datanya, lalu drill down ke job, activity, dan event penyumbang NPT. Saya cek apakah polanya berulang, bedakan fakta dari coding atau input issue, kaitkan dengan kondisi operasi, kemudian tentukan owner, action, dan cara memonitor hasil perbaikannya.",
    full: "Kalau dashboard menunjukkan satu rig memiliki NPT tertinggi, pertama saya validasi periodenya, definisi NPT, grain, missing data, duplicate, dan apakah seluruh rig memiliki coverage yang setara. Setelah itu saya drill down dari rig ke job, activity, event category, waktu, dan equipment untuk melihat konsentrasi penyebab. Saya bandingkan dengan baseline serta history dan memisahkan confirmed fact dari indikasi. Temuan kemudian dikaitkan ke konteks operasi melalui diskusi dengan owner terkait. Outputnya bukan hanya chart, tetapi problem statement, impact, action owner, target, dan monitoring setelah corrective action. Data membantu prioritas, tetapi root cause tetap perlu bukti teknis.",
    points: ["Validate metric and coverage", "Drill to contributing jobs/events", "Look for recurrence", "Confirm with operational context", "Owner + action + monitoring"],
    note: "Angka pada materi 3 berasal dari dataset dummy, bukan data aktual PHR.", reference: "Materi 3 — Mini Exercise Power BI dan expected insight."
  }
];

topics.push(...material3Topics);

const fatherUpdateTopics = [
  {
    id: "rig-systems", title: "Rig Systems", category: "Technical", question: "Apa sistem utama yang ada pada rig?", duration: 65, sourceNo: "update",
    quick: "Kalau saya bagi secara sederhana, rig punya lima sistem utama. Hoisting untuk mengangkat dan menurunkan string, rotating untuk memberi putaran, circulating untuk mensirkulasikan fluida, well control atau BOP system untuk menjaga sumur tetap terkendali, dan power system sebagai sumber energinya. Kelimanya saling terhubung, jadi gangguan di satu sistem bisa langsung berdampak ke safety dan progress pekerjaan.",
    full: "Saya membagi rig menjadi lima sistem supaya lebih mudah melihatnya sebagai satu kesatuan. Hoisting system menangani pengangkatan dan penurunan tubular, rod, serta equipment melalui mast, crown block, traveling system, dan drawworks. Rotating system memberi putaran ke drill atau work string melalui rotary, top drive, atau power swivel sesuai jenis rig dan job. Circulating system mengalirkan fluida melalui pump, tank, line, dan return path untuk cleaning, membawa cutting atau sand, cooling, serta membantu pressure control. Well-control system menggunakan BOP, valve, choke path, dan barrier untuk menjaga well tetap terkendali. Power system menyediakan tenaga melalui engine atau motor, transmission, serta hydraulic atau electrical distribution. Karena saling bergantung, perubahan pada satu sistem perlu dilihat dampaknya ke sistem lain, keselamatan, dan schedule.",
    points: ["Hoisting", "Rotating", "Circulating", "Well Control/BOP", "Power", "System interaction"],
    note: "Jelaskan fungsi satu kalimat per sistem. Tidak perlu menghafal semua komponen atau mengklaim mengoperasikan rig.",
    reference: "Update Ayah — Summary Interview PHR p.15."
  },
  {
    id: "phr-sifp", title: "PHR SIFP & SWA", category: "HSE", question: "Apa yang Anda pahami tentang SIFP dan SWA di operasi rig?", duration: 65, sourceNo: "update",
    quick: "Yang saya tangkap, SIFP fokus mencegah kejadian yang bisa menyebabkan cedera serius atau fatal. Praktiknya bukan cuma slogan, tapi lewat good-quality SWA, readiness check seperti CRSSC walk-through, memastikan crew lengkap dan paham pekerjaannya, serta PJSM sebelum job. Kalau ada kondisi tidak aman, pekerjaan tidak diteruskan otomatis; hazard disampaikan, mitigasi dan readiness diverifikasi, baru operasi dilanjutkan setelah aman.",
    full: "SIFP atau Serious Injury and Fatality Prevention menekankan pencegahan terhadap risiko dengan konsekuensi serius. Dari update terbaru, penguatannya mencakup good-quality Stop Working Authority, CRSSC walk-through, 100% crew complete, PJSM Anti Lupa, serta kolaborasi tiga pilar: WSR, FHL, dan Tool Pusher. Saya memahaminya sebagai rangkaian readiness dan komunikasi: scope, hazard, control, role, serta abnormal scenario perlu dipahami sebelum job dimulai. Kalau kondisi berubah atau ada hazard yang tidak terkontrol, prinsip SWA digunakan sesuai kewenangan. Pekerjaan baru dilanjutkan setelah mitigasi, barrier, dan readiness dinilai memadai oleh pihak yang berwenang.",
    points: ["Prevent serious injury/fatality", "Good-quality SWA", "CRSSC walk-through", "Crew readiness + PJSM", "WSR–FHL–Tool Pusher"],
    note: "Pertahankan istilah ‘100% crew complete’ dan ‘PJSM Anti Lupa’ sesuai sumber. Jangan membuat kepanjangan resmi baru jika tidak tersedia.",
    reference: "Update Ayah — Summary Interview PHR p.15."
  },
  {
    id: "well-types", title: "Well Types", category: "Technical", question: "Apa tipe-tipe sumur yang Anda pahami di lingkungan PHR?", duration: 70, sourceNo: "update",
    quick: "Secara fungsi, saya membaginya menjadi producer, water injector, steam injector, disposal well, dan observation well. Producer mengalirkan fluida reservoir ke permukaan. Water atau steam injector memasukkan fluida untuk mendukung strategi reservoir. Disposal well dipakai untuk menempatkan fluida ke zona yang ditentukan, sedangkan observation well fokus ke monitoring. Jadi parameter dan risikonya juga berbeda untuk setiap tipe.",
    full: "Producer well menghasilkan fluida reservoir dan biasanya dipantau dari rate, artificial lift, integrity, sand, scale, serta pump reliability. Water injector menginjeksikan air untuk pressure support atau displacement, sehingga injection rate, pressure, injectivity, dan integrity menjadi perhatian. Steam injector relevan pada thermal recovery heavy oil dan menambah perhatian pada pressure, temperature, thermal hazard, serta integrity. Disposal well menginjeksikan fluida ke zona yang ditentukan dengan fokus pada compliance, integrity, dan injection limit. Observation well digunakan untuk memonitor kondisi reservoir, fluida, pressure, atau temperature sesuai program, sehingga kualitas data lebih penting daripada production target.",
    points: ["Producer", "Water injector", "Steam injector", "Disposal", "Observation", "Different objective, different monitoring"],
    note: "Jawab fungsi dan concern utamanya. Jangan berhenti pada daftar nama sumur.",
    reference: "Update Ayah — Summary Interview PHR p.16."
  },
  {
    id: "centrifugal-pump", title: "Centrifugal Pump", category: "Technical", question: "Apa prinsip kerja centrifugal pump dan apa yang perlu dimonitor?", duration: 75, sourceNo: "update",
    quick: "Centrifugal pump mengubah energi mekanik dari motor menjadi energi fluida. Impeller mempercepat fluida, lalu volute atau diffuser mengubah sebagian energi kecepatannya menjadi pressure atau head. Saya juga perlu melihat hubungan head dan flow, operasi dekat BEP, kondisi suction, kecukupan NPSH, serta tanda cavitation seperti suara, vibration, penurunan flow, dan kerusakan impeller.",
    full: "Pada centrifugal pump, fluida masuk melalui suction menuju eye impeller. Putaran impeller menambah kecepatan dan energi fluida, lalu volute atau diffuser mengubah sebagian velocity menjadi pressure atau head sebelum fluida keluar melalui discharge. Pada pump curve tertentu, head umumnya turun saat flow meningkat. Best Efficiency Point adalah area operasi yang paling efisien dan stabil untuk pump tersebut. Cavitation dapat terjadi ketika tekanan lokal turun di bawah vapor pressure, membentuk bubble yang kemudian kolaps dan menimbulkan noise, vibration, erosion, serta performance loss. Secara konsep, NPSH available perlu cukup dibanding kebutuhan pump. Dari sisi reliability saya juga akan melihat bearing, mechanical seal, coupling dan alignment, motor, lubrication, vibration, valve position, source level, serta suction restriction.",
    points: ["Impeller adds energy", "Volute/diffuser builds head", "Head–flow curve", "BEP", "Cavitation & NPSH", "Bearing/seal/vibration"],
    note: "Kalau ada suara seperti kerikil dan flow turun, cavitation adalah salah satu kemungkinan yang perlu diverifikasi—bukan diagnosis otomatis.",
    reference: "Update Ayah — lima topik teknis prioritas, Summary p.20."
  },
  {
    id: "production-system", title: "Basic Production System", category: "Technical", question: "Jelaskan alur fasilitas produksi secara sederhana.", duration: 75, sourceNo: "update",
    quick: "Secara sederhana, fluida keluar dari well dan dikontrol di wellhead, lalu mengalir lewat flowline atau manifold menuju separator untuk dipisahkan fasenya. Setelah itu fluida masuk ke tank atau treatment, lalu dipindahkan lewat pump atau transfer system ke proses berikutnya. Parameter yang saya lihat antara lain pressure, temperature, flow, level, equipment status, alarm, leakage, dan deviation dari operating envelope.",
    full: "Alur dasarnya adalah well atau wellhead → flowline dan manifold → separator → tank atau treatment → pump dan transfer. Wellhead menjadi pressure-containing assembly di permukaan dan titik kontrol awal. Flowline membawa fluida, sedangkan manifold mengarahkan routing menuju fasilitas. Separator memisahkan oil, gas, dan water sesuai desain, sehingga pressure, level, temperature, interface, carryover, dan carry-under perlu diperhatikan. Tank atau treatment menjadi buffer, storage, atau conditioning dengan perhatian pada level, quality, containment, serta venting. Pump atau transfer system memindahkan fluida ke proses, export, atau injection berikutnya dan dipantau dari flow, discharge pressure, vibration, seal, bearing, serta availability. Operation Engineer melihatnya sebagai satu sistem, bukan equipment yang berdiri sendiri.",
    points: ["Well/wellhead", "Flowline/manifold", "Separator", "Tank/treatment", "Pump/transfer", "Pressure–temperature–flow–level"],
    note: "Ini adalah high-level production flow. Konfigurasi aktual bergantung pada field dan facility design.",
    reference: "Update Ayah — Basic Production System, Summary p.20."
  }
];

topics.push(...fatherUpdateTopics);

const material2Supplements = {
  "well-completion": "Materi 2 memperjelas empat konfigurasi utama: open hole, open-hole liner, cased hole, dan cased-hole liner. Untuk cased-hole completion, urutan sederhananya adalah drill to TD → run production casing → cement → drill-out dan evaluasi cement bond → perforate target interval → wash/test → install production equipment. Saat menjelaskan completion, selalu hubungkan dengan well control dan barrier yang aktif pada tiap perubahan konfigurasi.",
  "drilling-to-completion": "Tambahan konteks: wellbore biasanya dibangun bertahap melalui beberapa hole section, casing, dan cementing—bukan satu diameter sampai target. Formation evaluation dapat dilakukan saat drilling melalui MWD/LWD atau setelah interval dibor melalui wireline. Sequence aktual dan tools mengikuti well plan; tidak semua well menggunakan semuanya.",
  "workover-vs-service": "Materi 2 menambahkan FIBO sebagai contoh Routine Service serta rigless operation sebagai metode intervensi tanpa conventional workover rig. Workover dapat mencakup additional perforation, milling, casing repair, fishing, gravel pack, cementing, acidizing, fracturing, conversion producer/injector, dan zone isolation. Cara membedakannya tetap dari objective dan perubahan kondisi downhole, bukan sekadar nama unitnya.",
  "completion-engineer": "Dalam workflow Rig Hub, Completion Engineer berperan sebagai engineering feasibility gate: mengubah recommendation menjadi RS Program yang executable. Ini berbeda dari operational feasibility gate di rig site yang memeriksa kenyataan wellpad, equipment, dan kondisi aktual. Job baru maju jika readiness operasional dan program engineering sama-sama memadai.",
  "operation-engineer": "Materi 2 memberi enam lensa saat membaca pekerjaan: objective, current well condition/history, program dan sequence, risk/barrier, progress/deviation, serta communication/authority. Ownership bukan berarti memperbaiki semua sendiri, tetapi memastikan fakta, impact, owner, action, dan next plan terkelola.",
  "study-case": "Tambahan urutan sebelum eskalasi: cek dulu apakah issue sudah tercakup approved best practice. Jika belum selesai, klasifikasikan menjadi program/design, operational, atau logistics/material/wellpad dan arahkan ke function owner yang tepat. Safety → Facts → Best practice → Classify → Escalate → Monitor → Report.",
  "pump-failure": "Untuk laporan pump stuck atau not pumping, jangan menerima label sebagai diagnosis. Konfirmasi symptom, pressure dan production trend, pumping condition, mechanical finding, serta history sand, scale, atau repeated failure. Baru tentukan apakah mengarah ke routine service/change-out pump atau membutuhkan engineering review lebih lanjut.",
  "wellview": "Dalam workflow Rig Hub, WellView dan well data menjadi bagian dari program package yang diteruskan menuju rig untuk eksekusi serta kembali menjadi basis report dan feedback. Artinya kualitas input data memengaruhi review history, plan-vs-actual, dan continuous improvement berikutnya.",
  "hse": "Materi Rig Hub merangkum urutan mindset sebagai Safety → Compliance → Performance. Pekerjaan bukan hanya harus cepat; kondisi well dan barrier harus aman, eksekusi sesuai program/prosedur, baru kemudian dioptimalkan performanya.",
  "risk-assessment": "Tambahkan pertanyaan barrier pada setiap step: barrier apa yang aktif, apa backup-nya, apakah integritasnya sudah diverifikasi, dan apa yang berubah saat equipment dibuka, diturunkan, atau dilepas. Barrier configuration bersifat phase-dependent."
};

Object.entries(material2Supplements).forEach(([id, supplement]) => {
  const topic = topics.find(item => item.id === id);
  if (topic) topic.supplements = [{ source: 2, text: supplement }];
});

const material3Supplements = {
  "excel": "Materi 3 memperjelas prioritas yang relevan untuk Operations Engineer: struktur data dan Excel Table, SUM/AVERAGE, IF–AND–OR, SUMIFS/COUNTIFS, XLOOKUP, FILTER, PivotTable, conditional formatting, data validation, dan Power Query. Klaim level sebaiknya dibuktikan dengan workbook yang bisa didemonstrasikan, bukan daftar fungsi yang hanya dihafal.",
  "software": "Gunakan framing tiga lapis: software yang sudah dipakai dalam project, software yang pernah dipelajari, dan software yang sedang diperdalam. Untuk data, jelaskan peran SQL sebagai retrieval/query, Excel sebagai validation dan ad-hoc analysis, serta Power BI sebagai repeatable monitoring dan visualization.",
  "wellview": "Materi 3 menambahkan jembatan data: SQL dapat digunakan untuk memilih dan merangkum data dari database sesuai akses, Excel untuk validasi atau analisis cepat, dan Power BI untuk monitoring berulang. Jangan mengklaim akses database produksi atau arsitektur backend yang tidak pernah Anda pegang langsung.",
  "operational-update": "Prinsip dashboard mendukung struktur update operasi: KPI menunjukkan magnitude, trend menunjukkan arah, breakdown menunjukkan hotspot, dan detail menunjukkan job yang perlu dibahas. Hasil akhirnya tetap harus berupa fact, impact, action owner, dan next plan—bukan sekadar visual.",
  "continuous-improvement": "Data pipeline untuk improvement dapat dijelaskan sebagai: ambil data yang relevan → bersihkan dan validasi → tentukan baseline/KPI → cari trend dan breakdown → konfirmasi root cause dengan konteks operasi → jalankan action → monitor sesudah perbaikan. Data membantu prioritas, tetapi tidak otomatis membuktikan sebab-akibat.",
  "root-cause-analysis": "SQL, Excel, dan Power BI membantu menemukan pola, recurrence, serta hotspot untuk mempersempit investigasi. Namun korelasi pada dashboard bukan otomatis root cause; penyebab teknis tetap perlu diverifikasi melalui evidence, inspection, history, dan diskusi dengan function owner.",
  "job-delay": "Untuk analisis delay, pastikan definisi dan coding konsisten sebelum menghitung NPT. Drill down dari total per rig ke job, activity, dan event; periksa duplicate, missing data, serta coverage periode. Jangan menyebut seluruh delay sebagai NPT tanpa definisi yang disepakati.",
  "production-drop": "Gunakan data berlapis: SQL untuk mengambil trend dan history, Excel untuk pengecekan cepat serta rekonsiliasi, dan Power BI untuk melihat pattern serta breakdown. Hasil analitik adalah sinyal untuk investigasi, bukan pengganti verifikasi kondisi well dan fasilitas.",
  "ta-calcium-looping": "Workbook TA dapat menjadi bukti Excel: pisahkan raw dan clean data, gunakan Table, validasi tipe data, tampilkan trend per cycle, perbandingan enam limestone, degradation metric, dan insight. Sebut Power Query atau fitur lain hanya jika benar-benar digunakan di file tersebut.",
  "mud-competition": "Dashboard Mud Competition dapat membuktikan Power BI melalui alur source → clean → model → measures → visual → insight. Tandai jelas sebagai portfolio extension dari data kompetisi, bukan dashboard produksi PHR.",
  "study-case": "Jika case menyediakan tabel atau dashboard, validasi lebih dulu definisi metric, periode, grain, NULL, duplicate, dan coverage. Setelah itu baru gunakan trend atau breakdown untuk menentukan prioritas investigasi dan menghubungkannya dengan framework Safety → Facts → Impact → Verify → Action → Escalate → Report."
};

Object.entries(material3Supplements).forEach(([id, text]) => {
  const topic = topics.find(item => item.id === id);
  if (topic) (topic.supplements ||= []).push({ source: 3, text });
});

const fatherUpdateSupplements = {
  "rig-components": "Update personel rig: WSR mewakili sisi operator/site untuk memastikan program, HSE, koordinasi, dan reporting sesuai authority. Tool Pusher memimpin serta mengoordinasikan rig crew. Driller mengoperasikan kontrol rig, Derrickman mendukung pekerjaan di mast/monkeyboard, Floorman menangani aktivitas rig floor dan tubular, sedangkan Roustabout memberi general support untuk material, housekeeping, dan rig-up. Detail authority tetap mengikuti organisasi site.",
  "artificial-lift": "Klarifikasi pumping unit: Mechanical Pumping Unit atau SRP memakai prime mover, gearbox/crank, walking beam, rod string, dan reciprocating downhole pump. Hydraulic Pumping Unit menghasilkan gerak reciprocating melalui hydraulic drive. Keduanya sama-sama mengangkat fluida, tetapi mekanisme drive-nya berbeda. ESP menggunakan motor dan multistage centrifugal pump di downhole, sedangkan PCP merupakan positive-displacement lift dengan rotor–stator.",
  "hse": "Update SIFP menekankan good-quality SWA, CRSSC walk-through, 100% crew complete, PJSM Anti Lupa, dan kolaborasi tiga pilar WSR–FHL–Tool Pusher. Gunakan istilah sesuai sumber dan jangan menciptakan definisi resmi yang tidak tersedia.",
  "unsafe-condition": "Penguatan dari update ayah: pekerjaan tidak diteruskan otomatis ketika ada potensi kondisi tidak aman. Gunakan prinsip SWA sesuai kewenangan, komunikasikan hazard, lalu pastikan mitigasi dan readiness diverifikasi sebelum operasi dilanjutkan.",
  "wellview": "Bonus pengetahuan—bukan talking point utama: catatan terbaru menyebut ekosistem Peloton/WellView menggunakan teknologi .NET/C# serta beberapa teknologi legacy, TypeScript/JavaScript untuk web, dan berbagai platform data/integrasi. Jangan mengklaim hands-on pada tech stack tersebut. Tetap utamakan pengalaman observasi input data job/well dan alur database/query ke Excel atau Power BI.",
  "completion-equipment": "Klarifikasi istilah: wellhead adalah pressure-containing assembly berupa fitting, hanger, dan valve di permukaan yang menghubungkan casing/tubing dengan surface system. SRP, hydraulic pumping unit, ESP, dan PCP adalah production/artificial-lift configuration yang bekerja bersama wellhead—bukan definisi wellhead itu sendiri.",
  "continuous-improvement": "Peta hubungan tools: Pareto membantu memilih masalah dengan impact terbesar. Fishbone 6M membuka kemungkinan penyebab dari Man, Machine, Method, Material, Measurement, dan Environment. 5 Why memperdalam causal chain. RCA memvalidasi root cause dengan evidence. PDCA menjalankan action, membandingkan hasil dengan baseline, lalu menstandardisasi perbaikan yang efektif. Tidak semua tools harus selalu dipakai; pilih sesuai kompleksitas masalah.",
  "root-cause-analysis": "Update RCA: bedakan event atau symptom, immediate cause, contributing factors, dan root/system cause. Hipotesis perlu diuji memakai trend, alarm, timeline, inspection finding, log, report, dan input pihak terkait. Action harus punya owner serta due date, dan masalah belum dianggap selesai hanya karena action sudah dilakukan—efektivitasnya perlu diverifikasi."
};

Object.entries(fatherUpdateSupplements).forEach(([id, text]) => {
  const topic = topics.find(item => item.id === id);
  if (topic) (topic.supplements ||= []).push({ source: "update", label: "UPDATE AYAH", text });
});

const continuousImprovementTopic = topics.find(topic => topic.id === "continuous-improvement");
if (continuousImprovementTopic) {
  continuousImprovementTopic.full = "Saya memahami Continuous Improvement sebagai perbaikan sistematis berbasis data untuk meningkatkan safety, reliability, quality, cost, dan efisiensi. Saya melihat tools-nya sebagai satu rangkaian yang saling melengkapi. Data dan Pareto membantu memilih masalah yang paling berdampak. Fishbone 6M membantu membuka kemungkinan penyebab dari sisi Man, Machine, Method, Material, Measurement, dan Environment. Setelah itu 5 Why dapat dipakai untuk memperdalam causal chain, sedangkan RCA memvalidasi root cause dengan evidence. Action kemudian dijalankan melalui PDCA: pada tahap Plan kita mendefinisikan gap, baseline, target, penyebab, dan risk control; Do menjalankan solusi secara terkontrol; Check membandingkan hasil dengan baseline serta melihat unintended consequence; dan Act menstandardisasi solusi yang efektif atau merevisi hipotesis bila hasilnya belum tercapai. Untuk Operation Engineer, perbaikan belum selesai hanya karena action sudah dilakukan—hasilnya perlu diverifikasi dan recurrence harus dicegah.";
  continuousImprovementTopic.points = ["Pareto: pilih prioritas", "Fishbone 6M: buka kemungkinan", "5 Why: perdalam causal chain", "RCA: validasi root cause", "PDCA: implement, verify, standardize"];
  continuousImprovementTopic.note = "Tidak semua tools harus dipakai bersamaan. Pilih sesuai kompleksitas masalah dan selalu bedakan data pattern dengan root cause yang sudah terverifikasi.";
  continuousImprovementTopic.reference = "Materi 1–3 + Update Ayah — CI, PDCA, RCA, 5 Why, Fishbone 6M, dan Pareto.";
}

const relationGroups = [
  ["well-lifecycle", "drilling-to-completion", "formation-evaluation", "casing-cementing", "well-completion", "perforation", "completion-equipment", "artificial-lift", "workover-vs-service"],
  ["well-control", "kick", "lost-circulation", "well-barrier", "bop-bope", "hse", "risk-assessment", "unsafe-condition", "safety-vs-production"],
  ["completion-engineer", "rig-hub-workflow", "reading-well-program", "operation-engineer", "wows", "study-case", "operational-update", "job-delay", "material-discrepancy"],
  ["workover-vs-service", "rigless-operation", "well-control", "well-barrier", "perforation", "pump-failure", "production-drop"],
  ["rig-components", "kp-phr", "maintenance", "pump-failure", "completion-equipment", "artificial-lift"],
  ["wellview", "excel", "software", "continuous-improvement", "operational-update", "root-cause-analysis"],
  ["about-me", "why-oil-gas", "why-phr", "why-hire-me", "strength", "weakness", "closing"],
  ["kp-phr", "pln-experience", "ta-calcium-looping", "mud-competition", "why-hire-me"],
  ["job-delay", "tight-deadline", "supervisor-disagreement", "material-discrepancy", "study-case", "operational-update"],
  ["artificial-lift", "pump-failure", "production-drop", "maintenance", "root-cause-analysis"],
  ["data-tool-strategy", "sql-fundamentals", "sql-filter-null", "sql-aggregation", "sql-case-when", "erd-keys", "sql-join-union", "sql-cte-subquery", "sql-window-functions", "sql-interview-logic"],
  ["data-tool-strategy", "excel", "excel-foundations", "excel-logic-aggregation", "excel-lookup-cleaning", "excel-pivottable", "excel-data-quality", "power-query"],
  ["data-tool-strategy", "power-query", "power-bi-workflow", "power-bi-data-model", "dax-measures", "dashboard-storytelling", "npt-analysis"],
  ["wellview", "sql-fundamentals", "erd-keys", "data-tool-strategy", "power-bi-data-model"],
  ["operational-update", "job-delay", "npt-analysis", "dashboard-storytelling", "continuous-improvement", "root-cause-analysis"],
  ["ta-calcium-looping", "excel", "excel-data-quality", "excel-pivottable", "power-query"],
  ["mud-competition", "power-bi-workflow", "dashboard-storytelling", "dax-measures"],
  ["rig-systems", "rig-components", "well-control", "bop-bope", "phr-sifp"],
  ["phr-sifp", "hse", "risk-assessment", "unsafe-condition", "safety-vs-production"],
  ["well-types", "well-lifecycle", "artificial-lift", "production-system", "production-drop"],
  ["centrifugal-pump", "pump-failure", "maintenance", "production-system", "artificial-lift"],
  ["production-system", "operation-engineer", "production-drop", "well-types", "operational-update"]
];

const hubDefinitions = [
  {
    id: "hub-personal", title: "Personal Story & Motivation", category: "Personal", question: "Perkenalan, motivasi, PHR, dan alasan memilih Anda.", duration: 90,
    quick: "Perkenalkan, saya Fawwaz Athar Suandhito, lulusan Teknik Mesin ITB. Dari pengalaman di aviasi, energi, KP PHR, dan berbagai project, saya menemukan bahwa saya paling menikmati pekerjaan yang dekat dengan equipment, operasi, data, dan problem solving. Exposure langsung di PHR membuat arah itu makin jelas. Karena itu saya ingin menekuni Operation Engineer di Well Services dengan serius dan membawa dasar mechanical engineering, kemampuan analitis, serta kesiapan belajar di lapangan.",
    full: "Section ini menyatukan alur personal yang paling sering keluar: perkenalan, alasan memilih oil & gas, alasan memilih PHR, pemahaman tentang perusahaan, alasan perusahaan memilih saya, versi bahasa Inggris, dan closing. Benang merahnya adalah explorer yang akhirnya menemukan titik konvergensi di oil & gas. Cerita masa kecil di Minas–Duri menjadi personal hook, sementara KP PHR, pendidikan Teknik Mesin, pengalaman PLN, Mud Design Competition, dan project engineering menjadi bukti profesionalnya.",
    points: ["SIPT opening", "Explorer → convergence", "Personal hook + professional proof", "Role fit", "Closing commitment"],
    note: "Baca alurnya, bukan seluruh kata. Pilih versi yang sesuai pertanyaan dan jangan mengulang semua pengalaman pada setiap jawaban.",
    reference: "Gabungan materi Personal, Motivation, Company, English Answer, dan Closing.",
    members: ["about-me", "english", "why-oil-gas", "why-phr", "phr", "why-hire-me", "closing"],
    related: ["hub-experience", "hub-readiness", "hub-behavior"],
    visual: [["Study", "Teknik Mesin ITB"], ["Explore", "Aviasi & energi"], ["Exposure", "PHR & PLN"], ["Converge", "Oil & gas operation"], ["Target", "Operation Engineer"]]
  },
  {
    id: "hub-readiness", title: "Career & Work Readiness", category: "Personal", question: "Kesiapan posisi, penempatan, pola kerja, kompensasi, dan rencana karier.", duration: 70,
    quick: "Saya sudah lulus, tidak memiliki ikatan kerja, dan siap menerima tanggung jawab penuh pada posisi Jr. Completion / Operation Engineer. Saya fleksibel untuk penempatan Riau, wellsite, roster, shift, atau call-out sesuai prosedur dan fatigue management. Fokus saya sekarang adalah membangun pengalaman nyata, menjadi engineer yang dapat diandalkan, dan bertumbuh ke tanggung jawab yang lebih besar.",
    full: "Section ini menggabungkan seluruh pertanyaan kesiapan kerja: posisi yang dilamar, status saat ini, ekspektasi saat diterima, relokasi ke Riau, operasi 24/7, ekspektasi gaji, rencana S2, target lima tahun, dan hobi. Pesan besarnya harus konsisten: siap mulai, fleksibel secara lokasi dan pola kerja, memahami tuntutan operasi, realistis soal kompensasi, dan fokus membangun fondasi profesional.",
    points: ["Ready to start", "Flexible for field assignment", "Fatigue management", "Professional growth", "Compensation based on official package"],
    note: "Jawaban readiness perlu tegas, tetapi jangan memberi kesan siap bekerja tanpa istirahat atau mengabaikan HSE.",
    reference: "Gabungan Personal Status, Worksite Readiness, Salary, S2, dan Five-Year Plan.",
    members: ["position-applied", "current-status", "job-expectation", "relocation", "work-24-7", "salary", "s2-plan", "five-years", "hobby"],
    related: ["hub-personal", "hub-behavior", "hub-hse"],
    visual: [["Available", "Sudah lulus"], ["Deploy", "Riau / wellsite"], ["Operate", "Shift & roster"], ["Develop", "Build competence"], ["Contribute", "Become reliable"]]
  },
  {
    id: "hub-behavior", title: "Strength, Weakness & Behavior", category: "Behavioral", question: "Kelebihan, kelemahan, integritas, komunikasi, dan prioritas kerja.", duration: 70,
    quick: "Kekuatan saya ada pada growth mindset, analytical thinking, dan kemampuan beradaptasi. Kelemahan yang sedang saya perbaiki adalah kecenderungan menerima terlalu banyak pekerjaan. Sekarang saya mengelola prioritas berdasarkan urgency, impact, capacity, dan deadline, serta berkomunikasi lebih awal bila ada konflik. Dalam berbeda pendapat atau bekerja di bawah tekanan, saya tetap mengutamakan data, respect, integrity, dan safety.",
    full: "Section behavioral menyatukan strength, weakness, integrity, perbedaan pendapat dengan supervisor, dan tight deadline. Jawaban yang kuat selalu memiliki pola: sifat atau situasi → dampak → tindakan konkret → pembelajaran. Tunjukkan bahwa ownership bukan mengambil semua pekerjaan atau melawan authority, melainkan menjaga kualitas keputusan, mengomunikasikan risiko, dan memastikan tanggung jawab selesai secara profesional.",
    points: ["Analytical + adaptive", "Weakness with real mitigation", "Data over ego", "Integrity", "Prioritize without unsafe shortcut"],
    note: "Siapkan contoh nyata jika interviewer menggali. Jangan berhenti pada adjective seperti 'pekerja keras' atau 'perfeksionis'.",
    reference: "Gabungan Behavioral Questions dari materi 1.",
    members: ["strength", "weakness", "integrity", "supervisor-disagreement", "tight-deadline"],
    related: ["hub-personal", "hub-readiness", "hub-operations"],
    visual: [["Fact", "Lihat situasi"], ["Prioritize", "Risk & impact"], ["Communicate", "Early and clear"], ["Execute", "Own the action"], ["Reflect", "Improve method"]]
  },
  {
    id: "hub-experience", title: "Experience & Project Portfolio", category: "Experience", question: "Pengalaman PHR, PLN, tugas akhir, dan Mud Design Competition.", duration: 90,
    quick: "Empat bukti utama saya adalah KP PHR untuk exposure well operations dan analisis drawworks, PLN untuk hubungan equipment–data–system performance, tugas akhir calcium looping untuk eksperimen dan data consistency, serta Mud Design Competition untuk problem drilling, CFD, dan prototyping. Saya memilih cerita sesuai pertanyaan, lalu menjelaskan situation, action, result, learning, dan relevansinya ke Operation Engineer.",
    full: "Section ini adalah story bank, bukan satu jawaban yang harus dibacakan seluruhnya. KP PHR menjadi bukti paling langsung untuk well services dan rig operation. PLN menunjukkan kemampuan membaca kondisi equipment dalam konteks sistem. Tugas akhir membuktikan experimental discipline dan data analysis. Mud Design Competition menunjukkan kolaborasi, CFD, prototype, serta pemahaman problem hole cleaning. Setiap cerita perlu dibawakan dengan struktur situation/problem, action, result, learning, dan relevance.",
    points: ["PHR: operations exposure", "PLN: equipment performance", "TA: experiment & data", "Mud: drilling problem solving", "Choose story by question"],
    note: "Bedakan project asli dan portfolio extension. Jangan menciptakan angka hasil atau kendala yang tidak benar-benar dialami.",
    reference: "Gabungan Personal Story Bank materi 1 dan portfolio materi 3.",
    members: ["kp-phr", "pln-experience", "ta-calcium-looping", "mud-competition"],
    related: ["hub-personal", "hub-data", "hub-improvement"],
    visual: [["Situation", "Context"], ["Problem", "What mattered"], ["Action", "What I did"], ["Result", "Evidence"], ["Learning", "Role relevance"]]
  },
  {
    id: "hub-lifecycle", title: "Well Lifecycle & Completion", category: "Technical", question: "Dari drilling sampai sumur siap berproduksi.", duration: 90,
    quick: "Well dibangun melalui drilling, formation evaluation, casing dan cementing, lalu completion. Completion menyiapkan jalur produksi atau injeksi melalui konfigurasi open hole atau cased hole, perforation bila diperlukan, tubing, packer, wellhead, dan artificial lift sesuai desain. Semua tahap harus menjaga integrity, barrier, dan well control sebelum masuk production atau intervention berikutnya.",
    full: "Section ini menggabungkan seluruh konteks sebelum, selama, dan setelah completion: well lifecycle, alur drilling-to-completion, formation evaluation, casing dan cementing, komponen rig, empat tipe completion, perforation, completion equipment, dan artificial lift. Gunakan visual untuk mengingat alur besarnya, lalu pilih subbagian sesuai pertanyaan interviewer tanpa perlu pindah halaman.",
    points: ["Build wellbore", "Evaluate formation", "Create integrity", "Connect reservoir", "Install production system"],
    note: "Sequence dan equipment tidak identik untuk semua well. Selalu kembalikan detail ke well design, program, kondisi aktual, dan prosedur.",
    reference: "MAB II Bab VIII, MAB I Rig Components, dan Rig Hub Handbook.",
    members: ["well-lifecycle", "drilling-to-completion", "formation-evaluation", "casing-cementing", "rig-components", "well-completion", "perforation", "completion-equipment", "artificial-lift"],
    related: ["hub-well-control", "hub-well-service", "hub-hse"],
    visual: [["Drill", "Build wellbore"], ["Evaluate", "MWD/LWD/logging"], ["Case & Cement", "Integrity & isolation"], ["Complete", "Reservoir access"], ["Produce", "Lift & monitor"]]
  },
  {
    id: "hub-well-control", title: "Well Control & Barriers", category: "Well Control", question: "Pressure, kick, lost circulation, barriers, dan BOPE.", duration: 90,
    quick: "Well control menjaga pressure dan barrier agar formation fluid tidak masuk secara tidak terkendali. Primary control memakai hydrostatic pressure, secondary memakai early detection, shut-in, dan BOPE, sedangkan tertiary adalah emergency response. Di setiap step saya perlu tahu active barrier, backup barrier, status verifikasi, serta perubahan barrier ketika equipment dibuka atau dilepas.",
    full: "Section ini menggabungkan konsep yang sebelumnya terpisah: well control, kick/influx, lost circulation, well barrier, dan BOP/BOPE. Hubungannya penting: kehilangan kolom fluida dapat menurunkan hydrostatic pressure, meningkatkan risiko influx, lalu memerlukan secondary control bila primary gagal. Barrier bukan satu alat; konfigurasinya berubah mengikuti phase pekerjaan.",
    points: ["Pf vs hydrostatic", "Primary–secondary–tertiary", "Recognize kick causes", "Know active & backup barrier", "BOPE integrity"],
    note: "Jawab pada level prinsip dan koordinasi. Jangan mencoba memberi instruksi pengoperasian BOP atau well-kill procedure di luar kompetensi dan authority.",
    reference: "MAB II Well Control dan Rig Hub Handbook well barriers.",
    members: ["well-control", "kick", "lost-circulation", "well-barrier", "bop-bope"],
    related: ["hub-lifecycle", "hub-hse", "hub-well-service"],
    visual: [["Prevent", "Hydrostatic pressure"], ["Detect", "Abnormal influx signs"], ["Shut in", "Secondary control"], ["Stabilize", "Follow procedure"], ["Verify", "Barrier integrity"]]
  },
  {
    id: "hub-well-service", title: "Well Service, Workover & Rig Hub", category: "Technical", question: "Dari well recommendation sampai program dan eksekusi.", duration: 90,
    quick: "Routine service memulihkan fungsi sumur, sedangkan workover memperbaiki atau mengubah kondisi downhole. Dalam workflow Rig Hub, WRO mengidentifikasi kebutuhan, LSC memastikan readiness, Scheduler mengalokasikan rig, rig site mengecek kondisi aktual, dan Completion Engineer memastikan program executable. Saat membaca program, saya melihat objective, well condition, sequence, risk/barrier, deviation, dan authority.",
    full: "Section ini menggabungkan peran Completion Engineer, perbedaan routine service dan workover, rigless operation, WOWS Program Development, workflow IODSC/Rig Hub, serta cara membaca well program. Tujuannya agar hubungan antara kebutuhan sumur, readiness, engineering program, operational gate, execution, reporting, dan feedback terlihat sebagai satu sistem.",
    points: ["Routine = restore", "Workover = change/repair", "Recommendation → readiness → program", "Operational + engineering gates", "Read program with six lenses"],
    note: "Gunakan diagram Rig Hub sebagai model referensi. Jangan mengklaim struktur organisasi atau authority terbaru pasti identik dengan handbook lama.",
    reference: "MAB II Bab IV dan Rig Hub Handbook hal. 15–17.",
    members: ["completion-engineer", "workover-vs-service", "rigless-operation", "wows", "rig-hub-workflow", "reading-well-program"],
    related: ["hub-lifecycle", "hub-well-control", "hub-operations"],
    visual: [["Recommend", "WRO / well need"], ["Ready", "LSC & wellpad"], ["Schedule", "Rig allocation"], ["Program", "CE engineering gate"], ["Execute", "Rig site & feedback"]]
  },
  {
    id: "hub-operations", title: "Operations Mindset & Case Handling", category: "Operations", question: "Cara berpikir saat ada deviation, delay, atau masalah lapangan.", duration: 90,
    quick: "Saya mulai dari safety dan well integrity, lalu memisahkan fakta dari asumsi. Setelah objective dan impact jelas, saya verifikasi data, klasifikasikan issue sebagai design, operational, equipment, well condition, atau logistics, kemudian koordinasi ke owner yang tepat. Update harus berisi status, impact, action owner, dan next plan tanpa menebak root cause atau ETA.",
    full: "Section ini menyatukan tugas Operation Engineer, framework study case, operational update, job delay, material discrepancy, pump failure, dan production drop. Semua case menggunakan pola yang sama: Safety → Facts → Impact → Verify → Action → Escalate → Report. Dengan satu mental model ini, Anda tidak perlu menghafal jawaban berbeda untuk setiap kasus; cukup menyesuaikan data, risiko, dan function owner-nya.",
    points: ["Safety first", "Fact vs assumption", "Classify issue", "Right owner & authority", "Clear operational update"],
    note: "Ownership bukan berarti menjadi mechanic atau mengambil keputusan desain sendiri. Ownership berarti memastikan issue bergerak sampai keputusan dan statusnya jelas.",
    reference: "Gabungan case study materi 1–2 dan operational reporting.",
    members: ["operation-engineer", "study-case", "operational-update", "job-delay", "material-discrepancy", "pump-failure", "production-drop"],
    related: ["hub-well-service", "hub-hse", "hub-improvement"],
    visual: [["Safe", "Protect people & well"], ["Verify", "Facts and data"], ["Classify", "Design / ops / logistics"], ["Act", "Right owner"], ["Report", "Impact & next plan"]]
  },
  {
    id: "hub-hse", title: "HSE, Risk & Stop Work", category: "HSE", question: "Safety mindset dari risk assessment sampai intervensi.", duration: 75,
    quick: "HSE adalah dasar setiap keputusan operasi. Saya mengidentifikasi hazard, menilai likelihood dan consequence, memilih control sesuai hierarchy, lalu memeriksa residual risk. Jika kondisi berubah atau tidak aman, saya akan intervensi atau menggunakan Stop Work Authority, memastikan mitigasi diterapkan, lalu pekerjaan hanya dilanjutkan setelah kontrol dan barrier diverifikasi.",
    full: "Section ini menggabungkan arti HSE, risk assessment, respons terhadap unsafe condition, dan konflik safety versus production. Benang merahnya adalah Safety → Compliance → Performance. Target tetap dikelola, tetapi tidak boleh dicapai dengan mengorbankan orang, lingkungan, well integrity, atau aset.",
    points: ["Hazard identification", "Risk evaluation", "Hierarchy of controls", "Stop/intervene", "Verify before restart"],
    note: "PPE adalah lapisan kontrol terakhir. Tunjukkan perilaku konkret di balik slogan Patuh, Intervensi, dan Peduli.",
    reference: "MAB I FSWP dan Golden Rules Pertamina.",
    members: ["hse", "risk-assessment", "unsafe-condition", "safety-vs-production"],
    related: ["hub-well-control", "hub-operations", "hub-readiness"],
    visual: [["Identify", "Hazard"], ["Assess", "Likelihood × consequence"], ["Control", "Hierarchy"], ["Verify", "Residual risk"], ["Monitor", "Change & intervene"]]
  },
  {
    id: "hub-improvement", title: "Reliability & Continuous Improvement", category: "Problem Solving", question: "Maintenance, RCA, improvement, dan analisis NPT.", duration: 80,
    quick: "Continuous improvement dimulai dari data dan baseline, tetapi tidak berhenti di dashboard. Saya mencari trend dan hotspot, melakukan RCA untuk membedakan gejala dari akar masalah, menentukan corrective atau preventive action, lalu memonitor efektivitasnya. Maintenance dan analisis NPT diprioritaskan berdasarkan safety, criticality, recurrence, dan operational impact.",
    full: "Section ini menggabungkan continuous improvement, root cause analysis, preventive versus corrective maintenance, serta NPT data analysis. Alurnya adalah define problem → validate data → analyze causes → act → verify → standardize. Data membantu menentukan prioritas investigasi, tetapi korelasi bukan otomatis root cause; bukti teknis dan konteks operasi tetap diperlukan.",
    points: ["Baseline & valid data", "Symptom vs root cause", "Preventive/corrective action", "Verify effectiveness", "Standardize learning"],
    note: "RCA bukan mencari siapa yang salah. Fokus pada mekanisme kegagalan dan sistem yang mencegah pengulangan.",
    reference: "Gabungan Continuous Improvement materi 1 dan NPT Analysis materi 3.",
    members: ["continuous-improvement", "root-cause-analysis", "maintenance", "npt-analysis"],
    related: ["hub-operations", "hub-data", "hub-experience"],
    visual: [["Define", "Problem & baseline"], ["Measure", "Validate data"], ["Analyze", "Root cause"], ["Improve", "Corrective action"], ["Control", "Monitor & standardize"]]
  },
  {
    id: "hub-data", title: "Data Ecosystem, Software & WellView", category: "Data & Software", question: "Posisi SQL, Excel, Power BI, software engineering, dan WellView.", duration: 75,
    quick: "Saya melihat data sebagai alur: WellView atau source system mencatat informasi operasi, SQL mengambil dan merangkum data sesuai akses, Excel membantu validasi serta analisis cepat, dan Power BI menyajikan monitoring berulang. Saya membedakan tools yang sudah saya gunakan dalam project, yang pernah dipelajari, dan yang sedang saya perdalam.",
    full: "Section ini menjadi peta sebelum masuk ke detail SQL, Excel, atau Power BI. WellView menyediakan konteks data sumur dan job; SQL menangani retrieval dan transformasi berbasis database; Excel mendukung validation dan ad-hoc analysis; Power BI menyajikan KPI, trend, breakdown, dan detail. Software CAD/CAE tetap dijelaskan terpisah sesuai project, sementara skill data harus dibuktikan melalui portfolio nyata.",
    points: ["Source system", "SQL retrieval", "Excel validation", "Power BI monitoring", "Truthful skill framing"],
    note: "Jangan mengklaim akses production database, ownership dashboard PHR, atau expertise WellView yang belum pernah dilakukan langsung.",
    reference: "Gabungan materi Software, WellView, dan integrasi data materi 3.",
    members: ["data-tool-strategy", "software", "wellview"],
    related: ["hub-sql", "hub-excel", "hub-powerbi", "hub-improvement"],
    visual: [["Capture", "WellView / source"], ["Query", "SQL"], ["Validate", "Excel"], ["Model", "Power BI"], ["Decide", "Operational action"]]
  },
  {
    id: "hub-sql", title: "SQL — Complete Interview Guide", category: "SQL", question: "SQL dari basic query sampai window function dalam satu section.", duration: 120,
    quick: "Logika SQL saya mulai dari pertanyaan dan grain data, lalu memilih source, memfilter row, menghubungkan tabel, membuat agregasi atau klasifikasi, dan akhirnya mengurutkan atau memberi analisis per kelompok. Saya menjaga NULL, key, cardinality, dan duplicate supaya query yang valid secara sintaks juga benar secara hasil.",
    full: "Semua materi SQL sekarang ada dalam satu section: SELECT–FROM–WHERE, filter dan NULL, agregasi serta HAVING, CASE WHEN, ERD dan key, JOIN versus UNION, CTE versus subquery, window functions, dan strategi ketika lupa sintaks. Gunakan jump links di bawah untuk langsung menuju konsep yang ditanya tanpa berpindah section.",
    points: ["Question → grain → source", "Filter & join correctly", "Aggregate with context", "Protect data quality", "Explain logic even if syntax slips"],
    note: "Dataset pada materi adalah latihan sintetis. Jangan menyebut threshold atau hasilnya sebagai data aktual PHR.",
    reference: "Materi 3 — Panduan SQL untuk Persiapan Interview.",
    members: ["sql-fundamentals", "sql-filter-null", "sql-aggregation", "sql-case-when", "erd-keys", "sql-join-union", "sql-cte-subquery", "sql-window-functions", "sql-interview-logic"],
    related: ["hub-data", "hub-excel", "hub-powerbi"],
    visual: [["Ask", "Question & output"], ["Define", "Grain & source"], ["Shape", "Filter / join"], ["Analyze", "Aggregate / window"], ["Validate", "NULL / duplicate"], ["Explain", "Insight & logic"]]
  },
  {
    id: "hub-excel", title: "Excel — Analysis & Data Quality", category: "Excel", question: "Excel dari fondasi sampai PivotTable dan Power Query.", duration: 120,
    quick: "Saya memakai Excel untuk struktur data, validasi, formula, lookup, analisis cepat, dan reporting. Fondasinya adalah Table, reference, dan data type yang benar; lalu IF, SUMIFS, COUNTIFS, XLOOKUP, cleaning, PivotTable, conditional formatting, data validation, dan Power Query untuk proses berulang.",
    full: "Seluruh materi Excel kini berada di satu section panjang: cara menjawab level Excel secara jujur, fondasi data, logic dan conditional aggregation, lookup dan cleaning, PivotTable, data quality, serta Power Query/ETL. Fokusnya bukan menghafal banyak fungsi, tetapi memilih fungsi yang tepat, memvalidasi hasil, dan menghubungkannya dengan kebutuhan operasi.",
    points: ["Clean table structure", "Formula by problem", "Lookup with key checks", "Pivot for fast summary", "Repeatable Power Query"],
    note: "Jangan menyebut advanced hanya karena hafal fungsi. Tunjukkan workbook yang dapat dijelaskan dari raw data sampai insight.",
    reference: "Materi 1 dan Materi 3 — Roadmap Excel.",
    members: ["excel", "excel-foundations", "excel-logic-aggregation", "excel-lookup-cleaning", "excel-pivottable", "excel-data-quality", "power-query"],
    related: ["hub-data", "hub-sql", "hub-powerbi", "hub-experience"],
    visual: [["Raw", "Preserve source"], ["Clean", "Table & types"], ["Calculate", "Formula / lookup"], ["Summarize", "PivotTable"], ["Check", "Quality control"], ["Refresh", "Power Query"]]
  },
  {
    id: "hub-powerbi", title: "Power BI — Model to Decision", category: "Power BI", question: "Power BI dari source sampai dashboard dan keputusan.", duration: 110,
    quick: "Alur Power BI adalah source, Power Query, data model, DAX measures, visual, lalu interpretation dan decision. Model fact–dimension serta relationship harus benar sebelum membuat KPI. Dashboard saya susun dari KPI, trend, breakdown, sampai detail agar user dapat melihat magnitude, arah, hotspot, dan job yang perlu ditindaklanjuti.",
    full: "Section ini menggabungkan workflow Power BI, data model dan star schema, calculated column versus measure, DAX dasar, serta dashboard storytelling. Tujuannya adalah mampu menjelaskan dashboard secara end-to-end: dari kualitas source sampai action item, bukan hanya menunjukkan chart.",
    points: ["Prepare data", "Model relationships", "Create dynamic measures", "KPI → trend → breakdown → detail", "End with decision"],
    note: "Portfolio Power BI dari Mud Competition adalah extension pribadi, bukan dashboard produksi PHR.",
    reference: "Materi 3 — Roadmap Power BI.",
    members: ["power-bi-workflow", "power-bi-data-model", "dax-measures", "dashboard-storytelling"],
    related: ["hub-data", "hub-sql", "hub-excel", "hub-improvement"],
    visual: [["Source", "Excel / database"], ["Transform", "Power Query"], ["Model", "Fact & dimension"], ["Measure", "DAX"], ["Visual", "KPI & trend"], ["Decide", "Owner & action"]]
  }
];

const activeHubDefinitions = hubDefinitions
  .filter(hub => hub.id === "hub-sql")
  .map(hub => ({ ...hub, related: ["data-tool-strategy", "excel", "power-bi-workflow", "wellview"] }));

const groupedTopicToHub = new Map();
activeHubDefinitions.forEach(hub => hub.members.forEach(memberId => groupedTopicToHub.set(memberId, hub.id)));
const groupedIds = new Set(groupedTopicToHub.keys());
const ungroupedTopics = topics.filter(topic => !groupedIds.has(topic.id));
const displayTopics = [...activeHubDefinitions.map(hub => ({ ...hub, isHub: true })), ...ungroupedTopics];

const spokenOverrides = {
  "about-me": "Perkenalkan, saya Fawwaz Athar Suandhito, lulusan Teknik Mesin ITB. Selama kuliah saya sempat eksplor beberapa bidang, dari aviasi, energi, sampai akhirnya banyak belajar soal oil & gas. Pengalaman yang paling membuka pandangan saya adalah waktu KP di PHR, karena saya bisa melihat langsung drilling, workover dan completion, well intervention, sampai routine service. Dari situ saya sadar saya paling menikmati pekerjaan yang dekat dengan equipment, operasi, data, dan problem solving. Itu juga alasan kenapa posisi Operation Engineer ini terasa cocok dengan arah yang ingin saya tekuni.",
  "why-oil-gas": "Saya memang sempat mencoba beberapa bidang, mulai dari aviasi, electrical, sampai energi. Tapi waktu dapat exposure langsung di PHR dan ikut Mud Design Competition, saya merasa oil & gas paling cocok dengan hal yang saya suka. Problem-nya multidisiplin, dekat dengan real equipment, dan keputusan engineering-nya langsung terasa ke operasi. Jadi proses eksplorasi itu justru membantu saya yakin kalau bidang ini yang ingin saya tekuni.",
  "why-phr": "Alasan saya tertarik ke PHR itu personal sekaligus profesional. Saya pernah tumbuh di Minas–Duri, jadi dari kecil sudah familiar dengan lingkungan migas dan pumping unit. Tapi tentu bukan hanya karena itu. Saya juga sengaja mencari exposure lewat KP di PHR, internship di bidang energi, mata kuliah upstream, dan Mud Design Competition. Dari pengalaman itu saya makin yakin ingin membangun karier di operasi migas, khususnya pekerjaan yang menggabungkan mechanical engineering, data, dan field problem solving.",
  "why-hire-me": "Menurut saya, saya punya kombinasi yang cukup relevan untuk posisi ini: dasar mechanical engineering, exposure langsung di PHR, pengalaman menganalisis equipment dan data, serta kemauan belajar yang tinggi. Saya memang masih di awal karier, tapi arah saya sudah jelas. Saya ingin serius menekuni pekerjaan yang menggabungkan field operation, equipment, problem solving, data, dan koordinasi.",
  "completion-engineer": "Kalau dari yang saya pahami, Completion Engineer itu menjadi penghubung antara rekomendasi atau kebutuhan sumur dengan tim yang mengeksekusi pekerjaan. Jadi bukan cuma menerima program, tapi juga me-review well history, objective, kebutuhan teknis, equipment dan material, waktu, biaya, risiko, sampai kesiapan eksekusinya. Tujuan akhirnya supaya programnya benar-benar bisa dijalankan dengan aman, efisien, dan tetap sesuai objective sumur.",
  "well-completion": "Kalau dijelaskan sederhana, well completion itu proses menyiapkan sumur yang sudah selesai dibor supaya bisa berproduksi atau diinjeksi dengan aman dan terkontrol. Isinya bisa mencakup evaluasi casing dan cement, perforasi untuk cased hole, pemasangan tubing, packer, wellhead, downhole equipment, sampai artificial lift dan testing. Detailnya tentu menyesuaikan desain dan kondisi masing-masing sumur.",
  "drilling-to-completion": "Secara garis besar, sumur dibor dulu sampai target depth sesuai well plan. Selama proses itu, data arah dan formasi bisa diambil sesuai kebutuhan. Setelah itu masuk ke casing dan cementing untuk membangun integritas sumur. Kalau desainnya cased hole, zona produktif kemudian bisa diperforasi, lalu dipasang completion equipment, wellhead atau artificial lift, dilakukan testing, dan baru disiapkan menuju production. Urutan detailnya bisa berbeda untuk setiap sumur.",
  "formation-evaluation": "Tujuan formation evaluation itu untuk memahami posisi dan karakter zona target sebelum mengambil keputusan completion. Datanya bisa didapat saat drilling lewat MWD atau LWD, setelah interval dibor lewat wireline logging, dan kalau memang dibutuhkan bisa ditambah pressure atau fluid sampling. Saya paham tools dan urutannya tidak selalu sama di setiap sumur; semuanya kembali ke objective dan well program.",
  "casing-cementing": "Casing bisa dibayangkan sebagai dinding baja yang menjaga wellbore tetap kuat dan mampu menahan tekanan. Cement mengisi ruang antara casing dan formasi supaya casing tersangga dan zona-zona di bawah permukaan tetap terisolasi. Secara umum ada conductor, surface, intermediate, dan production casing atau liner, tapi konfigurasi akhirnya tetap mengikuti desain sumurnya.",
  "perforation": "Pada cased-hole completion, casing dan cement justru menutup hubungan langsung antara reservoir dan wellbore. Nah, perforasi dibuat untuk membuka jalur yang terkontrol di interval target supaya fluida formasi bisa masuk ke well. Karena itu depth correlation-nya harus akurat dan seluruh pekerjaan tetap mengikuti program, barrier, serta risk assessment yang berlaku.",
  "completion-equipment": "Kalau dibedakan sederhana: casing adalah struktur utama wellbore, tubing menjadi jalur fluida di dalam casing, packer menyegel annulus antara tubing dan casing, sedangkan wellhead menopang rangkaian itu sekaligus menjadi bagian dari pressure control di permukaan. Semua komponen ini saling berhubungan dan ikut membentuk barrier serta jalur produksi sumur.",
  "artificial-lift": "Artificial lift dibutuhkan saat energi reservoir sudah tidak cukup untuk membawa fluida ke permukaan pada rate yang diinginkan. Pada mechanical pumping unit atau SRP, gerak berasal dari prime mover, gearbox, crank, dan walking beam. Pada hydraulic pumping unit, gerak reciprocating dibuat oleh hydraulic drive. Selain itu ada ESP dengan motor serta multistage centrifugal pump di downhole, dan PCP dengan pasangan rotor–stator. Pemilihannya tetap melihat kondisi well, fluid, rate, depth, reliability, dan keekonomian.",
  "workover-vs-service": "Kalau saya bedakan secara sederhana, routine well service fokusnya mengembalikan fungsi sumur, misalnya change-out pump atau clean out sand. Workover biasanya lebih besar karena memperbaiki atau mengubah kondisi downhole, misalnya perforating, fishing, repair casing, cementing, acidizing, atau zone isolation. Tapi klasifikasi akhirnya tetap mengikuti scope dan standar perusahaan.",
  "rigless-operation": "Rigless operation itu pekerjaan intervensi yang tidak memakai conventional workover rig. Contohnya bisa memakai coiled tubing, pump truck, slickline, atau wireline unit, tergantung objective-nya. Walaupun disebut rigless, bukan berarti risikonya kecil; pressure control, barrier, kondisi well, dan kemampuan unit tetap harus diperiksa.",
  "rig-hub-workflow": "Kalau saya lihat secara sederhana, alurnya mulai dari kebutuhan sumur. WRO mengeluarkan recommendation, LSC memastikan well, lokasi, dan material siap, Scheduler mengatur kandidat dan rig, lalu rig site mengecek kondisi aktual. Setelah itu Completion Engineer memastikan programnya executable dari sisi engineering. Kalau semuanya siap, program dan data pendukung diteruskan untuk eksekusi dan hasilnya kembali menjadi report serta feedback.",
  "well-control": "Kalau dijelaskan sederhana, well control itu menjaga pressure dan barrier supaya fluida formasi tidak masuk secara tidak terkendali ke wellbore. Primary control mengandalkan tekanan hidrostatik dari kolom fluida. Kalau primary tidak cukup dan terjadi influx, secondary control memakai early detection, shut-in, dan BOPE sesuai prosedur. Untuk kondisi darurat ada tertiary control. Detail tindakannya tentu harus mengikuti prosedur dan personel yang memang berwenang.",
  "kick": "Kick itu kondisi saat fluida formasi mulai masuk ke wellbore karena tekanan formasi lebih besar daripada tekanan yang menahannya. Penyebabnya bisa karena fill yang kurang saat tripping, swabbing, lost circulation, atau density fluida yang tidak cukup. Intinya, tanda abnormal harus dikenali seawal mungkin dan ditangani sesuai well-control procedure.",
  "lost-circulation": "Lost circulation berarti sebagian atau seluruh fluida masuk ke formasi sehingga return berkurang atau hilang. Bahayanya bukan cuma menambah waktu dan biaya. Kalau tinggi kolom fluida turun, tekanan hidrostatik juga bisa turun dan risiko kick meningkat. Jadi penurunan return atau fluid level yang tidak normal harus langsung dianggap sebagai abnormal condition dan dikoordinasikan sesuai prosedur.",
  "well-barrier": "Saya memahami well barrier sebagai satu atau beberapa elemen yang bersama-sama mencegah uncontrolled flow. Bentuknya bisa hydrostatic column, valve, tubing hanger, BOP, tubing, packer, atau wellhead, tergantung fase pekerjaan. Yang penting, kita selalu tahu barrier yang aktif, backup-nya apa, sudah diverifikasi atau belum, dan apa yang berubah saat equipment berikutnya dibuka atau dilepas.",
  "bop-bope": "BOP atau BOPE itu bagian penting dari secondary well control. BOP bukan alat yang mencegah kick terjadi, tetapi dipakai untuk mengisolasi atau membantu mengendalikan well ketika primary control tidak cukup dan ada influx. Karena fungsinya kritis, configuration, integrity, dan pressure test-nya harus dipastikan sesuai program dan prosedur.",
  "operation-engineer": "Menurut saya, Operation Engineer itu memastikan pekerjaan berjalan aman, efisien, dan sesuai program. Kegiatannya mulai dari monitoring kondisi dan progress, mengecek data, menganalisis masalah, sampai koordinasi dengan tim lapangan, engineer, vendor, maintenance, dan fungsi pendukung. Jadi perannya bukan memperbaiki semua alat sendiri, tapi memastikan fakta, impact, action owner, dan next step-nya jelas.",
  "study-case": "Kalau dapat case, saya biasanya mulai dari safety dan well integrity dulu. Setelah itu saya klarifikasi objective, pisahkan fakta dari asumsi, lalu lihat impact-nya. Masalahnya saya klasifikasikan, misalnya design, operational, equipment, well condition, atau logistics. Baru setelah itu saya susun opsi, koordinasi ke pihak yang punya authority, dan tutup dengan status, action owner, serta next update.",
  "operational-update": "Untuk update operasi, saya pakai urutan status, progress, issue, impact, action, dan next plan. Jadi saya mulai dari aktivitas yang sedang berjalan, jelaskan kendala yang sudah terverifikasi, dampaknya apa, siapa yang menangani, dan kapan update berikutnya. Kalau root cause atau ETA belum jelas, saya akan bilang masih dalam assessment daripada menebak.",
  "hse": "Buat saya, HSE itu dasar dari setiap keputusan operasi, bukan sekadar checklist. Target produksi memang penting, tapi tidak boleh dicapai dengan mengorbankan orang, lingkungan, well integrity, atau aset. Karena itu pekerjaan harus dimulai dari memahami hazard, barrier, dan control-nya, lalu berani intervensi kalau kondisinya tidak aman.",
  "risk-assessment": "Risk assessment itu proses untuk mengenali hazard, menilai seberapa mungkin dan seberapa besar dampaknya, lalu menentukan control sampai risikonya bisa diterima. Control-nya sebaiknya mengikuti hierarchy of controls, bukan langsung mengandalkan PPE. Kalau scope atau kondisi berubah, assessment-nya juga perlu dilihat ulang.",
  "unsafe-condition": "Kalau saya melihat kondisi tidak aman, saya akan intervensi dan minta pekerjaan dihentikan kalau memang perlu. Setelah area aman, kondisinya saya laporkan dan dibahas dengan pihak terkait untuk menentukan mitigasi. Pekerjaan baru dilanjutkan setelah control-nya diterapkan, dikomunikasikan, dan kondisinya sudah dinilai aman.",
  "continuous-improvement": "Buat saya, continuous improvement itu perbaikan yang sistematis dan berbasis data. Biasanya saya lihat alurnya seperti ini: data dan Pareto membantu memilih masalah yang paling berdampak, Fishbone membuka kemungkinan penyebab, 5 Why memperdalam causal chain, lalu RCA memastikan root cause-nya dengan evidence. Setelah itu PDCA dipakai untuk menjalankan action, membandingkan hasil dengan baseline, dan menstandardisasi perbaikan kalau memang efektif. Jadi bukan cuma memperbaiki gejala, tapi juga memastikan masalahnya tidak berulang.",
  "root-cause-analysis": "RCA itu cara mencari penyebab utama supaya kita tidak cuma menghilangkan gejalanya. Saya mulai dari fakta, data, dan timeline, lalu pakai tools seperti 5 Why atau Fishbone untuk menguji kemungkinan penyebab. Setelah action dijalankan, hasilnya tetap perlu dicek supaya masalah yang sama tidak berulang.",
  "excel": "Saya cukup nyaman memakai Excel untuk mengolah dan menganalisis data engineering. Tapi saya lebih suka menjelaskannya lewat contoh nyata daripada langsung bilang advanced. Salah satu yang saya siapkan adalah workbook dari data tugas akhir calcium looping untuk cleaning data, melihat trend per cycle, membandingkan material, dan membuat summary yang mudah dibaca. Jadi fitur yang saya sebutkan memang yang sudah saya pakai dan bisa saya jelaskan.",
  "data-tool-strategy": "Kalau saya bedakan, SQL dipakai untuk mengambil dan merangkum data dari database, Excel untuk validasi dan analisis cepat, sedangkan Power BI untuk monitoring serta visualisasi yang berulang. Jadi alurnya bukan memilih salah satu, tapi memakai tool yang paling cocok di tiap tahap: ambil data yang benar, cek logikanya, lalu sajikan supaya mudah dipakai untuk mengambil keputusan.",
  "power-bi-workflow": "Kalau dijelaskan dari awal, alur Power BI itu mulai dari data source, lalu data dibersihkan di Power Query, disusun relationship-nya di data model, dibuat measure dengan DAX, baru divisualisasikan. Setelah itu yang paling penting adalah membaca insight-nya dan menentukan action. Jadi saya tidak langsung membuat chart sebelum memastikan data, grain, relationship, dan definisi KPI-nya sudah benar.",
  "well-lifecycle": "Kalau dilihat secara garis besar, alur hidup sumur dimulai dari drilling untuk membuat wellbore, lalu formation evaluation untuk memahami zona target. Setelah itu casing dan cement membangun integritas sumur, completion menyiapkan jalur produksi atau injeksi, lalu sumur masuk tahap production. Kalau performanya menurun atau ada masalah, baru dilakukan well service, workover, atau intervention yang sesuai.",
  "rig-components": "Untuk level interview, komponen rig yang paling saya pahami antara lain mast atau derrick sebagai struktur hoisting, crown block sebagai katrol di bagian atas, drawworks untuk menaikkan dan menurunkan string, rig floor untuk handling tubular, serta engine dan transmission sebagai sumber tenaganya. Saya memahami fungsinya, tapi tentu pengoperasiannya tetap dilakukan oleh rig crew yang kompeten dan berwenang.",
  "wows": "Kalau saya bedakan, Program Development lebih banyak menentukan apa yang perlu dikerjakan dan kenapa pekerjaan itu layak, mulai dari kandidat sumur, business case, program teknis, sampai prioritasnya. Sementara Operation fokus ke bagaimana program itu dijalankan dengan aman dan efisien di lapangan, termasuk rig, vendor, equipment, HSE, waktu, dan biaya.",
  "reading-well-program": "Waktu membaca well program, saya tidak cuma melihat step berikutnya. Saya cek dulu objective job-nya, kondisi dan history sumur, sequence serta prerequisite, risk dan barrier di setiap tahap, progress dibanding plan, lalu siapa yang punya authority kalau ada perubahan. Jadi saya paham bukan cuma apa yang dikerjakan, tapi juga kenapa, apa risikonya, dan kapan perlu eskalasi.",
  "job-delay": "Kalau pekerjaan terlambat, saya cek current activity dan bandingkan plan dengan actual. Setelah itu saya lihat status HSE dan barrier, kondisi well, equipment, material, serta kendala yang memang sudah terverifikasi. Baru saya klasifikasikan masalahnya, cek impact ke pekerjaan, pastikan action owner-nya jelas, dan sampaikan next plan. Saya tidak akan langsung menyebut semua delay sebagai NPT atau memberi ETA tanpa data.",
  "material-discrepancy": "Kalau material yang tersedia tidak sesuai program, saya tidak akan langsung menggantinya sendiri. Pertama saya cek perbedaannya terhadap spesifikasi, quantity, inventory, dan serial number. Setelah itu saya koordinasikan lewat jalur material atau logistics, dan kalau ada dampak ke desain atau barrier, Completion Engineer serta pihak teknis terkait perlu ikut review. Impact ke schedule dan next decision juga harus dilaporkan.",
  "pump-failure": "Kalau pompa tiba-tiba berhenti, langkah pertama saya tetap memastikan kondisinya aman. Setelah itu saya verifikasi alarm, data operasi, dan kondisi aktual di lapangan, lalu cek power supply, parameter sebelum trip, suction-discharge, dan indikasi mekanis atau proses. Saya tidak akan langsung restart sebelum kondisi dan penyebab trip-nya cukup dipahami. Setelah itu baru koordinasi ke operator atau maintenance sesuai authority.",
  "production-drop": "Kalau produksi turun, saya tidak mau langsung menebak penyebabnya. Saya cek dulu apakah datanya valid, lalu bandingkan dengan baseline dan trend sebelumnya. Setelah itu saya lihat kemungkinan dari well, artificial lift, fasilitas permukaan, downtime, perubahan operasi, atau kualitas pencatatan. Temuannya kemudian saya koordinasikan ke pihak terkait dan hasil perbaikannya tetap dimonitor.",
  "maintenance": "Kalau dibedakan sederhana, preventive maintenance dilakukan sebelum equipment gagal supaya risiko breakdown bisa dikurangi. Corrective maintenance dilakukan setelah ada kerusakan atau penurunan fungsi untuk mengembalikan equipment ke kondisi yang dibutuhkan. Prioritas keduanya tetap melihat criticality, risiko HSE, dampak operasi, dan kondisi aktual equipment.",
  "npt-analysis": "Kalau satu rig terlihat punya NPT paling tinggi, saya tidak akan berhenti di ranking. Saya cek dulu definisi metric, periode, missing data, duplicate, dan coverage-nya. Setelah itu saya drill down ke job, activity, dan event penyumbangnya, lalu lihat apakah polanya berulang. Baru temuan itu dikonfirmasi dengan kondisi operasi dan diterjemahkan menjadi owner, action, serta monitoring berikutnya.",
  "excel-foundations": "Kalau untuk Excel, menurut saya fondasinya bukan langsung rumus yang rumit. Yang penting justru struktur datanya rapi, tipe angka dan tanggal benar, paham relative serta absolute reference, dan memakai Excel Table supaya range-nya dinamis. Setelah fondasinya benar, baru formula, lookup, PivotTable, dan Power Query bisa dipakai dengan lebih aman.",
  "excel-logic-aggregation": "Untuk analisis operasi, fungsi yang paling sering saya prioritaskan adalah SUM, AVERAGE, MIN, MAX, dan COUNT untuk ringkasan. Lalu ada IF, IFS, AND, dan OR untuk membuat flag, serta SUMIFS atau COUNTIFS untuk menghitung berdasarkan beberapa kondisi. Jadi saya memilih formula dari pertanyaannya, bukan sekadar mencoba memakai fungsi sebanyak mungkin.",
  "excel-lookup-cleaning": "Kalau perlu mengambil informasi dari master table, saya bisa memakai XLOOKUP atau alternatif seperti INDEX-MATCH. Tapi sebelum lookup, key-nya perlu dibersihkan dulu, misalnya spasi, kapitalisasi, dan tipe datanya. Setelah itu saya tetap cek unmatched value dan duplicate key supaya hasilnya tidak terlihat benar padahal relasinya salah.",
  "excel-pivottable": "PivotTable membantu merangkum data dengan cepat tanpa banyak formula. Misalnya Rig_ID saya taruh di Rows, Status di Columns, lalu total NPT dan jumlah job di Values. Dari sana saya bisa melihat rig mana yang paling menonjol, lalu drill down ke activity atau job penyumbangnya. Jadi PivotTable dipakai sebagai pintu masuk analisis, bukan berhenti di angka summary.",
  "excel-data-quality": "Untuk menjaga kualitas data di Excel, saya bisa memakai Data Validation supaya input konsisten, Conditional Formatting untuk menandai anomali atau duplicate, dan pengecekan data type serta missing value. Saya juga tidak akan langsung memakai Remove Duplicates sebelum memahami grain datanya, karena row yang terlihat mirip belum tentu memang duplikat.",
  "power-query": "Power Query saya pahami sebagai tool untuk mengambil, membersihkan, menggabungkan, lalu memuat data secara repeatable. Contohnya append daily report, merge dengan rig master, merapikan status, mengubah data type, dan membersihkan spasi. Keuntungannya, saat data baru datang prosesnya tinggal di-refresh, tapi langkah dan hasilnya tetap perlu divalidasi.",
  "power-bi-data-model": "Di Power BI, relationship menghubungkan tabel lewat key. Biasanya fact table menyimpan event atau transaksi, sedangkan dimension menyimpan konteks seperti rig, well, activity, atau date. Model yang rapi membantu filter bekerja dengan benar dan mengurangi duplikasi. Jadi sebelum membuat relationship, saya cek dulu grain, uniqueness pada sisi one, cardinality, dan arah filternya.",
  "dax-measures": "Kalau calculated column, nilainya dihitung per row dan disimpan di model. Kalau measure, nilainya dihitung secara dinamis mengikuti filter atau slicer di report. Jadi KPI seperti Total NPT, Total Jobs, Delayed Jobs, atau Delayed Rate biasanya lebih cocok dibuat sebagai measure karena hasilnya perlu berubah sesuai konteks yang dipilih user.",
  "dashboard-storytelling": "Kalau menyusun dashboard, saya mulai dari KPI utama supaya terlihat besar masalahnya, lalu trend untuk melihat arahnya, breakdown untuk mencari hotspot, dan terakhir tabel detail untuk melihat job yang perlu dibahas. Slicer membantu fokus ke rig, status, activity, atau periode tertentu. Jadi urutan bicaranya juga sama: kondisi sekarang, trend, penyumbang terbesar, lalu action-nya apa.",
  "hub-sql": "Kalau menjelaskan SQL, saya mulai dari pertanyaan yang ingin dijawab dan grain datanya. Setelah itu baru pilih source, filter row, hubungkan tabel kalau perlu, buat agregasi atau klasifikasi, lalu urutkan atau analisis per kelompok. Saya juga tetap cek NULL, key, cardinality, dan duplicate supaya query yang secara sintaks benar juga menghasilkan angka yang benar. Semua detail SQL ada di halaman ini, jadi tinggal lompat ke topik yang ditanya."
};

const englishAnswers = {
  "about-me": "Hello, my name is Fawwaz Athar Suandhito, and I am a Mechanical Engineering graduate from ITB. During college, I explored aviation, energy, and oil and gas. My internship at PHR gave me direct exposure to drilling, workover and completion, well intervention, and routine service. That experience helped me realize that I enjoy work involving real equipment, operations, data, and technical problem-solving, which is why this Operation Engineer role fits the direction I want to pursue.",
  "current-status": "I have graduated from Mechanical Engineering at ITB and I am currently not bound by any full-time employment commitment. I have been using this time to strengthen relevant skills and prepare for my professional career, so I am ready to start and fully commit to the responsibilities of this position.",
  "completion-engineer": "From my understanding, a Completion Engineer connects the well recommendation or subsurface objective with the team that executes the job. The role reviews well history, objectives, technical requirements, equipment and materials, time, cost, risk, and execution readiness. The goal is to make sure the program is safe, executable, efficient, and aligned with the well objective.",
  "continuous-improvement": "I see continuous improvement as a systematic, data-driven process. Data and Pareto help identify the highest-impact problem, Fishbone expands the possible causes, 5 Why explores the causal chain, and RCA validates the actual root cause. PDCA is then used to implement the action, compare the result with the baseline, and standardize the improvement if it is effective.",
  "drilling-to-completion": "At a high level, the well is drilled to the planned target depth while directional and formation data are collected as required. Casing and cementing then establish well integrity. In a cased-hole design, the target interval may be perforated before the completion equipment, wellhead, or artificial-lift system is installed and tested. The exact sequence depends on the well design and actual condition.",
  "english": "Hello, my name is Fawwaz Athar Suandhito, and I am a Mechanical Engineering graduate from ITB. My experiences in PHR, PLN Indonesia Power, engineering projects, and the Mud Design Competition helped me discover that I am most interested in equipment, field operations, data, and technical problem-solving. That is why I see this Operation Engineer position as a strong fit for my background and long-term career direction.",
  "excel": "I am comfortable using Excel for engineering-data processing and analysis, but I prefer demonstrating it through actual work instead of simply calling myself advanced. I am preparing a calcium-looping workbook to clean data, review cycle-by-cycle trends, compare materials, and create a concise summary. I only mention features that I have genuinely used and can explain.",
  "five-years": "Within five years, I want to have a strong foundation in field operations and Well Services, handle technical and operational-data issues more independently, and be trusted with greater responsibility. My current priority is to build real experience and become a consistent, reliable engineer.",
  "hobby": "I enjoy sports because they help me maintain stamina, discipline, and consistency. I also enjoy arranging music, which gives me room to be creative and pay attention to detail. I think those two hobbies provide a good balance between energy and creativity.",
  "hse": "For me, HSE is the foundation of every operational decision, not just a checklist. Production matters, but it must never come at the expense of people, the environment, well integrity, or company assets. That is why we need to understand the hazards, barriers, and controls, and be willing to intervene when a condition is unsafe.",
  "integrity": "Integrity means being honest, consistent, and accountable, even when nobody is watching. In operations, that means recording data as it is, reporting deviations early, avoiding shortcuts that violate procedures, and admitting when the available information is not yet sufficient for a decision.",
  "job-expectation": "I expect to receive clear responsibilities and then take them seriously. I want to understand the objectives, workflow, standards, safety requirements, and team expectations, then execute the work consistently. I am joining not only to learn, but also to become someone the team can rely on.",
  "kp-phr": "I completed my internship with PHR's Drilling and Well Intervention team from January 20 to February 28, 2025. I gained exposure to more than twenty wells across drilling, workover and completion, well intervention, routine service, and production facilities. My technical project analyzed drawworks components under a tubing-pump-stuck condition using analytical calculations, SOLIDWORKS, and ANSYS Mechanical.",
  "maintenance": "Preventive maintenance is performed before equipment fails to reduce the probability of breakdown. Corrective maintenance is performed after damage or degraded function is identified to restore the equipment. The priority should still consider criticality, HSE risk, operational impact, and the equipment's actual condition.",
  "mud-competition": "In the International Mud Design Competition, my team developed a mechanical cuttings-bed remover for high-angle or horizontal wells. We compared blade geometries using ANSYS Fluent and 3D-printed prototypes, and developed a drilling-fluid concept that considered performance, HSSE, and cost. The project made drilling problems such as hole cleaning much more practical for me.",
  "operation-engineer": "I see an Operation Engineer as the person who helps ensure that work is executed safely, efficiently, and according to the program. The role involves monitoring conditions and progress, checking data, analyzing problems, and coordinating with field teams, engineers, vendors, maintenance, and support functions. The engineer does not personally fix everything, but makes sure the facts, impact, action owner, and next step are clear.",
  "phr": "PHR operates the Rokan Working Area in Riau, one of Indonesia's most important oil-producing areas. Its activities include drilling, workover, well intervention, routine service, production facilities, technology application, and continuous improvement. The four keywords I keep in mind are safety, production, reliability, and environmental compliance.",
  "pln-experience": "At PLN Indonesia Power UBP Suralaya, I worked in the Unit 8 maintenance environment. My main project analyzed a High Pressure Heater that was out of service using actual thermal-performance data, Rankine-cycle reasoning, and heat balance. It taught me to connect equipment condition, operational data, and overall system performance.",
  "position-applied": "Yes. I applied for the Operation Engineer position in Drilling and Well Workover, Well Service Project, with the title Jr. Completion / Operation Engineer. I understand that the role is closely related to program readiness, field execution, HSE, operational monitoring, data, and reporting.",
  "production-drop": "I would not immediately assume a cause. I would first validate the data and compare it with the baseline and historical trend. Then I would review the well, artificial lift, surface facilities, downtime, operational changes, and data quality. The findings would be coordinated with the relevant teams, followed by corrective action and monitoring.",
  "pump-failure": "My first step would be to make sure the condition is safe. I would then verify the alarm, operating data, and actual field condition, and review the power supply, pre-trip parameters, suction and discharge conditions, and mechanical or process indications. I would not restart the pump before the trip and safety conditions were sufficiently understood.",
  "relocation": "I am ready to relocate to Riau. I am single and flexible regarding field placement, roster, shift, or call-out requirements. Minas and Duri are also familiar to me because I lived there as a child, so I see the placement as both familiar personally and relevant professionally.",
  "risk-assessment": "Risk assessment is the process of identifying hazards, evaluating their likelihood and consequences, and selecting controls until the residual risk is acceptable. The controls should follow the hierarchy of controls instead of relying only on PPE. The assessment also needs to be reviewed when the scope or operating condition changes.",
  "root-cause-analysis": "RCA is a structured way to identify the underlying cause rather than stopping at the symptom. I would start with facts, data, and the timeline, then use tools such as 5 Why or Fishbone to test possible causes. Corrective actions need an owner and due date, and their effectiveness must be verified to prevent recurrence.",
  "salary": "Based on the information in the invitation I received, the stated monthly rate of approximately IDR 16.5 million is acceptable to me. I remain open to the company's compensation structure, benefits, work pattern, scope of responsibility, and overall package.",
  "safety-vs-production": "I would prioritize safety and well integrity. If the risk requires intervention, the job should be stopped or held according to the applicable authority. The hazard and weakened barrier must be understood and controlled before restarting. Production recovery can be planned afterward, but it should never compromise people, the environment, integrity, or assets.",
  "software": "I have used SOLIDWORKS and CATIA V5 for CAD, ANSYS Mechanical and Fluent for engineering analysis, and MATLAB and Simulink in engineering coursework. I am also comfortable with Excel and have studied SQL and Python. I clearly distinguish tools used in actual projects from tools that I am still strengthening.",
  "strength": "My main strengths are a growth mindset, analytical thinking, and healthy competitiveness. I am comfortable breaking a problem into facts, missing data, assumptions, possible causes, and actions. My experience across different engineering fields also helps me adapt quickly, while my career direction is now clearly focused on oil and gas operations.",
  "study-case": "When handling a case, I start with safety and well integrity. I clarify the objective, separate facts from assumptions, and assess the impact. Then I classify the issue—such as design, operations, equipment, well condition, or logistics—before coordinating with the correct authority. I close with a clear status, action owner, and next update.",
  "supervisor-disagreement": "I would present my view professionally using data, risk, and clear reasoning rather than personal opinion. I would also listen because my supervisor may have context that I do not have. Once a safe and compliant decision is made, I will support it. If there is a serious safety concern, I will still raise it through the proper escalation path.",
  "s2-plan": "A master's degree is not my immediate priority. I want to build real operating experience, understand the work deeply, and establish a strong professional foundation first. I remain open to further study later if it is relevant to my development and the needs of the role.",
  "ta-calcium-looping": "My final project studied repeated calcium looping for CO2 capture using six Indonesian limestone sources over ten calcination-carbonation cycles. I handled sample preparation, a high-temperature reactor, gas-flow control, flowmeter calibration, mass measurement, and XRD and SEM-EDS evaluation. The project taught me procedural consistency, repeatability, data checking, and mechanism-based interpretation.",
  "tight-deadline": "I would clarify the objective and deadline, break the work into activities and dependencies, and prioritize based on safety, critical path, and operational impact. Every action should have a clear owner and update time. I would look for efficiency, but never remove safety controls or quality checks just to appear faster.",
  "unsafe-condition": "If I saw an unsafe condition, I would intervene and request a stop if necessary. After making the area safe, I would report the condition, communicate the hazard, and coordinate the required mitigation. Work should only resume after the controls and readiness have been verified.",
  "weakness": "One weakness I have been improving is that I sometimes accept too many tasks because I want to help and take ownership. I learned that this can create overload and reduce focus. I now prioritize by urgency, impact, capacity, and deadline, divide work into milestones, and communicate early when priorities conflict.",
  "well-completion": "In simple terms, well completion is the process of preparing a drilled well so it can safely and controllably produce or inject fluids. It may include casing and cement evaluation, perforation in a cased hole, tubing, packer, wellhead, downhole equipment, artificial lift, and testing. The actual configuration depends on the well design and condition.",
  "wellview": "WellView is used to record and manage well-operation data. During my PHR internship, I observed WSR personnel entering information such as the well, program, time, cost, job steps, tubing string, and HSSE data. Structured historical data can then support review, reporting, plan-versus-actual analysis, and continuous improvement.",
  "why-hire-me": "I bring a relevant combination of mechanical-engineering fundamentals, direct exposure at PHR, experience analyzing equipment and data, and a strong willingness to learn. I am still at the beginning of my career, but my direction is clear: I want to seriously develop in work that combines field operations, equipment, problem-solving, data, and coordination.",
  "why-oil-gas": "I explored aviation, electrical engineering, and energy before gaining direct exposure at PHR and joining the Mud Design Competition. Oil and gas felt like the best fit because the problems are multidisciplinary, close to real equipment, and directly connected to operational decisions. That exploration helped me confirm the field I want to pursue.",
  "why-phr": "My interest in PHR is both personal and professional. I grew up around Minas and Duri and was familiar with the oil-and-gas environment from an early age. More importantly, I actively built my own exposure through my internship at PHR, energy experience, upstream coursework, and the Mud Design Competition. Those experiences confirmed that I want to build my career in oil-and-gas operations.",
  "workover-vs-service": "In simple terms, routine well service restores the well's function, for example through pump change-out or sand cleanout. Workover generally repairs or changes the downhole condition, such as perforating, fishing, casing repair, cementing, acidizing, or zone isolation. The final classification still follows the company's scope and standards.",
  "wows": "I see Program Development as deciding what should be done and why it is technically and economically justified—from candidate selection and business case to technical planning and prioritization. Operations focuses on how the program is executed safely and efficiently through rig, vendor, equipment, HSE, time, and cost management.",
  "work-24-7": "I am ready to follow operational work patterns, including field placement, roster, shifts, and call-outs. I am interested in field work and already have exposure in Duri. At the same time, 24/7 operations must still follow fatigue management, proper rest, HSE procedures, and clear handovers.",
  "closing": "Thank you for the interview opportunity. My Mechanical Engineering background, experience at PHR and PLN, and engineering projects have confirmed that I want to work close to operations, equipment, data, and problem-solving. If given the opportunity, I am ready to take the responsibility seriously, follow standards and HSE requirements, and build stronger contributions as I gain experience.",
  "well-lifecycle": "At a high level, the well lifecycle starts with drilling to build the wellbore, followed by formation evaluation. Casing and cement then establish integrity and isolation, while completion prepares the production or injection path. Once the well is in production, well service, workover, or other interventions may be performed as its condition changes.",
  "formation-evaluation": "Formation evaluation helps us understand the position and characteristics of the target zone before making completion decisions. Data may be obtained while drilling through MWD or LWD, after drilling through wireline logging, and through pressure or fluid sampling when required. The tools and sequence depend on the objective and well program.",
  "casing-cementing": "Casing can be viewed as the steel wall that provides wellbore integrity and pressure containment. Cement fills the annulus between casing and formation to support the casing and isolate zones. The conceptual sequence includes conductor, surface, intermediate, and production casing or liner, depending on the well design.",
  "rig-components": "For interview purposes, I understand the main rig components: the mast or derrick supports the hoisting system, the crown block is the fixed sheave system at the top, the drawworks raises and lowers the string, the rig floor handles tubular activities, and the engine and transmission provide power. Operation remains the responsibility of competent rig personnel.",
  "well-control": "In simple terms, well control means maintaining pressure and barriers so formation fluid does not enter the wellbore uncontrollably. Primary control relies on hydrostatic pressure. If primary control is lost and an influx occurs, secondary control uses early detection, shut-in, and BOPE according to procedure. Tertiary control is reserved for emergency conditions.",
  "kick": "A kick is the entry of formation fluid into the wellbore because formation pressure exceeds the pressure holding it back. Possible causes include insufficient fill during tripping, swabbing, lost circulation, or inadequate fluid density. The key is to recognize abnormal indications early and respond according to the well-control procedure.",
  "lost-circulation": "Lost circulation means that some or all of the fluid is lost into the formation and returns decrease or disappear. Besides adding time and cost, it can reduce the fluid-column height and hydrostatic pressure, which may increase kick risk. Abnormal returns or fluid-level loss should therefore be treated seriously and managed according to procedure.",
  "well-barrier": "I understand a well barrier as one or more elements that prevent uncontrolled flow. Depending on the work phase, it may include the hydrostatic column, valves, a tubing hanger, BOP, tubing, packer, or wellhead. The important questions are which barrier is active, what the backup is, whether it has been verified, and what changes during the next step.",
  "bop-bope": "BOP or BOPE is a critical part of secondary well control. It does not prevent the causes of a kick, but it is used to isolate or help control the well when primary control is insufficient and an influx occurs. Its configuration, integrity, and pressure testing must be confirmed according to the program and procedure.",
  "perforation": "In a cased-hole completion, casing and cement isolate the reservoir from the wellbore. Perforation creates controlled flow paths through the casing and cement at the target interval so formation fluid can enter the well. Accurate depth correlation, barriers, and risk controls are essential.",
  "completion-equipment": "Casing is the main structural part of the wellbore, tubing is the flow path inside the casing, a packer seals the tubing-casing annulus, and the wellhead supports the strings and provides surface pressure control. Together, these components form the well's flow path and part of its barrier architecture.",
  "artificial-lift": "Artificial lift is needed when reservoir energy cannot bring fluids to the surface at the desired rate. A mechanical pumping unit uses a prime mover, gearbox, crank, walking beam, and rods, while a hydraulic pumping unit creates reciprocating motion through a hydraulic drive. ESP and PCP are other systems selected according to well and fluid conditions.",
  "rigless-operation": "Rigless operations are well interventions performed without a conventional workover rig, using units such as coiled tubing, pump trucks, slickline, or wireline. Rigless does not mean risk-free; the objective, access, pressure-control equipment, active barriers, well condition, and unit limits still need to be reviewed.",
  "rig-hub-workflow": "The workflow starts from a well need. WRO issues a recommendation, LSC confirms well, location, and material readiness, and the Scheduler allocates the candidate and rig. The rig site checks actual operational conditions, while the Completion Engineer confirms engineering executability. Once both gates are ready, the job proceeds to execution and feedback.",
  "reading-well-program": "When I read a well program, I do not look only at the next step. I review the job objective, current well condition and history, sequence and prerequisites, risk and barriers, progress against plan, and the relevant authority. This helps me understand what is being done, why it is needed, what may change, and when escalation is required.",
  "operational-update": "For an operational update, I use the sequence: status, progress, issue, impact, action, and next plan. I state the current activity, the verified issue, its impact, the action owner, and the next update. If the root cause or ETA is not confirmed, I say it is still under assessment instead of guessing.",
  "job-delay": "If a job is behind plan, I compare the current activity with the planned sequence, then check HSE and barrier status, well condition, equipment, materials, and the verified constraint. I classify the issue, assess its impact, confirm the action owner, and communicate the next plan. I do not automatically label every delay as NPT.",
  "material-discrepancy": "If the available material does not match the program, I would not substitute it on my own. I would verify the specification, quantity, inventory, and serial number, then coordinate through the material or logistics path. If the discrepancy affects design, compatibility, or barriers, the Completion Engineer and the relevant technical authority need to review it.",
  "data-tool-strategy": "I use SQL to retrieve and summarize data from a database, Excel for validation and quick analysis, and Power BI for repeatable monitoring and visualization. I see them as a connected workflow: retrieve the right data, validate the logic, and present it in a way that supports operational decisions.",
  "sql-fundamentals": "SELECT defines the output columns, FROM identifies the source table, WHERE filters rows, ORDER BY sorts the result, and LIMIT restricts the number of rows. My thought process starts with the source and required grain, then the filter, output, sorting, and result limit.",
  "sql-filter-null": "SQL filters may use comparison operators, BETWEEN, IN, or LIKE. NULL means that a value is missing or unknown; it is not zero and not an empty string. Therefore, it should be checked with IS NULL or IS NOT NULL, while the business meaning of the missing value still needs to be understood.",
  "sql-aggregation": "WHERE filters rows before aggregation, GROUP BY defines the groups, and HAVING filters the aggregated result. For example, I could filter delayed jobs, calculate total NPT by rig, and then show only rigs above a defined threshold. I would also verify the data grain to avoid double-counting after joins.",
  "sql-case-when": "CASE WHEN is SQL's if-else logic for creating labels or classifications. For example, it can classify NPT as high, medium, or low based on an agreed rule. The order of conditions matters, and the thresholds should come from a valid business or operational definition.",
  "erd-keys": "An ERD maps the relationships between tables. A primary key uniquely identifies a row, while a foreign key connects it to another table. Understanding keys, cardinality, and grain helps me choose the correct join and avoid duplicated rows or incorrect KPIs.",
  "sql-join-union": "JOIN combines columns by matching tables through a key. INNER JOIN keeps only matched rows, while LEFT JOIN preserves all rows from the main table. UNION stacks compatible result sets vertically; UNION removes duplicates, while UNION ALL keeps every row.",
  "sql-cte-subquery": "A subquery is a query inside another query and works well for smaller logic. A CTE creates a named intermediate result using WITH, which often makes multi-step queries easier to read and explain. I choose based on clarity and correctness rather than assuming one is always faster.",
  "sql-window-functions": "GROUP BY reduces rows into summaries, while a window function keeps each original row and adds analytical context. PARTITION BY defines the group, ROW_NUMBER or DENSE_RANK can rank rows, and LAG or LEAD can compare values across an ordered sequence.",
  "sql-interview-logic": "If I forget an exact SQL syntax during an interview, I will explain the logic first: define the output and grain, select the source, filter the data, join the required tables, calculate the metric, validate NULLs and duplicates, and sort or rank the result. Clear reasoning is better than guessing random syntax.",
  "excel-foundations": "Excel fundamentals start with a clean table structure, correct number and date types, relative and absolute references, and Excel Tables for dynamic ranges. Once the structure is reliable, formulas, lookups, PivotTables, and Power Query can be used more safely.",
  "excel-logic-aggregation": "For operational analysis, I prioritize SUM, AVERAGE, MIN, MAX, and COUNT for basic summaries; IF, IFS, AND, and OR for flags; and SUMIFS or COUNTIFS for metrics based on multiple conditions. I choose the formula based on the question rather than trying to use as many functions as possible.",
  "excel-lookup-cleaning": "I can use XLOOKUP or alternatives such as INDEX-MATCH to retrieve information from a master table. Before the lookup, I clean the key, check spaces, capitalization, and data types. Afterward, I review unmatched values and duplicate keys so the result does not look correct while using the wrong relationship.",
  "excel-pivottable": "A PivotTable summarizes large datasets quickly without many formulas. For example, Rig_ID can be placed in Rows, Status in Columns, and total NPT and job count in Values. I then drill down from the summary to the contributing activity or job instead of stopping at the headline number.",
  "excel-data-quality": "To maintain data quality in Excel, I use Data Validation for consistent inputs, Conditional Formatting for anomalies or duplicates, and checks for data types and missing values. I do not use Remove Duplicates before understanding the data grain because similar-looking rows may represent different events.",
  "power-query": "Power Query is used to extract, transform, and load data in a repeatable way. It can append daily reports, merge a rig master, standardize status values, correct data types, and clean text. The steps can then be refreshed when new data arrives, while the output still needs to be validated.",
  "power-bi-workflow": "The Power BI workflow starts with the data source, followed by cleaning in Power Query, relationships in the data model, measures in DAX, and then visualization. The final step is interpreting the insight and deciding the action. I do not build charts before checking data quality, grain, relationships, and KPI definitions.",
  "power-bi-data-model": "In Power BI, relationships connect tables through keys. A fact table stores events or transactions, while dimension tables provide context such as rig, well, activity, or date. Before creating a relationship, I check the grain, uniqueness on the one side, cardinality, and filter direction.",
  "dax-measures": "A calculated column is evaluated per row and stored in the model, while a measure is calculated dynamically according to the report's filter context. KPIs such as Total NPT, Total Jobs, Delayed Jobs, or Delayed Rate are usually better as measures because they need to respond to slicers.",
  "dashboard-storytelling": "I structure an operational dashboard from KPI to trend, breakdown, and detail. The KPI shows the magnitude, the trend shows the direction, the breakdown identifies the hotspot, and the detail table shows the jobs that need discussion. The conversation should end with the owner and action, not just the chart.",
  "npt-analysis": "If one rig has the highest NPT, I would not stop at the ranking. I would validate the metric definition, period, missing data, duplicates, and coverage, then drill down to the contributing jobs, activities, and events. The pattern must be confirmed with operational context before assigning an owner, action, and monitoring plan.",
  "rig-systems": "I divide a rig into five main systems: hoisting to raise and lower the string, rotating to provide rotation, circulating to move fluids, well-control or BOP systems to keep the well controlled, and the power system to supply energy. These systems are interconnected, so a problem in one can affect both safety and job progress.",
  "phr-sifp": "I understand SIFP as preventing events that could lead to serious injury or fatality. In practice, it includes good-quality SWA, readiness checks such as a CRSSC walk-through, complete and prepared crews, and a proper pre-job safety meeting. If the condition is unsafe, the job should not continue automatically; the hazard and controls must be verified first.",
  "well-types": "By function, I understand producer wells, water injectors, steam injectors, disposal wells, and observation wells. Producers deliver reservoir fluids, injectors support the reservoir strategy, disposal wells place fluids in an approved zone, and observation wells monitor reservoir conditions. Each type therefore has different operating parameters and risks.",
  "centrifugal-pump": "A centrifugal pump converts mechanical energy from a motor into fluid energy. The impeller accelerates the fluid, while the volute or diffuser converts part of that velocity into pressure or head. Important concepts include the head-flow relationship, operation near BEP, suction conditions, NPSH, and cavitation indicators such as noise, vibration, and reduced performance.",
  "production-system": "At a high level, fluids leave the well through the wellhead, flow through a flowline or manifold, enter a separator for phase separation, continue to a tank or treatment stage, and are then transferred by pumps. Key parameters include pressure, temperature, flow, level, equipment status, alarms, leakage, and deviations from the operating envelope.",
  "hub-sql": "When explaining SQL, I start with the question and the data grain. I then select the source, filter the rows, join tables when needed, build the aggregation or classification, and sort or analyze the result by group. I also check NULLs, keys, cardinality, and duplicates so a syntactically valid query also produces a correct result. All SQL topics are available on this page."
};

const englishTitles = {
  "kp-phr": "PHR Internship",
  "ta-calcium-looping": "Final Project",
  "s2-plan": "Master's Degree Plan"
};

const categoryTranslations = {
  "Semua": "All", "Personal": "Personal", "Technical": "Technical", "Problem Solving": "Problem Solving",
  "Data & Software": "Data & Software", "HSE": "HSE", "Behavioral": "Behavioral", "Experience": "Experience",
  "Company": "Company", "Case Study": "Case Study", "Motivation": "Motivation", "Well Control": "Well Control",
  "Operations": "Operations", "SQL": "SQL", "Excel": "Excel", "Power BI": "Power BI"
};

const englishQuestions = {
  "about-me": "Could you tell me about yourself?",
  "current-status": "What is your current employment status?",
  "completion-engineer": "What do you understand about the Completion Engineer role?",
  "continuous-improvement": "What do you understand about continuous improvement?",
  "english": "Could you introduce yourself in English?",
  "five-years": "Where do you see yourself in five years?",
  "hse": "What does HSE mean to you?",
  "integrity": "What does integrity mean to you?",
  "job-expectation": "What do you expect from this role?",
  "operation-engineer": "What do you understand about the Operation Engineer role?",
  "position-applied": "Which position did you apply for?",
  "relocation": "Are you willing to relocate to Riau?",
  "salary": "What are your salary expectations?",
  "strength": "What are your main strengths?",
  "supervisor-disagreement": "What would you do if you disagreed with your supervisor?",
  "tight-deadline": "How do you handle a tight deadline?",
  "unsafe-condition": "What would you do if you saw an unsafe condition?",
  "weakness": "What is one weakness you are working on?",
  "why-hire-me": "Why should we hire you?",
  "why-oil-gas": "Why do you want to work in oil and gas?",
  "why-phr": "Why do you want to join PHR?",
  "work-24-7": "Are you ready for field work, shifts, and call-outs?",
  "closing": "Do you have a closing statement?"
};

Object.entries(spokenOverrides).forEach(([id, quick]) => {
  const topic = [...topics, ...activeHubDefinitions].find(item => item.id === id);
  if (topic) topic.quick = quick;
  const displayedTopic = displayTopics.find(item => item.id === id);
  if (displayedTopic) displayedTopic.quick = quick;
});

function getRelatedTopics(topic) {
  if (topic.isHub) {
    return (topic.related || []).map(id => displayTopics.find(item => item.id === id)).filter(Boolean);
  }
  const ids = [];
  relationGroups.forEach(group => {
    if (group.includes(topic.id)) group.forEach(id => { if (id !== topic.id && !ids.includes(id)) ids.push(id); });
  });
  if (ids.length < 4) {
    topics.filter(item => item.category === topic.category && item.id !== topic.id)
      .forEach(item => { if (!ids.includes(item.id)) ids.push(item.id); });
  }
  const mappedIds = ids.map(id => groupedTopicToHub.get(id) || id).filter((id, index, list) => list.indexOf(id) === index);
  return mappedIds.map(id => displayTopics.find(item => item.id === id)).filter(Boolean).slice(0, 7);
}

const state = {
  activeId: (() => {
    const requested = location.hash.slice(1) || localStorage.getItem("interview-active") || displayTopics[0].id;
    return groupedTopicToHub.get(requested) || requested;
  })(),
  mode: "quick",
  language: new URLSearchParams(location.search).get("lang") === "en" || localStorage.getItem("interview-language") === "en" ? "en" : "id",
  category: "Semua",
  query: "",
  favoritesOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("interview-favorites") || "[]")),
  fontSize: Math.max(Number(localStorage.getItem("interview-font-size")) || 21, 20)
};

const els = Object.fromEntries([
  "searchInput", "filterRow", "alphabet", "resultCount", "favoritesButton", "topicList", "answerPanel",
  "crumb", "favoriteButton", "copyButton", "answerTitle", "duration", "question", "scriptText",
  "keyPoints", "answerNote", "referenceText", "prevButton", "nextButton", "currentIndex", "totalCount",
  "focusButton", "toast", "fontSizeSlider", "fontSizeValue", "materialExtensions", "relatedSection", "relatedLinks",
  "hubVisual", "visualFlow", "hubDetails", "hubJumpLinks", "hubSections", "languageSwitch",
  "favoritesLabel", "copyButtonLabel", "keywordLabel", "supportGrid", "keyPointsHeading", "answerNoteHeading",
  "referenceBar", "referenceLabel", "relatedHeadingLabel", "relatedHeadingHint", "prevButtonLabel", "nextButtonLabel",
  "sourcePillText", "visualMapLabel", "visualMapHint", "fullMaterialLabel", "fullMaterialHint"
].map(id => [id, document.getElementById(id)]));

const categories = ["Semua", ...new Set(displayTopics.map(topic => topic.category))];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const normalize = value => value.toLocaleLowerCase("id-ID").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
const isEnglish = () => state.language === "en";
const topicTitle = topic => isEnglish() ? (englishTitles[topic.id] || topic.title) : topic.title;
const topicCategory = topic => isEnglish() ? (categoryTranslations[topic.category] || topic.category) : topic.category;
const topicQuestion = topic => isEnglish()
  ? (englishQuestions[topic.id] || `Could you explain ${topicTitle(topic)}?`)
  : topic.question;
const topicAnswer = topic => isEnglish() ? (englishAnswers[topic.id] || topic.quick) : topic[state.mode];
const sortedTopics = () => [...displayTopics].sort((a, b) => topicTitle(a).localeCompare(topicTitle(b), state.language));

function filteredTopics() {
  const needle = normalize(state.query);
  return sortedTopics().filter(topic => {
    const categoryMatch = state.category === "Semua" || topic.category === state.category;
    const favoriteMatch = !state.favoritesOnly || state.favorites.has(topic.id);
    const supplementText = (topic.supplements || []).map(item => item.text).join(" ");
    const memberText = (topic.members || []).map(id => {
      const member = topics.find(item => item.id === id);
      if (!member) return "";
      return [member.title, englishTitles[member.id] || "", member.category, member.question, member.quick, member.full, englishAnswers[member.id] || "", member.points.join(" "), (member.supplements || []).map(item => item.text).join(" ")].join(" ");
    }).join(" ");
    const haystack = normalize([topic.title, englishTitles[topic.id] || "", topic.category, topic.question, topic.quick, topic.full, englishAnswers[topic.id] || "", supplementText, topic.points.join(" "), memberText].join(" "));
    return categoryMatch && favoriteMatch && (!needle || haystack.includes(needle));
  });
}

function renderFilters() {
  els.filterRow.innerHTML = categories.map(category =>
    `<button type="button" class="filter-chip ${category === state.category ? "active" : ""}" data-category="${category}">${isEnglish() ? (categoryTranslations[category] || category) : category}</button>`
  ).join("");
}

function renderAlphabet() {
  const available = new Set(sortedTopics().map(topic => topicTitle(topic)[0].toUpperCase()));
  els.alphabet.innerHTML = letters.map(letter =>
    `<button type="button" class="letter-button" data-letter="${letter}" ${available.has(letter) ? "" : "disabled"}>${letter}</button>`
  ).join("");
}

function renderList() {
  const result = filteredTopics();
  els.resultCount.textContent = `${result.length} ${isEnglish() ? "topics" : "topik"}`;
  els.totalCount.textContent = result.length;
  els.favoritesButton.classList.toggle("active", state.favoritesOnly);
  els.favoritesButton.innerHTML = `${state.favoritesOnly ? "★" : "☆"} <span id="favoritesLabel">${isEnglish() ? "Saved" : "Tersimpan"}</span>`;

  if (!result.length) {
    els.topicList.innerHTML = isEnglish()
      ? `<div class="empty-list">No matching topic found.<br>Try another keyword or filter.</div>`
      : `<div class="empty-list">Belum ada topik yang cocok.<br>Coba keyword atau filter lain.</div>`;
    return;
  }

  if (!result.some(topic => topic.id === state.activeId)) state.activeId = result[0].id;
  let previousLetter = "";
  els.topicList.innerHTML = result.map((topic, index) => {
    const title = topicTitle(topic);
    const firstLetter = title[0].toUpperCase();
    const group = firstLetter !== previousLetter ? `<div class="topic-group-label" data-group="${firstLetter}">${firstLetter}</div>` : "";
    previousLetter = firstLetter;
    return `${group}<button type="button" class="topic-item ${topic.id === state.activeId ? "active" : ""}" data-id="${topic.id}">
      <span class="topic-index">${String(index + 1).padStart(2, "0")}</span>
      <span><span class="topic-name">${escapeHtml(title)}${state.favorites.has(topic.id) ? " <small>★</small>" : ""}</span><span class="topic-category">${escapeHtml(topicCategory(topic))}</span></span>
      <span class="topic-arrow">›</span>
    </button>`;
  }).join("");
}

function activeTopic() {
  return displayTopics.find(topic => topic.id === state.activeId) || displayTopics[0];
}

function renderHubContent(topic) {
  const isHub = Boolean(topic.isHub);
  els.hubVisual.hidden = !isHub;
  els.hubDetails.hidden = !isHub;
  if (!isHub) {
    els.visualFlow.innerHTML = "";
    els.hubJumpLinks.innerHTML = "";
    els.hubSections.innerHTML = "";
    return;
  }

  els.visualFlow.innerHTML = (topic.visual || []).map(([label, caption]) =>
    `<div class="visual-step"><b>${escapeHtml(label)}</b><small>${escapeHtml(caption)}</small></div>`
  ).join("");

  const members = topic.members.map(id => topics.find(item => item.id === id)).filter(Boolean);
  els.hubJumpLinks.innerHTML = members.map((member, index) =>
    `<button type="button" class="hub-jump" data-jump-id="hub-part-${member.id}">${index + 1}. ${escapeHtml(topicTitle(member))}</button>`
  ).join("");

  els.hubSections.innerHTML = members.map((member, index) => {
    const supplements = isEnglish() ? "" : (member.supplements || []).map(item =>
      `<div class="hub-topic-supplement"><b>TAMBAHAN ${escapeHtml(item.label || `MATERI ${item.source}`)}</b>${escapeHtml(item.text)}</div>`
    ).join("");
    return `<article class="hub-topic" id="hub-part-${member.id}">
      <header class="hub-topic-header">
        <span class="hub-topic-number">${String(index + 1).padStart(2, "0")}</span>
        <div><h4>${escapeHtml(topicTitle(member))}</h4><p class="hub-topic-question">${escapeHtml(topicQuestion(member))}</p></div>
      </header>
      <div class="hub-topic-body">
        <p class="hub-topic-answer">${escapeHtml(isEnglish() ? (englishAnswers[member.id] || member.quick) : member.full)}</p>
        ${isEnglish() ? "" : `<div class="hub-topic-points">${member.points.map(point => `<span>${escapeHtml(point)}</span>`).join("")}</div>`}
        ${supplements}
      </div>
    </article>`;
  }).join("");
}

function renderAnswer() {
  const topic = activeTopic();
  const result = filteredTopics();
  const index = result.findIndex(item => item.id === topic.id);
  els.crumb.textContent = topicCategory(topic).toUpperCase();
  els.answerTitle.textContent = topicTitle(topic);
  els.duration.textContent = `± ${state.mode === "quick" ? Math.max(20, Math.round(topic.duration * .7 / 5) * 5) : topic.duration} ${isEnglish() ? "seconds" : "detik"}`;
  els.question.textContent = topicQuestion(topic);
  els.scriptText.textContent = topicAnswer(topic);
  els.keyPoints.innerHTML = topic.points.map(point => `<li>${point}</li>`).join("");
  els.answerNote.textContent = topic.note;
  els.referenceText.textContent = topic.reference;
  renderHubContent(topic);
  const supplements = topic.supplements || [];
  els.materialExtensions.hidden = isEnglish() || !supplements.length;
  els.materialExtensions.innerHTML = supplements.map(item => `<section class="material-extension source-${item.source}"><div class="extension-label"><span>+</span> TAMBAHAN ${escapeHtml(item.label || `MATERI ${item.source}`)}</div><p>${escapeHtml(item.text)}</p></section>`).join("");
  els.supportGrid.hidden = isEnglish();
  els.referenceBar.hidden = isEnglish();
  const related = getRelatedTopics(topic);
  els.relatedSection.hidden = !related.length;
  els.relatedLinks.innerHTML = related.map(item => `<button type="button" class="related-link" data-related-id="${item.id}">${escapeHtml(topicTitle(item))}</button>`).join("");
  els.favoriteButton.textContent = state.favorites.has(topic.id) ? "★" : "☆";
  els.favoriteButton.classList.toggle("active", state.favorites.has(topic.id));
  els.currentIndex.textContent = index + 1;
  els.prevButton.disabled = index <= 0;
  els.nextButton.disabled = index < 0 || index >= result.length - 1;
  document.querySelectorAll(".mode-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.mode === state.mode));
  localStorage.setItem("interview-active", topic.id);
  const currentUrl = new URL(location.href);
  currentUrl.hash = topic.id;
  if (isEnglish()) currentUrl.searchParams.set("lang", "en");
  else currentUrl.searchParams.delete("lang");
  history.replaceState(null, "", currentUrl.href);
}

function applyLanguageUi() {
  document.documentElement.lang = state.language;
  els.searchInput.placeholder = isEnglish() ? "Search a keyword or question..." : "Cari keyword atau pertanyaan...";
  els.copyButtonLabel.textContent = isEnglish() ? "Copy answer" : "Salin jawaban";
  els.keywordLabel.textContent = "KEYWORD";
  els.keyPointsHeading.textContent = isEnglish() ? "Key points to cover" : "Poin yang harus kena";
  els.answerNoteHeading.textContent = isEnglish() ? "Answering note" : "Catatan saat menjawab";
  els.referenceLabel.textContent = isEnglish() ? "SOURCE MATERIAL" : "REFERENSI MATERI";
  els.relatedHeadingLabel.textContent = isEnglish() ? "RELATED TOPICS" : "NYAMBUNG KE MATERI";
  els.relatedHeadingHint.textContent = isEnglish() ? "Click for quick access" : "Klik untuk pindah cepat";
  els.prevButtonLabel.textContent = isEnglish() ? "Previous" : "Sebelumnya";
  els.nextButtonLabel.textContent = isEnglish() ? "Next" : "Berikutnya";
  els.sourcePillText.textContent = isEnglish() ? "3 Sources + Father's Update" : "3 Materi + Update Ayah";
  els.visualMapLabel.textContent = "VISUAL MAP";
  els.visualMapHint.textContent = isEnglish() ? "Overview of this section" : "Alur besar section ini";
  els.fullMaterialLabel.textContent = isEnglish() ? "COMPLETE MATERIAL" : "MATERI LENGKAP";
  els.fullMaterialHint.textContent = isEnglish() ? "Stay on this page — jump to the part you need" : "Tetap di halaman ini — lompat ke bagian yang dibutuhkan";
  els.languageSwitch.setAttribute("aria-label", isEnglish() ? "Choose language" : "Pilih bahasa");
  els.focusButton.title = isEnglish() ? "Reading focus mode" : "Mode fokus baca";
  els.focusButton.setAttribute("aria-label", els.focusButton.title);
  els.favoriteButton.title = isEnglish() ? "Save topic" : "Simpan topik";
  els.favoriteButton.setAttribute("aria-label", els.favoriteButton.title);
  els.fontSizeSlider.setAttribute("aria-label", isEnglish() ? "Answer font size" : "Ukuran font jawaban");
  document.querySelectorAll(".language-option").forEach(button => button.classList.toggle("active", button.dataset.language === state.language));
  const quickTab = document.querySelector('[data-mode="quick"]');
  const fullTab = document.querySelector('[data-mode="full"]');
  quickTab.textContent = isEnglish() ? "Ready-to-read version" : "Versi siap dibaca";
  fullTab.textContent = "Versi lebih detail";
  fullTab.hidden = isEnglish();
}

function renderAll() {
  applyLanguageUi();
  renderFilters();
  renderAlphabet();
  renderList();
  renderAnswer();
}

function selectTopic(id, scrollAnswer = true) {
  state.activeId = id;
  renderList();
  renderAnswer();
  document.querySelector(".answer-content").scrollTo({ top: 0, behavior: "smooth" });
  if (scrollAnswer && window.innerWidth <= 680) els.answerPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function moveTopic(direction) {
  const result = filteredTopics();
  const index = result.findIndex(topic => topic.id === state.activeId);
  const next = result[index + direction];
  if (next) selectTopic(next.id, false);
}

function toggleFavorite() {
  const id = state.activeId;
  state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
  localStorage.setItem("interview-favorites", JSON.stringify([...state.favorites]));
  renderList();
  renderAnswer();
}

let toastTimer;
function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 1800);
}

els.languageSwitch.addEventListener("click", event => {
  const button = event.target.closest("[data-language]");
  if (!button || button.dataset.language === state.language) return;
  state.language = button.dataset.language;
  state.mode = "quick";
  localStorage.setItem("interview-language", state.language);
  renderAll();
});

els.searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  renderList();
  renderAnswer();
});

els.filterRow.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderAll();
});

els.alphabet.addEventListener("click", event => {
  const button = event.target.closest("[data-letter]");
  if (!button || button.disabled) return;
  state.query = "";
  state.category = "Semua";
  state.favoritesOnly = false;
  els.searchInput.value = "";
  renderAll();
  const group = els.topicList.querySelector(`[data-group="${button.dataset.letter}"]`);
  group?.scrollIntoView({ behavior: "smooth", block: "start" });
});

els.topicList.addEventListener("click", event => {
  const button = event.target.closest("[data-id]");
  if (button) selectTopic(button.dataset.id, window.innerWidth <= 680);
});

els.relatedLinks.addEventListener("click", event => {
  const button = event.target.closest("[data-related-id]");
  if (!button) return;
  state.query = "";
  state.category = "Semua";
  state.favoritesOnly = false;
  els.searchInput.value = "";
  renderFilters();
  selectTopic(button.dataset.relatedId, false);
});

els.hubJumpLinks.addEventListener("click", event => {
  const button = event.target.closest("[data-jump-id]");
  if (!button) return;
  document.getElementById(button.dataset.jumpId)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".mode-tabs").addEventListener("click", event => {
  const tab = event.target.closest("[data-mode]");
  if (!tab) return;
  state.mode = tab.dataset.mode;
  renderAnswer();
});

els.favoriteButton.addEventListener("click", toggleFavorite);
els.favoritesButton.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  renderList();
  renderAnswer();
});
els.prevButton.addEventListener("click", () => moveTopic(-1));
els.nextButton.addEventListener("click", () => moveTopic(1));

els.copyButton.addEventListener("click", async () => {
  try {
    const topic = activeTopic();
    const text = topic.isHub
      ? [topicAnswer(topic), ...topic.members.map(id => topics.find(item => item.id === id)).filter(Boolean).map(member => `${topicTitle(member)}\n${isEnglish() ? (englishAnswers[member.id] || member.quick) : member.full}`)].join("\n\n")
      : topicAnswer(topic);
    await navigator.clipboard.writeText(text);
    showToast(isEnglish() ? "Answer copied" : "Jawaban berhasil disalin");
  } catch {
    showToast(isEnglish() ? "The browser did not allow copying" : "Browser tidak mengizinkan penyalinan");
  }
});

els.focusButton.addEventListener("click", () => {
  document.body.classList.toggle("focus-mode");
  els.focusButton.classList.toggle("active", document.body.classList.contains("focus-mode"));
});

function applyFontSize(value) {
  state.fontSize = Number(value);
  document.documentElement.style.setProperty("--answer-font-size", `${state.fontSize}px`);
  els.fontSizeSlider.value = state.fontSize;
  els.fontSizeValue.textContent = state.fontSize;
  localStorage.setItem("interview-font-size", state.fontSize);
}

els.fontSizeSlider.addEventListener("input", event => applyFontSize(event.target.value));

document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== els.searchInput) {
    event.preventDefault();
    els.searchInput.focus();
  }
  if (document.activeElement === els.searchInput) return;
  if (event.key === "ArrowDown" || event.key === "ArrowRight") moveTopic(1);
  if (event.key === "ArrowUp" || event.key === "ArrowLeft") moveTopic(-1);
  if (event.key.toLowerCase() === "f") toggleFavorite();
  if (event.key === "Escape" && document.body.classList.contains("focus-mode")) els.focusButton.click();
});

applyFontSize(state.fontSize);
renderAll();
