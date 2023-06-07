import axios, { AxiosResponse } from "axios";
import { HttpPostClient } from "@/data/protocols/http/httpPostClient";
import { HttpGetClient } from "@/data/protocols/http/httpGetClient";

export class AxiosHttpClient implements HttpPostClient {
  async post(params: HttpPostClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.post(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return axiosResponse;
  }
}

export class AxiosHttpClientGet implements HttpGetClient {
  async get(params: HttpGetClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.get(params.url, {
        headers: params.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return axiosResponse;
  }
}