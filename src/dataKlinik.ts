type Klinik = {
  id: number;
  name: string;
  domain: string;
  contact: string;
  image: string;
  location: string;
};

type Kliniks = Klinik[]

export const klinikDatabase : Kliniks = [
    {
        id: 1,
        name: "Klinik Sehat Bersama",
        domain: "Jalan Kesehatan No. 10, Jakarta",
        contact: "+62 812 3456 7890",
        image: "/assets/klinik1.jpg",
        location:"https://maps.app.goo.gl/4BzGaBrbgMVAaWMu8"
      },
      {
        id: 2,
        name: "Klinik Medika Utama",
        domain: "Jalan Medika Raya No. 15, Bandung",
        contact: "+62 813 9876 5432",
        image: "/assets/klinik2.jpg",
        location: "https://maps.app.goo.gl/5i1DNV1CzXF1gBFS9",
      },
      {
        id: 3,
        name: "Klinik Harmoni Keluarga",
        domain: "Jalan Harmoni No. 23, Surabaya",
        contact: "+62 821 5678 9101",
        image: "/assets/klinik3.jpg",
        location: "https://maps.app.goo.gl/ubCyn34aUtUZuHye7",
      },
      {
        id: 4,
        name: "Klinik Asri Medical",
        domain: "Jalan Asri No. 7, Yogyakarta",
        contact: "+62 822 1234 5678",
        image: "/assets/klinik4.jpg",
        location: "https://maps.app.goo.gl/2C62yRN1oJLBZSZp8",
      },
      {
        id: 5,
        name: "Klinik Prima Sehat",
        domain: "Jalan Utama No. 45, Bali",
        contact: "+62 811 3456 7890",
        image: "/assets/klinik5.jpg",
        location: "https://maps.app.goo.gl/61WnM5PTHJLW3fxm9",
      }
]