export interface ProductText {
  name: string;
  desc: string;
}

export interface TitledText {
  title: string;
  desc: string;
}

export interface Dict {
  gate: {
    heading: string;
    subheading: string;
  };
  nav: {
    beranda: string;
    tentang: string;
    produk: string;
    galeri: string;
    keunggulan: string;
    klien: string;
    kontak: string;
  };
  header: {
    whatsapp: string;
    menu: string;
  };
  hero: {
    badge: string;
    title: string;
    desc: string;
    ctaConsult: string;
    ctaCatalog: string;
    stats: { k: string; v: string }[];
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionItems: string[];
    valuesBadge: string;
    valuesTitle: string;
    values: TitledText[];
  };
  products: {
    badge: string;
    title: string;
    desc: string;
    best: string;
    cta: string;
    items: ProductText[];
  };
  gallery: {
    badge: string;
    title: string;
    desc: string;
    close: string;
    prev: string;
    next: string;
  };
  videos: {
    badge: string;
    title: string;
    desc: string;
  };
  advantages: {
    badge: string;
    title: string;
    desc: string;
    cta: string;
    items: TitledText[];
  };
  clients: {
    badge: string;
    title: string;
    desc: string;
  };
  social: {
    badge: string;
    title: string;
    desc: string;
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    whatsapp: string;
    whatsappSales: string;
    email: string;
    address: string;
    addressValue: string;
    formTitle: string;
    formDesc: string;
    nama: string;
    namaPlaceholder: string;
    email2: string;
    emailPlaceholder: string;
    pesan: string;
    pesanPlaceholder: string;
    kirim: string;
    toastSuccess: string;
    waMessage: string;
    waSariMessage: string;
    formGreeting: string;
  };
  footer: {
    copyright: string;
  };
  waFloating: string;
}

