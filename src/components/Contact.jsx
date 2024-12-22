import { CONTACT } from "../constants"


const Contact = () => {
  return (
    <div className=" pb-20">
        <h2 className="my-10 text-center text-4xl caudex-bold">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="mailto:bwalsh@mines.edu" className="border-b" target="_blank"> {CONTACT.email}</a>
        </div>
      
    </div>
  )
}

export default Contact
