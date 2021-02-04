import { Author } from './author';
export interface Book {
    _id: string;
    name: string;
    author: Author;
    genre: string;
}