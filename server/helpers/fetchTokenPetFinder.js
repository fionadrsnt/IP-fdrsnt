const axios = require("axios");
const fetchTokenPetFinder = async () => {
  try {
    const { data } = await axios.post(
      " https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: "zmyEKOerU4uYO23DGyNMDaHLL196KmmKzg3WGF3o4darR6BYCN",
        client_secret: "lZVFHoFVdjCLm9XfxqBrCqE5KmrGxhkRvKqlDHPM",
      }
    );

    // console.log(data);

    return data.access_token;
  } catch (err) {
    console.log(err);
  }
};
module.exports = fetchTokenPetFinder;
