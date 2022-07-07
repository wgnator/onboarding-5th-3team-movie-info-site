export class HttpRequest {
  constructor(service) {
    this.service = service;
  }
  async get(url, params, callback) {
    const response = await this.service.get(url, params);
    callback(response);
  }
  async patch(id, data) {
    this.service.patch(`/${id}`, data);
  }
}
