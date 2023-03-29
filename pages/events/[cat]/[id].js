import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"

const EventPage = ({ data }) => {
    // console.log(data)
    const inputEmail = useRef()
    const router = useRouter()
    
    console.log(router)
    const onSubmit = async(e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id

        try{
            const response = await fetch("/api/emailRegistration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: emailValue, eventId})
        
        })
            if (!response.ok)  throw new Error(`Error: ${response.status}`)
            const data = await response.json()

        }catch (e) {
            console.log("ERROR", e)
        }
    }


    return (
        <div className="event_single_page">
            <h1>{data.title}</h1>
            <Image src={data.image} alt={data.title} height={500} width={850}/>
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className="email_registration">
            <label >Get registered for this Event!</label>
            <input ref={inputEmail} type="email" id="email" placeholder="Please enter your email" />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EventPage

export async function getStaticPaths(){
    const data = await import("/data/data.json")
    const allEvents = data.allEvents   // similar to const //{allEvents} = await import("/data/data.json")
    const allPaths = allEvents.map(path => {
        return{
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })


    return{
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){


    console.log(context)
    const id = context.params.id
    const { allEvents } = await import("/data/data.json")    //similar to line 11 above 👆
    const eventData = allEvents.find(ev => (
        id === ev.id
    ))
    return{
        props: {data: eventData},
    }
}