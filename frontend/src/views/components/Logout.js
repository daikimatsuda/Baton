import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';

export default function Logout() {
  const history = useHistory();
  const submit = () => {
  axios.post('/user/logout')
      .then((res) => {
        console.log(res);
      }).catch(console.error);
      history.push("/");
  };
  return (
    <Form className="w-25 text-end" onSubmit={submit}>
      <Button className="btn btn-danger" variant="primary" type="submit">
        ログアウト
      </Button>
    </Form>
  );
}