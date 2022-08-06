interface Image {
  id: string;
  url: string;
}

export interface Breed {
  id: string;
  name: string;
  origin: string;
  image: Image;
}
