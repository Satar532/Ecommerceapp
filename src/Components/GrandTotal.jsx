import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Remove, restlength, updateqty } from "../Feature";

const fmt = (n) =>
  Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

export default function Cart() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Procuct?.users) || [];
  const currentuser = useSelector((state) => state.Procuct?.currentuser);
  const Loginuser = users.find((u) => u?.name === currentuser) || { Carts: [] };

  useEffect(() => {
    dispatch(restlength());
  }, [dispatch, Loginuser?.Carts?.length]);

  const subtotal =
    (Loginuser?.Carts || []).reduce(
      (s, it) => s + (Number(it.price) || 0) * (Number(it.qty) || 0),
      0
    ) || 0;

  const discount = subtotal >= 2000 ? 200 : 0; // example flat discount
  const shipping = subtotal === 0 ? 0 : subtotal >= 5000 ? 0 : 250;
  const total = Math.max(0, subtotal - discount + shipping);

  const handleDecrease = (id, qty) =>
    dispatch(updateqty({ id, qty: Math.max(1, Number(qty) - 1) }));
  const handleIncrease = (id, qty) =>
    dispatch(updateqty({ id, qty: Number(qty) + 1 }));
  const handleQtyChange = (id, value) =>
    dispatch(updateqty({ id, qty: Math.max(1, parseInt(value) || 1) }));
  const handleRemove = (id) => dispatch(Remove(id));

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">Your Shopping Cart</h2>

      {Loginuser?.Carts?.length === 0 ? (
        <div className="text-center py-5">
          <h4>No items in your cart</h4>
          <p className="text-muted">Start shopping to add items.</p>
        </div>
      ) : (
        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-12 col-lg-8">
            {Loginuser?.Carts?.map((item) => {
              const lineTotal =
                (Number(item.price) || 0) * (Number(item.qty) || 0);
              return (
                <div
                  className="card mb-3 border-0 rounded-3 shadow-sm"
                  key={item.id}
                >
                  <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                    {/* Product Info */}
                    <div className="d-flex align-items-center flex-grow-1 mb-3 mb-md-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        width={80}
                        height={80}
                        style={{ objectFit: "cover" }}
                        className="rounded me-3"
                      />
                      <div>
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="mb-1 text-muted small">
                          {item.description?.slice(0, 60)}
                        </p>
                        <span className="badge bg-light text-dark">
                          Delivery 3–5 days
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="input-group input-group-sm mb-2 mb-md-0">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleDecrease(item.id, item.qty)}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          handleQtyChange(item.id, e.target.value)
                        }
                        className="form-control text-center"
                        style={{ width: "70px" }}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleIncrease(item.id, item.qty)}
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-end mx-3">
                      <div className="fw-bold">Rs {fmt(lineTotal)}</div>
                      <small className="text-muted">
                        Rs {fmt(item.price)} each
                      </small>
                    </div>

                    {/* Remove */}
                    <button
                      className="btn btn-sm btn-danger rounded-circle"
                      onClick={() => handleRemove(item.id)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Shipping + Summary */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Shipping Address</h5>
                <input className="form-control mb-2" placeholder="Full Name" />
                <textarea
                  className="form-control mb-2"
                  rows="2"
                  placeholder="Address"
                ></textarea>
                <input className="form-control mb-2" placeholder="Phone" />
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Order Summary</h5>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>Rs {fmt(subtotal)}</strong>
                </div>
                <div className="d-flex justify-content-between text-success">
                  <span>Discount</span>
                  <strong>- Rs {fmt(discount)}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <strong>Rs {fmt(shipping)}</strong>
                </div>
                <hr />
                <div className="d-flex justify-content-between fs-5">
                  <span>Total</span>
                  <strong>Rs {fmt(total)}</strong>
                </div>
                <button className="btn btn-primary w-100 mt-3">
                  Proceed to Checkout →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Bar */}
      {Loginuser?.Carts?.length > 0 && (
        <div className="d-lg-none fixed-bottom bg-white shadow-lg p-3 border-top">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="small text-muted">Total</div>
              <div className="fw-bold fs-5">Rs {fmt(total)}</div>
            </div>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}