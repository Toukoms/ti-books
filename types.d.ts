interface IBook {
  id: string,
  title: string,
  author: string,
  publicationDate: string,
  genre: "Horror" | "Comedy" | "Drama" | "Fantasy",
  image: string,
  synopsis: string,
  link: string,
}

type AuthContextType = {
  user: unknown | null,
  login: () => Promise<void>,
  logout: () => void,
  isAuthenticated: boolean,
  isLoading: boolean,
};
