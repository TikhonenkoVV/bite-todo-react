import axios from 'axios';

export const fetchSendNeedHelp = async send => {
  console.log(send);
  const { data } = await axios.post('/auth/help', send);
  console.log('fetch:', data);
  return data;
};
