import React, { useState} from "react";
import CommonModal from '../components/CommonModal';
import {Button} from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { setUser } from '../../stores/auth';
import axios from '../../libs/axios';

export default function Login() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const openModal = (e) => {
    setShow(true)
  }

  const handleSubmit = (e) => {
    // submitイベントの本来の動作を止める
    // 指定しないとページがリロードされてしまう。
    e.preventDefault()
    var formData = new FormData();
    formData.append('email', email)
    formData.append('pass', password)
    axios.post('/user/login',formData).then((res) => {
      dispatch(setUser(res.data));
    }).catch((e)=> {
      setError(true);
    })
  }

  return (
    <div className="px-3">
      <Button className="kawkaw_btn" onClick={openModal} >ログイン</Button>
      <CommonModal show={show} setShow={setShow} content={
        <div id="LoginForm">
        <form  onSubmit={handleSubmit}>
          <div className="login_title">
            <p >Sign In</p>
          </div>
          <div className="login_error">
            {error && <p>メールアドレスまたはパスワードが正しくありません。</p>}
          </div>
          <div className="login_input_area">
            <input type="email" className="input_form" placeholder="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input type="password" className="input_form" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <Button type="submit" className="kawkaw_btn w-75 login_btn" >ログイン</Button>
          </div>
        </form>
      </div>
      }/>
    </div>
  );
}
