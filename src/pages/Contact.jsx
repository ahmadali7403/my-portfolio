import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { siteConfig } from '../data/site'
import { emailjsConfig, isEmailJsConfigured } from '../config/emailjs'

const initialForm = { name: '', email: '', subject: '', message: '' }

// TODO: apna WhatsApp number yahan country code ke sath likhein (bina + aur bina 0 ke), e.g. Pakistan: 923001234567
const WHATSAPP_NUMBER = '923094516267'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactMethod, setContactMethod] = useState('email') // 'email' | 'whatsapp'

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.'
    if (!form.email.trim()) return 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Please enter a valid email address.'
    if (!form.subject.trim()) return 'Subject is required.'
    if (!form.message.trim()) return 'Message is required.'
    if (form.message.trim().length < 10)
      return 'Message must be at least 10 characters.'
    return null
  }

  const sendViaEmail = async () => {
    if (!isEmailJsConfigured()) {
      setStatus({
        type: 'error',
        message:
          'EmailJS is not configured yet. Add your Service ID, Template ID, and Public Key in src/config/emailjs.js',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: siteConfig.email,
        },
        emailjsConfig.publicKey,
      )
      setStatus({
        type: 'success',
        message:
          'Thank you! Your message has been sent successfully. I will get back to you soon.',
      })
      setForm(initialForm)
    } catch (error) {
      console.error('EmailJS Error:', error)
      console.error('Status:', error.status)
      console.error('Text:', error.text)

      setStatus({
        type: 'error',
        message:
          'Something went wrong. Please try again or email me directly at ahmedrafiq7403@gmail.com',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const sendViaWhatsapp = () => {
    const text =
      `This message is from your portfolio website.\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Subject: ${form.subject}\n` +
      `Message: ${form.message}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setStatus({
      type: 'success',
      message: 'Opening WhatsApp... please send the pre-filled message.',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const error = validate()
    if (error) {
      setStatus({ type: 'error', message: error })
      return
    }

    if (contactMethod === 'whatsapp') {
      sendViaWhatsapp()
    } else {
      await sendViaEmail()
    }
  }

  const inputClasses =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500'

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Ahmad Ali for internships, freelance work, or collaboration opportunities."
        path="/contact"
        keywords="Contact, Ahmad Ali, Frontend Developer, Hire, Internship"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or want to connect? I'd love to hear from you."
          />

          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:col-span-2"
            >
              <div className="glass rounded-2xl p-6">
                <HiMail className="mb-3 h-6 w-6 text-primary-500" />
                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="glass rounded-2xl p-6">
                <HiLocationMarker className="mb-3 h-6 w-6 text-primary-500" />
                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  Location
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                Saray Mughal, Pattoki, Kasur, Punjab, Pakistan
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <HiPhone className="mb-3 h-6 w-6 text-primary-500" />
                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  Availability
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Open to internships , Frontend Developer & freelance projects
                </p>
              </div>

             
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass space-y-5 rounded-2xl p-8 lg:col-span-3"
              noValidate
            >
              {/* Method toggle: Email or WhatsApp */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  className={`flex-1 rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                    contactMethod === 'email'
                      ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400'
                      : 'border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400'
                  }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('whatsapp')}
                  className={`flex-1 rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                    contactMethod === 'whatsapp'
                      ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400'
                      : 'border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400'
                  }`}
                >
                  WhatsApp
                </button>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>

              {status.message && (
                <div
                  className={`rounded-lg p-4 text-sm ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
              >
                {contactMethod === 'whatsapp'
                  ? 'Send via WhatsApp'
                  : isSubmitting
                  ? 'Sending...'
                  : 'Send Message'}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}
