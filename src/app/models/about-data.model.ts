interface IProfessionalItem {
    title: string;
    place: string;
    startDate: Date;
    endDate: Date;
    description: string;
  }
  
export  interface IAboutData {
    name: string;
    surename: string;
    profession: string;
    address: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    description: string[];
    profileImage: string;
    cv: string;
    education: IProfessionalItem[];
    experience: IProfessionalItem[];
    skills: IProfessionalItem[];
  }