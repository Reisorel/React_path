import { useLocation } from "react-router"

export default function Contact() {
  const data = useLocation()
  console.log(data);

  return (
    <p className="text-4xl font-semibold text-center pt-10">Contact us</p>
  )
}
