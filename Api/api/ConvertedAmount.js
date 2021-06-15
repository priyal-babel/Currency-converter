import Axios from 'axios';
import { access_key } from './api_key';


const CurrencyConv = async () => {
  return await Axios.get('http://data.fixer.io/api/latest', {
    params: {
      access_key: access_key,
      base: 'EUR',
    }
  })
    .then(resp => resp.data);
}

export default CurrencyConv;