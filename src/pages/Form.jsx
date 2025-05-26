import React from 'react';

const Form = () => {
  return (
    <>
            <div className="main-panel">
  <div className="main-header">
    <div className="main-header-logo">
      {/* Logo Header */}
      <div className="logo-header" data-background-color="dark">
        <a href="../index.html" className="logo">
          <img src="../assets/img/kaiadmin/logo_light.svg" alt="navbar brand" className="navbar-brand" />
        </a>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="gg-menu-right" />
          </button>
          <button className="btn btn-toggle sidenav-toggler">
            <i className="gg-menu-left" />
          </button>
        </div>
        <button className="topbar-toggler more">
          <i className="gg-more-vertical-alt" />
        </button>
      </div>
      {/* End Logo Header */}
    </div>
    {/* Navbar Header */}
    <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
          <div className="input-group">
            <div className="input-group-prepend">
              <button type="submit" className="btn btn-search pe-1">
                <i className="fa fa-search search-icon" />
              </button>
            </div>
            <input type="text" placeholder="Search ..." className="form-control" />
          </div>
        </nav>
        <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
          <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
              <i className="fa fa-search" />
            </a>
            <ul className="dropdown-menu dropdown-search animated fadeIn">
              <form className="navbar-left navbar-form nav-search">
                <div className="input-group">
                  <input type="text" placeholder="Search ..." className="form-control" />
                </div>
              </form>
            </ul>
          </li>
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-envelope" />
            </a>
            <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
              <li>
                <div className="dropdown-title d-flex justify-content-between align-items-center">
                  Messages
                  <a href="#" className="small">Mark all as read</a>
                </div>
              </li>
              <li>
                <div className="message-notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-img">
                        <img src="../assets/img/jm_denis.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Jimmy Denis</span>
                        <span className="block"> How are you ? </span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img">
                        <img src="../assets/img/chadengle.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Chad</span>
                        <span className="block"> Ok, Thanks ! </span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img">
                        <img src="../assets/img/mlane.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Jhon Doe</span>
                        <span className="block">
                          Ready for the meeting today...
                        </span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img">
                        <img src="../assets/img/talha.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Talha</span>
                        <span className="block"> Hi, Apa Kabar ? </span>
                        <span className="time">17 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="javascript:void(0);">See all messages<i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-bell" />
              <span className="notification">4</span>
            </a>
            <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
              <li>
                <div className="dropdown-title">
                  You have 4 new notification
                </div>
              </li>
              <li>
                <div className="notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-icon notif-primary">
                        <i className="fa fa-user-plus" />
                      </div>
                      <div className="notif-content">
                        <span className="block"> New user registered </span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-success">
                        <i className="fa fa-comment" />
                      </div>
                      <div className="notif-content">
                        <span className="block">
                          Rahmad commented on Admin
                        </span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img">
                        <img src="../assets/img/profile2.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="block">
                          Reza send messages to you
                        </span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-danger">
                        <i className="fa fa-heart" />
                      </div>
                      <div className="notif-content">
                        <span className="block"> Farrah liked Admin </span>
                        <span className="time">17 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link" data-bs-toggle="dropdown" href="#" aria-expanded="false">
              <i className="fas fa-layer-group" />
            </a>
            <div className="dropdown-menu quick-actions animated fadeIn">
              <div className="quick-actions-header">
                <span className="title mb-1">Quick Actions</span>
                <span className="subtitle op-7">Shortcuts</span>
              </div>
              <div className="quick-actions-scroll scrollbar-outer">
                <div className="quick-actions-items">
                  <div className="row m-0">
                    <a className="col-6 col-md-4 p-0" href="#">
                      <div className="quick-actions-item">
                        <div className="avatar-item bg-danger rounded-circle">
                          <i className="far fa-calendar-alt" />
                        </div>
                        <span className="text">Calendar</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="#">
                      <div className="quick-actions-item">
                        <div className="avatar-item bg-warning rounded-circle">
                          <i className="fas fa-map" />
                        </div>
                        <span className="text">Maps</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="#">
                      <div className="quick-actions-item">
                        <div className="avatar-item bg-info rounded-circle">
                          <i className="fas fa-file-excel" />
                        </div>
                        <span className="text">Reports</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="#">
                      <div className="quick-actions-item">
                        <div className="avatar-item bg-success rounded-circle">
                          <i className="fas fa-envelope" />
                        </div>
                        <span className="text">Emails</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="#">
                      <div className="quick-actions-item">
                        <div className="avatar-item bg-primary rounded-circle">
                          <i className="fas fa-file-invoice-dollar" />
                        </div>
                        <span className="text">Invoice</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="#">
                      <div className="quick-actions-item">
                        <div className="avatar-item bg-secondary rounded-circle">
                          <i className="fas fa-credit-card" />
                        </div>
                        <span className="text">Payments</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item topbar-user dropdown hidden-caret">
            <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
              <div className="avatar-sm">
                <img src="../assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
              </div>
              <span className="profile-username">
                <span className="op-7">Hi,</span>
                <span className="fw-bold">Hizrian</span>
              </span>
            </a>
            <ul className="dropdown-menu dropdown-user animated fadeIn">
              <div className="dropdown-user-scroll scrollbar-outer">
                <li>
                  <div className="user-box">
                    <div className="avatar-lg">
                      <img src="../assets/img/profile.jpg" alt="image profile" className="avatar-img rounded" />
                    </div>
                    <div className="u-text">
                      <h4>Hizrian</h4>
                      <p className="text-muted">hello@example.com</p>
                      <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">My Profile</a>
                  <a className="dropdown-item" href="#">My Balance</a>
                  <a className="dropdown-item" href="#">Inbox</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Account Setting</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    {/* End Navbar */}
  </div>
  <div className="container">
    <div className="page-inner">
      <div className="page-header">
        <h3 className="fw-bold mb-3">Forms</h3>
        <ul className="breadcrumbs mb-3">
          <li className="nav-home">
            <a href="#">
              <i className="icon-home" />
            </a>
          </li>
          <li className="separator">
            <i className="icon-arrow-right" />
          </li>
          <li className="nav-item">
            <a href="#">Forms</a>
          </li>
          <li className="separator">
            <i className="icon-arrow-right" />
          </li>
          <li className="nav-item">
            <a href="#">Basic Form</a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Form Elements</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="email2">Email Address</label>
                    <input type="email" className="form-control" id="email2" placeholder="Enter Email" />
                    <small id="emailHelp2" className="form-text text-muted">We'll never share your email with anyone
                      else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <div className="form-group form-inline">
                    <label htmlFor="inlineinput" className="col-md-3 col-form-label">Inline Input</label>
                    <div className="col-md-9 p-0">
                      <input type="text" className="form-control input-full" id="inlineinput" placeholder="Enter Input" />
                    </div>
                  </div>
                  <div className="form-group has-success">
                    <label htmlFor="successInput">Success Input</label>
                    <input type="text" id="successInput" defaultValue="Success" className="form-control" />
                  </div>
                  <div className="form-group has-error has-feedback">
                    <label htmlFor="errorInput">Error Input</label>
                    <input type="text" id="errorInput" defaultValue="Error" className="form-control" />
                    <small id="emailHelp" className="form-text text-muted">Please provide a valid informations.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="disableinput">Disable Input</label>
                    <input type="text" className="form-control" id="disableinput" placeholder="Enter Input" disabled />
                  </div>
                  <div className="form-group">
                    <label>Gender</label><br />
                    <div className="d-flex">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label"> Static </label>
                    <p className="form-control-static">hello@example.com</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-select" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea className="form-control" id="comment" rows={5} defaultValue={"                          "} />
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Agree with terms and conditions
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">@</span>
                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="basic-url">Your vanity URL</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text">With textarea</span>
                      <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <button className="btn btn-black btn-border" type="button">
                        Button
                      </button>
                      <input type="text" className="form-control" placeholder aria-label aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                      <div className="input-group-append">
                        <button className="btn btn-primary btn-border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Dropdown
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                          <div role="separator" className="dropdown-divider" />
                          <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <input type="text" className="form-control" placeholder="Search for..." />
                      <span className="input-icon-addon">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <span className="input-icon-addon">
                        <i className="fa fa-user" />
                      </span>
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Image Check</label>
                    <div className="row">
                      <div className="col-6 col-sm-4">
                        <label className="imagecheck mb-4">
                          <input name="imagecheck" type="checkbox" defaultValue={1} className="imagecheck-input" />
                          <figure className="imagecheck-figure">
                            <img src="../assets/img/examples/product1.jpg" alt="title" className="imagecheck-image" />
                          </figure>
                        </label>
                      </div>
                      <div className="col-6 col-sm-4">
                        <label className="imagecheck mb-4">
                          <input name="imagecheck" type="checkbox" defaultValue={2} className="imagecheck-input" defaultChecked />
                          <figure className="imagecheck-figure">
                            <img src="../assets/img/examples/product4.jpg" alt="title" className="imagecheck-image" />
                          </figure>
                        </label>
                      </div>
                      <div className="col-6 col-sm-4">
                        <label className="imagecheck mb-4">
                          <input name="imagecheck" type="checkbox" defaultValue={3} className="imagecheck-input" />
                          <figure className="imagecheck-figure">
                            <img src="../assets/img/examples/product3.jpg" alt="title" className="imagecheck-image" />
                          </figure>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Color Input</label>
                    <div className="row gutters-xs">
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="checkbox" defaultValue="dark" className="colorinput-input" />
                          <span className="colorinput-color bg-black" />
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="checkbox" defaultValue="primary" className="colorinput-input" />
                          <span className="colorinput-color bg-primary" />
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="checkbox" defaultValue="secondary" className="colorinput-input" />
                          <span className="colorinput-color bg-secondary" />
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="checkbox" defaultValue="info" className="colorinput-input" />
                          <span className="colorinput-color bg-info" />
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="checkbox" defaultValue="success" className="colorinput-input" />
                          <span className="colorinput-color bg-success" />
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="checkbox" defaultValue="danger" className="colorinput-input" />
                          <span className="colorinput-color bg-danger" />
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="checkbox" defaultValue="warning" className="colorinput-input" />
                          <span className="colorinput-color bg-warning" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Size</label>
                    <div className="selectgroup w-100">
                      <label className="selectgroup-item">
                        <input type="radio" name="value" defaultValue={50} className="selectgroup-input" defaultChecked />
                        <span className="selectgroup-button">S</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="value" defaultValue={100} className="selectgroup-input" />
                        <span className="selectgroup-button">M</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="value" defaultValue={150} className="selectgroup-input" />
                        <span className="selectgroup-button">L</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="value" defaultValue={200} className="selectgroup-input" />
                        <span className="selectgroup-button">XL</span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Icons input</label>
                    <div className="selectgroup w-100">
                      <label className="selectgroup-item">
                        <input type="radio" name="transportation" defaultValue={2} className="selectgroup-input" />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="icon-screen-smartphone" /></span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="transportation" defaultValue={1} className="selectgroup-input" defaultChecked />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="icon-screen-tablet" /></span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="transportation" defaultValue={6} className="selectgroup-input" />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="icon-screen-desktop" /></span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="transportation" defaultValue={6} className="selectgroup-input" />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="fa fa-times" /></span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label d-block">Icon input</label>
                    <div className="selectgroup selectgroup-secondary selectgroup-pills">
                      <label className="selectgroup-item">
                        <input type="radio" name="icon-input" defaultValue={1} className="selectgroup-input" defaultChecked />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="fa fa-sun" /></span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="icon-input" defaultValue={2} className="selectgroup-input" />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="fa fa-moon" /></span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="icon-input" defaultValue={3} className="selectgroup-input" />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="fa fa-tint" /></span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="radio" name="icon-input" defaultValue={4} className="selectgroup-input" />
                        <span className="selectgroup-button selectgroup-button-icon"><i className="fa fa-cloud" /></span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your skills</label>
                    <div className="selectgroup selectgroup-pills">
                      <label className="selectgroup-item">
                        <input type="checkbox" name="value" defaultValue="HTML" className="selectgroup-input" defaultChecked />
                        <span className="selectgroup-button">HTML</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="checkbox" name="value" defaultValue="CSS" className="selectgroup-input" />
                        <span className="selectgroup-button">CSS</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="checkbox" name="value" defaultValue="PHP" className="selectgroup-input" />
                        <span className="selectgroup-button">PHP</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="checkbox" name="value" defaultValue="JavaScript" className="selectgroup-input" />
                        <span className="selectgroup-button">JavaScript</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="checkbox" name="value" defaultValue="Ruby" className="selectgroup-input" />
                        <span className="selectgroup-button">Ruby</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="checkbox" name="value" defaultValue="Ruby" className="selectgroup-input" />
                        <span className="selectgroup-button">Ruby</span>
                      </label>
                      <label className="selectgroup-item">
                        <input type="checkbox" name="value" defaultValue="C++" className="selectgroup-input" />
                        <span className="selectgroup-button">C++</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <label className="mb-3"><b>Form Group Default</b></label>
                  <div className="form-group form-group-default">
                    <label>Input</label>
                    <input id="Name" type="text" className="form-control" placeholder="Fill Name" />
                  </div>
                  <div className="form-group form-group-default">
                    <label>Select</label>
                    <select className="form-select" id="formGroupDefaultSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <label className="mt-3 mb-3"><b>Form Floating Label</b></label>
                  <div className="form-floating form-floating-custom mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating form-floating-custom mb-3">
                    <select className="form-select" id="selectFloatingLabel" required>
                      <option selected>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <label htmlFor="selectFloatingLabel">Select</label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="largeInput">Large Input</label>
                    <input type="text" className="form-control form-control-lg" id="largeInput" placeholder="Large Input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="largeInput">Default Input</label>
                    <input type="text" className="form-control form-control" id="defaultInput" placeholder="Default Input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="smallInput">Small Input</label>
                    <input type="text" className="form-control form-control-sm" id="smallInput" placeholder="Small Input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="largeSelect">Large Select</label>
                    <select className="form-select form-control-lg" id="largeSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="defaultSelect">Default Select</label>
                    <select className="form-select form-control" id="defaultSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="smallSelect">Small Select</label>
                    <select className="form-select form-control-sm" id="smallSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button className="btn btn-success">Submit</button>
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container-fluid d-flex justify-content-between">
      <nav className="pull-left">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="http://www.themekita.com">
              ThemeKita
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Help </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Licenses </a>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        2024, made with <i className="fa fa-heart heart text-danger" /> by
        <a href="http://www.themekita.com">ThemeKita</a>
      </div>
      <div>
        Distributed by
        <a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
      </div>
    </div>
  </footer>
</div>

    </>
  );
}

export default Form;
