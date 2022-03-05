/* eslint-disable no-fallthrough */
import axios from 'axios';

// cors対応
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;

export const baseAxios = createAxiosInstance();
function createAxiosInstance(){
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
    });
     // リクエスト設定
    axiosInstance.interceptors.request.use((request)=>{
        return request;
    })

    // interceptors.response.use で返信時に引数に入れた関数が動作する
    axiosInstance.interceptors.response.use(
      // 通信成功時処理。そのまま返却
      (response) => response,
      // 第二引数は通信失敗時処理
      (error) => {
        switch(error.response?.status) {
          case 401:
            console.log(error.response.data);
            break;
          case 404:
            console.log('URL先なし');
          case 500:
            console.log('サーバーエラー');
          default:
            return Promise.reject(error)
        }
      }
    )

    // interceptor で共通処理を追加した通信機能を返す。
    return axiosInstance;
}

export default baseAxios;