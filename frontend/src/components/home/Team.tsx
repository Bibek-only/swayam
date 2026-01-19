import { Card } from "../ui/card";
import { Users } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Bibek Samal",
    role: "Lead Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQG4c7WavAzRZQ/profile-displayphoto-crop_800_800/B56Zr5nHQCHkAI-/0/1765124373352?e=1770249600&v=beta&t=V84CT7tQh6HIF44Ur5Qufkqu0_n1JGdiyGW14EwRE9I",
    bio: "I am Mr. bibek samal, MCA first year.",
  },
  {
    id: 2,
    name: "Mr. Swayam Sankalpa Panigrahi",
    role: "Noob developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFqEhGeymjAJA/profile-displayphoto-crop_800_800/B56ZtEUIQFHYAM-/0/1766377688394?e=1770249600&v=beta&t=MCN0tsqC4g94-6bXOVJXVibApbD9SLCcHVQOSAd7GQc",
    bio: "I am Mr. Swayam Sankalpa Panigrahi, MCA first year.",
  },
  {
    id: 3,
    name: "Ms. Sukanya Ganik",
    role: "Coordinator",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH5zzg_u7GNEA/profile-displayphoto-crop_800_800/B56Zs7EikbKIAI-/0/1766222605866?e=1770249600&v=beta&t=K0eLC88T_PWkINKxNq0oKCfICsBjD8CJO6ZYVwGxUJE",
    bio: "I am Ms. sukanya Ganik, MCA first year.",
  },
  {
    id: 4,
    name: "Ms. Suchitra chowdhury",
    role: "Monitoring",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEVgvRd8nQV3g/profile-displayphoto-crop_800_800/B56Zty394eJAAI-/0/1767158837833?e=1770249600&v=beta&t=AWKA7mkYGx_11C8xfr5RENuGRih_TiiMuLfEJkRDiCM",
    bio: "I am Ms. Suchitra chowdhury, MCA first year",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="text-primary" size={24} />
            <span className="text-primary font-semibold text-lg">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Dedicated professionals working to transform sustainable
            agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="p-6 bg-white border border-border hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-foreground/70">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
