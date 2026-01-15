import { Link } from "react-router-dom";

interface DoctorCardProps {
  id: string;
  name: string;
  speciality: string;
  image: string;
  available?: boolean;
}

const DoctorCard = ({ id, name, speciality, image, available = true }: DoctorCardProps) => {
  return (
    <Link
      to={`/appointment/${id}`}
      className="block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="bg-secondary/50 p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`w-2 h-2 rounded-full ${
              available ? "bg-green-500" : "bg-muted-foreground"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              available ? "text-green-600" : "text-muted-foreground"
            }`}
          >
            {available ? "Available" : "Not Available"}
          </span>
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{speciality}</p>
      </div>
    </Link>
  );
};

export default DoctorCard;
