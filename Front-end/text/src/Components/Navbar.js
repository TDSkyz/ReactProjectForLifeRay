import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Product.css';

export default class Navbar extends Component {

  render() {

    const isLoggedIn = localStorage.getItem('username');
    console.log(isLoggedIn);
    let order;
    let username;
    if (isLoggedIn) {
      order = <li><a title="Bạn có thể kiểm tra đơn đặt hàng ở đây" href="/order">
        <i className="fa fa-cart-arrow-down" aria-hidden="true" />
      </a>
      </li>
      username = <li><a href="/logout">Log out</a></li>
    }
    else {
      username = <li><a href="/logout">Log in</a></li>
    }
    let adminpage;
    const isAdmin = localStorage.getItem('isAdmin');

    if (isAdmin) {
      adminpage = <li><a href="/admin">Admin</a></li>
    }


    return (
      <div>
        <header className="header">
          {/* nav */}
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">pet<span>z</span></a>
              </div>
              {/* Collect the nav links and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/"><i className="fa fa-home" aria-hidden="true" /> <span className="sr-only">(current)</span></a></li>
                  {adminpage}
                  <li><a title="Xem thông tin các sản phẩm mới tại đây" href="/shop">Shop </a></li>
                  <li><a title="Xem thông tin các cửa hàng tại đây" href="/stores">stores </a></li>
                  <li><a title="Xem các bài viết hữu ích tại đây" href="/blog">Blog </a></li>
                  <li><a title="Quản lý cửa hàng của bạn tại đây" href="/mystore">My Store </a></li>
                  {username}
                  {order}

                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container*/}
          </nav>
          {/* nav End*/}
        </header>
      </div>
    );
  }
}