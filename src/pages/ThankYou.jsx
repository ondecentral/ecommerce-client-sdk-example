import React, { useEffect } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import lucia from "lucia-sdk";

const ThankYou = () => {
  const location = useLocation();
  const { user, cart } = location.state || {};

  useEffect(() => {
    lucia.pageView("thank-you");
  }, []);

  if (!user || !cart) {
    return <Navigate to="/" replace />;
  }

  const displayName =
    [user.first_name, user.last_name].filter(Boolean).join(" ") || user.email;

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-4">
              <h1 className="display-5">Thank you</h1>
              <p className="lead text-muted">
                Your order has been placed successfully.
              </p>
              <p>
                Thanks, <strong>{displayName}</strong>! A confirmation will be
                sent to <strong>{user.email}</strong>.
              </p>
            </div>

            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">Order details</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {cart.items.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center px-0"
                    >
                      <span>
                        {item.title}{" "}
                        <span className="text-muted">× {item.qty}</span>
                      </span>
                      <span>${Math.round(item.price * item.qty)}</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>${cart.shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pt-3">
                    <strong>Total amount</strong>
                    <strong>${Math.round(cart.total)}</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link to="/" className="btn btn-dark">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
