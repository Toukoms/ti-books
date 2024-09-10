interface IBook {
  id: string,
  title: string,
  author: string,
  publicationDate: string,
  genre: "Horror" | "Comedy" | "Drama" | "Fantasy",
  image: string,
  synopsis: string,
  link: string,
  views: number,
}

interface IFeedback {
  id: string,
  bookId: string,
  name?: string,
  email?: string,
  message: string,
  creationDate?: unknown,
}

type AuthContextType = {
  user: unknown | null,
  login: () => Promise<void>,
  logout: () => void,
  isAuthenticated: boolean,
  isLoading: boolean,
};
