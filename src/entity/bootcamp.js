class Bootcamp {
  constructor(name, description, bootcampUrl, imageUrl, startDate, endDate, provider, istatus) {
    this.name = name;
    this.description = description;
    this.bootcampUrl = bootcampUrl;
    this.imageUrl = imageUrl;
    this.startDate = startDate;
    this.endDate = endDate;
    this.provider = provider;
    this.istatus = istatus;
  }
}

const bootcampsData = async () => {
  // Basit bir örnek API
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        {
          "name": "Advanced Solana Bootcamp",
          "description": "Description for Advanced Solana Bootcamp",
          "bootcampUrl": "https://www.patika.dev/bootcamp/solana-acceleration-bootcamp",
          "imageUrl": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/659e3e70ae94d60be79bd925_Advanced%20Solana%20Bootcamp%20yatay.png",
          "startDate": "29/1/2024",
          "endDate": "3/3/2024",
          "provider": "Patika",
          "istatus": "Active"
        },
        {
          "name": "Gusto & RemoteTeam Node.js Bootcamp",
          "description": "Description for Gusto & RemoteTeam Node.js Bootcamp",
          "bootcampUrl": "https://www.patika.dev/programlar/gusto-remoteteam-node-js-bootcamp",
          "imageUrl": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6193e6a9465e0462559cc0e8_remoteteam%20tw_v0.3.png",
          "startDate": "18/12/2021",
          "endDate": "6/2/2022",
          "provider": "Patika",
          "istatus": "Inactive"
        },
        // Ek bootcamp .
      ];
      resolve(data);
    }, 1000);
  });
};

// Bootcamp verilerini al ve bootcamp nesnelerini oluştur
bootcampsData()
  .then((data) => {
    const bootcamps = data.map((bootcampData) => new Bootcamp(
      bootcampData.name,
      bootcampData.description,
      bootcampData.bootcampUrl,
      bootcampData.imageUrl,
      bootcampData.startDate,
      bootcampData.endDate,
      bootcampData.provider,
      bootcampData.istatus
    ));

    //  bootcamp'ın özelliklerini yazdır
    console.log(bootcamps[0]);
  })
  .catch((error) => console.error(error));
