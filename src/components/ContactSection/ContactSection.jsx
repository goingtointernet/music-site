"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "../ui/custom-button"
import { Input } from "../ui/custom-input"
import { Textarea } from "../ui/custom-textarea"
import {Send } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple, faInstagram, faSoundcloud, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons"

const socialLinks = [
  { href: 'https://www.instagram.com/liltizzyz?igsh=eWdkZGh3aHdtbTVp&utm_source=qr', icon:<FontAwesomeIcon icon={faInstagram} />, name: 'Instagram' },
  { href: 'https://youtube.com/@liltizzy?si=dw3eGi0pq7JTeoQ8', icon: <FontAwesomeIcon icon={faYoutube} />, name: 'YouTube' },
  { href: '#', icon: <FontAwesomeIcon icon={faApple} />, name: 'Apple Music' },
  { href: 'https://soundcloud.com/forallus?ref=clipboard&p=i&c=1&si=D05F97EC4E634682BD08556BBE4A5395&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon:  <FontAwesomeIcon icon={faSoundcloud} />, name: 'SoundCloud' },
  { href: 'https://open.spotify.com/artist/4CqOCRFUAgyZX4gklU0gR6?si=N8LwTHtsQEe8GxvOnqAkrA', icon: <FontAwesomeIcon icon={faSpotify} />, name: 'Spotify' },
  { href: '#', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="tidal" width={"20px"} height={"20px"} fill='white'>
            <path d="m8.01 8.002 4-4.005 4.004 4-4 4.005zM24 8l-3.979-3.975L16.042 8l3.979 3.975zM.002 7.998l4.004-4 4 4.004-4.004 4z"></path>
            <path d="m8.01 15.997 4.004-4 4 4.004-4.004 4z"></path>
        </svg>
        ), name: 'Tidal' },
  { href: 'https://audiomack.com/liltizzyz', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="audiomack" width={"20px"} height={"20px"} fill='white'>
            <path d="M20.8041 6c0-.37441-.2762-.69147-.647-.74289-.3709-.05143-.7229.17854-.8248.53883l-2.2039 7.79496v-4.0159c0-.34427-.2344-.64433-.5684-.72769-.3341-.08335-.6819.07141-.8437.37532l-2.6833 5.04177-1.1428-3.0059c-.1064-.2799-.3691-.4697-.6683-.4828-.2991-.0131-.5774.1531-.7078.4226l-.97191 2.0087-.24655-.6485c-.08909-.2344-.28942-.4087-.53385-.4646-.24443-.0559-.50062.014-.68273.1864l-.74794.7078-.9141-.6115c-.34427-.2303-.81008-.1379-1.04039.2064-.23032.3443-.13793.8101.20635 1.0404l1.41176.9444c.29109.1947.6782.1621.93256-.0786l.36592-.3463.46519 1.2236c.10641.2799.36913.4697.6683.4828.29918.0131.57749-.1531.70789-.4226l.9719-2.0087 1.1114 2.9235c.1045.275.3602.4635.6539.482.2936.0185.571-.1364.7092-.3961l2.0474-3.8469v6.4195c0 .3744.2761.6915.647.7429.3708.0514.7228-.1786.8247-.5388l2.204-7.795v3.6909c0 .2412.1159.4676.3116.6086.1957.1409.4472.1792.676.1028l1.9459-.65c.3929-.1313.605-.5561.4738-.949-.1313-.3929-.5561-.605-.949-.4738l-.9583.3201v-8.0587zM3 12.25c-.41421 0-.75.3358-.75.75 0 .4142.33579.75.75.75h.5c.41421 0 .75-.3358.75-.75 0-.4142-.33579-.75-.75-.75h-.5z"></path>
        </svg>
        ), name: 'Audiomack' },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    try {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
     const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const res = await response.json();

      if (res?.message) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })

        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
      else if (res?.error) {
        setIsSubmitting(false)
        setError("Failed to send message!")
      }
      } catch (error) {
        setIsSubmitting(false)
        setError("Failed to send message!")
        console.log("Contact form error:", error)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden opacity-0 transform translate-y-10 transition-all duration-1000 z-[20]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-[2.2rem] md:text-[4rem] font-bold mb-16 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              GET IN TOUCH
            </h3>

            {isSubmitted ? (
              <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-xl p-8 text-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center">
                  <Send size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Message Sent!
                </h4>
                <p className="text-gray-300">A representative will contact you once they reach your request send a short summary of the product and what it will want.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-black/30 p-8 rounded-xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 focus:border-white/30 transition-colors rounded-[5px]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 focus:border-white/30 transition-colors rounded-[5px]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-black/50 border-white/10 focus:border-white/30 transition-colors rounded-[5px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full !bg-white !border-none rounded-[5px] backdrop-blur-md border text-black !hover:opacity-70 transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {error && <p className="text-[14px] mt-[10px] text-[#eb3838] ">*{error}</p>}
              </form>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              FOLLOW
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link?.href}
                  target={`${link?.href !="#" && "_blank"}`}
                  className="flex items-center justify-center gap-3 px-3 py-6 md:p-6 backdrop-blur-md bg-black/30 border border-white/10 rounded-xl hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/40 transition-all">
                    {link?.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                BOOKING
              </h3>
              <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-8 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all">
                <p className="mb-4 text-gray-300">For booking inquiries:</p>
                <a
                  href="mailto:booking@artistname.com"
                  className="text-xl font-bold hover:underline bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                >
                  forallus@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
