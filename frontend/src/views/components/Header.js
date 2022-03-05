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
    <header>
      <nav class="navbar navbar-expand-md navbar-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="index.html"><img src="img/logo-wt.png" alt="あなたのサイト名"/></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button>

              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul class="navbar-nav">
                      <li class="nav-item active"><a href="#sec1" class="nav-link">menu</a></li>
                      <li class="nav-item"><a href="#sec2" class="nav-link">menu</a></li>
                      <li class="nav-item"><a href="#sec3" class="nav-link">menu</a></li>
                      <li class="nav-item"><a href="#sec4" class="nav-link">menu</a></li>
                      <li class="nav-item"><a href="#sec5" class="nav-link">menu</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    </header>
  )
}