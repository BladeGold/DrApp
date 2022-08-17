import _axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const axios = _axios.create({
	baseURL: API_URL
});

export default axios;