import Image from "next/image";
import Link from "next/link";

const home = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((ev) => (
        <Link className="card" href={`/events/${ev.id}`} key={ev.id}>
          <div className="image">
            <Image width={460} height={350} alt={ev.title} src={ev.image} />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default home;
