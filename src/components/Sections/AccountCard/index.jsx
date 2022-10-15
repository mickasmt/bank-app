import React from "react";
import PropTypes from "prop-types";

/**
 * Account Card info component.
 * @param {data} data Data of account infos
 * @returns {React.ReactElement}
 */
function AccountCard({ data }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {data.title} (x{data.number})
        </h3>
        <p className="account-amount">${data.amount}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

AccountCard.propTypes = {
  /** Array of objects of account infos */
  data: PropTypes.shape({
    /** ID of account info */
    id: PropTypes.number.isRequired,
    /** Title of account info */
    title: PropTypes.string.isRequired,
    /** Number of account info */
    number: PropTypes.string.isRequired,
    /** Amount of account info */
    amount: PropTypes.string.isRequired,
  }),
};

export default AccountCard;
