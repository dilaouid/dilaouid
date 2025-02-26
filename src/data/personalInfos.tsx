import {
    Mail,
    User,
    MapPin,
    Calendar,
    Car,
} from "lucide-react";

export const personalInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "diyaeddine.laouid@gmail.com",
    },
    {
      icon: <MapPin size={20} />,
      label: "Localisation",
      value: "Paris, Île-de-France, Hauts-de-Seine",
    },
    {
      icon: <Calendar size={20} />,
      label: "Date de naissance",
      value: "31/08/1996",
    },
    {
      icon: <Car size={20} />,
      label: "Mobilité",
      value: "Permis B, Véhicule personnel",
    },
    {
      icon: <User size={20} />,
      label: "Modalités de travail",
      value: "Télétravail ou présentiel",
    },
  ];