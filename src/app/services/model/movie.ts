/**
 * Movie Search API
 * This is a simple movie search API, with caching. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Movie { 
    id: number;
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: Array<number>;
    original_language?: string;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

