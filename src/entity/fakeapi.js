// FakeAPI.js
class FakeAPI {
  constructor() {
    this.bootcamps = [];
  }

  addBootcamp(bootcamp) {
    this.bootcamps.push(bootcamp);
  }

  getBootcamps() {
    return this.bootcamps;
  }

  getBootcampById(id) {
    return this.bootcamps.find(bootcamp => bootcamp.id === id);
  }

  updateBootcamp(id, updatedBootcamp) {
    const index = this.bootcamps.findIndex(bootcamp => bootcamp.id === id);
    if (index !== -1) {
      this.bootcamps[index] = { ...this.bootcamps[index], ...updatedBootcamp };
      return true;
    }
    return false;
  }

  deleteBootcamp(id) {
    const index = this.bootcamps.findIndex(bootcamp => bootcamp.id === id);
    if (index !== -1) {
      this.bootcamps.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default FakeAPI;
