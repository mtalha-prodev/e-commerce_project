import React from "react";
import { cardData } from "./cardData";
import CloseIcon from "@material-ui/icons/Close";
import "./cartItem.css";

function CartItem() {
  return (
    <div className="cart_check">
      {cardData.map((item, index) => {
        return (
          <div key={index} className="card">
            <img src={item.image} alt="kfak" className="w-100" />
            <div className="card-body">
              <div className="card_info">
                <p className="card-title">{item.title}</p>
                <p className="card-text text-muted">
                  <small>
                    {item.items} x {item.price}
                  </small>
                </p>
              </div>
              <CloseIcon className="card_close_icon" />
            </div>
          </div>
        );
      })}

      {/* total price off card porshan */}
      <div className="card_total">
        <p className="total_text text-secondary">Total :</p>
        <p className="total_price text-dark">$235.23</p>
      </div>

      {/* btn setting */}
      <div className="card_btn">
        <button className="btn btn-card">View Cart</button>
        <button className="btn btn-out">Check Out</button>
      </div>
    </div>
  );
}

export default CartItem;
