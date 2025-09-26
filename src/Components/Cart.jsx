import { useDispatch, useSelector } from "react-redux";
import { Remove, restlength, updateqty } from "../Feature";
import GrandTotal from "./GrandTotal";

export default function Cart() {
  const CartData = useSelector((state) => state.Procuct.users);
  const currentuser = useSelector((state) => state.Procuct.currentuser);
  const Loginuser = CartData?.find((item) => item?.name === currentuser);

  const dispatch = useDispatch();
  dispatch(restlength());

  const TotalPrice = (item) => item.qty * item.price;

  return Loginuser?.Carts?.length > 0 ? (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-center text-lg-start">
        Your Shopping Cart 🛒
      </h2>

      <div className="row g-4">
        {/* Cart Items Section */}
        <div className="col-lg-8">
          {Loginuser?.Carts?.map((item, index) => (
            <div
              key={index}
              className="card shadow-sm mb-3 border-0 rounded-3 hover-shadow"
            >
              <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                {/* Product Info */}
                <div className="d-flex align-items-center flex-grow-1">
                  <img
                    src={item.img}
                    alt="product"
                    className="rounded me-3"
                    width="90"
                    height="90"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-1 fw-semibold">
                      {item.title.slice(0, 40)}
                    </h6>
                    <small className="text-muted d-block">
                      {item.description.slice(0, 60)}...
                    </small>
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="d-flex align-items-center mx-3">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      dispatch(
                        updateqty({
                          id: item.id,
                          qty: Math.max(1, item.qty - 1),
                        })
                      )
                    }
                  >
                    −
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={item.qty}
                    className="form-control form-control-sm text-center mx-2"
                    style={{ width: "50px" }}
                  />
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      dispatch(updateqty({ id: item.id, qty: item.qty + 1 }))
                    }
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="text-end me-3">
                  <div className="fw-bold text-primary">
                    Rs {TotalPrice(item)}
                  </div>
                  <small className="text-muted">Rs {item.price} each</small>
                </div>

                {/* Remove */}
                <button
                  className="btn btn-sm btn-danger rounded-circle"
                  onClick={() => dispatch(Remove(item.id))}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Cart Summary */}
        <div className="col-lg-4">
          <div className="position-sticky" style={{ top: "90px" }}>
            {/* Shipping Form */}
            <div className="card shadow-sm mb-3 border-0 rounded-3">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Shipping Address</h5>
                <form>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Full Name"
                  />
                  <textarea
                    className="form-control mb-2"
                    rows="2"
                    placeholder="Address"
                  ></textarea>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Phone"
                  />
                </form>
              </div>
            </div>

            {/* Cart Total */}
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body">
                <h5 className="fw-bold">Cart Total</h5>
                <GrandTotal />

                {/* Coupon Code */}
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Coupon Code"
                  />
                  <button className="btn btn-outline-secondary">Apply</button>
                </div>

                <button className="btn btn-primary w-100 mt-3 py-2 fs-6">
                  Proceed to Checkout →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h4 className="text-center my-5">No Cart Items Available</h4>
  );
}