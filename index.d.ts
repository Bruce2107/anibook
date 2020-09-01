/// <reference types="node" />

declare module 'anibook' {
  // General

  /**
   * @property comment
   * @property folder
   * @property images
   * @property name
   * @property photo
   * @property synopsis
   */
  export interface Data {
    folder?: string;
    name: string;
    photo: string;
    images?: Array<string>;
    synopsis: string;
    comment: string;
  }

  /**
   * @property author
   * @property status
   */
  export interface Info {
    author: string;
    status: string;
  }

  /**
   * @property language
   * @property name
   * @property url
   */
  export interface Link {
    language: string;
    url: string;
    name: string;
  }

  // Animes

  /**
   * @property numberEpisodes
   */
  export interface AnimeInfo extends Info {
    numberEpisodes: number;
  }

  /**
   * @property info
   * @property whereWatch
   * @property musics
   */
  export interface Anime extends Data {
    info: AnimeInfo;
    whereWatch: Array<Link>;
    musics?: Array<Link>;
  }

  // Manga

  /**
   * @property numberChapters
   * @property numberVolumes
   */
  export interface MangaInfo extends Info {
    numberChapters: number;
    numberVolumes: number;
  }

  /**
   * @property info
   * @property whereRead
   */
  export interface Manga extends Data {
    info: MangaInfo;
    whereRead: Array<Link>;
  }

  // Card

  /**
   * @property folder
   * @property name
   * @property photo
   */
  export type Card = Pick<Data, 'folder' | 'name' | 'photo'>;

  // Image

  /**
   * @property contentType
   * @property folder
   * @property image
   * @property name
   */
  export type TypeImage = {
    folder: string;
    name: string;
    contentType: string;
    image: Buffer;
  };

  // Token

  /**
   * @property email
   * @property nickname
   */
  export interface User {
    nickname: string;
    email: string;
  }

  // Utils

  /**
   * @template T `Anime` | `Manga` | `Card`
   * @property data
   * @property status
   * @property rows
   */
  export type GetResponse<T> = {
    status: number;
    data?: T;
    rows?: number;
  };

  /**
   * @template T `Anime` | `Manga` | `Card`
   * @property dados
   */
  export type Dados<T> = {
    dados: T;
  };

  // Functions

  /**
   * @param Object object The object to be validated
   * @returns true if `object` are an `Anime`
   */
  export function isAnime(object: any): object is Anime;

  /**
   * @param Object object The object to be validated
   * @returns true if `object` are an `Manga`
   */
  export function isManga(object: any): object is Manga;

  /**
   *
   * @param string url URL that should be found
   * @param Array array Array of `Link`
   */
  export function searchObjectInArray(url: string, array: Array<Link>): boolean;

  /**
   *
   * @param string contentType ContentType
   * @param string folder Folder name
   * @param string name Image name with extension
   * @param string path Image path
   */
  export function createImageObject(
    contentType: string,
    folder: string,
    name: string,
    path: string
  ): TypeImage;

  /**
   *
   * @param number limit The max value of limits sum
   */
  export function limits(
    limit?: number
  ): { limitAnime: number; limitManga: number };

  /**
   *
   * @param Array array Array that will be shuffled
   * @param number i0 Start position, 0 for default
   * @param number i1 Stop position, array size for default
   */
  export function shuffleArray<T>(array: T[], i0: number, i1: number): T[];

  /**
   *
   * @param Array array Initial array
   * @param Matrix arrays Other arrays
   */
  export function mergeArray<T>(array: T[], ...arrays: Array<Array<T>>): T[];
}
