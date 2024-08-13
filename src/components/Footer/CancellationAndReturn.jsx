import React from "react";
import "./CancellationAndReturn.css";

const CancellationAndReturn = () => {
  return (
    <div>
      <div className="car">
        <div className="car-container">
          <div className="cancellation">
            <div className="cancellation-container">
              <div className="cancellation-main-title">Cancellation Policy</div>
              <ul>


            
              <li className="cancellation-content">
                The customer can choose to cancel an order any time before it's
                dispatched. The order cannot be canceled once it's out for
                delivery. However, the customer may choose to reject it at the
                doorstep.
              </li>
              <li className="cancellation-content">
                The time window for cancellation varies based on different
                categories and the order cannot be canceled once the specified
                time has passed.
              </li>
              <li className="cancellation-content">
                In some cases, the customer may not be allowed to cancel the
                order for free, post the specified time and a cancellation fee
                will be charged. The details about the time window mentioned on
                the product page or order confirmation page will be considered
                final.
              </li>
              <li className="cancellation-content">
                In case of any cancellation from the seller due to unforeseen
                circumstances, a full refund will be initiated for prepaid
                orders.
              </li>
              <li className="cancellation-content">
                PurchasePlaza reserves the right to accept the cancellation of
                any order. PurchasePlaza also reserves the right to waive off or
                modify the time window or cancellation fee from time to time.
              </li>
              </ul>
            </div>
          </div>
          <div className="return">
            <div className="return-container">
              <div className="return-main-title">Returns Policy</div>
              <div className="return-content">
                Returns is a scheme provided by respective sellers directly
                under this policy in terms of which the option of exchange,
                replacement and/ or refund is offered by the respective sellers
                to you. All products listed under a particular category may not
                have the same returns policy. For all products, the
                returns/replacement policy provided on the product page shall
                prevail over the general returns policy. Do refer the respective
                item's applicable return/replacement policy on the product page
                for any exceptions to this returns policy and the table below
              </div>
              <div className="return-content">
                The return policy is divided into three parts; Do read all
                sections carefully to understand the conditions and cases under
                which returns will be accepted.
              </div>
              <div className="return-content-parts">
                {/* <div className="return-content-part1">
                            <div className="return-part1-title">
                            Part 1 - Category, Return Window and Actions possible
                            </div>
                            <div className="return-part1-tbl">
                                <table>

                                </table>
                            </div>
                        </div> */}
                {/* PurchasePlaza return policy copying part1 & part2 */}
                {/* now part3 */}
                <div className="return-part3">
                  <div className="return-part3-container">
                    <div className="return-part3-title">
                      <ul> <li>General Rules for a successful Return</li></ul> 
                    </div>
                    <div className="return-part3-content">
                      <ul>
                        <li>
                          In certain cases where the seller is unable to process
                          a replacement for any reason whatsoever, a refund will
                          be given.
                        </li>
                        <li>
                          In cases where a product accessory is found
                          missing/damaged/defective, the seller may either
                          process a replacement of the particular accessory or
                          issue an eGV for an amount equivalent to the price of
                          the accessory, at the seller's discretion.
                        </li>
                        <li>
                          During open box deliveries, while accepting your
                          order, if you received a different or a damaged
                          product, you will be given a refund (on the spot
                          refunds for cash-on-delivery orders). Once you have
                          accepted an open box delivery, no return request will
                          be processed, except for manufacturing defects. In
                          such cases, these category-specific replacement/return
                          general conditions will be applicable. Click here to
                          know more about Open Box Delivery
                        </li>
                        <li>
                          For products where installation is provided by
                          PurchasePlaza's service partners, do not open the
                          product packaging by yourself. PurchasePlaza
                          authorised personnel shall help in unboxing and
                          installation of the product.
                        </li>
                        <li>
                          For Furniture, any product-related issues will be
                          checked by authorised service personnel (free of cost)
                          and attempted to be resolved by replacing the faulty/
                          defective part of the product. Full replacement will
                          be provided only in cases where the service personnel
                          opines that replacing the faulty/defective part will
                          not resolve the issue.
                        </li>
                      </ul>
                    </div>
                    <div className="car-last">
                      PurchasePlaza holds the right to restrict the number of
                      returns created per order unit, post the evaluation of the
                      product/order defect is undertaken by PurchasePlaza's
                      authorized representative.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationAndReturn;
