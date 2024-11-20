type Dokter = {
    id: number,
    name: string,
    specialization: string,
    rating: number,
    review: string,
    location: string,
    image?: string
}

type Dokters = Dokter[];

export const dataDokter : Dokters = [
    {
      id: 1,
      name: "Nadia Rahma, S.Psi., M.Psi",
      specialization: "Psikologi",
      rating: 5,
      review: "Sangat baik",
      location: "Jakarta",
      image: "/assets/image1.png",
    },
    {
      id: 2,
      name: "Tasya Amelia, S.Psi., M.Psi",
      specialization: "Psikologi",
      rating: 5,
      review: "Sangat baik",
      location: "Jakarta",
      image: "/assets/image2.png",
    },
    {
      id: 3,
      name: "Nisa Rahma Setiawan, S.Psi., M.Psi",
      specialization: "Psikologi",
      rating: 5,
      review: "Sangat baik",
      location: "Jakarta",
      image: "/assets/image1.png",
    },
    {
      id: 4,
      name: "Iis Novita, S.Psi., M.Psi",
      specialization: "Psikologi",
      rating: 5,
      review: "Sangat baik",
      location: "Jakarta",
      image: "/assets/image2.png",
    },
    {
      id: 5,
      name: "Feby Putri, S.Psi., M.Psi",
      specialization: "Psikologi",
      rating: 5,
      review: "Sangat baik",
      location: "Jakarta",
      image: "/assets/image1.png",
    },
  ];