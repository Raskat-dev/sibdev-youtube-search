import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
import "./SavedReq.css";

function SavedReq({ req, params, handleReqDelete, setVisiblePopup, setReqParams, handleExecute }) {

  const history = useHistory();

  function handleChangeClick() {
    setReqParams({...req, ...params });
    setVisiblePopup(true);
  }

  function handleExecuteClick() {
    handleExecute(params).finally(() => history.push("/"));
  }

  function handleDeleteClick() {
    handleReqDelete(req);
  }

  return (
    <li className="saved-req">
      <p className="saved-req__title">{req.name}</p>
      <div className="saved-req__buttons">
        <Button type="primary" onClick={handleExecuteClick}>Выполнить</Button>
        <Button onClick={handleChangeClick}>Изменить</Button>
        <Button type="primary" danger onClick={handleDeleteClick}>
          Удалить
        </Button>
      </div>
    </li>
  );
}

export default SavedReq;
