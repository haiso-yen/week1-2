import './App.css';
import React from 'react';
import './index.css';

function App() {
  return (
    <body className="main">
    <div id="root">
    <header className="header">
        <div className="head_container">
            <img src="./images/breg14.png" className="logo" alt=""/>
             
            <nav className="nav">
                <ul className="nav-list" >
                    <li className="nav-list-item">
                        <button className="btn">
                            <img className="icn_user" src="./images/user.png" weight="40" height="40" alt=""/>
                            <a href="#" className="nav-list-item-link"> 個人書房</a>
                        </button>
                    </li>
                    <li className="nav-list-item">
                        <button className="btn">
                            <img className="icn_option" src="./images/settings.png" weight="40" height="40" alt=""/> 
                            <p className="nav-list-item-link"> 設    定</p>
                        </button>
                    </li>
                    <li className="nav-list-item">
                        <button className="btn">
                            <img className="icn_help" src="./images/information.png" weight="40" height="40" alt=""/>
                            <p className="nav-list-item-link">幫    助</p>
                        </button>
                        <ul className="nav-list2">
                            <li className="nav-list-item"><p className="nav-list-item-link"> text1</p></li>
                            <li className="nav-list-item"><p className="nav-list-item-link"> text2</p></li>
                            <li className="nav-list-item"><p className="nav-list-item-link"> text3</p></li>
                            <li className="nav-list-item"><p className="nav-list-item-link"> text4</p></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>


    
  <article className="login">
      <div className="login_box">
        <h4>登入個人書房</h4>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required" />
                    <span className="text">讀者證號或身分字號</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
        </div>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="" required="required" />
                    <span className="text">密碼</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
        <div className="row100">
            <div className="col">
                <input type="submit" value="送出" />
            </div>
        </div>
        <p className="warning">首次登入為生日4碼<br/>登入後請修改密碼並牢記新密碼</p>

       <img className="login_pic" src="./images/breg7.png" alt=" "/>
    </article>
    </div>
</body>
  );
}


export default App;
