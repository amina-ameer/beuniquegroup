import React from 'react';
import './style.css';

export default function App() {
  return (
    <div class="container">
      <div class="top-nav ">
        <a href="">SHOP</a>
        <a href="">OUR STORY</a>
        <a href="">EXPERTISE</a>
        <h3>BLANCHE</h3>&nbsp;&nbsp;&nbsp;
        <a href="">CONTACT</a>
        <input type="text" placeholder="Search.."></input>
        <i class="fa fa-search"></i>
      </div>
      <div>
        <img src=""></img>
      </div>
      <div>
        <p>
          Our premium products got the finest qquality cotton that create an
          exquisite lightweight textile that’s both soft and crisp – guaranteed
          to give you a wonderful night’s slee{' '}
        </p>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <img src=""></img>
            </td>
            <td>
              <img src=""></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src=""></img>
            </td>
            <td>
              <img src=""></img>
            </td>
          </tr>
        </table>
      </div>
      <div class="row">
        <p class="alignment">Best Sellers</p>
        <div class="col-sm-3">
          <div class="card">
            <div class="image-top">
              <img src="" alt="image"></img>
            </div>
            <div class="card-footer">
              <p>
                Product Name
                <br></br>
                AED XXX
                <br></br>
                Available in 5 colors
              </p>
            </div>
          </div>
        </div>
        <div class="card col-sm-3 col-sm-offset-1">
          <div class="image-top">
            <img src="" alt="image"></img>
          </div>
          <div class="card-footer">
            <p>
              Product Name
              <br></br>
              AED XXX
              <br></br>
              Available in 5 colors
            </p>
          </div>
        </div>
        <div class="card colspan:3 ">
          <div class="image-top">
            <img src="" alt="image"></img>
          </div>
          <div class="card-footer">
            <p>
              Product Name
              <br></br>
              AED XXX
              <br></br>
              Available in 5 colors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
