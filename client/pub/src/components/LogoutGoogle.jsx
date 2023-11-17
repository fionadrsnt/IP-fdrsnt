import { GoogleLogout } from "react-google-login";

const clientId =
  "896490483167-4ca9nvvjnf94ikgopmkglc4b1qp5iee7.apps.googleusercontent.com";

function LogoutGoogle() {
  const onSuccess = () => {
    console.log("Log out successfull!");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default LogoutGoogle;
