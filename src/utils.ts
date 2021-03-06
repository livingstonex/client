import axios from 'axios';

const request: any = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    timeout: 150000, // 2 Minutes + 
  });

export const callApi = (endpoint: string, data = {}, method = 'get') => {
    method = ['get', 'post', 'delete'].includes(method.toLowerCase()) ? method.toLowerCase() : 'post';
    return new Promise((resolve, reject) => {
      const sendData = { ...data };
      request[method](endpoint, sendData)
        .then((res: any) => {
          if (res.data.error) {
            reject(res.data.error);
          }

          resolve(res.data)
        })
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

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', options as any).replace('GMT', '').replace('T', "");

export const formatTime = (time: string) => {
  const dateObject = new Date(time);

  const formatedTime = dateObject.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return formatedTime;
};

