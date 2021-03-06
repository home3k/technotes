
import axios from 'axios'
import notie from 'corner-notie'
import { dataUrl } from '../config'

async function getHeadlines(timeSplat) {
  const { data } = await axios.get(`${dataUrl}/${timeSplat}.json`, {timeout: 7000})
    .catch(res => {
      notie('Seems no data there~' , {
        type: 'warning', // info | warning | success | danger
        autoHide: true,
        timeout: 3000,
        position: 'bottom-center',
        width: 250
      })
    })
  return data
}

export default getHeadlines