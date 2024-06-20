const endpointURL = process.env.NEXT_PUBLIC_LATEST_VIDEO;

export const fetchVideos = async (callback) => {
  try {
    const response = await fetch(`${endpointURL}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch videos");
    }
    const youtubeData = await response.json();
    callback(youtubeData.items);
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
};
