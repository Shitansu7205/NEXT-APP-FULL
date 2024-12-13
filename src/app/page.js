"use client";
import { Button } from '@/components/ui/button';
import './globals.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  }
  return (
    <>
      <div className=''>
        <h1 className="text-3xl font-bold  text-red-500  text-center ">This is my next app</h1>
        <Link href='/login'>Login</Link> <br />
        <Link href='/about'>About</Link> <br />
        <button onClick={() => { navigate('/login') }} >Go To Login </button> <br />
        <button onClick={() => { navigate('/about') }} >Go To About</button>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>


        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>





        <Button variant='default' size='lg'>Log out</Button>
      </div>
    </>
  );
}