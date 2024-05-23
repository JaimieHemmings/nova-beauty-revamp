'use client';
import addPage from "@/app/actions/addPage";
import { useFormStatus, useFormState } from 'react-dom';
import { FaPaperPlane } from "react-icons/fa";
import { useEffect } from 'react';

function SubmitPageButton() {
  const status = useFormStatus()
  return (
    <button
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
      type='submit'
    >
      <FaPaperPlane className='mr-2' />{' '}
      {status.pending ? 'Adding Page...' : 'Add Page'}
    </button>
  )
}

const AddPageForm = () => {

  const [submitState, formAction] = useFormState(addPage, {});

  useEffect(() => {
    if (submitState.error) console.log(submitState.error);
    if (submitState.submitted) console.log('Message sent successfully');
  }, [submitState])

  return (
    <form action={formAction}>
      <h2 className='text-3xl text-center font-semibold mb-6'>Add A New Page</h2>

      <div className='mb-4'>
        <label
        htmlFor="PageTitle"
        className='block text-gray-700 font-bold mb-2'>
          Page Title
        </label>
        <input
          type='text'
          id='PageTitle'
          name='PageTitle'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='eg. Beautiful Apartment In Miami'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property1'
          className='block text-gray-700 font-bold mb-2'
        >
          Property1
        </label>
        <textarea
          id='property1'
          name='property1'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property2'
          className='block text-gray-700 font-bold mb-2'
        >
          Property2
        </label>
        <textarea
          id='property2'
          name='property2'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property3'
          className='block text-gray-700 font-bold mb-2'
        >
          property3
        </label>
        <textarea
          id='property3'
          name='property3'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property4'
          className='block text-gray-700 font-bold mb-2'
        >
          Property4
        </label>
        <textarea
          id='property4'
          name='property4'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property5'
          className='block text-gray-700 font-bold mb-2'
        >
          property5
        </label>
        <textarea
          id='property5'
          name='property5'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property6'
          className='block text-gray-700 font-bold mb-2'
        >
          property6
        </label>
        <textarea
          id='property6'
          name='property6'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property7'
          className='block text-gray-700 font-bold mb-2'
        >
          property7
        </label>
        <textarea
          id='property7'
          name='property7'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property8'
          className='block text-gray-700 font-bold mb-2'
        >
          property8
        </label>
        <textarea
          id='property8'
          name='property8'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property9'
          className='block text-gray-700 font-bold mb-2'
        >
          property9
        </label>
        <textarea
          id='property9'
          name='property9'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='property10'
          className='block text-gray-700 font-bold mb-2'
        >
          property10
        </label>
        <textarea
          id='property10'
          name='property10'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>

      
      <div className='mb-4'>
        <label
          htmlFor='property11'
          className='block text-gray-700 font-bold mb-2'
        >
          property11
        </label>
        <textarea
          id='property11'
          name='property11'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      
      <div className='mb-4'>
        <label
          htmlFor='property12'
          className='block text-gray-700 font-bold mb-2'
        >
          property12
        </label>
        <textarea
          id='property12'
          name='property12'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      
      <div className='mb-4'>
        <label
          htmlFor='property13'
          className='block text-gray-700 font-bold mb-2'
        >
          property13
        </label>
        <textarea
          id='property13'
          name='property13'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>
      
      <div className='mb-4'>
        <label
          htmlFor='property14'
          className='block text-gray-700 font-bold mb-2'
        >
          property14
        </label>
        <textarea
          id='property14'
          name='property14'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>


      <div>
      <SubmitPageButton />
      </div>
    </form>
  )
}

export default AddPageForm
