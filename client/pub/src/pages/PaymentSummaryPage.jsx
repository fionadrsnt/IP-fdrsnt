import { useLocation, Navigate, useParams } from "react-router-dom";
import PaymentSummary from "../components/PaymentSummary";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../configs/config";

const PaymentSummaryPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!state) return <Navigate to="/" />;

  return (
    <>
      <PaymentSummary animal={state.data.animal} />
    </>
  );
};
export default PaymentSummaryPage;
