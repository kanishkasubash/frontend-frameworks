export interface Book {
    name: string,
    description: string,
    category: string,
    author: string,
    isbn: string,
    edition: string,
    publisher: string,
    publicationDate: string,
    price: number,
    image: {
        url: string,
        alt: string
    }
}
