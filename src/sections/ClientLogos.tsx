import HomeStepsSection from "@/sections/HomeStepsSection";

type Client = {
  company: string;
  logo: string;
  link: string;
};

const ClientLogos = (clients: Client[] = []) => {
  return (
    <section>
      {clients.map((client, index) => (
        <div key={index}>
          <img src={client.logo} alt={client.company} />
        </div>
      ))}
    </section>
  );
};

export default ClientLogos;
