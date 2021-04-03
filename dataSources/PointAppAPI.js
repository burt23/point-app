const { RESTDataSource } = require("apollo-datasource-rest");

const BASE_URL = require("../config");

class PointAppAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  async getUser(id) {
    return this.get(`user/${id}`);
  }

  async getUsers(limit = 10) {
    const data = await this.get("user", {
      per_page: limit,
      //   order_by: "most_viewed", // TODO: explore filtering options
    });
    return data.results;
  }
}

module.exports = PointAppAPI;