export const resources: Record<LangCode, { translation: Dict }> = {
  id: {
    translation: {
      gate: {
        heading: "Pilih Bahasa Anda",
        subheading: "Silakan pilih bahasa untuk melanjutkan ke website HTH Plastik.",
      },
      nav: {
        beranda: "Beranda",
        tentang: "Tentang Kami",
        produk: "Produk",
        galeri: "Galeri",
        keunggulan: "Keunggulan",
        klien: "Klien",
        kontak: "Kontak",
      },
      header: { whatsapp: "WhatsApp", menu: "Menu" },
      hero: {
        badge: "PT HTH Sinergi Intranusa · Berdiri 2024",
        title: "Solusi <0>Kemasan Plastik</0> Berkualitas untuk Industri Anda",
        desc: "Supplier terpercaya biji plastik, kantong kresek, kantong sampah, plastik mulsa dan lainnya. Kami menghubungkan produksi, distribusi, dan daur ulang dalam satu ekosistem berkelanjutan.",
        ctaConsult: "Konsultasi Gratis",
        ctaCatalog: "Download Katalog",
        stats: [
          { k: "12+", v: "Kategori Produk" },
          { k: "8+", v: "Klien Terpercaya" },
          { k: "100%", v: "Komitmen Mutu" },
        ],
      },
      about: {
        badge: "Tentang Kami",
        title: "Menghubungkan <0>Kualitas</0> dan<1> Keberlanjutan</1>",
        p1: "<0>PT HTH Sinergi Intranusa</0> berdiri pada tahun 2024 sebagai perusahaan <1>general supply of plastic product</1>. Kami bergerak di produksi, distribusi, serta daur ulang biji plastik, kantong kresek, dan kemasan industri.",
        p2: "Dengan pendekatan ekonomi sirkular, kami hadir sebagai partner strategis yang menghadirkan produk plastik bermutu tanpa mengorbankan tanggung jawab terhadap lingkungan.",
        visionTitle: "Visi",
        visionDesc:
          "Menjadi perusahaan general supply plastik terkemuka di Indonesia yang inovatif, terpercaya, dan berkelanjutan.",
        missionTitle: "Misi",
        missionItems: [
          "Produk berkualitas & layanan cepat",
          "Inovasi daur ulang untuk ekonomi sirkular",
          "Kemitraan jangka panjang",
        ],
        valuesBadge: "Nilai Perusahaan",
        valuesTitle: "Landasan Kami Bekerja",
        values: [
          {
            title: "Integritas",
            desc: "Kami menjunjung kejujuran dan transparansi dalam setiap kerja sama.",
          },
          {
            title: "Inovasi",
            desc: "Terus berinovasi menghadirkan solusi kemasan yang lebih baik dan berkelanjutan.",
          },
          {
            title: "Kualitas",
            desc: "Setiap produk melewati kontrol mutu ketat untuk hasil yang konsisten.",
          },
          {
            title: "Kolaborasi",
            desc: "Kemitraan jangka panjang berbasis pertumbuhan dan kepercayaan bersama.",
          },
        ],
      },
      products: {
        badge: "Produk Kami",
        title: "Rangkaian Solusi Plastik Industri",
        desc: "Dari bahan baku hingga kemasan siap pakai — sesuai kebutuhan bisnis Anda.",
        best: "Best Seller",
        cta: "Tanya harga",
        items: [
          {
            name: "Biji Plastik Recycle",
            desc: "Bahan baku daur ulang berkualitas untuk industri ramah lingkungan.",
          },
          { name: "Biji Plastik Original", desc: "Bahan baku murni untuk produk plastik premium." },
          {
            name: "Kantong Kresek",
            desc: "Berbagai ukuran & warna untuk kebutuhan retail dan grosir.",
          },
          {
            name: "Kantong Sampah Hitam",
            desc: "Tebal, kuat, tahan robek untuk kebutuhan komersial.",
          },
          {
            name: "Kantong Sampah Medis",
            desc: "Sesuai standar rumah sakit dan fasilitas kesehatan.",
          },
          {
            name: "Plastik Mulsa",
            desc: "Meningkatkan produktivitas pertanian dan menjaga kelembaban tanah.",
          },
          { name: "Pagar Sawah", desc: "Perlindungan tanaman dari hama dengan bahan tahan cuaca." },
          { name: "Plastik Es", desc: "Food grade untuk kemasan es batu dan minuman." },
          { name: "Polybag", desc: "Media tanam ideal untuk pembibitan dan hortikultura." },
          { name: "Lakban", desc: "Perekat kuat untuk kebutuhan packing dan pengiriman barang." },
          {
            name: "Bubble Wrap",
            desc: "Pelindung ekstra untuk barang pecah belah saat pengiriman.",
          },
          {
            name: "Alat Tulis Kantor (Kertas HVS)",
            desc: "Kertas HVS berkualitas untuk kebutuhan kantor Anda.",
          },
        ],
      },
      gallery: {
        badge: "Galeri",
        title: "Dokumentasi Produksi & Produk",
        desc: "Cuplikan aktivitas produksi, gudang, dan produk HTH Plastik.",
        close: "Tutup",
        prev: "Sebelumnya",
        next: "Berikutnya",
      },
      videos: {
        badge: "Video",
        title: "Video Produksi",
        desc: "Lihat langsung proses produksi dan fasilitas HTH Plastik.",
      },
      advantages: {
        badge: "Kenapa HTH Plastik",
        title: "Empat Alasan Mitra Kami <0>Kembali Lagi</0>",
        desc: "Kami tidak hanya menjual plastik — kami memberikan solusi kemasan yang efisien, andal, dan berorientasi jangka panjang.",
        cta: "Diskusi kebutuhan Anda",
        items: [
          {
            title: "Kualitas Terjamin",
            desc: "Bahan baku terpilih dengan proses produksi terstandar.",
          },
          {
            title: "Harga Kompetitif",
            desc: "Produksi mandiri memungkinkan harga terbaik di kelasnya.",
          },
          {
            title: "Fleksibilitas Produksi",
            desc: "Custom ukuran, ketebalan, warna, dan sablon sesuai kebutuhan.",
          },
          {
            title: "Tim Profesional",
            desc: "Didukung tim berpengalaman & layanan responsif setiap hari.",
          },
        ],
      },
      clients: {
        badge: "Klien Kami",
        title: "Dipercaya oleh <0>Perusahaan Terkemuka</0>",
        desc: "Kolaborasi kami mencakup manufaktur, kesehatan, agrikultur, hingga logistik.",
      },
      social: {
        badge: "Media Sosial",
        title: "Terhubung dengan Kami",
        desc: "Ikuti kabar dan produk terbaru HTH Plastik.",
      },
      contact: {
        badge: "Kontak",
        title: "Mari Bicara",
        desc: "Konsultasikan kebutuhan kemasan plastik Anda. Tim kami siap merespons dengan cepat.",
        whatsapp: "WhatsApp",
        whatsappSales: "WhatsApp Lainnya",
        email: "Email",
        address: "Alamat",
        addressValue: "Ruko Rose Garden 1 No. 51, Grand Galaxy, Jakasetia, Bekasi Selatan",
        formTitle: "Kirim Pesan",
        formDesc: "Isi form berikut — kami akan menghubungi Anda melalui WhatsApp.",
        nama: "Nama",
        namaPlaceholder: "Nama Anda",
        email2: "Email",
        emailPlaceholder: "nama@perusahaan.com",
        pesan: "Pesan",
        pesanPlaceholder: "Ceritakan kebutuhan produk Anda…",
        kirim: "Kirim Pesan",
        toastSuccess: "Terima kasih! Kami akan segera menghubungi Anda.",
        waMessage: "Halo HTH Plastik, saya ingin konsultasi produk plastik.",
        waSariMessage: "Halo Sari, saya ingin konsultasi produk plastik.",
        formGreeting: "Halo HTH Plastik,",
      },
      footer: { copyright: "PT HTH Sinergi Intranusa. Solusi Kemasan Anda." },
      waFloating: "Chat WhatsApp",
    },
  },
  en: {
    translation: {
      gate: {
        heading: "Choose Your Language",
        subheading: "Please select a language to continue to the HTH Plastik website.",
      },
      nav: {
        beranda: "Home",
        tentang: "About Us",
        produk: "Products",
        galeri: "Gallery",
        keunggulan: "Advantages",
        klien: "Clients",
        kontak: "Contact",
      },
      header: { whatsapp: "WhatsApp", menu: "Menu" },
      hero: {
        badge: "PT HTH Sinergi Intranusa · Founded 2024",
        title: "Quality <0>Plastic Packaging</0> Solutions for Your Industry",
        desc: "A trusted supplier of plastic pellets, plastic bags, garbage bags, mulch film and more. We connect production, distribution, and recycling in one sustainable ecosystem.",
        ctaConsult: "Free Consultation",
        ctaCatalog: "Download Catalog",
        stats: [
          { k: "12+", v: "Product Categories" },
          { k: "8+", v: "Trusted Clients" },
          { k: "100%", v: "Quality Commitment" },
        ],
      },
      about: {
        badge: "About Us",
        title: "Connecting <0>Quality</0> and<1> Sustainability</1>",
        p1: "<0>PT HTH Sinergi Intranusa</0> was founded in 2024 as a <1>general supply of plastic product</1> company. We operate in the production, distribution, and recycling of plastic pellets, plastic bags, and industrial packaging.",
        p2: "With a circular economy approach, we act as a strategic partner delivering quality plastic products without compromising environmental responsibility.",
        visionTitle: "Vision",
        visionDesc:
          "To become a leading general plastic supply company in Indonesia that is innovative, trustworthy, and sustainable.",
        missionTitle: "Mission",
        missionItems: [
          "Quality products & fast service",
          "Recycling innovation for a circular economy",
          "Long-term partnerships",
        ],
        valuesBadge: "Company Values",
        valuesTitle: "The Foundation of Our Work",
        values: [
          { title: "Integrity", desc: "We uphold honesty and transparency in every partnership." },
          {
            title: "Innovation",
            desc: "Continuously innovating to deliver better, more sustainable packaging solutions.",
          },
          {
            title: "Quality",
            desc: "Every product goes through strict quality control for consistent results.",
          },
          {
            title: "Collaboration",
            desc: "Long-term partnerships built on growth and mutual trust.",
          },
        ],
      },
      products: {
        badge: "Our Products",
        title: "A Full Range of Industrial Plastic Solutions",
        desc: "From raw materials to ready-to-use packaging — tailored to your business needs.",
        best: "Best Seller",
        cta: "Ask for price",
        items: [
          {
            name: "Recycled Plastic Pellets",
            desc: "Quality recycled raw material for eco-friendly industries.",
          },
          {
            name: "Virgin Plastic Pellets",
            desc: "Pure raw material for premium plastic products.",
          },
          { name: "Plastic Bags", desc: "Various sizes & colors for retail and wholesale needs." },
          {
            name: "Black Garbage Bags",
            desc: "Thick, strong, and tear-resistant for commercial use.",
          },
          {
            name: "Medical Waste Bags",
            desc: "Compliant with hospital and healthcare facility standards.",
          },
          {
            name: "Mulch Film",
            desc: "Improves agricultural productivity and retains soil moisture.",
          },
          {
            name: "Field Fencing",
            desc: "Protects crops from pests with weather-resistant material.",
          },
          { name: "Ice Plastic", desc: "Food grade for ice cube and beverage packaging." },
          { name: "Polybag", desc: "Ideal growing medium for seedlings and horticulture." },
          { name: "Packing Tape", desc: "Strong adhesive for packing and shipping needs." },
          { name: "Bubble Wrap", desc: "Extra protection for fragile items during shipping." },
          {
            name: "Office Stationery (HVS Paper)",
            desc: "Quality HVS paper for your office needs.",
          },
        ],
      },
      gallery: {
        badge: "Gallery",
        title: "Production & Product Documentation",
        desc: "Glimpses of production activities, warehouse, and HTH Plastik products.",
        close: "Close",
        prev: "Previous",
        next: "Next",
      },
      videos: {
        badge: "Videos",
        title: "Production Videos",
        desc: "See HTH Plastik's production process and facilities in action.",
      },
      advantages: {
        badge: "Why HTH Plastik",
        title: "Four Reasons Our Partners <0>Come Back</0>",
        desc: "We don't just sell plastic — we deliver packaging solutions that are efficient, reliable, and built for the long term.",
        cta: "Discuss your needs",
        items: [
          {
            title: "Guaranteed Quality",
            desc: "Selected raw materials with a standardized production process.",
          },
          {
            title: "Competitive Prices",
            desc: "In-house production enables the best prices in its class.",
          },
          {
            title: "Production Flexibility",
            desc: "Custom size, thickness, color, and printing to fit your needs.",
          },
          {
            title: "Professional Team",
            desc: "Backed by an experienced team and responsive daily service.",
          },
        ],
      },
      clients: {
        badge: "Our Clients",
        title: "Trusted by <0>Leading Companies</0>",
        desc: "Our collaborations span manufacturing, healthcare, agriculture, and logistics.",
      },
      social: {
        badge: "Social Media",
        title: "Connect With Us",
        desc: "Follow the latest news and products from HTH Plastik.",
      },
      contact: {
        badge: "Contact",
        title: "Let's Talk",
        desc: "Consult your plastic packaging needs. Our team is ready to respond quickly.",
        whatsapp: "WhatsApp",
        whatsappSales: "Other WhatsApp",
        email: "Email",
        address: "Address",
        addressValue: "Ruko Rose Garden 1 No. 51, Grand Galaxy, Jakasetia, South Bekasi",
        formTitle: "Send a Message",
        formDesc: "Fill out the form below — we'll contact you via WhatsApp.",
        nama: "Name",
        namaPlaceholder: "Your name",
        email2: "Email",
        emailPlaceholder: "name@company.com",
        pesan: "Message",
        pesanPlaceholder: "Tell us about your product needs…",
        kirim: "Send Message",
        toastSuccess: "Thank you! We will contact you shortly.",
        waMessage: "Hello HTH Plastik, I would like to consult about plastic products.",
        waSariMessage: "Hello Sari, I would like to consult about plastic products.",
        formGreeting: "Hello HTH Plastik,",
      },
      footer: { copyright: "PT HTH Sinergi Intranusa. Your Packaging Solution." },
      waFloating: "Chat on WhatsApp",
    },
  },
  ar: {
    translation: {
      gate: {
        heading: "اختر لغتك",
        subheading: "يرجى اختيار اللغة للمتابعة إلى موقع HTH Plastik.",
      },
      nav: {
        beranda: "الرئيسية",
        tentang: "من نحن",
        produk: "المنتجات",
        galeri: "معرض الصور",
        keunggulan: "مزايانا",
        klien: "عملاؤنا",
        kontak: "اتصل بنا",
      },
      header: { whatsapp: "واتساب", menu: "القائمة" },
      hero: {
        badge: "PT HTH Sinergi Intranusa · تأسست عام 2024",
        title: "حلول <0>تغليف بلاستيكي</0> عالية الجودة لصناعتك",
        desc: "مورد موثوق لحبيبات البلاستيك وأكياس التسوق وأكياس القمامة وأغشية التغطية الزراعية وغيرها. نربط الإنتاج والتوزيع وإعادة التدوير في منظومة واحدة مستدامة.",
        ctaConsult: "استشارة مجانية",
        ctaCatalog: "تحميل الكتالوج",
        stats: [
          { k: "+12", v: "فئة منتج" },
          { k: "+8", v: "عميل موثوق" },
          { k: "100%", v: "التزام بالجودة" },
        ],
      },
      about: {
        badge: "من نحن",
        title: "نربط بين <0>الجودة</0> و<1>الاستدامة</1>",
        p1: "تأسست <0>PT HTH Sinergi Intranusa</0> عام 2024 كشركة <1>general supply of plastic product</1>. نعمل في إنتاج وتوزيع وإعادة تدوير حبيبات البلاستيك وأكياس التسوق والتغليف الصناعي.",
        p2: "من خلال نهج الاقتصاد الدائري، نحن شريك استراتيجي نقدم منتجات بلاستيكية عالية الجودة دون التفريط في المسؤولية البيئية.",
        visionTitle: "الرؤية",
        visionDesc:
          "أن نصبح شركة رائدة في التوريد العام للبلاستيك في إندونيسيا، مبتكرة وموثوقة ومستدامة.",
        missionTitle: "الرسالة",
        missionItems: [
          "منتجات عالية الجودة وخدمة سريعة",
          "ابتكار في إعادة التدوير من أجل اقتصاد دائري",
          "شراكات طويلة الأمد",
        ],
        valuesBadge: "قيم الشركة",
        valuesTitle: "أساس عملنا",
        values: [
          { title: "النزاهة", desc: "نلتزم بالصدق والشفافية في كل شراكة." },
          {
            title: "الابتكار",
            desc: "نبتكر باستمرار لتقديم حلول تغليف أفضل وأكثر استدامة.",
          },
          { title: "الجودة", desc: "يمر كل منتج بمراقبة جودة صارمة لنتائج متسقة." },
          {
            title: "التعاون",
            desc: "شراكات طويلة الأمد مبنية على النمو والثقة المتبادلة.",
          },
        ],
      },
      products: {
        badge: "منتجاتنا",
        title: "مجموعة متكاملة من حلول البلاستيك الصناعي",
        desc: "من المواد الخام إلى التغليف الجاهز للاستخدام — بما يناسب احتياجات عملك.",
        best: "الأكثر مبيعًا",
        cta: "اسأل عن السعر",
        items: [
          {
            name: "حبيبات بلاستيك معاد تدويرها",
            desc: "مواد خام معاد تدويرها بجودة عالية للصناعات الصديقة للبيئة.",
          },
          { name: "حبيبات بلاستيك أصلية", desc: "مواد خام نقية لمنتجات بلاستيكية فاخرة." },
          {
            name: "أكياس التسوق البلاستيكية",
            desc: "أحجام وألوان متعددة لاحتياجات التجزئة والجملة.",
          },
          { name: "أكياس قمامة سوداء", desc: "سميكة وقوية ومقاومة للتمزق للاستخدام التجاري." },
          { name: "أكياس نفايات طبية", desc: "متوافقة مع معايير المستشفيات والمرافق الصحية." },
          { name: "غشاء تغطية زراعي", desc: "يحسّن إنتاجية الزراعة ويحافظ على رطوبة التربة." },
          { name: "سياج للحقول", desc: "يحمي المحاصيل من الآفات بمواد مقاومة للطقس." },
          { name: "بلاستيك الثلج", desc: "درجة غذائية لتغليف مكعبات الثلج والمشروبات." },
          { name: "بولي باج (أكياس الشتلات)", desc: "وسط زراعة مثالي للشتلات والبستنة." },
          { name: "شريط لاصق (لاكبان)", desc: "لاصق قوي لاحتياجات التغليف والشحن." },
          {
            name: "غلاف بلاستيكي بالفقاعات",
            desc: "حماية إضافية للأغراض القابلة للكسر أثناء الشحن.",
          },
          { name: "قرطاسية مكتبية (ورق HVS)", desc: "ورق HVS عالي الجودة لاحتياجات مكتبك." },
        ],
      },
      gallery: {
        badge: "معرض الصور",
        title: "توثيق الإنتاج والمنتجات",
        desc: "لمحات من أنشطة الإنتاج والمستودع ومنتجات HTH Plastik.",
        close: "إغلاق",
        prev: "السابق",
        next: "التالي",
      },
      videos: {
        badge: "فيديو",
        title: "فيديوهات الإنتاج",
        desc: "شاهد عملية الإنتاج ومرافق HTH Plastik عن قرب.",
      },
      advantages: {
        badge: "لماذا HTH Plastik",
        title: "أربعة أسباب تجعل شركاءنا <0>يعودون دائمًا</0>",
        desc: "نحن لا نبيع البلاستيك فحسب — بل نقدم حلول تغليف فعالة وموثوقة وموجهة للمدى الطويل.",
        cta: "ناقش احتياجاتك",
        items: [
          { title: "جودة مضمونة", desc: "مواد خام مختارة بعملية إنتاج موحدة المعايير." },
          { title: "أسعار تنافسية", desc: "الإنتاج الذاتي يتيح أفضل الأسعار في فئته." },
          {
            title: "مرونة في الإنتاج",
            desc: "تخصيص الحجم والسماكة واللون والطباعة حسب الحاجة.",
          },
          { title: "فريق محترف", desc: "مدعوم بفريق ذي خبرة وخدمة سريعة الاستجابة يوميًا." },
        ],
      },
      clients: {
        badge: "عملاؤنا",
        title: "موثوق به من قبل <0>شركات رائدة</0>",
        desc: "تشمل شراكاتنا قطاعات التصنيع والرعاية الصحية والزراعة والخدمات اللوجستية.",
      },
      social: {
        badge: "وسائل التواصل الاجتماعي",
        title: "تواصل معنا",
        desc: "تابع آخر الأخبار والمنتجات من HTH Plastik.",
      },
      contact: {
        badge: "اتصل بنا",
        title: "لنتحدث",
        desc: "استشرنا بخصوص احتياجاتك من التغليف البلاستيكي. فريقنا جاهز للرد بسرعة.",
        whatsapp: "واتساب",
        whatsappSales: "واتساب آخر",
        email: "البريد الإلكتروني",
        address: "العنوان",
        addressValue: "Ruko Rose Garden 1 No. 51، Grand Galaxy، Jakasetia، بيكاسي الجنوبية",
        formTitle: "أرسل رسالة",
        formDesc: "املأ النموذج أدناه — سنتواصل معك عبر واتساب.",
        nama: "الاسم",
        namaPlaceholder: "اسمك",
        email2: "البريد الإلكتروني",
        emailPlaceholder: "name@company.com",
        pesan: "الرسالة",
        pesanPlaceholder: "أخبرنا عن احتياجاتك من المنتجات…",
        kirim: "إرسال الرسالة",
        toastSuccess: "شكرًا لك! سنتواصل معك قريبًا.",
        waMessage: "مرحبًا HTH Plastik، أرغب في استشارة بخصوص المنتجات البلاستيكية.",
        waSariMessage: "مرحبًا ساري، أرغب في استشارة بخصوص المنتجات البلاستيكية.",
        formGreeting: "مرحبًا HTH Plastik،",
      },
      footer: { copyright: "PT HTH Sinergi Intranusa. حلول التغليف الخاصة بك." },
      waFloating: "الدردشة عبر واتساب",
    },
  },
  zh: {
    translation: {
      gate: {
        heading: "选择您的语言",
        subheading: "请选择语言以继续访问 HTH Plastik 网站。",
      },
      nav: {
        beranda: "首页",
        tentang: "关于我们",
        produk: "产品",
        galeri: "图库",
        keunggulan: "优势",
        klien: "客户",
        kontak: "联系我们",
      },
      header: { whatsapp: "WhatsApp", menu: "菜单" },
      hero: {
        badge: "PT HTH Sinergi Intranusa · 成立于2024年",
        title: "为您的行业提供优质<0>塑料包装</0>解决方案",
        desc: "值得信赖的塑料粒子、塑料袋、垃圾袋、地膜等产品供应商。我们将生产、分销和回收整合为一个可持续发展的生态系统。",
        ctaConsult: "免费咨询",
        ctaCatalog: "下载产品目录",
        stats: [
          { k: "12+", v: "产品类别" },
          { k: "8+", v: "信赖客户" },
          { k: "100%", v: "品质承诺" },
        ],
      },
      about: {
        badge: "关于我们",
        title: "连接<0>品质</0>与<1>可持续发展</1>",
        p1: "<0>PT HTH Sinergi Intranusa</0> 成立于2024年，是一家 <1>general supply of plastic product</1> 公司。我们专注于塑料粒子、塑料袋及工业包装的生产、分销和回收。",
        p2: "秉持循环经济理念，我们作为战略合作伙伴，在提供优质塑料产品的同时，也致力于承担环境责任。",
        visionTitle: "愿景",
        visionDesc: "成为印度尼西亚领先的综合塑料供应企业，兼具创新、可信赖与可持续发展。",
        missionTitle: "使命",
        missionItems: ["优质产品与快捷服务", "以循环经济为导向的回收创新", "建立长期合作伙伴关系"],
        valuesBadge: "企业价值观",
        valuesTitle: "我们工作的基石",
        values: [
          { title: "诚信", desc: "我们在每一次合作中坚持诚实与透明。" },
          { title: "创新", desc: "持续创新，提供更优质、更可持续的包装解决方案。" },
          { title: "品质", desc: "每件产品均经过严格品质管控，确保结果始终如一。" },
          { title: "协作", desc: "基于共同成长与信任，建立长期合作关系。" },
        ],
      },
      products: {
        badge: "我们的产品",
        title: "全方位工业塑料解决方案",
        desc: "从原材料到即用包装 — 满足您的业务需求。",
        best: "畅销产品",
        cta: "询价",
        items: [
          { name: "再生塑料粒子", desc: "优质再生原料，适用于环保产业。" },
          { name: "原生塑料粒子", desc: "纯净原料，适用于高端塑料制品。" },
          { name: "塑料购物袋", desc: "多种尺寸与颜色，满足零售与批发需求。" },
          { name: "黑色垃圾袋", desc: "厚实坚韧、耐撕裂，适用于商业用途。" },
          { name: "医疗废物袋", desc: "符合医院及医疗机构标准。" },
          { name: "地膜", desc: "提高农业生产力并保持土壤水分。" },
          { name: "农田围网", desc: "采用耐候材料，保护农作物免受虫害。" },
          { name: "冰袋", desc: "食品级材质，适用于冰块与饮品包装。" },
          { name: "育苗袋", desc: "理想的育苗与园艺栽培介质。" },
          { name: "胶带", desc: "粘性强，适用于包装与运输需求。" },
          { name: "气泡膜", desc: "运输过程中为易碎品提供额外保护。" },
          { name: "办公文具（HVS纸）", desc: "优质HVS纸张，满足您的办公需求。" },
        ],
      },
      gallery: {
        badge: "图库",
        title: "生产与产品实录",
        desc: "HTH Plastik 生产活动、仓库与产品的实景展示。",
        close: "关闭",
        prev: "上一张",
        next: "下一张",
      },
      videos: {
        badge: "视频",
        title: "生产视频",
        desc: "直观了解 HTH Plastik 的生产流程与设施。",
      },
      advantages: {
        badge: "为何选择 HTH Plastik",
        title: "合作伙伴始终<0>选择回归</0>的四大理由",
        desc: "我们不仅销售塑料产品 — 更提供高效、可靠且着眼长远的包装解决方案。",
        cta: "探讨您的需求",
        items: [
          { title: "品质保证", desc: "精选原料，标准化生产流程。" },
          { title: "价格优势", desc: "自主生产，提供同类产品中最具竞争力的价格。" },
          { title: "生产灵活性", desc: "可根据需求定制尺寸、厚度、颜色与印刷。" },
          { title: "专业团队", desc: "经验丰富的团队，提供每日即时响应服务。" },
        ],
      },
      clients: {
        badge: "我们的客户",
        title: "深受<0>知名企业</0>信赖",
        desc: "我们的合作涵盖制造业、医疗保健、农业及物流等领域。",
      },
      social: {
        badge: "社交媒体",
        title: "与我们联系",
        desc: "关注 HTH Plastik 的最新动态与产品资讯。",
      },
      contact: {
        badge: "联系我们",
        title: "开始对话",
        desc: "咨询您的塑料包装需求，我们的团队将迅速回应。",
        whatsapp: "WhatsApp",
        whatsappSales: "其他WhatsApp",
        email: "电子邮箱",
        address: "地址",
        addressValue: "Ruko Rose Garden 1 No. 51, Grand Galaxy, Jakasetia, Bekasi Selatan",
        formTitle: "发送信息",
        formDesc: "填写以下表单 — 我们将通过WhatsApp与您联系。",
        nama: "姓名",
        namaPlaceholder: "您的姓名",
        email2: "电子邮箱",
        emailPlaceholder: "name@company.com",
        pesan: "留言",
        pesanPlaceholder: "请告诉我们您的产品需求…",
        kirim: "发送信息",
        toastSuccess: "谢谢！我们会尽快与您联系。",
        waMessage: "您好 HTH Plastik，我想咨询塑料产品相关事宜。",
        waSariMessage: "您好 Sari，我想咨询塑料产品相关事宜。",
        formGreeting: "您好 HTH Plastik，",
      },
      footer: { copyright: "PT HTH Sinergi Intranusa. 您的包装解决方案。" },
      waFloating: "WhatsApp 聊天",
    },
  },
};

export type LangCode = "id" | "en" | "ar" | "zh";

export const LANGUAGES: { code: LangCode; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "id", label: "Bahasa Indonesia", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "zh", label: "中文", dir: "ltr" },
];
