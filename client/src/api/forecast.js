import {basePath, apiVersion} from './config';
import axios from 'axios';

export const getForecastApi = async (city) => {
  try {
    const url = `${basePath}/${apiVersion}/forecast/${city}`;
    const result = await axios
      .get(url)
      .then((response) => response.data)
      .catch((err) => console.error(err));

    return result;
  } catch (error) {
    console.log(error);
  }
};
