const endpointURL = process.env.NEXT_PUBLIC_LATEST_VIDEO;

export const fetchVideos = async (callback) => {
  try {
    const response = await fetch(`${endpointURL}`);
    const youtubeData = await response.json();
    callback(youtubeData.items);
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
};
