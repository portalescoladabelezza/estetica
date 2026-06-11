export interface Procedure {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export interface ClinicConfig {
  name: string;
  whatsappNumber: string;
  instagramUsername: string;
  facebookUrl: string;
  address: string;
  city: string;
  workingHours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
}
