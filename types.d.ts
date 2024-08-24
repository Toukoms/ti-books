interface IBooks {
  id: string,
  title: string,
  author: string,
  publicationDate: string,
  genre: "Horror" | "Comedy" | "Drama" | "Fantasy",
  image: string,
  synopsis: string,
  link: string,
}