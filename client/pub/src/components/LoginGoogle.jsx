import { GoogleLogin } from "react-google-login";
const clientId =
  "896490483167-4ca9nvvjnf94ikgopmkglc4b1qp5iee7.apps.googleusercontent.com";

function LoginGoogle() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default LoginGoogle;
