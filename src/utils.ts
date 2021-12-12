import axios from 'axios';

const request: any = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 150000, // 2 Minutes + 
  });

export const callApi = (endpoint: string, data = {}, method = 'get') => {
    method = ['get', 'post', 'delete'].includes(method.toLowerCase()) ? method.toLowerCase() : 'post';
    return new Promise((resolve, reject) => {
      const sendData = method === 'get' || method === 'delete' ? { params: data } : { ...data };
      request[method](endpoint, sendData)
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          if (err.response) {
            // Response from server w/ error
            return reject(err.response.data);
          } else {
              return reject({
                title: '❌ Server Error',
                message: 'Error communicating with Server.',
              });
          }
        });
    });
  };

