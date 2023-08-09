import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "36.650792",
          tr_latitude: "69.070178",
          bl_longitude: "-40.083008",
          tr_longitude: "24.591064",
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
            "c898200877mshbbafbcf0a26a170p1244c1jsnd4dfaccd48bb",
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
//   },
