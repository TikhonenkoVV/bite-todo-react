import axios from 'axios';

export const fetchSendNeedHelp = async send => {
  console.log(send);
  const { data } = await axios.post('/auth/help', send);
  return data;
};
