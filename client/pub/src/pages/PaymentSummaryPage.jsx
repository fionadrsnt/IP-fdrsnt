import { useLocation, Navigate } from "react-router-dom";
import PaymentSummary from "../components/PaymentSummary";

const PaymentSummaryPage = () => {
  const { state } = useLocation();

  if (!state) return <Navigate to="/" />;

  return (
    <>
      <PaymentSummary animal={state.data.animal} />
    </>
  );
};
export default PaymentSummaryPage;
