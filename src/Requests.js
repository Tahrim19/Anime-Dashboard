const requests = {
    fetchTrending: 'https://api.jikan.moe/v4/top/anime',
    fetchAiring: 'https://api.jikan.moe/v4/anime?status=airing',
    fetchUpcoming: 'https://api.jikan.moe/v4/anime?status=upcoming',
    // fetchAnimeDetail:`https://api.jikan.moe/v4/anime/${id}`
    fetchLongestRunning:`https://api.jikan.moe/v4/anime?sort=duration`,
    fetchManga:`https://api.jikan.moe/v4/top/manga`,
    fetchPopular: `https://api.jikan.moe/v4/anime?order_by=popularity`
}

export default requests;