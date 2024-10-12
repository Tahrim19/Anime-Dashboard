const requests = {
    fetchAiring: 'https://api.jikan.moe/v4/anime?status=airing',
    fetchUpcoming: 'https://api.jikan.moe/v4/anime?status=upcoming',
    
    // API for anime
    fetchAnime: `https://api.jikan.moe/v4/anime`,
    fetchManga: `https://api.jikan.moe/v4/manga`,
    fetchAnimeDetail: (mal_id) => `https://api.jikan.moe/v4/anime/${mal_id}`,
    fetchMangaDetail: (mal_id) => `https://api.jikan.moe/v4/manga/${mal_id}`,
    fetchAnimeGenre: `https://api.jikan.moe/v4/genres/anime`,
    fetchMangaGenre: `https://api.jikan.moe/v4/genres/manga`,
    fetchAnimeRecommendations: `https://api.jikan.moe/v4/recommendations/anime`,
    fetchMangaRecommendations: `https://api.jikan.moe/v4/recommendations/manga`,

    // API for charts
    fetchTrending: 'https://api.jikan.moe/v4/top/anime',
    fetchTopManga:`https://api.jikan.moe/v4/top/manga`,
    fetchPopular: `https://api.jikan.moe/v4/anime?order_by=popularity`,
    fetchTopMovie: `https://api.jikan.moe/v4/anime?type=movie&order_by=popularity`
}

export default requests;