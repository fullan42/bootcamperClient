// src/pages/fakeapi.js

class FakeApi {
  constructor() {
    this.bootcamps = [];
  }

  addBootcamp(bootcamp) {
    this.bootcamps.push(bootcamp);
  }

  getAllBootcamps() {
    return this.bootcamps;
  }
}

// Kullanım örneği:
const fakeApi = new FakeApi();

// İlk Bootcamp
fakeApi.addBootcamp({
  name: "Bootcamp 1",
  description: "Description for Bootcamp 1",
  bootcampUrl: "https://example.com/bootcamp1",
  imageUrl: "https://example.com/image1.jpg",
  startDate: "2024-01-13",
  endDate: "2024-01-20",
  provider: "Provider 1",
  istatus: "Active"
});

// İkinci Bootcamp
fakeApi.addBootcamp({
  name: "Bootcamp 2",
  description: "Description for Bootcamp 2",
  bootcampUrl: "https://example.com/bootcamp2",
  imageUrl: "https://example.com/image2.jpg",
  startDate: "2024-02-01",
  endDate: "2024-02-10",
  provider: "Provider 2",
  istatus: "Inactive"
});

// Bu satırları, page.js dosyanızda kullanarak FakeApi'den bootcamp bilgilerine erişebilirsiniz.
 const allBootcamps = fakeApi.getAllBootcamps();
 console.log(allBootcamps);
