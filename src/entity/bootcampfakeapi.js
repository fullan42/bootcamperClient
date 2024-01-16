// main.js
import BootcampCoderSpace from './bootcampCoderSpace.js';
import FakeAPI from './fakeapi.js';

// Fake API oluştur
const fakeAPI = new FakeAPI();

// Örnek bootcamp oluştur
    const bootcamps = [
        {
      "link": "https://www.patika.dev/bootcamp/solana-acceleration-bootcamp",
      "name": "Advanced Solana Bootcamp ",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/659e3e70ae94d60be79bd925_Advanced%20Solana%20Bootcamp%20yatay.png",
      "date": "29/1/2024 - 3/3/2024",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/programlar/bupa-acibadem-sigorta-fullstack-bootcamp",
      "name": "Bupa Acıbadem Sigorta FullStack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6172c7a6c7f79429d879dd8c_ac%C4%B1badem%20bc%20duyurusu%20tw-1.png",
      "date": "11/12/2021 - 23/1/2022",
      "place": "🌍"
    },

    {
      "link": "https://www.patika.dev/bootcamp/jotform-technical-and-customer-support-bootcamp",
      "name": "Jotform Technical Support and Customer Support Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62289fdd870900689296e14d_Bootcamp%202022%20-%20Linkedin.png",
      "date": "14/5/2022 - 5/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/airties-cloud-aws-devops-bootcamp",
      "name": "Airties Cloud: AWS & DevOps Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/621e1ca75067f7572140c906_a%C4%B1rt%C4%B1es%20tw%20ln.png",
      "date": "16/4/2022 - 12/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/ford-otosan-gelecek-tasarimcilari-dijital-staj-programi",
      "name": "Ford Otosan Gelecek Tasarımcıları Dijital Staj Programı",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6241c46ced761ffcfb42c7d7_Group%20233.png",
      "date": "21/5/2022 - 11/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/smartpulse-full-stack-ve-is-analisti-staj-programlari",
      "name": "smartPulse Full Stack & İş Analisti Staj Programları",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/622611394bb0e9078051b2e7_SmartPulse%201200%20x%20675%203%404x.png",
      "date": "1/5/2022 - 31/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/property-finder-go-bootcamp",
      "name": "Property Finder Go Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62557b44495dbbde48eec9f2_image.png",
      "date": "18/6/2022 - 14/8/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/peak-2d-game-art-workshop",
      "name": "Peak 2D Game Art Workshop",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62304550cb055a0a3a15104d_peak%20g%C3%B6rsel3.png",
      "date": "16/4/2022 - 17/4/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/emlakjet-java-spring-boot-bootcamp",
      "name": "Emlakjet Java Spring Boot Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6238af02680c186a78473fcc_emlakjet%20%20tw%20ln%20(3).png",
      "date": "21/5/2022 - 3/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/mobileaction-java-spring-bootcamp",
      "name": "MobileAction Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/623b1ea0e7084ee7c28bf1e8_Mobileaction%20tw%20ln%20(1).png",
      "date": "28/5/2022 - 3/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/link-bilgisayar-net-bootcamp",
      "name": "Link Bilgisayar .Net Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/623c2621a4c595707bd4d4f9_linkbilgisayar%20tw%20ln%20(2).png",
      "date": "21/5/2022 - 3/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/mildmania-game-development-workshop",
      "name": "MildMania Game Development Workshop",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6245e6981c8fbd6ac1ff7647_Mildmania%20tw%20ln%20(1).png",
      "date": "28/5/2022 - 28/5/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/anadolubank-java-bootcamp",
      "name": "Anadolubank Java Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62417606ca070578c70ee108_anadolubank%20ln.png",
      "date": "4/6/2022 - 31/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/evam-java-bootcamp",
      "name": "Evam Java Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/628e23c085aab480a44741d0_evam%20%20tw%20ln%20(3).png",
      "date": "4/6/2022 - 31/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/vlmedia-backend-development-workshop",
      "name": "VLMedia Backend Development Workshop",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62472f5a133e802b0d991c5e_vlmediatw%20ln%20(2).png",
      "date": "4/6/2022 - 4/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/todeb-java-spring-net-bootcampleri",
      "name": "TÖDEB Java Spring & .Net Bootcampleri",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/625592b3b401cd541f190edb_t%C3%B6deb%20tw%20ln%20(1).png",
      "date": "18/6/2022 - 14/8/2022",
      "place": "🌍 Türkiye"
    },
    {
      "link": "https://www.patika.dev/bootcamp/picus-cyber-talent-academy",
      "name": "Picus Cyber Talent Academy",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6267cf279a7b4aaf42f82df9_Picus%20security%20tw%20v2%20(3).png",
      "date": "18/5/2022 - 12/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/akbank-java-spring-bootcamp",
      "name": "Akbank Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6259949ae9187975713b3e37_akbank%20bc%20tw.png",
      "date": "18/6/2022 - 14/8/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/unlu-co-net-developer-program",
      "name": "ÜNLÜ&Co .Net Developer Programı",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6262b4e1c5fbf26de9302a81_%C3%BCnl%C3%BCco%20bc%20tw%20(1).png",
      "date": "30/5/2022 - 13/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/logo-yazilim-java-spring-bootcamp",
      "name": "Logo Yazılım Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62615b9d39f4e2ec71bc1f87_logoyaz%C4%B1l%C4%B1mjs%20tw%20ln.png",
      "date": "4/6/2022 - 31/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/arvato-net-bootcamp",
      "name": "Arvato .Net Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6266c684341ed472b28f7d00_arvato%20tw%20ln.png",
      "date": "11/6/2022 - 3/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/enuygun-php-bootcamp",
      "name": "Enuygun PHP Backend Developer Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62697ec9a6632a0f1f8e0fca_image%20(4).png",
      "date": "11/6/2022 - 7/8/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/protein-net-developer-bootcamp",
      "name": "Protein .Net Developer Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/626b939c85638f39cdcc9eb3_net-dev-2.png",
      "date": "25/6/2022 - 21/8/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/enuygun-test-automation-bootcamp",
      "name": "Enuygun Test Automation Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/628e02fcb1548471f25b073e_en%20uygun%20qa%20tw%20ln2%20(2).png",
      "date": "18/6/2022 - 14/8/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/interprobe-java-spring-bootcamp",
      "name": "InterProbe Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6283cf1eac7722685dad8249_interprobe%20tw%20ln.png",
      "date": "11/6/2022 - 4/7/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/iyzico-front-end-practicum",
      "name": "iyzico Front-end Practicum",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62972a760c81ea52000199c2_iyzico%20tw%20ln%20(1).png",
      "date": "29/7/2022 - 18/9/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/akbank-react-native-bootcamp",
      "name": "Akbank React Native Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/628f2851b9de5ffed50062d4_akbank%20bc%20tw%20(2).png",
      "date": "30/7/2022 - 11/9/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/web3/ethereum-solidity-practicum",
      "name": "Ethereum & Solidity Practicum",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/629f0cacf9b4bf3e9c0cb64d_62877cc250879d738fd5071c_Group%2021%20(1)-p-800.png",
      "date": "6/6/2022 - 25/7/2022",
      "place": "🌍 Anywhere"
    },
    {
      "link": "https://www.patika.dev/bootcamp/paycore-net-bootcamp",
      "name": "PayCore .Net/.Net Core Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62ac4c8b5b38cbdf98e75272_PayCore_1200x675_Patika%20(2).jpg",
      "date": "6/8/2022 - 18/9/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/akbank-react-bootcamp",
      "name": "Akbank React Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62a8a2c22edf344f5e85892b_akbank%20bc%20tw%20(1).png",
      "date": "27/8/2022 - 9/10/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/fmss-bilisim-android-kotlin-ios-swift-bootcampleri",
      "name": "FMSS Bilişim Android Kotlin & iOS Swift Bootcamp'leri",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62b46400b9090608099af548_fmss%20bc%20tw%20(2).png",
      "date": "20/8/2022 - 2/10/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/vitra-golive-sap-bootcamp",
      "name": "VitrA & GoLive SAP Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/635a712fb272c2fb887f6042_vitra%20bc%20tw.png",
      "date": "29/10/2022 - 11/12/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/protein-vue-js-bootcamp",
      "name": "Protein Vue.js Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62bdaee88774e1b3ee4f1705_Frame%206.png",
      "date": "27/8/2022 - 9/10/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/jotform-technical-support-and-customer-support-bootcamps",
      "name": "Jotform Technical Support and Customer Support Bootcamps",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62dd497c741f3132e314b42e_Bootcamp%20-%20Linkedin.png",
      "date": "10/9/2022 - 2/10/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/pazarama-ios-swift-android-kotlin-bootcampleri",
      "name": "Pazarama iOS Swift & Android Kotlin Bootcamp'leri",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62e812555483dbdfee5386c7_pazarama%20bc%20tw%20(4).png",
      "date": "17/9/2022 - 30/10/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/vakifbank-ios-swift-bootcamp",
      "name": "VakıfBank iOS Swift Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/63075e596ac9483033f61146_VB-BootCamp-250822-1600x900.png",
      "date": "29/10/2022 - 11/12/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/ft-teknoloji-java-spring-boot-practicum",
      "name": "FT Teknoloji Java Spring Boot Practicum",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62fe39ab48a5e050b1227b7e_panaceas%20bc%20tw%20low%20qlt.png",
      "date": "13/9/2022 - 27/9/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/madduck-publishingle-uygulaman-dunyaya-acilsin",
      "name": "Madduck Publishing'le Uygulaman Dünyaya Açılsın",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62f0ddfea664fa863ca074e4_madduck%20ws%20tw-4%20(1).png",
      "date": "8/9/2022 - 12/12/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/programlar/community-gaming-solana-rust-practicum",
      "name": "Community Gaming Solana & Rust Practicum",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62fbc68a4c3d93f2cf37220a_low%20quality.png",
      "date": "8/9/2022 - 14/10/2022",
      "place": "🌍 Turkey, USA"
    },
    {
      "link": "https://www.patika.dev/bootcamp/akbank-web3-practicum",
      "name": "Akbank Web3 Practicum",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62f635d9e5de0ea6c5d8e87c_akbank%20web3%20pc%20tw%20(1).png",
      "date": "13/9/2022 - 10/10/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/fimple-react-practicum",
      "name": "Fimple React Practicum",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62f255469d2d50227f490f90_fimple%20react%20pc%20tw%20(1).png",
      "date": "10/8/2022 - 18/9/2022",
      "place": "🌍 Turkey"
    }
    ];

for (let bootcamp of bootcamps) {
  const bootcampObject = BootcampCoderSpace.createFromObject(bootcamp);
  fakeAPI.addBootcamp(bootcampObject);
}
console.log(fakeAPI.getBootcamps());
