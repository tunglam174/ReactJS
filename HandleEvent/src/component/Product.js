import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="thumbnail">
          <img alt="" />
          <div class="caption">
            <h3>Ten san pham</h3>
            <p>
              5.000.000 VND
            </p>
            <p>
              <a href="#" class="btn btn-primary">Mua ngay</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;                             
