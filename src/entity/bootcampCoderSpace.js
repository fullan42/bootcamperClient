// Bootcamp.js
class BootcampCoderSpace {
  constructor(name, description, website, imageUrl, startDate, endDate, location, status) {
    this.name = name;
    this.description = description;
    this.website = website;
    this.imageUrl = imageUrl;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.status = status;
  }

  static createFromObject(data) {
    try {
      const { link, name, img_url, date, place } = data;
      const [startDateString, endDateString] = date.split(' - ');
      const startDate = new Date(startDateString.trim()).toISOString();
      const endDate = new Date(endDateString.trim()).toISOString();
      const cleanedPlace = place.replace(/🌍/g, '').trim();

      const bootcamp = new BootcampCoderSpace(
        name,
        "",
        link,
        img_url,
        startDate,
        endDate,
        cleanedPlace,
        "Active"
      );

      return bootcamp;
    } catch (error) {
      console.error("Error creating Bootcamp:", error);
      return null;
    }
  }
}

export default BootcampCoderSpace;
