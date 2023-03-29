import MyEventsPage from "@/src/components/events/eventsPage";


const EventsPage = ({ data }) => {
  return (
    <MyEventsPage data={data}/>
    
  );
};

export default EventsPage;


export async function getStaticProps() {
    const { events_categories } = await import("/data/data.json")
    // console.log(events_categories)
    return {
      props: {
        data: events_categories,
      },
    }
  }