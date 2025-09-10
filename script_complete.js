// Helper function to format requirements into HTML list
        function formatRequirementsToHtml(requirementsArray) {
            if (!requirementsArray || requirementsArray.length === 0) {
                return '<p style="color: var(--color-text-dark);">Tidak ada persyaratan spesifik yang tersedia.</p>';
            }
            return `<ul class="list-disc list-inside space-y-2" style="color: var(--color-text-dark);">` +
                   requirementsArray.map(item => `<li>${item}</li>`).join('') +
                   `</ul>`;
        }

        /* ========================================================= */
        /* Data Aplikasi */
        /* ========================================================= */
        const exportCountriesData = [ // Updated with Japan data
            { "negara": "China", "jumlah_produk": 2, "region": "Asia", "nppo_link": "http://www.moa.gov.cn/", "produk_list": [
                {"nama": "Santan Kelapa", "img": "https://wiratech.co.id/wp-content/uploads/2018/11/cara-membuat-santan-kelapa.png", "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Ekspor santan kelapa (coconut milk) dari Indonesia ke China diawasi ketat oleh GACC (NPPO China).</p>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Produk harus memenuhi standar keamanan pangan & karantina. Jika tidak sesuai â†’ produk bisa ditolak atau dimusnahkan di border.</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) â€“ diterbitkan oleh Badan Karantina Indonesia.",
                            "GACC Registration Proof (CIFER) â€“ pabrik pengolah santan harus terdaftar resmi di GACC.",
                            "Commercial Invoice & Packing List â€“ lengkap, sesuai HS code (HS 2008.19).",
                            "Bill of Lading (B/L) atau Air Waybill (AWB).",
                            "Certificate of Origin (COO/SKA) â€“ membuktikan asal Indonesia.",
                            "Certificate of Analysis (CoA) â€“ uji laboratorium mencakup:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Asam lemak bebas (FFA)</li>
                            <li>Peroksida (PV)</li>
                            <li>Cemaran mikrobiologi: Salmonella, E. coli, Coliforms, Yeast & Mold</li>
                            <li>Logam berat (Pb, Cd, Hg, As)</li>
                            <li>Residu pestisida (sesuai GB 2763)</li>
                            <li>Aflatoksin (jika berbahan baku kering/kelapa parut)</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);"> Declaration of Compliance (DoC) â€“ menyatakan produk sesuai standar GB China.</p>
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label (China)</h3>
                        ${formatRequirementsToHtml([
                            "GB 7101-2022 â€“ Standar keamanan minuman.",
                            "GB 2762-2022 â€“ Batas maksimum kontaminan (logam berat).",
                            "GB 2763-2021 â€“ Batas residu pestisida (MRL).",
                            "GB 7718-2011 â€“ Standar label pangan impor.",
                            "Label wajib dalam bahasa Mandarin mencantumkan:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Nama produk: æ¤°æµ† (Ye Jiang â€“ Coconut Milk)</li>
                            <li>Negara asal: å°åº¦å°¼è¥¿äºš (Indonesia)</li>
                            <li>Nama & alamat eksportir/produsen</li>
                            <li>Nama & alamat importir China</li>
                            <li>Berat bersih & kotor</li>
                            <li>Tanggal produksi & kedaluwarsa</li>
                            <li>Nomor batch/lot</li>
                            <li>Instruksi penyimpanan</li>
                            <li>Nomor registrasi GACC</li>
                        </ul>
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Persyaratan Karantina NPPO China</h3>
                        ${formatRequirementsToHtml([
                            "Produk bebas hama & mikroorganisme berbahaya.",
                            "Hanya boleh diekspor dari pabrik yang sudah disetujui & terdaftar di GACC.",
                            "Produk harus dalam kemasan food grade, hermetis, dan disegel rapat.",
                            "Jika ditemukan cemaran biologis atau kimia di atas ambang batas GB â†’ produk ditolak/dimusnahkan."
                        ])}
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor</h3>
                        ${formatRequirementsToHtml([
                            "Registrasi pabrik di CIFER GACC (wajib).",
                            "Lakukan uji mutu & keamanan pangan â†’ keluarkan CoA.",
                            "Ajukan pemeriksaan ke Badan Karantina Indonesia â†’ terbit PC.",
                            "Lengkapi dokumen ekspor (Invoice, Packing List, COO, B/L, CoA, DoC).",
                            "Pengiriman via designated port China.",
                            "CIQ Inspection di border â†’ pemeriksaan dokumen, sampling, dan uji laboratorium."
                        ])}
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Tidak ada registrasi GACC â†’ ekspor ditolak .",
                            "Label tidak pakai Mandarin â†’ barang ditahan .",
                            "Cemaran mikrobiologi/kimia melewati ambang batas â†’ produk dimusnahkan .",
                            "Gunakan kemasan kaleng, pouch, atau UHT aseptik dengan segel aman ."
                        ])}
                    </div>
                    <div id="tips-sukses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Tips Sukses Ekspor Santan ke China</h3>
                        ${formatRequirementsToHtml([
                            "Gunakan proses sterilisasi (UHT / retort) agar sesuai standar shelf life China.",
                            "Selalu pakai lab ISO 17025 untuk pengujian mutu.",
                            "Sinkronkan nama produk, HS code, dan data dokumen dengan importir.",
                            "Pastikan importir di China memiliki izin impor produk pangan dari GACC."
                        ])}
                    </div>
                `
            },
            {
                "nama": "Minyak Kelapa",
                "img": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1641883391/attached_image/fakta-minyak-kelapa-untuk-rambut-dan-diet.jpg",
                "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Ekspor minyak kelapa (coconut oil) dari Indonesia ke China diawasi ketat oleh GACC (NPPO China).</p>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Produk harus memenuhi standar keamanan pangan & karantina. Jika tidak sesuai â†’ produk bisa ditolak atau dimusnahkan di border .</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) â€“ diterbitkan oleh Badan Karantina Indonesia..",
                            "GACC Registration Proof (CIFER) â€“ pabrik pengolah minyak kelapa harus terdaftar resmi di GACC.",
                            "Commercial Invoice & Packing List â€“ lengkap, sesuai HS code (HS 1513.11/1513.19).",
                            "Bill of Lading (B/L) atau Air Waybill (AWB).",
                            "Certificate of Origin (COO/SKA) â€“ membuktikan asal Indonesia.",
                            "Certificate of Analysis (CoA) â€“ uji laboratorium mencakup:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Asam lemak bebas (FFA)</li>
                            <li>Bilangan peroksida (PV)</li>
                            <li>Kadar air dan zat mudah menguap</li>
                            <li>Cemaran mikrobiologi (jika tidak murni 100% refined)</li>
                            <li>Logam berat (Pb, Cd, Hg, As)</li>
                            <li>Residu pestisida (sesuai GB 2763)</li>
                            <li>Aflatoksin (jika berbahan baku kering/kopra)</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);"> Declaration of Compliance (DoC) â€“ menyatakan produk sesuai standar GB China.</p>
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label (China)</h3>
                        ${formatRequirementsToHtml([
                            "GB 2716-2018 â€“ Standar keamanan minyak nabati.",
                            "GB 2762-2022 â€“ Batas maksimum kontaminan (logam berat).",
                            "GB 2763-2021 â€“ Batas residu pestisida (MRL).",
                            "GB 7718-2011 â€“ Standar label pangan impor.",
                            "Label wajib dalam bahasa Mandarin mencantumkan:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Nama produk: æ¤°å­æ²¹ (YÄ“ ZÇ YÃ³u â€“ Coconut Oil)</li>
                            <li>Negara asal: å°åº¦å°¼è¥¿äºš (Indonesia)</li>
                            <li>Nama & alamat eksportir/produsen</li>
                            <li>Nama & alamat importir China</li>
                            <li>Berat bersih & kotor</li>
                            <li>Tanggal produksi & kedaluwarsa</li>
                            <li>Nomor batch/lot</li>
                            <li>Instruksi penyimpanan</li>
                            <li>Nomor registrasi GACC</li>
                        </ul>
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Persyaratan Karantina NPPO China</h3>
                        ${formatRequirementsToHtml([
                            "Produk bebas hama & mikroorganisme berbahaya (jika tidak melalui proses penyulingan yang menghilangkan semua mikroba).",
                            "Hanya boleh diekspor dari pabrik yang sudah disetujui & terdaftar di GACC.",
                            "Produk harus dalam kemasan food grade, kedap udara, dan disegel rapat.",
                            "Jika ditemukan cemaran biologis atau kimia di atas ambang batas GB â†’ produk ditolak/dimusnahkan."
                        ])}
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor</h3>
                        ${formatRequirementsToHtml([
                            "Registrasi pabrik di CIFER GACC (wajib).",
                            "Lakukan uji mutu & keamanan pangan â†’ keluarkan CoA.",
                            "Ajukan pemeriksaan ke Karantina Pertanian Indonesia â†’ terbit PC.",
                            "Lengkapi dokumen ekspor (Invoice, Packing List, COO, B/L, CoA, DoC).",
                            "Pengiriman via designated port China.",
                            "CIQ Inspection di border â†’ pemeriksaan dokumen, sampling, dan uji laboratorium."
                        ])}
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Tidak ada registrasi GACC â†’ ekspor ditolak .",
                            "Label tidak pakai Mandarin â†’ barang ditahan .",
                            "Cemaran mikrobiologi/kimia melewati ambang batas â†’ produk dimusnahkan .",
                            "Gunakan kemasan yang sesuai standar penyimpanan minyak, seperti drum, flexibag, atau botol kaca/plastik yang aman."
                        ])}
                    </div>
                    <div id="tips-sukses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Tips Sukses Ekspor Minyak Kelapa ke China</h3>
                        ${formatRequirementsToHtml([
                            "Pastikan kualitas minyak kelapa (terutama FFA dan PV) sesuai standar China untuk umur simpan yang baik.",
                            "Selalu pakai lab ISO 17025 untuk pengujian mutu.",
                            "Sinkronkan nama produk, HS code, dan data dokumen dengan importir.",
                            "Pastikan importir di China memiliki izin impor produk pangan dari GACC."
                        ])}
                    </div>
                `
            }
        ]
    },
    {
        "negara": "Inggris",
        "jumlah_produk": 1,
        "region": "Eropa",
        "nppo_link": "https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs",
        "produk_list": [
            {
                "nama": "Kelapa Parut",
                "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-67010495/no-brand_kelapa-parut-1-butir_full01.jpg",
                "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Ingin ekspor kelapa parut kering (desiccated coconut) dari Indonesia ke Inggris? Pastikan produk Anda memenuhi aturan karantina tumbuhan APHA (UK NPPO) dan standar keamanan pangan Inggris.</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) dari Badan Karantina Indonesia.",
                            "Import Permit (jika diminta) â€“ biasanya diurus oleh importir Inggris, tergantung status risiko produk.",
                            "Commercial Invoice & Packing List.",
                            "Bill of Lading / Air Waybill.",
                            "Certificate of Origin (COO/SKA).",
                            "Certificate of Analysis (CoA):"
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Residu pestisida (sesuai UK MRLs)</li>
                            <li>Mikotoksin (aflatoksin B1 max 2 Âµg/kg; total aflatoksin max 4 Âµg/kg)</li>
                            <li>Logam berat (Pb, Cd)</li>
                            <li>Uji mikrobiologi (E. coli, Salmonella, dll.)</li>
                        </ul>
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label (UK)</h3>
                        ${formatRequirementsToHtml([
                            "UK Food Safety Act 1990 & Retained EU Regulations â†’ semua produk pangan harus aman & dapat ditelusuri.",
                            "UK MRL (Maximum Residue Limits) â†’ sejalan dengan Codex/EU, cek di database UK MRL Online.",
                            "Kontaminan pangan: mengacu pada UK/retained EU Regulation (EC) 1881/2006 â†’ batas aflatoksin ketat.",
                            "Pelabelan Wajib (UK Food Information Regulations 2014, turunan dari EU 1169/2011):"
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Nama produk</li>
                            <li>Negara asal: â€œProduct of Indonesiaâ€</li>
                            <li>Berat bersih</li>
                            <li>Nomor batch/lot</li>
                            <li>Nama & alamat importir UK</li>
                            <li>Informasi alergi (jika produk diolah bersama kacang/pangan lain)</li>
                        </ul>
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Persyaratan Karantina</h3>
                        ${formatRequirementsToHtml([
                            "Bebas dari organisme pengganggu tumbuhan karantina (OPTK) yang diawasi Inggris/APHA.",
                            "Produk tidak boleh mengandung hama gudang (Lasioderma serricorne, Araecerus fasciculatus, dll.).",
                            "APHA melakukan pemeriksaan dokumen & fisik di Border Control Post (BCP) saat kedatangan.",
                            "Jika ditemukan hama/cemaran, produk dapat ditolak atau diwajibkan perlakuan (fumigasi/destruksi)."
                        ])}
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor Singkat</h3>
                        ${formatRequirementsToHtml([
                            "Importir Inggris cek apakah Import Permit diperlukan dari APHA.",
                            "Eksportir Indonesia lakukan uji laboratorium (CoA): aflatoksin, pestisida, logam berat, mikroba.",
                            "Inspeksi pra-ekspor oleh Karantina Indonesia â†’ terbit Phytosanitary Certificate.",
                            "Siapkan dokumen ekspor (Invoice, Packing List, B/L, COO, CoA).",
                            "Produk masuk melalui Border Control Post (BCP) yang disetujui APHA.",
                            "APHA & UK Port Health Authority melakukan pemeriksaan dokumen, label, dan bila perlu sampling."
                        ])}
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Produk dengan aflatoksin melebihi batas â†’ otomatis ditolak di perbatasan .",
                            "Jika dokumen tidak sesuai (PC, COO, CoA), kiriman bisa ditahan .",
                            "Gunakan kemasan food grade, kedap, bersih, kering â†’ meminimalkan risiko jamur & serangga .",
                            "UK memiliki import surveillance untuk kelapa & produk tropis â†’ pastikan konsistensi mutu  ."
                        ])}
                    </div>
                    <div id="tips-eksportir" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Tips Eksportir</h3>
                        ${formatRequirementsToHtml([
                            "Gunakan laboratorium terakreditasi ISO 17025 untuk pengujian CoA.",
                            "Koordinasi erat dengan importir UK â†’ karena mereka yang mengurus import clearance.",
                            "Selalu cek update di situs resmi UK NPPO (APHA) & UK Food Standards Agency (FSA) sebelum pengiriman."
                        ])}
                    </div>
                `
            }
        ]
    },
    {
        "negara": "Rusia",
        "jumlah_produk": 2, // Updated to 2 for Nutmeg
        "region": "UEE (Eurasia)",
        "nppo_link": "https://fsvps.gov.ru/",
        "produk_list": [
            {
                "nama": "Kelapa Parut",
                "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-67010495/no-brand_kelapa-parut-1-butir_full01.jpg",
                "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Ingin ekspor kelapa parut kering (desiccated coconut) dari Indonesia ke Rusia?</p>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Produk Anda harus memenuhi aturan ketat karantina Rosselkhoznadzor dan standar pangan Uni EAEU.</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) dari Badan Karantina Indonesia.",
                            "Commercial Invoice & Packing List â†’ memuat deskripsi, HS code, berat netto/bruto.",
                            "Bill of Lading / Air Waybill.",
                            "Certificate of Origin (COO/SKA) â†’ menyatakan asal Indonesia.",
                            "Certificate of Analysis (CoA) â†’ hasil uji:"
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Residu pestisida (sesuai MRL Rusia/EAEU)</li>
                            <li>Mikotoksin (aflatoksin B1, total aflatoksin, ochratoxin)</li>
                            <li>Logam berat (Pb, Cd)</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">oÂ Â  Mikrobiologi (Salmonella, E. coli, coliforms)</p>
                        ${formatRequirementsToHtml([
                            "Declaration of Compliance (DoC) â†’ pernyataan kesesuaian dengan regulasi EAEU, sering diminta importir."
                        ])}
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label</h3>
                        ${formatRequirementsToHtml([
                            "EAEU TR CU 021/2011 â€“ Food Safety â†’ produk harus aman dari kontaminan, mikroba, dan cemaran kimia.",
                            "EAEU TR CU 022/2011 â€“ Food Labeling â†’ label wajib berbahasa Rusia.",
                            "Label wajib memuat:"
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Nama produk (Ð”ÐµÑÐ¸ÐºÐ°Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ ÐºÐ¾ÐºÐ¾Ñ / Desiccated Coconut)</li>
                            <li>Negara asal: Ð˜Ð½Ð´Ð¾Ð½ÐµÐ·Ð¸Ñ (Indonesia)</li>
                            <li>Berat bersih</li>
                            <li>Nomor batch/lot</li>
                            <li>Nama & alamat importir di Rusia</li>
                            <li>Tanggal produksi & kedaluwaktu</li>
                            <li>GOST Standards â†’ kualitas, kelembapan, warna, dan kebersihan produk harus sesuai.</li>
                        </ul>
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Persyaratan Karantina</h3>
                        ${formatRequirementsToHtml([
                            "Harus bebas dari OPTK (Organisme Pengganggu Tumbuhan Karantina), khususnya hama gudang seperti Trogoderma granarium (khapra beetle), Lasioderma serricorne (cigarette beetle), dan Araecerus fasciculatus (coffee bean weevil).",
                            "Jika ada indikasi hama, produk harus melalui fumigasi / perlakuan sebelum penerbitan PC.",
                            "Rosselkhoznadzor menerapkan zero tolerance untuk kesalahan dokumen & temuan hama â†’ kiriman bisa ditolak."
                        ])}
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor Singkat</h3>
                        ${formatRequirementsToHtml([
                            "Eksportir & importir cek apakah ada import permit khusus dari Rosselkhoznadzor.",
                            "Lakukan uji laboratorium (CoA) untuk aflatoksin, pestisida, logam berat, mikroba.",
                            "Inspeksi pra-ekspor oleh Karantina Indonesia â†’ penerbitan Phytosanitary Certificate.",
                            "Siapkan dokumen ekspor (Invoice, Packing List, B/L, COO, CoA, DoC).",
                            "Kirim melalui pelabuhan resmi Rusia (harus BCP yang diakui Rosselkhoznadzor).",
                            "Rosselkhoznadzor & Customs Rusia melakukan pemeriksaan dokumen & sampling di pelabuhan masuk."
                        ])}
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Kesalahan kecil pada Phytosanitary Certificate â†’ produk bisa ditolak di perbatasan .",
                            "Jika ditemukan aflatoksin > batas EAEU â†’ kiriman dimusnahkan atau dikembalikan .",
                            "Gunakan kemasan food grade, kedap, bersih, dan berlabel Rusia .",
                            "Regulasi Rusia sering berubah â†’ cek update di situs resmi Rosselkhoznadzor sebelum ekspor."
                        ])}
                    </div>
                    <div id="tips-eksportir" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">8. Tips Eksportir</h3>
                        ${formatRequirementsToHtml([
                            "Gunakan laboratorium uji terakreditasi ISO 17025 â†’ hasil lebih diterima.",
                            "Pastikan data dokumen identik (nama barang, jumlah, HS code sama antara PC, Invoice, dan B/L).",
                            "Koordinasi dengan importir Rusia agar produk masuk melalui BCP yang benar."
                        ])}
                    </div>
                `
            },
            {
                "nama": "Pala Biji",
                "img": "https://asset.kompas.com/crops/IH_RV5KbajjARwnu9MUsgds412A=/0x0:1000x667/750x500/data/photo/2020/04/18/5e9b14ab5ec0a.jpg",
                "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Persyaratan Ekspor Biji Pala (Nutmeg) ke Rusia</p>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Rusia melalui Rosselkhoznadzor (NPPO Russia) memberlakukan standar fitosanitari & keamanan pangan yang ketat.</p>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Produk pala biji harus bebas dari hama OPTK, cemaran, dan memenuhi aturan labeling pangan impor Rusia.</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) â€“ diterbitkan Badan Karantina Indonesia.",
                            "Commercial Invoice & Packing List â€“ sesuai HS Code pala biji (HS 0908.11).",
                            "Bill of Lading (B/L) atau Air Waybill (AWB).",
                            "Certificate of Origin (COO/SKA) â€“ asal produk dari Indonesia.",
                            "Certificate of Analysis (CoA) â€“ mencakup:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Cemaran mikrobiologi (Salmonella spp., E. coli, Aspergillus flavus/ochraceus)</li>
                            <li>Aflatoksin total & B1 (harus sesuai batas maksimum Rusia/UEEA: â‰¤ 5 Âµg/kg untuk B1, â‰¤ 10 Âµg/kg total)</li>
                            <li>Residu pestisida (berdasarkan SanPiN Rusia)</li>
                            <li>Logam berat (Pb, Cd, Hg, As)</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);"> Declaration of Compliance (DoC) â€“ kesesuaian dengan Technical Regulation EAEU (TR CU 021/2011 â€œOn Food Safetyâ€).</p>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);"> Kontrak dagang / Letter of Credit (L/C).</p>
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">3. Persyaratan Karantina (NPPO Russia)</h3>
                        ${formatRequirementsToHtml([
                            "Produk harus bebas dari Organisme Pengganggu Tumbuhan Karantina (OPTK) yang dilarang Rusia, antara lain:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Araecerus fasciculatus (coffee bean weevil / kumbang pala)</li>
                            <li>Lasioderma serricorne (cigarette beetle)</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">oÂ Â  Diperiksa oleh Rosselkhoznadzor di border entry point.</p>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">oÂ Â  Jika ditemukan hama hidup / cemaran â†’ barang ditolak atau dimusnahkan.</p>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">oÂ Â  Kemasan wajib food grade, rapat, dan diberi label yang jelas.</p>
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label Rusia</h3>
                        ${formatRequirementsToHtml([
                            "Mengacu pada Technical Regulations of the Eurasian Economic Union (EAEU/TR CU):",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>TR CU 021/2011 â€“ Food Safety</li>
                            <li>TR CU 022/2011 â€“ Food Labeling</li>
                            <li>TR CU 029/2012 â€“ Safety of Food Additives, Flavorings, and Processing Aids</li>
                        </ul>
                        <p class="text-base mt-2" style="color: var(--color-text-dark);">Label wajib dalam bahasa Rusia mencantumkan:</p>
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Nama produk: ÐœÑƒÑÐºÐ°Ñ‚Ð½Ñ‹Ð¹ Ð¾Ñ€ÐµÑ… (Nutmeg)</li>
                            <li>Negara asal: Ð˜Ð½Ð´Ð¾Ð½ÐµÐ·Ð¸Ñ (Indonesia)</li>
                            <li>Nama & alamat produsen/eksportir</li>
                            <li>Nama & alamat importir Rusia</li>
                            <li>Berat bersih & kotor</li>
                            <li>Tanggal produksi & kedaluwarsa</li>
                            <li>Nomor batch/lot</li>
                            <li>Instruksi penyimpanan</li>
                        </ul>
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor ke Rusia</h3>
                        ${formatRequirementsToHtml([
                            "Pemeriksaan & pengujian di Indonesia â†’ CoA + Phytosanitary Certificate.",
                            "Dokumen ekspor disiapkan (Invoice, COO, B/L, DoC).",
                            "Pengiriman ke pelabuhan/airport Rusia yang diakui Rosselkhoznadzor.",
                            "Border Inspection Rosselkhoznadzor:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Cek dokumen</li>
                            <li>Sampling & uji laboratorium</li>
                            <li>Karantina bila diperlukan</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">oÂ Â  Produk yang lulus â†’ izin edar di Rusia.</p>
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Tanpa Phytosanitary Certificate â†’ produk otomatis ditolak .",
                            "Ditemukan hama karantina / aflatoksin tinggi â†’ barang dimusnahkan .",
                            "Label tidak pakai bahasa Rusia â†’ produk tidak boleh masuk distribusi .",
                        ])}
                    </div>
                    <div id="tips-sukses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Tips Sukses Ekspor</h3>
                        ${formatRequirementsToHtml([
                            "Gunakan fumigasi atau perlakuan pascapanen untuk mencegah hama hidup.",
                            "Simpan pala dengan RH < 65% untuk mencegah jamur penghasil aflatoksin.",
                            "Selalu cocokkan data HS Code, kontrak dagang, dan label dengan importir Rusia.",
                            "Pastikan importir di Rusia memiliki izin impor pangan dari Rosselkhoznadzor."
                        ])}
                    </div>
                `
            }
        ]
    },
    {
        "negara": "Vietnam",
        "jumlah_produk": 1,
        "region": "Asia",
        "nppo_link": "https://www.ppd.gov.vn/",
        "produk_list": [
            {
                "nama": "Pala Biji",
                "img": "https://asset.kompas.com/crops/IH_RV5KbajjARwnu9MUsgds412A=/0x0:1000x667/750x500/data/photo/2020/04/18/5e9b14ab5ec0a.jpg",
                "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Ingin ekspor biji pala (Myristica fragrans) dari Indonesia ke Vietnam? ðŸš¢ Pastikan produk memenuhi aturan karantina PPD Vietnam dan standar keamanan pangan Vietnam.</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) dari Badan Karantina Indonesia.",
                            "Import Permit (IP) â†’ sering diminta oleh NPPO Vietnam sebelum produk masuk (diurus oleh importir Vietnam) .",
                            "Invoice Komersial & Packing List.",
                            "Bill of Lading / Air Waybill.",
                            "Certificate of Origin (SKA/COO) .",
                            "Certificate of Analysis (CoA) â†’ uji residu pestisida, aflatoksin, kadar air, dan cemaran mikroba sesuai standar Vietnam/EU Codex."
                        ])}
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label</h3>
                        ${formatRequirementsToHtml([
                            "Vietnam mengikuti standar QCVN / TCVN (Vietnamese National Standards) dan merujuk pada Codex Alimentarius.",
                            "Residu pestisida wajib di bawah MRL (Maximum Residue Limit) yang berlaku di Vietnam.",
                            "Kontaminan pangan: aflatoksin total umumnya maksimum 15 Âµg/kg (berdasarkan regulasi keamanan pangan Vietnam).",
                            "Pelabelan wajib dalam bahasa Vietnam: nama produk, negara asal, berat bersih, batch/lot, nama & alamat importir."
                        ])}
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Persyaratan Karantina</h3>
                        ${formatRequirementsToHtml([
                            "Produk harus bebas dari OPTK (Organisme Pengganggu Tumbuhan Karantina) yang diawasi Vietnam, misalnya kumbang gudang (Lasioderma serricerne, Araecerus fasciculatus).",
                            "Pemeriksaan karantina di pintu masuk: PPD Vietnam akan memeriksa dokumen & bisa melakukan fumigasi ulang jika ditemukan hama.",
                            "Pengiriman hanya boleh masuk lewat pelabuhan/pos masuk resmi yang ditunjuk NPPO Vietnam."
                        ])}
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor Singkat</h3>
                        ${formatRequirementsToHtml([
                            "Importir Vietnam mengajukan Import Permit ke PPD.",
                            "Eksportir Indonesia menyiapkan produk â†’ uji laboratorium (residu, aflatoksin).",
                            "Inspeksi pra-ekspor oleh Pejabat Karantina Indonesia â†’ penerbitan Phytosanitary Certificate.",
                            "Dokumen ekspor (Invoice, Packing List, B/L, COO, CoA) dilampirkan.",
                            "Pengiriman via pelabuhan resmi Vietnam.",
                            "PPD melakukan kontrol dokumen & pemeriksaan fisik â†’ bila sesuai, produk bisa masuk pasar Vietnam."
                        ])}
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Jika dokumen tidak sesuai (terutama PC & IP), kiriman bisa ditolak atau dimusnahkan .",
                            "Vietnam sangat ketat terhadap cemaran aflatoksin dan hama gudang .",
                            "Gunakan kemasan yang kuat, bersih, kering, dan mudah dilacak (traceable) ."
                        ])}
                    </div>
                    <div id="tips-eksportir" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Tips Eksportir</h3>
                        ${formatRequirementsToHtml([
                            "Gunakan fumigasi atau perlakuan lain bila ada indikasi hama gudang.",
                            "Selalu koordinasi dengan importir Vietnam karena mereka wajib urus Import Permit.",
                            "Periksa update regulasi karantina di situs Plant Protection Department (PPD Vietnam)."
                        ])}
                    </div>
                `
            }
        ]
    },
    {
        "negara": "Belanda",
        "jumlah_produk": 1, // Updated to 1 for Nutmeg
        "region": "Uni Eropa",
        "nppo_link": "https://english.nvwa.nl/topics/themes/plant-health",
        "produk_list": [
            {
                "nama": "Pala Biji",
                "img": "https://asset.kompas.com/crops/IH_RV5KbajjARwnu9MUsgds412A=/0x0:1000x667/750x500/data/photo/2020/04/18/5e9b14ab5ec0a.jpg",
                "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Ingin ekspor biji pala (Myristica fragrans) ke Belanda? Pastikan produk Anda lolos aturan NVWA (Netherlands Food and Consumer Product Safety Authority) dan regulasi Uni Eropa.</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) dari Badan Karantina Indonesia.",
                            "Invoice Komersial & Packing List.",
                            "Bill of Lading / Air Waybill.",
                            "Certificate of Origin (SKA/COO).",
                            "Certificate of Analysis (CoA): uji residu pestisida, mikotoksin (aflatoksin B1, total aflatoksin, ochratoxin A), logam berat, mikrobiologi.",
                            "Dokumen tambahan: deklarasi kepatuhan keamanan pangan EU (Declaration of Compliance) bila diminta importir."
                        ])}
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label (Uni Eropa / Belanda)</h3>
                        ${formatRequirementsToHtml([
                            "Regulasi Uni Eropa (EU Regulation 178/2002, 852/2004, 1881/2006, 396/2005) â†’ keamanan pangan, batas residu pestisida, dan kontaminan.",
                            "Maximum Residue Limits (MRLs) untuk pestisida â†’ dicek di database EU (pala memiliki batas spesifik).",
                            "Kontaminan: aflatoksin B1 max 5 Âµg/kg, total aflatoksin 10 Âµg/kg (untuk biji pala utuh).",
                            "Pelabelan Wajib sesuai Regulation (EU) 1169/2011: nama produk, negara asal, berat bersih, batch/lot, nama & alamat importir (dalam bahasa Belanda atau bahasa resmi EU)."
                        ])}
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Persyaratan Karantina</h3>
                        ${formatRequirementsToHtml([
                            "Produk harus bebas dari OPTK (Organisme Pengganggu Tumbuhan Karantina).",
                            "Tidak boleh ada serangga hidup, biji kotor, atau kontaminan organik.",
                            "NVWA akan melakukan pemeriksaan dokumen dan bisa sampling di pelabuhan masuk (Rotterdam/Schiphol)."
                        ])}
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor Singkat</h3>
                        ${formatRequirementsToHtml([
                            "Cek persyaratan importir di Belanda (apakah ada tambahan sertifikat khusus).",
                            "Uji laboratorium (CoA) untuk aflatoksin, pestisida, logam berat.",
                            "Pastikan fasilitas produksi & gudang sesuai GMP/HACCP (sering diminta buyer EU).",
                            "Inspeksi pra-ekspor oleh Pejabat Karantina â†’ penerbitan Phytosanitary Certificate.",
                            "Pengiriman melalui pelabuhan resmi EU (Rotterdam, Schiphol).",
                            "NVWA melakukan kontrol dokumen & sampling bila diperlukan."
                        ])}
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Jika ditemukan aflatoksin melebihi batas â†’ kiriman bisa ditolak atau dimusnahkan .",
                            "RASFF Alert (Rapid Alert System for Food and Feed) di EU bisa mengakibatkan larangan sementara bagi eksportir tertentu .",
                            "Gunakan kemasan food grade, bersih, kering, dan berlabel sesuai aturan EU ."
                        ])}
                    </div>
                    <div id="tips-eksportir" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Tips Eksportir</h3>
                        ${formatRequirementsToHtml([
                            "Gunakan laboratorium terakreditasi ISO 17025 untuk uji CoA.",
                            "Diskusikan dengan importir Belanda soal standar tambahan (mis. sertifikasi Organic / FairTrade jika target pasar premium).",
                            "Selalu cek database MRL Uni Eropa sebelum ekspor: EU Pesticide Database."
                        ])}
                    </div>
                `
            }
        ]
    },
    {
        "negara": "Jepang",
        "jumlah_produk": 1,
        "region": "Asia",
        "nppo_link": "https://www.maff.go.jp/",
        "produk_list": [
            {
                "nama": "Biji Pala",
                "img": "https://asset.kompas.com/crops/IH_RV5KbajjARwnu9MUsgds412A=/0x0:1000x667/750x500/data/photo/2020/04/18/5e9b14ab5ec0a.jpg",
                "persyaratan": `
                    <div id="informasi-umum" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Informasi Umum</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Jepang melalui MAFF (Ministry of Agriculture, Forestry and Fisheries / NPPO Jepang) dan MHLW (Ministry of Health, Labour and Welfare) memberlakukan standar fitosanitari & keamanan pangan yang ketat.</p>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Produk pala biji harus bebas dari hama OPTK, cemaran (aflatoksin, logam berat, residu pestisida), dan memenuhi aturan labeling pangan impor Jepang.</p>
                    </div>
                    <div id="dokumen-wajib" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Dokumen Wajib</h3>
                        ${formatRequirementsToHtml([
                            "Phytosanitary Certificate (PC) – diterbitkan Badan Karantina Indonesia (NPPO Indonesia).",
                            "Commercial Invoice & Packing List – sesuai HS Code pala biji (HS 0908.11 / HS 0908.12 untuk bubuk).",
                            "Bill of Lading (B/L) atau Air Waybill (AWB).",
                            "Certificate of Origin (COO/SKA) – Form IJ-EPA (Indonesia–Japan EPA) untuk tarif preferensi 0%.",
                            "Certificate of Analysis (CoA) – mencakup:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Cemaran mikrobiologi (Salmonella spp., E. coli, Aspergillus spp.)</li>
                            <li>Aflatoksin total & B1 (harus sesuai batas maksimum MHLW Jepang: ≤ 10 µg/kg total, ≤ 5 µg/kg B1)</li>
                            <li>Residu pestisida (mengacu pada Positive List System Jepang)</li>
                            <li>Logam berat (Pb, Cd, Hg, As)</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">Kontrak Dagang / Letter of Credit (L/C).</p>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">(Opsional, tergantung buyer) Fumigation Certificate, Insurance Policy, Halal Certificate.</p>
                    </div>
                    <div id="persyaratan-karantina" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Persyaratan Karantina (NPPO Jepang – MAFF)</h3>
                        ${formatRequirementsToHtml([
                            "Produk harus bebas dari Organisme Pengganggu Tumbuhan Karantina (OPTK) yang dilarang Jepang.",
                            "Pemeriksaan karantina di Indonesia oleh Badan Karantina → penerbitan Phytosanitary Certificate.",
                            "Pemeriksaan di border entry point Jepang oleh MAFF Plant Protection Station.",
                            "Jika ditemukan hama hidup / cemaran → barang ditolak atau dimusnahkan.",
                            "Kemasan harus food grade, rapat, dan diberi label jelas."
                        ])}
                    </div>
                    <div id="standar-mutu-label" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Standar Mutu & Label Jepang</h3>
                        <p class="text-base mb-4" style="color: var(--color-text-dark);">Mengacu pada peraturan Jepang:</p>
                        ${formatRequirementsToHtml([
                            "Plant Protection Act (MAFF) – syarat masuk OPTK.",
                            "Food Sanitation Act (MHLW) – keamanan pangan (aflatoksin, pestisida, logam berat).",
                            "Act on Standardization and Proper Labeling of Agricultural and Forestry Products (JAS Law) – aturan label pangan.",
                            "Customs & Tariff Law (Ministry of Finance).",
                            "Label wajib dalam bahasa Jepang mencantumkan:",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Nama produk: ナツメグ (Nutmeg)</li>
                            <li>Negara asal: インドネシア (Indonesia)</li>
                            <li>Nama & alamat produsen/eksportir</li>
                            <li>Nama & alamat importir Jepang</li>
                            <li>Berat bersih & kotor</li>
                            <li>Tanggal produksi & kedaluwarsa</li>
                            <li>Nomor batch/lot</li>
                            <li>Instruksi penyimpanan</li>
                        </ul>
                    </div>
                    <div id="proses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Proses Ekspor ke Jepang</h3>
                        ${formatRequirementsToHtml([
                            "Pemeriksaan & pengujian di Indonesia → CoA + Phytosanitary Certificate.",
                            "Dokumen ekspor disiapkan (Invoice, COO, B/L, dll.).",
                            "Pengiriman ke pelabuhan/airport Jepang yang diakui.",
                            "Border Inspection di Jepang (MAFF & MHLW):",
                        ])}
                        <ul class="list-disc list-inside ml-8 space-y-1" style="color: var(--color-text-dark);">
                            <li>Verifikasi dokumen</li>
                            <li>Sampling & uji laboratorium (aflatoksin, pestisida, logam berat)</li>
                            <li>Karantina bila diperlukan</li>
                        </ul>
                        <p class="text-base mt-2 ml-8" style="color: var(--color-text-dark);">Produk yang lulus → izin edar & distribusi di Jepang.</p>
                    </div>
                    <div id="catatan-penting" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Catatan Penting</h3>
                        ${formatRequirementsToHtml([
                            "Tanpa Phytosanitary Certificate → produk otomatis ditolak.",
                            "Jika ditemukan hama karantina / aflatoksin melebihi batas → barang ditolak atau dimusnahkan.",
                            "Label tidak menggunakan bahasa Jepang → produk tidak boleh masuk distribusi.",
                            "MHLW bisa mengeluarkan Inspection Order bila ditemukan risiko."
                        ])}
                    </div>
                    <div id="tips-sukses-ekspor" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2" style="color: var(--color-text-dark);">Tips Sukses Ekspor</h3>
                        ${formatRequirementsToHtml([
                            "Gunakan fumigasi / perlakuan pascapanen untuk mencegah hama hidup.",
                            "Simpan pala dengan RH < 65% untuk mencegah pertumbuhan jamur penghasil aflatoksin.",
                            "Cocokkan data HS Code, kontrak dagang, dan label dengan importir Jepang.",
                            "Pastikan importir di Jepang memiliki izin impor dari MAFF & MHLW.",
                            "Manfaatkan IJEPA / RCEP untuk tarif 0%."
                        ])}
                    </div>
                `
            }
        ]
    }
];

        /* ========================================================= */
        /* Variabel DOM (Document Object Model) */
        /* ========================================================= */
        const mainPage = document.getElementById('mainPage');
        const negaraTujuanPage = document.getElementById('negaraTujuanPage');
        const productDetailPage = document.getElementById('productDetailPage');
        const exportRequirementsPage = document.getElementById('exportRequirementsPage');
        const exportProductListPage = document.getElementById('exportProductListPage');
        const productCountriesPage = document.getElementById('productCountriesPage');


        // Tombol navigasi utama
        const tombolCari = document.getElementById('tombolCari');

        // Elemen Breadcrumbs
        const breadcrumbHomeNegara = document.getElementById('breadcrumbHomeNegara');
        const breadcrumbHomeProduct = document.getElementById('breadcrumbHomeProduct');
        const breadcrumbNegaraProduct = document.getElementById('breadcrumbNegaraProduct');
        const breadcrumbHomeReq = document.getElementById('breadcrumbHomeReq');
        const breadcrumbNegaraReq = document.getElementById('breadcrumbNegaraReq');
        const breadcrumbProdukReq = document.getElementById('breadcrumbProdukReq');
        const breadcrumbCurrentReq = document.getElementById('breadcrumbCurrentReq'); // Fixed this line
        const breadcrumbHomeProdukList = document.getElementById('breadcrumbHomeProdukList');
        const breadcrumbHomeProductCountries = document.getElementById('breadcrumbHomeProductCountries');
        const breadcrumbProdukListProductCountries = document.getElementById('breadcrumbProdukListProductCountries');
        const breadcrumbCurrentProductCountries = document.getElementById('breadcrumbCurrentProductCountries');

        // Elemen Halaman Negara Tujuan
        const filterSemuaNegara = document.getElementById('filterSemuaNegara');
        const filterAsia = document.getElementById('filterAsia');
        const filterUniEropa = document.getElementById('filterUniEropa');
        const filterGcc = document.getElementById('filterGcc');
        const filterUee = document = document.getElementById('filterUee');
        const filterLainnya = document.getElementById('filterLainnya');
        const daftarNegaraFiltrasi = document.getElementById('daftarNegaraFiltrasi');
        const daftarNegaraTitle = document.getElementById('daftarNegaraTitle');

        // Elemen Halaman Detail Produk Negara
        const detailPageTitle = document.getElementById('detailPageTitle');
        const detailPageSubtext = document.getElementById('detailPageSubtext');
        const produkContainer = document.getElementById('produkContainer');

        // Elemen Halaman Persyaratan Ekspor Produk
        const requirementsPageTitle = document.getElementById('requirementsPageTitle');
        const requirementsPageSubtext = document.getElementById('requirementsPageSubtext');
        const requirementsContent = document.getElementById('requirementsContent');
        const countryNameForReq = document.getElementById('countryNameForReq');
        const requirementsProductCard = document.getElementById('requirementsProductCard'); // New for product card
        const requirementsProductImage = document.getElementById('requirementsProductImage'); // New for product image
        const requirementsProductName = document.getElementById('requirementsProductName'); // New for product name
        const requirementsNavList = document.getElementById('requirementsNavList'); // New for requirements navigation
        const requirementsButtonGroup = document.getElementById('requirementsButtonGroup'); // New for the button group

        // Elemen Halaman Daftar Produk Ekspor
        const productListPageTitle = document.getElementById('productListPageTitle');
        const productListPageSubtext = document.getElementById('productListPageSubtext');
        const allProductsContainer = document.getElementById('allProductsContainer');

        // Elemen Halaman Negara-negara Penjual Produk
        const productCountriesPageTitle = document.getElementById('productCountriesPageTitle');
        const productCountriesPageSubtext = document.getElementById('productCountriesPageSubtext');
        const countriesForProductContainer = document.getElementById('countriesForProductContainer');

        // Elemen input pencarian dan dropdowns
        const inputNegara = document.getElementById('inputNegara');
        const toggleNegaraDropdown = document.getElementById('toggleNegaraDropdown');
        const negaraDropdownContent = document.getElementById('negaraDropdownContent');

        const inputProduk = document.getElementById('inputProduk');
        const toggleProdukDropdown = document.getElementById('toggleProdukDropdown');
        const produkDropdownContent = document.getElementById('produkDropdownContent');

        const noResultsCard = document.getElementById('noResultsCard');


        /* ========================================================= */
        /* Variabel State (Penyimpanan Data Sementara) */
        /* ========================================================= */
        let selectedCountryData = null; // Menyimpan data negara yang dipilih
        let selectedProductForCountriesPage = null; // Menyimpan data produk yang dipilih untuk halaman negara-negara penjual produk
        let selectedProductForRequirements = null; // Menyimpan data produk yang dipilih untuk halaman persyaratan

        /* ========================================================= */
        /* Fungsi Pembantu */
        /* ========================================================= */

        // Data lengkap untuk semua produk unik (untuk halaman daftar produk ekspor)
        const allUniqueProductsData = (() => {
            const productsMap = new Map();
            exportCountriesData.forEach(country => {
                country.produk_list.forEach(product => {
                    if (!productsMap.has(product.nama)) {
                        productsMap.set(product.nama, {
                            nama: product.nama,
                            img: product.img,
                            // Tidak menyimpan 'persyaratan' di sini karena itu spesifik untuk pasangan produk-negara
                            countries_exporting: new Set()
                        });
                    }
                    productsMap.get(product.nama).countries_exporting.add(country.negara);
                });
            });
            // Konversi Set ke Array dan simpan jumlah negara pengekspor
            const uniqueProductsArray = Array.from(productsMap.values()).map(product => ({
                ...product,
                countries_exporting_count: product.countries_exporting.size,
                countries_exporting_list: Array.from(product.countries_exporting).sort() // Simpan daftar negara yang diurutkan
            }));
            return uniqueProductsArray.sort((a, b) => a.nama.localeCompare(b.nama));
        })();

        // Fungsi untuk mendapatkan URL gambar bendera berdasarkan nama negara
        function getCountryImage(countryName) {
            switch (countryName) {
                case 'China':
                    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png';
                case 'Inggris':
                    return 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg'; // URL baru untuk bendera United Kingdom
                case 'Rusia':
                    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png';
                case 'Vietnam':
                    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png';
                case 'Belanda':
                    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/255px-Flag_of_the_Netherlands.svg.png';
                case 'Jepang':
                    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png';
                default:
                    // Fallback for other countries using a placeholder
                    const countryCode = countryName.substring(0, 2).toUpperCase(); 
                    return `https://placehold.co/150x120/CCCCCC/666666?text=${countryCode}`;
            }
        }

        // Fungsi untuk mengkonversi string menjadi slug URL-friendly
        function slugify(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '-')           // Ganti spasi dengan tanda hubung
                .replace(/[^\w-]+/g, '')       // Hapus semua non-word chars
                .replace(/--+/g, '-')          // Ganti multiple dashes dengan single dash
                .replace(/^-+/, '')            // Trim dashes from start of text
                .replace(/-+$/, '');           // Trim dashes from end of text
        }

        // Fungsi untuk menyembunyikan semua halaman
        function _hideAllPages() {
            mainPage.classList.add('hidden-page');
            negaraTujuanPage.classList.add('hidden-page');
            productDetailPage.classList.add('hidden-page');
            exportRequirementsPage.classList.add('hidden-page');
            exportProductListPage.classList.add('hidden-page');
            productCountriesPage.classList.add('hidden-page');

            // Sembunyikan kartu gambar produk saat tidak di halaman persyaratan ekspor
            requirementsProductCard.classList.add('hidden');
        }

        // Fungsi untuk parsing query parameters dari string hash
        function getQueryParams(url) {
            const params = {};
            const queryString = url.split('?')[1];
            if (queryString) {
                queryString.split('&').forEach(param => {
                    const [key, value] = param.split('=');
                    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
                });
            }
            return params;
        }

        // Fungsi untuk menampilkan kartu "Tidak Ada Hasil"
        function showNoResultsCard() {
            noResultsCard.classList.remove('hidden');
            noResultsCard.classList.add('visible');
        }

        // Fungsi untuk menyembunyikan kartu "Tidak Ada Hasil"
        function hideNoResultsCard() {
            noResultsCard.classList.remove('visible');
            noResultsCard.classList.add('hidden');
        }

        /* ========================================================= */
        /* Fungsi Render Halaman */
        /* ========================================================= */

        // Fungsi untuk merender halaman utama
        function renderMainPage() {
            _hideAllPages();
            mainPage.classList.remove('hidden-page');
            document.title = "Lintanx. Layanan Informasi Tumbuhan Ekspor";
            
            // Reset input pencarian saat kembali ke halaman utama
            inputNegara.value = '';
            inputProduk.value = '';
            hideNoResultsCard(); // Pastikan kartu "Tidak Ada Hasil" juga tersembunyi
        }

        // Fungsi untuk merender halaman negara tujuan
        function renderNegaraTujuanPage(activeFilterRegion = 'Semua Negara') {
            _hideAllPages();
            negaraTujuanPage.classList.remove('hidden-page');
            let countriesToDisplay = exportCountriesData;
            filterAndRenderCountries(activeFilterRegion, countriesToDisplay);
            document.title = "Negara Tujuan Ekspor - Lintanx";
        }

        // Fungsi untuk merender halaman detail produk untuk negara tertentu
        function renderProductDetailPage(countrySlug) {
            _hideAllPages();
            productDetailPage.classList.remove('hidden-page');

            selectedCountryData = exportCountriesData.find(country => slugify(country.negara) === countrySlug);

            if (selectedCountryData) {
                detailPageTitle.textContent = `Produk Ekspor ke ${selectedCountryData.negara}`;
                detailPageSubtext.textContent = ``;
                breadcrumbCurrentProduct.textContent = selectedCountryData.negara;
                renderProducts(selectedCountryData.produk_list, selectedCountryData.negara);
                document.title = `Produk Ekspor ke ${selectedCountryData.negara} - Lintanx`;
            } else {
                console.error("Data negara tidak ditemukan:", countrySlug);
                navigateTo('#/'); // Redirect ke halaman utama jika data tidak ditemukan
            }
        }

        // Fungsi untuk merender halaman daftar semua produk ekspor
        function renderExportProductListPage() {
            _hideAllPages();
            exportProductListPage.classList.remove('hidden-page');
            productListPageTitle.textContent = "Semua Produk Ekspor";
            productListPageSubtext.textContent = "Temukan persyaratan ekspor untuk berbagai jenis produk tumbuhan.";
            renderAllProducts(allUniqueProductsData);
            document.title = "Semua Produk Ekspor - Lintanx";
        }

        // Fungsi baru: untuk merender halaman negara-negara penjual produk tertentu
        function renderProductCountriesPage(productSlug) {
            _hideAllPages();
            productCountriesPage.classList.remove('hidden-page');

            selectedProductForCountriesPage = allUniqueProductsData.find(p => slugify(p.nama) === productSlug);

            if (selectedProductForCountriesPage) {
                productCountriesPageTitle.textContent = `Negara Tujuan untuk ${selectedProductForCountriesPage.nama}`;
                productCountriesPageSubtext.textContent = `Informasi negara tujuan ekspor.` + ` Produk: ${selectedProductForCountriesPage.nama}`;
                breadcrumbCurrentProductCountries.textContent = selectedProductForCountriesPage.nama;

                renderCountriesForProduct(selectedProductForCountriesPage.countries_exporting_list, selectedProductForCountriesPage.nama);
                document.title = `Negara Tujuan untuk ${selectedProductForCountriesPage.nama} - Lintanx`;
            } else {
                console.error("Data produk tidak ditemukan:", productSlug);
                navigateTo('#/'); // Redirect ke halaman utama jika data tidak ditemukan
            }
        }

        // Fungsi untuk merender halaman persyaratan ekspor untuk produk dan negara spesifik
        function renderExportRequirementsPage(countrySlug, productSlug) {
            _hideAllPages();
            exportRequirementsPage.classList.remove('hidden-page');

            const country = exportCountriesData.find(c => slugify(c.negara) === countrySlug);
            const product = country ? country.produk_list.find(p => slugify(p.nama) === productSlug) : null;

            if (country && product) {
                selectedProductForRequirements = product;
                selectedCountryData = country;

                requirementsPageTitle.textContent = `Ekspor Produk ${product.nama} ke ${country.negara}`;
                requirementsPageSubtext.innerHTML = `Berikut ini informasi persyaratan ekspor terkait produk yang akan diekspor ke <span id="countryNameForReq"></span>.` ;

                requirementsContent.innerHTML = product.persyaratan || '<p style="color: var(--color-text-dark);">Tidak ada persyaratan spesifik yang tersedia untuk produk ini.</p>';

                // Tampilkan kartu gambar produk
                requirementsProductCard.classList.remove('hidden');
                requirementsProductImage.src = product.img;
                requirementsProductName.textContent = product.nama;
                
                // Set the country name for the requirements page subtext
                countryNameForReq.textContent = country.negara;

                // Populate requirements navigation with headings and buttons
                populateRequirementsNav();

                breadcrumbProdukReq.textContent = product.nama;
                breadcrumbNegaraReq.textContent = country.negara;
                breadcrumbCurrentReq.textContent = `Persyaratan`;
                document.title = `Persyaratan Ekspor ${product.nama} ke ${country.negara} - Lintanx`;
            } else {
                console.error("Data negara atau produk tidak ditemukan:", countrySlug, productSlug);
                navigateTo('#/'); // Redirect ke halaman utama jika data tidak ditemukan
            }
        }

        /* ========================================================= */
        /* Fungsi Render Konten Dinamis (dipanggil oleh fungsi render halaman) */
        /* ========================================================= */

        // Merender (menampilkan) kartu negara
        function renderCountries(countriesToDisplay, title) {
            daftarNegaraFiltrasi.innerHTML = '';
            daftarNegaraTitle.textContent = title;

            if (countriesToDisplay.length === 0) {
                daftarNegaraFiltrasi.innerHTML = '<p class="col-span-full" style="color: var(--color-text-dark);">Tidak ada negara yang ditemukan untuk wilayah ini.</p>';
                return;
            }

            countriesToDisplay.forEach(country => {
                const countryImage = getCountryImage(country.negara);

                const countryCard = document.createElement('div');
                // Mengurangi padding menjadi p-2 untuk kartu yang lebih kecil
                countryCard.className = 'p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden transparent-content-card product-item-card';
                countryCard.innerHTML = `
                    <img src="${countryImage}" alt="Gambar untuk ${country.negara}" class="product-card-image">
                    <div class="px-2 pb-2"> <!-- Mengurangi padding di sini juga -->
                        <h3 class="font-semibold text-base mb-1" style="color: var(--color-text-dark);">${country.negara}</h3> <!-- Mengurangi ukuran font -->
                        <p class="text-xs text-gray-500">${country.jumlah_produk || 0} produk ekspor</p>
                    </div>
                `;
                countryCard.addEventListener('click', () => {
                    navigateTo(`#/negara-tujuan/${slugify(country.negara)}`);
                });
                daftarNegaraFiltrasi.appendChild(countryCard);
            });
        }

        // Merender (menampilkan) kartu produk (di halaman Detail Produk Negara)
        function renderProducts(productsToDisplay, countryName) {
            produkContainer.innerHTML = '';

            if (productsToDisplay.length === 0) {
                produkContainer.innerHTML = '<p class="col-span-full" style="color: var(--color-text-dark);">Tidak ada produk yang ditemukan untuk negara ini.</p>';
                return;
            }

            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden transparent-content-card product-item-card';
                productCard.innerHTML = `
                    <img src="${product.img}" alt="${product.nama}" class="product-card-image">
                    <div class="px-2 pb-2">
                        <h3 class="font-semibold text-base mb-1" style="color: var(--color-text-dark);">${product.nama}</h3>
                        <p class="text-xs hover:underline" style="color: var(--color-link-hover);">Lihat persyaratan ></p>
                    </div>
                `;
                // Menambahkan event listener untuk mengklik kartu produk
                productCard.addEventListener('click', () => {
                    navigateTo(`#/persyaratan/${slugify(countryName)}/${slugify(product.nama)}`);
                });
                produkContainer.appendChild(productCard);
            });
        }

        // Merender (menampilkan) semua kartu produk unik (di halaman Daftar Produk Ekspor)
        function renderAllProducts(productsToDisplay) {
            allProductsContainer.innerHTML = '';

            if (productsToDisplay.length === 0) {
                allProductsContainer.innerHTML = '<p class="col-span-full" style="color: var(--color-text-dark);">Tidak ada produk yang ditemukan.</p>';
                return;
            }

            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden transparent-content-card product-item-card';
                productCard.innerHTML = `
                    <img src="${product.img}" alt="${product.nama}" class="product-card-image">
                    <div class="px-2 pb-2">
                        <h3 class="font-semibold text-base mb-1" style="color: var(--color-text-dark);">${product.nama}</h3>
                        <p class="text-xs text-gray-500">${product.countries_exporting_count} Negara tujuan</p>
                        <p class="text-xs hover:underline mt-1" style="color: var(--color-link-hover);">Lihat persyaratan ></p>
                    </div>
                `;
                // Menambahkan event listener untuk mengklik kartu produk
                productCard.addEventListener('click', () => {
                    navigateTo(`#/produk-ekspor/${slugify(product.nama)}`);
                });
                allProductsContainer.appendChild(productCard);
            });
        }

        // Merender (menampilkan) kartu negara untuk produk tertentu
        function renderCountriesForProduct(countryNames, productName) {
            countriesForProductContainer.innerHTML = '';

            if (countryNames.length === 0) {
                countriesForProductContainer.innerHTML = `<p class="col-span-full" style="color: var(--color-text-dark);">Tidak ada negara yang mengekspor produk ${productName}.</p>`;
                return;
            }

            countryNames.forEach(countryName => {
                const countryImage = getCountryImage(countryName);

                const countryCard = document.createElement('div');
                countryCard.className = 'p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden transparent-content-card product-item-card';
                countryCard.innerHTML = `
                    <img src="${countryImage}" alt="Gambar untuk ${countryName}" class="product-card-image">
                    <div class="px-2 pb-2">
                        <h3 class="font-semibold text-base mb-1" style="color: var(--color-text-dark);">${countryName}</h3>
                        <p class="text-xs hover:underline" style="color: var(--color-link-hover);">Lihat persyaratan ></p>
                    </div>
                `;
                countryCard.addEventListener('click', () => {
                    navigateTo(`#/persyaratan/${slugify(countryName)}/${slugify(productName)}`);
                });
                countriesForProductContainer.appendChild(countryCard);
            });
        }

        // Fungsi untuk memfilter dan merender negara berdasarkan wilayah
        function filterAndRenderCountries(region, dataToUse = exportCountriesData) {
            let filteredCountries = [];
            let displayTitle = '';

            document.querySelectorAll('#negaraTujuanPage button, #negaraTujuanPage ul a').forEach(el => {
                el.classList.remove('filter-active');
                el.style.backgroundColor = ''; /* Reset background color */
                el.style.color = 'var(--color-text-dark)'; /* Reset text color */
                if (el.tagName === 'A') {
                    el.style.setProperty('background-color', 'transparent', 'important'); /* Ensure links are transparent by default */
                    el.style.setProperty('color', 'var(--color-text-dark)', 'important');
                }
            });

            if (region === 'Semua Negara') {
                filteredCountries = dataToUse;
                displayTitle = 'Semua Negara';
                filterSemuaNegara.classList.add('filter-active');
                filterSemuaNegara.style.backgroundColor = 'var(--color-accent-button)';
                filterSemuaNegara.style.color = 'var(--color-text-light)';
            } else if (region === 'Hasil Pencarian') {
                filteredCountries = dataToUse;
                displayTitle = 'Hasil Pencarian Negara';
            }
            else {
                if (region === 'Lainnya') {
                    const knownRegions = ['Asia', 'Uni Eropa', 'GCC (Arab Teluk)', 'UEE (Eurasia)', 'Amerika Utara', 'Amerika Selatan', 'Afrika', 'Eropa'];
                    filteredCountries = dataToUse.filter(country => !knownRegions.includes(country.region));
                } else {
                    filteredCountries = dataToUse.filter(country => country.region === region);
                }
                displayTitle = `Negara di ${region}`;

                const activeFilterElement = document.getElementById(`filter${region.replace(/ /g, '').replace(/\(.*\)/, '')}`);
                if (activeFilterElement) {
                    activeFilterElement.classList.add('filter-active');
                    activeFilterElement.style.backgroundColor = 'var(--color-accent-button)';
                    activeFilterElement.style.color = 'var(--color-text-light)';
                }
            }
            renderCountries(filteredCountries, displayTitle);
        }

        /* ========================================================= */
        /* Interaktif Pencarian */
        /* ========================================================= */

        // Fungsi untuk mengisi dropdown negara
        function populateNegaraDropdown(filterText = '') {
            negaraDropdownContent.innerHTML = '';
            const lowerCaseFilterText = filterText.toLowerCase();

            // Tambahkan opsi "Semua negara" paling atas jika filterText cocok atau kosong
            if ('semua negara'.includes(lowerCaseFilterText) || lowerCaseFilterText === '') {
                const allCountriesOption = document.createElement('div');
                allCountriesOption.classList.add('dropdown-item', 'font-semibold');
                allCountriesOption.textContent = 'Semua negara';
                allCountriesOption.addEventListener('click', () => {
                    inputNegara.value = 'Semua negara';
                    negaraDropdownContent.classList.remove('show');
                });
                negaraDropdownContent.appendChild(allCountriesOption);
            }

            const uniqueCountries = new Set(exportCountriesData.map(country => country.negara));
            let filteredCountries = Array.from(uniqueCountries);

            if (lowerCaseFilterText && lowerCaseFilterText !== 'semua negara') {
                filteredCountries = filteredCountries.filter(country =>
                    country.toLowerCase().includes(lowerCaseFilterText)
                );
            } else if (lowerCaseFilterText === 'semua negara') {
                // If "Semua negara" is typed, show all but prioritize the "Semua negara" option
                filteredCountries = []; // Clear to avoid duplicates, the option is already added
            }


            if (filteredCountries.length > 0) {
                filteredCountries.sort().forEach(country => { // Urutkan secara alfabetis
                    const div = document.createElement('div');
                    div.classList.add('dropdown-item');
                    div.textContent = country;
                    div.addEventListener('click', () => {
                        inputNegara.value = country;
                        negaraDropdownContent.classList.remove('show');
                    });
                    negaraDropdownContent.appendChild(div);
                });
            } else if (negaraDropdownContent.children.length === 0) { // Hanya tampilkan 'Tidak ditemukan' jika tidak ada opsi lain
                const div = document.createElement('div');
                div.classList.add('dropdown-item', 'text-gray-500', 'italic');
                div.textContent = 'Tidak ditemukan';
                negaraDropdownContent.appendChild(div);
            }
        }

        // Fungsi untuk mengisi dropdown produk
        function populateProdukDropdown(filterText = '') {
            produkDropdownContent.innerHTML = '';
            const lowerCaseFilterText = filterText.toLowerCase();

            // Tambahkan opsi "Semua produk" paling atas jika filterText cocok atau kosong
            if ('semua produk'.includes(lowerCaseFilterText) || lowerCaseFilterText === '') {
                const allProductsOption = document.createElement('div');
                allProductsOption.classList.add('dropdown-item', 'font-semibold');
                allProductsOption.textContent = 'Semua produk';
                allProductsOption.addEventListener('click', () => {
                    inputProduk.value = 'Semua produk';
                    produkDropdownContent.classList.remove('show');
                });
                produkDropdownContent.appendChild(allProductsOption);
            }

            const uniqueProducts = new Set(allUniqueProductsData.map(product => product.nama));
            let filteredProducts = Array.from(uniqueProducts);

            if (lowerCaseFilterText && lowerCaseFilterText !== 'semua produk') {
                filteredProducts = filteredProducts.filter(product =>
                    product.toLowerCase().includes(lowerCaseFilterText)
                );
            } else if (lowerCaseFilterText === 'semua produk') {
                // If "Semua produk" is typed, show all but prioritize the "Semua produk" option
                filteredProducts = []; // Clear to avoid duplicates, the option is already added
            }

            if (filteredProducts.length > 0) {
                filteredProducts.sort().forEach(product => { // Urutkan secara alfabetis
                    const div = document.createElement('div');
                    div.classList.add('dropdown-item');
                    div.textContent = product;
                    div.addEventListener('click', () => {
                        inputProduk.value = product;
                        produkDropdownContent.classList.remove('show');
                    });
                    produkDropdownContent.appendChild(div);
                });
            } else if (produkDropdownContent.children.length === 0) { // Hanya tampilkan 'Tidak ditemukan' jika tidak ada opsi lain
                const div = document.createElement('div');
                div.classList.add('dropdown-item', 'text-gray-500', 'italic');
                div.textContent = 'Tidak ditemukan';
                produkDropdownContent.appendChild(div);
            }
        }

        // Fungsi untuk melakukan pencarian utama berdasarkan input negara dan produk
        function performSearch() {
            const negaraInput = inputNegara.value.trim().toLowerCase();
            const produkInput = inputProduk.value.trim().toLowerCase();

            const isNegaraGeneric = (negaraInput === '' || negaraInput === 'semua negara');
            const isProdukGeneric = (produkInput === '' || produkInput === 'semua produk');

            // Case 1: Both inputs are specific
            if (!isNegaraGeneric && !isProdukGeneric) {
                const country = exportCountriesData.find(c => slugify(c.negara) === slugify(negaraInput));
                if (country) {
                    const product = country.produk_list.find(p => slugify(p.nama) === slugify(produkInput));
                    if (product) {
                        navigateTo(`#/persyaratan/${slugify(country.negara)}/${slugify(product.nama)}`);
                        return;
                    }
                }
                // If specific country-product pair not found
                _hideAllPages();
                mainPage.classList.remove('hidden-page');
                showNoResultsCard();
                setTimeout(hideNoResultsCard, 5000);
                return;
            }

            // Case 2: Specific Product, Generic Country
            if (!isProdukGeneric && isNegaraGeneric) {
                const productSlug = slugify(produkInput);
                const productExists = allUniqueProductsData.some(product => slugify(product.nama) === productSlug);
                if (productExists) {
                    navigateTo(`#/produk-ekspor/${productSlug}`); // Go to countries for that specific product
                    return;
                } else {
                    // If exact product not found, show no results.
                    _hideAllPages();
                    mainPage.classList.remove('hidden-page');
                    showNoResultsCard();
                    setTimeout(hideNoResultsCard, 5000);
                    return;
                }
            }

            // Case 3: Specific Country, Generic Product
            if (!isNegaraGeneric && isProdukGeneric) {
                const countrySlug = slugify(negaraInput);
                const countryExists = exportCountriesData.some(country => slugify(country.negara) === countrySlug);
                if (countryExists) {
                    navigateTo(`#/negara-tujuan/${countrySlug}`); // Go to products for that specific country
                    return;
                } else {
                    // If exact country not found, show no results.
                    _hideAllPages();
                    mainPage.classList.remove('hidden-page');
                    showNoResultsCard();
                    setTimeout(hideNoResultsCard, 5000);
                    return;
                }
            }

            // Case 4: Both Generic (empty or "semua...")
            if (isNegaraGeneric && isProdukGeneric) {
                if (produkInput === 'semua produk') {
                    navigateTo('#/produk-ekspor'); // User explicitly wants ALL products
                    return;
                }
                // If not explicitly 'semua produk', but 'semua negara' or both are empty
                navigateTo('#/negara-tujuan'); // Default to all countries
                return;
            }

            // Fallback for any other unexpected cases
            _hideAllPages();
            mainPage.classList.remove('hidden-page');
            showNoResultsCard();
            setTimeout(hideNoResultsCard, 5000);
        }


        /* ========================================================= */
        /* Routing dan Navigasi Berbasis Hash */
        /* ========================================================= */

        // Fungsi utama untuk mengubah URL hash dan memicu handleLocation
        function navigateTo(path, params = {}) {
            let urlHash = path;
            const queryParts = [];

            // Tambahkan parameter ke hash jika ada
            for (const key in params) {
                queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
            }

            if (queryParts.length > 0) {
                urlHash += `?${queryParts.join('&')}`;
            }
            
            // Cek apakah hash sudah sama, jika ya, panggil langsung handleLocation
            if (window.location.hash === urlHash) {
                handleLocation();
            } else {
                window.location.hash = urlHash; // Ini akan memicu event 'hashchange'
            }
        }

        // Objek rute yang memetakan path (setelah #) ke fungsi render
        const routes = {
            '/': renderMainPage,
            '/negara-tujuan': renderNegaraTujuanPage,
            '/produk-ekspor': renderExportProductListPage,
            '/negara-tujuan/:countrySlug': renderProductDetailPage,
            '/produk-ekspor/:productSlug': renderProductCountriesPage,
            '/persyaratan/:countrySlug/:productSlug': renderExportRequirementsPage,
        };

        // Fungsi untuk menangani perubahan lokasi (URL hash)
        function handleLocation() {
            let fullHashPath = window.location.hash.substring(1) || '/';
            let pathWithoutQuery = fullHashPath.split('?')[0];
            
            if (pathWithoutQuery.length > 1 && pathWithoutQuery.endsWith('/')) {
                pathWithoutQuery = pathWithoutQuery.slice(0, -1);
            }

            const queryParams = getQueryParams(fullHashPath);

            let matchedRoute = null;
            let routeParams = {};

            for (const routePath in routes) {
                const routeParts = routePath.split('/').filter(p => p.length > 0);
                const pathParts = fullHashPath.split('?')[0].split('/').filter(p => p.length > 0);


                if (routePath === '/') {
                    if (pathParts.length === 0) {
                        matchedRoute = routes[routePath];
                        routeParams = {};
                        break;
                    }
                    continue;
                }
                
                if (routeParts.length !== pathParts.length) {
                    continue;
                }

                let match = true;
                let currentParams = {};

                for (let i = 0; i < routeParts.length; i++) {
                    const routePart = routeParts[i];
                    const pathPart = pathParts[i];

                    if (routePart.startsWith(':')) {
                        currentParams[routePart.substring(1)] = pathPart;
                    } else if (routePart !== pathPart) {
                        match = false;
                        break;
                    }
                }

                if (match) {
                    matchedRoute = routes[routePath];
                    routeParams = currentParams;
                    break;
                }
            }

            if (matchedRoute) {
                if (pathWithoutQuery === '/negara-tujuan') {
                    const region = queryParams.region || 'Semua Negara';
                    renderNegaraTujuanPage(region);
                } else if (pathWithoutQuery === '/produk-ekspor') {
                    renderExportProductListPage();
                } else if (pathWithoutQuery.startsWith('/negara-tujuan/')) {
                    renderProductDetailPage(routeParams.countrySlug);
                } else if (pathWithoutQuery.startsWith('/produk-ekspor/')) {
                    renderProductCountriesPage(routeParams.productSlug);
                } else if (pathWithoutQuery.startsWith('/persyaratan/')) {
                    renderExportRequirementsPage(routeParams.countrySlug, routeParams.productSlug);
                }
                else {
                    matchedRoute();
                }
            } else {
                console.warn("Tidak ada rute yang cocok untuk:", fullHashPath);
                navigateTo('#/'); // Alihkan ke halaman utama jika rute tidak cocok
            }
        }

        /* ========================================================= */
        /* Fungsi Navigasi Persyaratan (untuk daftar isi) */
        /* ========================================================= */
        function populateRequirementsNav() {
            requirementsNavList.innerHTML = ''; // Clear existing list items
            requirementsButtonGroup.innerHTML = ''; // Clear existing buttons

            const headings = requirementsContent.querySelectorAll('h3'); // Mengambil semua h3

            // Tambahkan item navigasi untuk setiap heading
            headings.forEach(heading => {
                const id = heading.id;
                const text = heading.textContent;
                if (id && text) {
                    const listItem = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.href = `#${id}`;
                    anchor.textContent = text;
                    anchor.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetElement = document.getElementById(id);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                            // setTimeout to allow scroll to complete before highlighting
                            setTimeout(highlightActiveHeading, 300); 
                        }
                    });
                    listItem.appendChild(anchor);
                    requirementsNavList.appendChild(listItem);
                }
            });

            // Tambahkan grup tombol di bawah daftar isi
            if (selectedCountryData) {
                // Tombol NPPO
                const nppoButtonDiv = document.createElement('div');
                nppoButtonDiv.classList.add('nav-button-item');
                nppoButtonDiv.innerHTML = `
                    <a href="${selectedCountryData.nppo_link}" target="_blank" class="bg-teal-accent-button">
                        Kunjungi Website NPPO ${selectedCountryData.negara} &rarr;
                    </a>
                `;
                requirementsButtonGroup.appendChild(nppoButtonDiv);

                // Tombol Link PDF OPTK (Waspada OPTK Produk Ini)
                const optkButtonDiv = document.createElement('div');
                optkButtonDiv.classList.add('nav-button-item');
                let optkLink = "https://drive.google.com/file/d/1V7Y9XSnsYyVdNe-yQOPchZlqrUgPzYf5/view?usp=sharing"; // Default link
                if (selectedCountryData.negara === "China") {
                    optkLink = "https://drive.google.com/file/d/19KVBb05XNvEtAwBKaomiKF63gXDMLR3e/view?usp=sharing"; // New link for China
                }
                optkButtonDiv.innerHTML = `
                    <a href="${optkLink}" target="_blank" class="bg-red-500-button">
                        Waspada OPTK Produk Ini
                    </a>
                `;
                requirementsButtonGroup.appendChild(optkButtonDiv);
                
                // Tombol Link Dokumen Ekspor (Lihat Dokumen Ekspor)
                const docExportButtonDiv = document.createElement('div');
                docExportButtonDiv.classList.add('nav-button-item');
                // Mengubah tautan dokumen ekspor
                const docExportLink = "https://drive.google.com/file/d/1AldMGXWtucQrihOi9YE4xs2HN4I7JZGm/view?usp=sharing";
                docExportButtonDiv.innerHTML = `
                    <a href="${docExportLink}" target="_blank" class="bg-teal-accent-button">
                        Lihat Dokumen Ekspor
                    </a>
                `;
                requirementsButtonGroup.appendChild(docExportButtonDiv);
            }

            // Highlight heading pertama secara default jika ada
            if (headings.length > 0) {
                highlightActiveHeading();
            }
        }

        function highlightActiveHeading() {
            const headingElements = requirementsContent.querySelectorAll('h3');
            // Hanya ambil tautan heading, exclude tombol
            const navLinks = requirementsNavList.querySelectorAll('a'); 
            
            navLinks.forEach(link => link.classList.remove('active-heading'));

            let activeLinkFound = false;
            headingElements.forEach((heading, index) => {
                const rect = heading.getBoundingClientRect();
                // Jika heading terlihat di viewport atau sudah melewati bagian atas
                // Sesuaikan 'offset' agar highlighting lebih akurat saat di-scroll
                const offset = 100; // Misalnya, 100px dari atas viewport
                if (rect.top <= offset && rect.bottom >= offset) {
                    const correspondingNavLink = requirementsNavList.querySelector(`a[href="#${heading.id}"]`);
                    if (correspondingNavLink) {
                        correspondingNavLink.classList.add('active-heading');
                        activeLinkFound = true;
                    }
                }
            });

            // Fallback: Jika tidak ada heading yang di-highlight (misal, user di bagian paling bawah), highlight yang terakhir
            if (!activeLinkFound && headingElements.length > 0) {
                const lastHeading = headingElements[headingElements.length - 1];
                const lastNavLink = requirementsNavList.querySelector(`a[href="#${lastHeading.id}"]`);
                if (lastNavLink) {
                     // Check if scroll is at the very bottom or near the bottom
                    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) { // 50px buffer
                        lastNavLink.classList.add('active-heading');
                    } else if (headingElements[0].getBoundingClientRect().top > (window.innerHeight / 2) && window.scrollY < (window.innerHeight / 2)) {
                        // If scrolled to top and first heading is visible, highlight first
                         const firstNavLink = requirementsNavList.querySelector(`a[href="#${headingElements[0].id}"]`);
                         if(firstNavLink) firstNavLink.classList.add('active-heading');
                    }
                }
            }
        }


        /* ========================================================= */
        /* Event Listeners */
        /* ========================================================= */
        // Tangani perubahan lokasi saat tombol back/forward browser digunakan
        window.addEventListener('hashchange', handleLocation);
        window.addEventListener('scroll', () => {
            if (!exportRequirementsPage.classList.contains('hidden-page')) {
                highlightActiveHeading();
            }
        });

        // Panggil handleLocation saat halaman pertama kali dimuat
        document.addEventListener('DOMContentLoaded', () => {
            if (!window.location.hash) {
                window.location.hash = '#/';
            } else {
                handleLocation();
            }

            // Event listeners untuk dropdown negara
            toggleNegaraDropdown.addEventListener('click', (event) => {
                event.stopPropagation(); // Mencegah event click menyebar ke window
                negaraDropdownContent.classList.toggle('show');
                if (negaraDropdownContent.classList.contains('show')) {
                    populateNegaraDropdown(inputNegara.value);
                }
                produkDropdownContent.classList.remove('show'); // Tutup dropdown produk jika terbuka
            });

            inputNegara.addEventListener('input', () => {
                populateNegaraDropdown(inputNegara.value);
                negaraDropdownContent.classList.add('show');
            });
            inputNegara.addEventListener('focus', () => {
                populateNegaraDropdown(inputNegara.value);
                negaraDropdownContent.classList.add('show');
                produkDropdownContent.classList.remove('show'); // Tutup dropdown negara jika terbuka
            });


            // Event listeners untuk dropdown produk
            toggleProdukDropdown.addEventListener('click', (event) => {
                event.stopPropagation(); // Mencegah event click menyebar ke window
                produkDropdownContent.classList.toggle('show');
                if (produkDropdownContent.classList.contains('show')) {
                    populateProdukDropdown(inputProduk.value);
                }
                negaraDropdownContent.classList.remove('show'); // Tutup dropdown negara jika terbuka
            });

            inputProduk.addEventListener('input', () => {
                populateProdukDropdown(inputProduk.value);
                produkDropdownContent.classList.add('show');
            });
            inputProduk.addEventListener('focus', () => {
                populateProdukDropdown(inputProduk.value);
                produkDropdownContent.classList.add('show');
                negaraDropdownContent.classList.remove('show'); // Tutup dropdown negara jika terbuka
            });

            // Tutup dropdown ketika mengklik di luar
            window.addEventListener('click', (event) => {
                if (!negaraDropdownContent.contains(event.target) && event.target !== inputNegara && event.target !== toggleNegaraDropdown) {
                    negaraDropdownContent.classList.remove('show');
                }
                if (!produkDropdownContent.contains(event.target) && event.target !== inputProduk && event.target !== toggleProdukDropdown) {
                    produkDropdownContent.classList.remove('show');
                }
            });

            // Event listener untuk tombol "Cari Syarat Mutu"
            tombolCari.addEventListener('click', performSearch);


            // Breadcrumbs - Sekarang menggunakan navigateTo dengan hash
            if (breadcrumbHomeNegara) {
                breadcrumbHomeNegara.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/'); });
            }
            if (breadcrumbHomeProduct) {
                breadcrumbHomeProduct.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/'); });
            }
            if (breadcrumbNegaraProduct) {
                breadcrumbNegaraProduct.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan'); });
            }
            if (breadcrumbHomeReq) {
                breadcrumbHomeReq.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/'); });
            }
            if (breadcrumbNegaraReq) {
                breadcrumbNegaraReq.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan'); });
            }
            if (breadcrumbProdukReq) {
                breadcrumbProdukReq.addEventListener('click', (event) => {
                    event.preventDefault();
                    const currentHash = window.location.hash;
                    if (currentHash.includes('/persyaratan/')) {
                        const parts = currentHash.split('/');
                        if (parts.length >= 3) {
                            const countrySlug = parts[2];
                            navigateTo(`#/negara-tujuan/${countrySlug}`);
                        } else {
                            navigateTo('#/produk-ekspor');
                        }
                    }
                });
            }
            if (breadcrumbHomeProdukList) {
                breadcrumbHomeProdukList.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/'); });
            }
            if (breadcrumbHomeProductCountries) {
                breadcrumbHomeProductCountries.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/'); });
            }
            if (breadcrumbProdukListProductCountries) {
                breadcrumbProdukListProductCountries.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/produk-ekspor'); });
            }

            // Filter wilayah
            if (filterSemuaNegara) filterSemuaNegara.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan', { region: 'Semua Negara' }); });
            if (filterAsia) filterAsia.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan', { region: 'Asia' }); });
            if (filterUniEropa) filterUniEropa.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan', { region: 'Uni Eropa' }); });
            if (filterGcc) filterGcc.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan', { region: 'GCC (Arab Teluk)' }); });
            if (filterUee) filterUee.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan', { region: 'UEE (Eurasia)' }); });
            if (filterLainnya) filterLainnya.addEventListener('click', (event) => { event.preventDefault(); navigateTo('#/negara-tujuan', { region: 'Lainnya' }); });

        });
