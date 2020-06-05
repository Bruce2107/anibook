/// <reference types="node" />

declare module 'anibook' {
  // Gerenal

  /**
   * @property comment
   * @property folder
   * @property images
   * @property name
   * @property photo
   * @property synopsis
   */
  export interface Data {
    folder: string;
    name: string;
    photo: string;
    images: Array<string>;
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
    musics: Array<Link>;
  }

  // Manga

  /**
   * @property numberChapeters
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

  // Utilits

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
   * @param object
   * @returns true if `object` are an `Anime`
   */
  export function isAnime(object: any): object is Anime;

  /**
   * @param object
   * @returns true if `object` are an `Manga`
   */
  export function isManga(object: any): object is Manga;

  /**
   *
   * @param url URL that should be found
   * @param array Array of `Link`
   */
  export function searchObjectInArray(url: string, array: Array<Link>): boolean;

  /**
   *
   * @param contentType ContentType
   * @param folder Folder name
   * @param name Image name with extension
   * @param path Image path
   */
  export function createImageObject(
    contentType: string,
    folder: string,
    name: string,
    path: string
  ): TypeImage;

  /**
   *
   * @param limit The max value of limits sum
   */
  export function limits(
    limit: number
  ): { limitAnime: number; limitManga: number };

  /**
   *
   * @param array Array that will be shuffled
   * @param i0 Start position, 0 for default
   * @param i1 Stop position, array size for default
   */
  export function shuffleArray<T>(array: T[], i0: number, i1: number): T[];

  /**
   *
   * @param array Initial array
   * @param arrays Other arrays
   */
  export function mergeArray<T>(array: T[], ...arrays: Array<Array<T>>): T[];
}
