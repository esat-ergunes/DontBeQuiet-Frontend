import * as Util from "../index";
import axios from "axios";

class Api {
  static postAxios(route, formData, config) {
    return this.axiosPost(route, formData, config);
  }

  static getAxios(route, formData, config) {
    return this.axiosGet(route, formData, config);
  }

  static putAxios(route, params, config) {
    return this.axiosPut(route, params, config);
  }

  static deleteAxios(route, params, config) {
    return this.axiosDelete(route, params, config);
  }
  static patchAxios(route, params, config) {
    return this.axiosPatch(route, params, config);
  }

  static postRequest = async (endpoint, formData, token) => {
    const url = `${Util.baseURL}${endpoint}`;
    console.log("[URL API]", url, formData, token);
    if (token != undefined && token != null) {
      // with header request
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("[post-axios-header]", options);
      let configration = Object.assign(options);
      return axios
        .post(url, formData, configration)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response;
        })
        .catch((error) => {
          console.log(
            "FAILURE!! with header",
            error.response,
            "error  ===>>>",
            error
          );
          return error.response;
        });
    } else {
      // without header request
      return axios
        .post(url, formData)
        .then((response) => {
          console.log("SUCCESS!! without header", response);
          return response;
        })
        .catch((error) => {
          console.log("FAILURE!! without header", error);
          return error.status;
        });
    }
  };
  // ,
  //          {
  //         headers: {
  //           // Accept: "/",
  //           "Content-Type": "application/json",
  //           // 'Access-Control-Allow-Origin': '*',
  //         },
  //       }

  static putRequest = async (endpoint, _id, token) => {
    const url = `${Util.baseURL}${endpoint}${_id}`;
    console.log("[URL API]", url, _id, token);
    if (token != undefined && token != null) {
      // with header request
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("[put-axios-header]", options);
      let configration = Object.assign(options);
      return axios
        .put(url, {}, configration)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response;
        })
        .catch((error) => {
          console.log(
            "FAILURE!! with header",
            error.response,
            "error  ===>>>",
            error
          );
          return error.response;
        });
    } else {
      // without header request
      return axios
        .put(url, {
          headers: {
            // Accept: "/",
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*',
          },
        })
        .then((response) => {
          console.log("SUCCESS!! without header", response);
          return response;
        })
        .catch((error) => {
          console.log("FAILURE!! without header", error);
          return error.status;
        });
    }
  };

  static axiosPost = async (endpoint, formData, config) => {
    const url = `${Util.baseURL}${endpoint}`;
    console.log("[URL API]", url, formData, config);
    return axios
      .post(url, formData, config)
      .then((response) => {
        console.log("SUCCESS!!", response);
        return response;
      })
      .catch((error) => {
        console.log("FAILURE!!", error);
        return error;
      });
  };

  static axiosGet = async (endpoint, config) => {
    console.log("[get-axios-call]", endpoint, config);
    let url = `${Util.baseURL}${endpoint}`;
    console.log("[URL API]", url);

    if (config != undefined && config != null) {
      // with header request
      let options = {
        headers: {
          Authorization: `Bearer ${config}`,
        },
      };
      console.log("[get-axios-header]", options);
      let configration = Object.assign(options);
      return axios
        .get(url, configration)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    } else {
      // without header request
      return axios
        .get(url, {
          headers: {
            // Accept: "/",
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*',
          },
        })
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    }
  };
  static getAxiosReq = async (endpoint, id, config) => {
    console.log("[get-axios-call]", endpoint, config, id);
    let url = `${Util.baseURL}${endpoint}${id}`;
    console.log("[URL API]", url);

    if (config != undefined && config != null) {
      // with header request
      let options = {
        headers: {
          Authorization: `Bearer ${config}`,
        },
      };
      console.log("[get-axios-header]", options);
      let configration = Object.assign(options);
      return axios
        .get(url, configration)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    } else {
      // without header request
      return axios
        .get(url, {
          headers: {
            // Accept: "/",
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*',
          },
        })
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    }
  };

  static axiosDelete = async (endpoint, formData, config) => {
    console.log("[delete-axios-call]", endpoint, formData, config);
    let url = `${Util.baseURL}${endpoint}`;
    console.log("[URL API]", url);

    if (config) {
      // with header request
      let options = {
        headers: {
          Authorization: `Bearer ${config.token}`,
        },
      };
      console.log("[delete-axios-header]", options);
      let configration = Object.assign(options);
      return axios
        .delete(url, formData, configration)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response.data;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    } else {
      // without header requestcd
      return axios
        .delete(url, formData)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response.data;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    }
  };

  static axiosPut = async (endpoint, formData, config) => {
    return fetch(`${Util.baseURL}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJOSN) => {
        console.log("SUCCESS!!", responseJOSN);
        return responseJOSN;
      })
      .catch((error) => {
        console.error("Error response:");
        console.log("FAILURE!!", error);
        console.error(error.response.data); // ***
        console.error(error.response.status); // ***
        console.error(error.response.headers); // ***
        return error;
      });
  };
  static axiosPatch = async (endpoint, formData, token) => {
    console.log("[delete-axios-call]", endpoint, formData, token);
    let url = `${Util.baseURL}${endpoint}`;
    console.log("[URL API]", url);

    if (token) {
      // with header request
      let options = {
        headers: {
          Authorization: `${token}`,
        },
      };
      console.log("[delete-axios-header]", options);
      let configration = Object.assign(options);
      return axios
        .patch(url, formData, configration)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    } else {
      // without header request
      return axios
        .patch(url, formData)
        .then((response) => {
          console.log("SUCCESS!!", response);
          return response.data;
        })
        .catch((error) => {
          console.log("FAILURE!!", error);
          return error;
        });
    }
  };
}

export default Api;
