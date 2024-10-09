const requests = {
    fetchAiring: 'https://api.jikan.moe/v4/anime?status=airing',
    fetchUpcoming: 'https://api.jikan.moe/v4/anime?status=upcoming',
    
    // API for anime
    fetchAnime: `https://api.jikan.moe/v4/anime`,
    fetchAnimeDetail: (mal_id) => `https://api.jikan.moe/v4/anime/${mal_id}`,
    fetchMangaDetail: (mal_id) => `https://api.jikan.moe/v4/manga/${mal_id}`,
    fetchManga: `https://api.jikan.moe/v4/manga`,
    fetchGenre: `https://api.jikan.moe/v4/genres/anime`,
    fetchRecommendations: `https://api.jikan.moe/v4/recommendations/anime`,

    // API for charts
    fetchTrending: 'https://api.jikan.moe/v4/top/anime',
    fetchTopManga:`https://api.jikan.moe/v4/top/manga`,
    fetchPopular: `https://api.jikan.moe/v4/anime?order_by=popularity`,
    fetchTopMovie: `https://api.jikan.moe/v4/anime?type=movie&order_by=popularity`
}

export default requests;