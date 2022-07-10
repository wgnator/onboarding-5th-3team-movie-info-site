export class HttpRequest {
  constructor(service) {
    this.service = service;
  }
  async get(url, callback) {
    let response;
    await this.service.get(url).then((_response) => {
      if (callback) return callback(_response);
      response = _response;
    });
    return response;
  }
  post(url, data) {
    this.service.post(url, data);
  }
  patch(url, data) {
    this.service.patch(url, data);
  }
  delete(url) {
    this.service.delete(url);
  }
}
