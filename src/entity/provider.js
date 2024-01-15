class Provider {
  constructor(title, imageSrc, description) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.description = description;
  }
}

class ProviderApi {
  static getSampleData() {
    // Burada aslında bir API'ye bağlanabilirsiniz.
    // Ancak bu örnekte basitçe bir Promise kullanıyorum.
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          new Provider(
            "The Beauty of Nature",
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
          ),
          new Provider(
            "The Beauty of Nature",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
          ),
          new Provider(
            "The Beauty of Nature",
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
            "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
          ),
        ];
        resolve(data);
      }, 1000);
    });
  }
}

// Verileri çek ve yazdır
ProviderApi.getSampleData()
  .then((data) => {
    console.log("Provider Information:");
    data.forEach((provider, index) => {
      console.log(`Provider ${index + 1}:`);
      console.log(`Title: ${provider.title}`);
      console.log(`Image Source: ${provider.imageSrc}`);
      console.log(`Description: ${provider.description}`);
      console.log("------");
    });
  })
  .catch((error) => console.error(error));
