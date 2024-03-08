export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'a7983889c2mshcdfb19ddcd3cadcp1ae2c3jsn95f9ed93e4dc',
    },
  };

export const fetchData =async (url,options) => {
    const res= await fetch(url,options);
    const data= await res.json();
    return data;
}

