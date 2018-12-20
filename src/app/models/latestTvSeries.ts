export interface LatestTvSeries {
    backdrop_path?: any;
    created_by: CreatedBy[];
    episode_run_time: any[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air?: any;
    networks: any[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: any[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path?: any;
    production_companies: ProductionCompany[];
    seasons: Season[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path?: any;
}

export interface Genre {
    id: number;
    name: string;
}

export interface LastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path?: any;
    vote_average: number;
    vote_count: number;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path?: any;
    season_number: number;
}
