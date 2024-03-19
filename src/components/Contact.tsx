import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Input } from '../components/ui/input'
import { Textarea } from "../components/ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { z } from 'zod'
import { resolve } from 'path'

const formSchema = z.object({
  fullname: z.string()
    .min(2, { message: "Atleast 2 Characters are required" })
    .max(50),
  email: z.string()
    .email()
    .min(10,{ message: "Please enter a valid email" }),
  message: z.string()
    .min(7, { message: "Atleast 7 characters are required" })
    .max(1050, { message: "Only 1050 characters are allowed" })
})

const Contact: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    }
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Mail value", values);
  }

  return (
    <div className='w-full flex flex-col justify-center items-center' id="Contact">
      <div className='w-fit bg-[] p-10 rounded-xl'>
        <h1 className='text-[6rem] font-bold text-center my-6 '>
          CONTACT
          ME
        </h1>
        <div className='px-10' >
            <Form  {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField

                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <>
                      <FormItem className='my-6'>
                        <FormLabel>Full name*</FormLabel>
                        <FormControl>
                          <Input placeholder='Your name' className='bg-[#3f110ee1] focus:border-0 border-0 rounded-xl  px-6' {...field} />
                        </FormControl>
                        {/* <FormDescription>
                      Enter your name
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>

                      <FormItem className='my-6'>
                        <FormLabel>E-mail*</FormLabel>
                        <FormControl>
                          <Input placeholder='E-mail' className='bg-[#3f110ee1] focus:border-0 border-0 rounded-xl px-6 ' />
                        </FormControl>
                        {/* <FormDescription>z
                      This is your current residential address
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>

                      <FormItem className='my-6'>
                        <FormLabel>Message*</FormLabel>
                        <FormControl>
                          <Textarea placeholder='Enter your message' className='bg-[#3f110ee1] resize-none focus:border-0 border-0 rounded-xl h-[10rem] px-6 pt-6 ' />
                        </FormControl>
                        {/* <FormDescription>
                                        This is the category of your lost object
                                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <div className='text-center my-10'>
                  <button
                    className='font-bold bg-red-600 px-8 py-3 rounded-[4rem] text-center'
                    type='submit'>Send Message</button>
                </div>
              </form>
            </Form>
          </div>
        <div className='flex justify-center  '>
          
        </div>
      </div>
      <div className='flex flex-col justify-center '>

      </div>
    </div>
  )
}

export default Contact