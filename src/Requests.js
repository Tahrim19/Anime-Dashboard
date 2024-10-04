const requests = {
    fetchAiring: 'https://api.jikan.moe/v4/anime?status=airing',
    fetchUpcoming: 'https://api.jikan.moe/v4/anime?status=upcoming',
    // API for anime
    fetchAnime: `https://api.jikan.moe/v4/anime`,
    // fetchAnimeDetail:`https://api.jikan.moe/v4/anime/${id}`
    // API for charts
    fetchTrending: 'https://api.jikan.moe/v4/top/anime',
    fetchManga:`https://api.jikan.moe/v4/top/manga`,
    fetchPopular: `https://api.jikan.moe/v4/anime?order_by=popularity`,
    fetchTopMovie: `https://api.jikan.moe/v4/anime?type=movie&order_by=popularity
`
}

export default requests;