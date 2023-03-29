export default function handler (req, res){ 
    const { method } = req
    if (method === "POST"){
        const {email, eventId} = req.body
        // then we add our code here 
        res.status(200).json({message: `You have been registered successfully with the email: ${email} ${eventId}`})
    }

}
