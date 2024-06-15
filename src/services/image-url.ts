import noImage from '../images/wall4.jpg';

//optimaize images to speed up image load

const getImageUrl = (url: string) => {
  if(!url) return noImage;

  console.log("path", 'http://127.0.0.1:8000/' + url);
  return 'http://127.0.0.1:8000/' + url;
}

export default getImageUrl;