import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "36.650792",
          tr_latitude: tr_lat ? tr_lat : "69.070178",
          bl_longitude: bl_lng ? bl_lng : "-40.083008",
          tr_longitude: tr_lng ? tr_lng : "24.591064",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },

        headers: {
          "X-RapidAPI-Key":
            "b739693499mshe32f9d558550c2bp13de7djsnbebcb7456972",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};

// params: {
//     bl_latitude: '36.650792',
//     tr_latitude: '69.070178',
//     bl_longitude: '-40.083008',
//     tr_longitude: '24.591064',
//     restaurant_tagcategory_standalone: '10591',
//     restaurant_tagcategory: '10591',
//     limit: '30',
//     currency: 'USD',
//     open_now: 'false',
//     lunit: 'km',
//     lang: 'en_US'

//Tunde philps api key
//"c898200877mshbbafbcf0a26a170p1244c1jsnd4dfaccd48bb"
//   },
