import axios from 'axios';


const URL ='https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

   
export const getPlacesData = async (sw, ne) =>{
    try{
        console.log('no error')
        const {data: {data}}= await axios.get(URL,{
            params: {
                bl_latitude: sw.lat,
                bl_longitude: ne.lng,
                tr_longitude: sw.lng,
                tr_latitude: ne.lat,
              },
              headers: {
                'X-RapidAPI-Key': 'dded7e27cdmsh0918d1cbed4f915p1e9e6ejsn5e49267792ad',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            }
            );
        return data
    }catch(error){
        console.log(error)
    }
}