const { RESTDataSource } = require("apollo-datasource-rest");

class PointAppAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pointapp.herokuapp.com/";
  }

  async getMovie(id) {
    return this.get(`movies/${id}`);
  }

  async getMostViewedMovies(limit = 10) {
    const data = await this.get("movies", {
      per_page: limit,
      order_by: "most_viewed",
    });
    return data.results;
  }
}

module.exports = PointAppAPI;
