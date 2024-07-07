const endpointUrlVideo = process.env.NEXT_PUBLIC_YOUTUBE_API_VIDEO

export const getVideos = async () => {
  try {
    const response = await fetch(`${endpointUrlVideo}&maxResults=30`)
    if (response.status !== 200) {
      throw new Error("Failed to fetch videos")
    }
    const youtubeData = await response.json()
    return youtubeData.items
  } catch (error) {
    console.error(error)
  }
}

export const getSingleVideo = async () => {
  try {
    const response = await fetch(`${endpointUrlVideo}&maxResults=1`)
    if (response.status !== 200) {
      throw new Error("Failed to fetch videos")
    }
    const youtubeData = await response.json()
    return youtubeData.items
  } catch (error) {
    console.error(error)
  }
}
