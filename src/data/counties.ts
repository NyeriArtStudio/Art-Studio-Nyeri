export interface County {
  name: string;
  towns: string[];
  slug: string;
}

export const counties: County[] = [
  {
    name: "Nyeri",
    slug: "nyeri",
    towns: ["Nyeri Town", "Karatina", "Othaya", "Mukurweini", "Chaka", "Kiganjo", "Mweiga", "Naro Moru"],
  },
  {
    name: "Meru",
    slug: "meru",
    towns: ["Meru Town", "Nkubu", "Maua", "Timau", "Laare", "Kianjai", "Tigania", "Igoji"],
  },
  {
    name: "Embu",
    slug: "embu",
    towns: ["Embu Town", "Runyenjes", "Siakago", "Manyatta", "Kiritiri"],
  },
  {
    name: "Kirinyaga",
    slug: "kirinyaga",
    towns: ["Kerugoya", "Kutus", "Sagana", "Kagio", "Wanguru", "Baricho"],
  },
  {
    name: "Murang'a",
    slug: "muranga",
    towns: ["Murang'a Town", "Kangema", "Maragua", "Makuyu", "Saba Saba", "Kigumo", "Kahuro"],
  },
  {
    name: "Laikipia",
    slug: "laikipia",
    towns: ["Nanyuki", "Nyahururu", "Rumuruti", "Doldol", "Kinamba"],
  },
  {
    name: "Nyandarua",
    slug: "nyandarua",
    towns: ["Ol Kalou", "Engineer", "Njabini", "Mairo Inya", "Nyahururu border"],
  },
  {
    name: "Tharaka-Nithi",
    slug: "tharaka-nithi",
    towns: ["Chuka", "Kathwana", "Marimanti", "Chiakariga"],
  },
  {
    name: "Kiambu",
    slug: "kiambu",
    towns: ["Kiambu Town", "Ruiru", "Thika", "Limuru", "Kikuyu", "Kabete"],
  },
  {
    name: "Nakuru",
    slug: "nakuru",
    towns: ["Nakuru Town", "Nyahururu border", "Molo", "Elburgon", "Njoro"],
  },
];

export const allTowns = counties.flatMap((c) => c.towns);
export const countyNames = counties.map((c) => c.name);
