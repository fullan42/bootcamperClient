import Card from "@/pages/BootcampCard";

const BootcampCardList = () => {
    const bootcamps = [
        {
      "link": "https://www.patika.dev/bootcamp/solana-acceleration-bootcamp",
      "name": "Advanced Solana Bootcamp ",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/659e3e70ae94d60be79bd925_Advanced%20Solana%20Bootcamp%20yatay.png",
      "date": "29/1/2024 - 3/3/2024",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/programlar/gusto-remoteteam-node-js-bootcamp",
      "name": "Gusto & RemoteTeam Node.js Bootcamp ",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6193e6a9465e0462559cc0e8_remoteteam%20tw_v0.3.png",
      "date": "18/12/2021 - 6/2/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/web3/near",
      "name": "web3 and NEAR Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/62306978a018edbfc61b845b_near3.png",
      "date": "21/3/2022 - 1/5/2022",
      "place": "🌍 You can join from anywhere!"
    },
    {
      "link": "https://www.patika.dev/bootcamp/garantibbvateknolojibootcamp",
      "name": "Garanti BBVA Teknoloji BeCoder Yazılım Akademisi",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60aa8001d932b62f7aaeb12b_garanti-bbva-teknoloji-becoder-yazilim-akademisi-basvuru-formu-cover.png",
      "date": "22/6/2021 - 13/9/2021",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/programlar/vitra-veri-bilimi-bootcamp",
      "name": "VitrA Veri Bilimi Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60abc3d27dde0ff10f60e4e8_vitra%20tw%20(1).png",
      "date": "6/7/2021 - 29/8/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/bootcampler/innovancebootcamp",
      "name": "Innovance React Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60abc48127bdfb68b663be88_innovance%20tw.png",
      "date": "28/6/2021 - 22/8/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/bootcampler/trendyolbootcamp",
      "name": "Trendyol Front-End Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60abc53bad6c30453b8740eb_Trendyol%20twln%20(1).png",
      "date": "26/6/2021 - 8/8/2021",
      "place": "🌍"
    },
    {
      "link": "https://app.patika.dev/bootcampler/yemeksepetimobilbootcamp",
      "name": "Yemeksepeti Mobil (iOS & Android) Bootcampleri",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60b0ea24c9cfb05e505e4ef7_yemeksepeti%20tw.png",
      "date": "19/6/2021 - 15/8/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/gittigidiyor-java-spring-bootcamp",
      "name": "GittiGidiyor Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60b0fc0e76693cf3743a49c2_gittigidiyor%20tw%20(1).png",
      "date": "7/8/2021 - 19/9/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/ibtech-mobil-bootcamp",
      "name": "IBTech Mobil (Android & iOS) Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60cb5a1c448ccb28513a0425_ibtech%20tw.png",
      "date": "14/8/2021 - 26/9/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/teknasyon-php-bootcamp",
      "name": "Teknasyon PHP Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60d30e93f9b944052522cc5c_php-bootcamp-twitter%20(1).png",
      "date": "14/8/2021 - 26/10/2021",
      "place": "🌍"
    },
    {
      "link": "https://patika.dev/programlar/ciceksepeti-react-bootcamp",
      "name": "ÇiçekSepeti React Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60e6cb88503c1e8d014d2cfd_%C3%A7i%C3%A7eksepeti%20tw%20(2).png",
      "date": "4/9/2021 - 17/10/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/trendyol-data-analytics-bootcamp",
      "name": "Trendyol Data Analytics Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60e802a6ec51c8b35261e694_analytics-bootcamp%20fianljpg.jpg",
      "date": "21/8/2021 - 12/9/2021",
      "place": "🌍"
    },
    {
      "link": "https://patika.dev/programlar/protein-ruby-on-rails-bootcamp",
      "name": "Protein Ruby on Rails Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60e8633a4cacd920d3cc16f1_protel%20protein%20tw.png",
      "date": "11/9/2021 - 24/10/2021",
      "place": "🌍"
    },
    {
      "link": "https://patika.dev/programlar/enerjisa-veri-bilimi-ve-analitigi-bootcamp",
      "name": "Enerjisa Veri Bilimi ve Analitiği Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60ebfb596ff2d02fb2c19a87_Enerjisa-Kodluyoruz-KV-Color.jpg",
      "date": "18/9/2021 - 31/10/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/mnm-teknoloji-php-symfony-bootcamp",
      "name": "MNM Teknoloji PHP Symfony Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/60eee91190c96a9d27b895b0_mnm%20tw.png",
      "date": "11/9/2021 - 7/11/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/hepsiburada-bootcampleri",
      "name": "Hepsiburada Bootcampleri",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6103aa8f4f04f7420345c387_hepsiburada_.jpg",
      "date": "18/9/2021 - 31/10/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/inveon-full-stack-bootcamp",
      "name": "Inveon FullStack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61041a4288944f6239a4bc45_inveon%20tw%20(2).png",
      "date": "16/10/2021 - 5/12/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/alotech-fullstack-bootcamp",
      "name": "AloTech FullStack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/611fabd09058d021ab5a3c36_alotech%20tw%20(1).png",
      "date": "23/11/2021 - 19/12/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/pages/jotform-technical-support-bootcamp",
      "name": "JotForm Technical Support Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/612ee636c30850733bccdd0f_patika-jotform-bootcamp%20(1).png",
      "date": "23/10/2021 - 14/11/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/mnm-teknoloji-php-symfony-bootcamp-2",
      "name": "MNM Teknoloji PHP Symfony Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61309df6afa03bd93a91dd4f_mnm%20tw.png",
      "date": "25/9/2021 - 21/11/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/inavitas-enerji-ve-basarsoft-fullstack-bootcamp",
      "name": "Inavitas ve Başarsoft React Native Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/613b3b54057c4846b8690f7b_edider%20tw%20ln.png",
      "date": "13/11/2021 - 26/12/2021",
      "place": "🌍"
    },
    {
      "link": "https://patika.dev/programlar/getir-node-js-bootcamp",
      "name": "Getir Node.js Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6141f0efb2fbd50473e75a84_getir%20tw%20ln.png",
      "date": "14/11/2021 - 26/12/2021",
      "place": "🌍"
    },
    {
      "link": "https://patika.dev/programlar/reengen-fullstack-bootcamp",
      "name": "Reengen FullStack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6149a63ace6d856778f75363_reengen%20tw.png",
      "date": "16/10/2021 - 5/12/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/ciceksepeti-test-otomasyon-bootcamp",
      "name": "ÇiçekSepeti Test Otomasyon Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/614c64867c1cf9f04a984405_%C3%A7i%C3%A7eksepeti%20tw.png",
      "date": "20/11/2021 - 9/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/inavitas-node-js-bootcamp",
      "name": "Inavitas Node.js Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/615587b706a08178a7b0c4d9_Bootcamp%20Duyuru2.jpg",
      "date": "27/11/2021 - 23/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/pages/plentific-django-bootcamp",
      "name": "Plentific Python/Django Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/615708d3ab436e1cee39611a_plentific%20tw%202.png",
      "date": "23/11/2021 - 9/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/n11-bootcampleri",
      "name": "n11 TalentHub Bootcamp'leri",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/615ac79784eeda23f5f9d65f_TalentHub_1200x675.jpg",
      "date": "4/12/2021 - 23/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/modanisa-fullstack-bootcamp",
      "name": "Modanisa Full Stack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/615d8034f8790b11124b2f7e_modanisa%20tw.png",
      "date": "27/11/2021 - 23/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/gelecek-varlik-fullstack-bootcamp",
      "name": "Gelecek Varlık FullStack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/615d9ed9007b0115c34326b7_image.png",
      "date": "20/11/2021 - 9/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/mobven-ios-switf-bootcamp",
      "name": "Mobven IOS Swift Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61657dfd57647cd4f2c4ef94_mobven%20bc%20duyurusu%20tw%20(1).png",
      "date": "11/12/2021 - 29/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/hyper-casual-mobile-game-art-development-bootcamp",
      "name": "Hyper-Casual Mobile Game Art&Development Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/616d78f0061d9d6deceb536a_oyun%20bc%20duyurusu%20tw%20(1).png",
      "date": "4/12/2021 - 16/1/2022",
      "place": "🌍"
    },
    {
      "link": "http://www.patika.dev/programlar/akbank-fullstack-bootcamp",
      "name": "AKBANK FullStack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/617003e95ad6fc040e0f20ab_akbank%20tw%20ln%20(1).png",
      "date": "18/12/2021 - 6/2/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/payten-java-spring-bootcamp",
      "name": "Payten Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/617296456197bc36b84d4f9b_payten%20tw.png",
      "date": "11/12/2021 - 23/12/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/bupa-acibadem-sigorta-fullstack-bootcamp",
      "name": "Bupa Acıbadem Sigorta FullStack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6172c7a6c7f79429d879dd8c_ac%C4%B1badem%20bc%20duyurusu%20tw-1.png",
      "date": "11/12/2021 - 23/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/pages/peak-level-design-workshop-etkinligi",
      "name": "Peak Level Design Workshop Etkinliği",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/617fa34757d70f56d318d4cc_3D_02%20(1).png",
      "date": "18/12/2021 - 18/12/2021",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/yemeksepeti-python-web-development-bootcamp",
      "name": "Yemeksepeti Python Web Development Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61838fe9e1ba4058be3d175d_yemeksepeti%20tw.png",
      "date": "18/12/2021 - 30/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/pazarama-react-bootcamp",
      "name": " Pazarama React Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61852926f887a5a235bc285c_pazarama1%20tw.png",
      "date": "11/12/2021 - 23/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/sodexo-net-bootcamp",
      "name": "Sodexo .Net Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/618bd59b2f1ae684706b5cc2_sodexo%20tw.png",
      "date": "18/12/2021 - 6/2/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/paycore-javaspring-bootcamp",
      "name": "PayCore Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/619221b006bc576368b25590_Patika_PayCore_1200x675%20(1).jpg",
      "date": "8/1/2022 - 20/1/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/innova-java-spring-net-bootcamps",
      "name": "İnnova Java Spring & .NET Bootcamps",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61924dd1f01854727b78d825_innova%20tw.png",
      "date": "8/1/2022 - 20/2/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/programlar/unlu-co-net-bootcamp",
      "name": "Ünlü & Co .NET Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6193ba06950c876aab3c2fe7_u%CC%88nlu%CC%88%20%26%20co%20tw-01.jpg",
      "date": "8/1/2022 - 27/2/2022",
      "place": "🌍"
    },
    {
      "link": "http://www.patika.dev/bootcamp/lc-waikiki-net-bootcamp",
      "name": "LC Waikiki .NET Bootcamp ",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61f411efc75a1e37d8146e3c_LC%20tw%20ln%20(1).png",
      "date": "2/4/2022 - 14/5/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "http://www.patika.dev/bootcamp/a101-amazon-lambda-dynamodb-bootcamp-node-js-typescript-programi",
      "name": "A101 Amazon Lambda & DynamoDB Bootcamp Node.js & TypeScript Programı",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61a8e37fa6498e5393ceef2c_a101tw%20ln%20(1).png",
      "date": "8/1/2022 - 30/1/2022",
      "place": "🌍"
    },
    {
      "link": "http://www.patika.dev/bootcamp/softtech-java-spring-bootcamp",
      "name": "Softtech Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61a9d03ed3ab31812c40773d_softtech%20tw.png",
      "date": "5/2/2022 - 20/3/2022",
      "place": "🌍"
    },
    {
      "link": "http://www.patika.dev/bootcamp/logo-siber-guvenlik-ve-ag-teknolojileri-full-stack-bootcamp",
      "name": "Logo Siber Güvenlik ve Ağ Teknolojileri Full Stack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61af16e3eec74d3d1ec6c08a_logosgt%20tw%20ln.png",
      "date": "29/1/2022 - 13/3/2022",
      "place": "🌍"
    },
    {
      "link": "http://www.patika.dev/bootcamp/ecozum-react-bootcamp",
      "name": "Eçözüm React Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61b1d53c8a7d495ca1b4b6a3_e%C3%A7%C3%B6z%C3%BCm%20tw%20ln%20(1).png",
      "date": "5/2/2022 - 20/3/2022",
      "place": "🌍"
    },
    {
      "link": "http://www.patika.dev/bootcamp/hepsiemlak-java-spring-bootcamp",
      "name": "hepsiemlak Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61b2142203730b6767a2a3e1_hepsiemlak%20tw%20ln%20(1).png",
      "date": "29/12/2021 - 13/3/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/bootcamp/trendyol-data-analytics-bootcamp-2",
      "name": "Trendyol Data Analytics Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61c06b4045bd8a805d53ba00_Analytics-Bootcamp-Duyuru-Tasar%C4%B1m%C4%B1%20(1).jpg",
      "date": "5/2/2022 - 27/2/2022",
      "place": "🌍"
    },
    {
      "link": "http://www.patika.dev/bootcamp/logo-yazilim-net-core-bootcamp",
      "name": "Logo Yazılım .NET Core Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61c08eae3d5506785d7c3d01_logoyaz%C4%B1l%C4%B1m%20tw%20ln%20(2).png",
      "date": "26/2/2022 - 9/4/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/bootcamp/orion-innovation-turkey-angular-bootcamp",
      "name": "Orion Innovation Turkey Angular Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61c1b0fcfc4d04d6165da2fe_oriontr%20tw%20ln.png",
      "date": "19/2/2022 - 3/4/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/bootcamp/kofana-software-developer-bootcamp",
      "name": "Kofana Software Developer Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61cae0766ecfcd622032846a_kofana%20tw%20ln%20(1).png",
      "date": "19/2/2022 - 19/3/2022",
      "place": "🌍"
    },
    {
      "link": "https://www.patika.dev/bootcamp/picus-security-golang-backend-web-development-bootcamp",
      "name": "Picus Security Golang Backend Web Development Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61cdac9600947153eca8f692_picus%20tw%20ln.png",
      "date": "19/1/2022 - 3/4/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/norma-java-spring-bootcamp",
      "name": "Norma Java Spring Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61e68dafbf3a227dc1abef0a_Bootcamp_linkedin_1200x627_v3.jpg",
      "date": "26/3/2022 - 7/5/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/protein-react-bootcamp",
      "name": "Protein React Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61e1804360c25f79a6774b8d_reactboorcamp-twitter%20(2).png",
      "date": "12/3/2022 - 24/4/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://patika.dev/bootcamp/cubewise-ibm-planning-analytics-bootcamp",
      "name": "Cubewise IBM Planning Analytics Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/61efafa5615db13864b64b47_image.png",
      "date": "9/4/2022 - 30/4/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/arcelik-ios-swift-bootcamp",
      "name": "Arçelik iOS Swift Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6213a813e64d1c5ab8dcda18_ar%C3%A7elik%20ios%20swift%20tw.png",
      "date": "14/5/2022 - 26/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/gelecek-varlik-full-stack-bootcamp",
      "name": "Gelecek Varlık Full Stack Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/620a022eabd4534ac263cb0a_gelecekvarl%C4%B1k%20tw%20ln.png",
      "date": "2/4/2022 - 29/5/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/krakenflex-workshop",
      "name": "KrakenFlex Workshop",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/620a30e8c0017725402268bc_KrakenFlex%20(2).png",
      "date": "7/3/2022 - 12/3/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/lc-waikiki-test-otomasyon-bootcamp",
      "name": "LC Waikiki Test Otomasyon Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/620d17f49323ddb39b451b0c_LC%20qa%20%20ln%20(1).png",
      "date": "16/4/2022 - 12/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/teleperformance-net-bootcamp",
      "name": "Teleperformance .NET Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/620b79de755accbff93a3794_Teleperformance%20tw%20ln.png",
      "date": "14/5/2022 - 25/6/2022",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/bootcamp/google-casual-game-development-game-art-bootcamp",
      "name": "Google Casual Game Development & Game Art Bootcamp",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6256c1fb9790a52976f4efe6_PatikaxGoogleBootcamp%20Logo-08.png",
      "date": "11/6/2022 - 7/8/2022",
      "place": "🌍 Turkey"
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

    return (
        //mx marjin gap dediği cisimler arası boşluk
        // lg bölmelere ayırıyor 3 tane yazdırıyor grid konteiner tanımlıyor
        // diğer ikisi de kücük ekranlar için responsive olmasını sağlıyor

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-4 mx-60">
            {bootcamps.map((bootcamp, index) => (
                <Card key={index} {...bootcamp} />
            ))}
        </div>

    );
};

export default BootcampCardList;