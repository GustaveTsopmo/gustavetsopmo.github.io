import React, { useState, useEffect, useRef } from 'react'
import Layout from '../components/layouts/App'
import Hero from '../components/Hero'
import TitleSection from '../components/TitleSection'
import {
  MdOutlineEmail,
  MdOutlineCall,
  MdOutlineLocationOn
} from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import SuccessAlert from '../components/alerts/Success'
import ErrorAlert from '../components/alerts/Error'
import CardDivider from '../components/CardDivider'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    }
    setEditorLoaded(true)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !name || !message) {
      setError('Please fill in all required fields.')
      return;
    }

    setLoading(true)
    setError('')

    const data = {
      name, email, message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      setLoading(false)
      if (res.status === 200) {
        console.log('send mail response', res)
        setLoading(false)
        setSuccess("Your message has been successfully sent.")
        setName('')
        setEmail('')
        setMessage('')
      } else {
        console.log('res', res)
        setError("Oups! something went wrong! Please try again.")
      }
    }).catch(err => {
      setLoading(false)
      console.log('Error: ', err)
    })
  }

  const meta = {
    title: "Contact",
  }
  return (
    <Layout meta={meta}>
      <div className="px-2 md:px-0">
        {/* <Hero /> */}
        <TitleSection title="Contact Me." />
        <div className="flex flex-wrap mb-10 md:mb-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-10 pl-0 mb-10 md:mb-0">
            <p className='mb-4 text-justify md:text-left'>
              I am a passionate developer. I have been developing websites and applications for 5 years.
              I am more than willing to put my skills and knowledge at the service of any person or
              or company wishing to immerse and excel in the field of computer science.
            </p>
            <div className="text-left">
              <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                <MdOutlineEmail className='mr-2 text-sky-600 dark:text-sky-500' />
                gustavetsopmo.gt@gmail.com
              </p>
              <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                <FaGithub className='mr-2 text-sky-600 dark:text-sky-500' />
                @gustavetsopmo
              </p>
              <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                <MdOutlineCall className='mr-2 text-sky-600 dark:text-sky-500' />
                +237 695725725
              </p>
              <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                <MdOutlineLocationOn className='mr-2 text-sky-600 dark:text-sky-500' />
                Cameroon, Yaounde, Awae.
              </p>
            </div>
          </div>

          <div className='w-full border border-slate-300 dark:border-sky-900 shadow p-4 md:w-1/2 mx-auto  rounded-lg sm:py-6 lg:py-8 dark:bg-transparent'>
            <div className="text-center mb-10">
              <h5 className="mb-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Leave a message</h5>
              <CardDivider className="flex justify-center" />
            </div>
            {error && (<ErrorAlert message={error} />)}
            {success && (<SuccessAlert message={success} />)}

            <form method='post' onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name <span className="text-red-500">*</span></label>
                <input type="text" value={name} id="name" onChange={e => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light" placeholder="Enter your name" required="" />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email <span className="text-red-500">*</span></label>
                <input type="email" value={email} id="email" onChange={e => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light" placeholder="name@company.com" required="" />
              </div>

              <div
                className="mb-6 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light"

              >
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message <span className="text-red-500">*</span></label>
                {/* <textarea value={message} id="message" onChange={e => setMessage(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light" placeholder="Message..." required=""></textarea> */}
                {editorLoaded && (
                  <CKEditor
                    editor={ClassicEditor}
                    data={message}
                    config={{ 
                      toolbar: {
                        items: ['heading', '|', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'blockQuote', 'link', '|', 'outdent', 'indent', '|', 'undo', 'redo']
                      },
                      shouldNotGroupWhenFull: true
                     }}
                    onReady={editor => {
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setMessage(data)
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}
                  />
                )}
              </div>
              {!loading && (
                <button type="submit" rows="4" className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800">Send message</button>
              )}
              {loading && (
                <button disabled className="text-white bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800" type="submit" >
                  <svg role="status" className="inline self-center mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-slate-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg> {'Sending...'}
                </button>
              )}
            </form>
          </div>
        </div>

      </div>
    </Layout>
  )
}
