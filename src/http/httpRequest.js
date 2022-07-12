export class HttpRequest {
  constructor(service) {
    this.service = service;
  }
  async get(url, callback) {
    return await this.service.get(url).then((_response) => {
      if (callback) callback(_response);
      return _response;
    });
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
