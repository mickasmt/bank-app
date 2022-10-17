import React, { useEffect, useState } from "react";
import AccountCard from "components/Sections/AccountCard";
import HeaderProfile from "components/Sections/HeaderProfile";

import { getProfile } from "redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const accountInfos = [
  {
    id: 1,
    title: "Argent Bank Checking",
    number: "8349",
    amount: "2,082.79",
  },
  {
    id: 2,
    title: "Argent Bank Savings",
    number: "6712",
    amount: "10,928.42",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card",
    number: "8349",
    amount: "184.30",
  },
];

/**
 * Profile Page
 * @returns {React.ReactElement}
 */
function Profile() {
  let navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);


  return (
    <main className="main bg-dark">
      <HeaderProfile />

      <h2 className="sr-only">Accounts</h2>

      {accountInfos.map((info) => {
        return <AccountCard data={info} key={info.id} />;
      })}
    </main>
  );
}

export default Profile;
