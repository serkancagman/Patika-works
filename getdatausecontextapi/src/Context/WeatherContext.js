import axios from "axios";
import React from "react";

const WeatherContext = React.createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = React.useState("Istanbul");
  const [weatherData, setWeatherData] = React.useState([]);

  const cityNames = [
    { cityInner: "Istanbul" },
    { cityInner: "Izmir" },
    { cityInner: "Bursa" },
    { cityInner: "Ankara" },
    { cityInner: "Izmit" },
    { cityInner: "Adiyaman" },
    { cityInner: "Tokat" },
    { cityInner: "Manisa" },
    { cityInner: "Sanliurfa" },
    { cityInner: "Diyarbakır" },
    { cityInner: "Malatya" },
    { cityInner: "Kayseri" },
    { cityInner: "Sivas" },
    { cityInner: "Amasya" },
    { cityInner: "Eskisehir" },
  ];

  const apiKEY = "9920b49eed20fd102c6531ea1d3397fe";
  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

  React.useEffect(() => {
    const getData = async (apiLink, apiKEY, cityName) => {
      const response = await axios(
        `${apiLink}${cityName}&units=metric&cnt=7&appid=${apiKEY}`
      );
      setWeatherData(response.data.list);
    };
    getData(apiURL, apiKEY, city);
  }, [city]);

  const getIcon = (iconId) => {
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  };

  const handleDays = (dayCode) => {
    switch (dayCode) {
      case 1642194000:
        return "FRID";
        break;
      case 1642204800:
        return "SATU";
        break;
      case 1642215600:
        return "SUND";
        break;
      case 1642226400:
        return "MOND";
        break;
      case 1642237200:
        return "TUES";
        break;
      case 1642248000:
        return "WEDN";
        break;
      case 1642258800:
        return "THUR";
    }
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const values = {
    weatherData,
    cityNames,
    cityHandler,
    city,
    handleDays,
    getIcon,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
