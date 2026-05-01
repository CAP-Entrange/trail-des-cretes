import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { club } from "@/data/content";

interface ClubModalProps {
  children: React.ReactNode;
}

const ClubModal = ({ children }: ClubModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gradient-amber text-center">
            {club.name}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-5 pt-2">
          <img
            src={club.logo}
            alt={`Logo ${club.name}`}
            className="w-32 h-32 object-contain"
          />
          <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
            <p>
              Le <span className="font-semibold text-primary">{club.name}</span> est
              un {club.description}
            </p>
            <p>Nous courons ensemble deux fois par semaine :</p>
            <ul className="space-y-2 pl-4 list-none">
              {club.sessions.map((s) => (
                <li key={s.day} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>
                    <span className="font-semibold">{s.day}</span> — départ à{" "}
                    <span className="font-medium">{s.time}</span>, environ{" "}
                    <span className="font-medium">{s.distance}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground italic text-sm pt-1">{club.note}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClubModal;
