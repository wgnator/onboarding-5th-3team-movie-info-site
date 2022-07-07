export class HttpRequest {
  constructor(service) {
    this.service = service;
  }
  get(url, callback) {
    let response;
    this.service.get(url).then((_response) => {
      if (callback) callback(_response);
      else response = _response;
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
