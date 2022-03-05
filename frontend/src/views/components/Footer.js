import React, { Fragment } from "react";
import axios from '../../libs/axios';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Login from '../components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../stores/auth";
import { Link,useHistory } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import {AiFillHome} from "react-icons/ai";

export default function Header({show, setShow, content}) {
  const user = useSelector(state => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  
  const logout = async (e) => {
    await axios.post('/user/logout');
    dispatch(setUser(null));
    // ログアウト後はトップへ遷移
    history.push("/");
  }

  return (
    <footer id="footer">
    <div class="container py-5">
        <div id="footer-contents" class="row mb-5">
            <div class="col-lg-6 col-xl-8">
                <address class="col-lg-10 offset-lg-1 mb-0">
                    <p class="footer-ttl">会社概要</p>
                    <p>株式会社 SAMPLE CORPORATE</p>
                    <p>東京都港区芝8丁目0-0 ビジネスビル000号室</p>
                    <p>Tel: 03-1234-5678</p>
                    <p>Fax: 03-1234-5678</p>
                    <p>Email: info@example.com</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmoddolore magna enim ad minim veniam</p>
                </address>
            </div>
            <div id="footer-news" class="col-lg-6 col-xl-4">
                <div class="col-lg-10 offset-lg-1">
                    <p class="footer-ttl">NEWS</p>
                    <ul>
                        <li><span>2018.07.06</span>ページ更新しました。</li>
                        <li><span>2018.07.06</span>ページ更新しました。</li>
                        <li><span>2018.07.06</span>ページ更新しました。</li>
                        <li><span>2018.07.06</span>ページ更新しました。</li>
                        <li><span>2018.07.06</span>ページ更新しました。</li>
                        <li><span>2018.07.06</span>ページ更新しました。</li>
                    </ul>
                </div>
            </div>
        </div>
       <div id="footer-banner" class="container">
            <div class="row">
                <div class="text-center col-md-4 mb-2">
                    <a href="#" class="d-inline-block">
                      <img src="img/banner1.jpg" alt="バナー1"/>
                    </a>
                </div>
                <div class="text-center col-md-4 mb-2">
                    <a href="#" class="d-inline-block">
                    <img src="img/banner2.jpg" alt="バナー2"/>
                    </a>
                </div>
                <div class="text-center col-md-4 mb-2">
                    <a href="#" class="d-inline-block">
                    <img src="img/banner3.jpg" alt="バナー3"/>
                    </a>
                </div>
            </div>
        </div>

    </div>
    <div id="copyright">
        <p class="text-center mb-0 pt-3 pb-3">&copy;&ensp;あなたのサイト名 All Rights Reserved.</p>
    </div>
</footer>
  )
}