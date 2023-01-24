import Image from "next/image"
import Link from "next/link"

export default function section5() {
    return (
        <section className="py-16">
          <div className="container mx-auto md:px-20">
          
          {Slide()}
  
          </div>
        </section>
      )
  }
   function Slide() {
      return(
          <div className="grid md:grid-cols-2 py-3">
          <div className="image">
          <Link href="/">
                  <Image alt="" src={"/images/hashing.jpeg"} width={600}height={400}/>
              </Link> <br/>
          </div>
          <div className="info flex justify-center flex-col">
           <div className="category">
              <Link href={"/posts/entry6"}></Link>
              <Link href={"/posts/entry6"}>January 29, 2023 </Link>
           </div>
           <div className="title">
           <Link href={"/posts/entry6"}>What is Password Hashing? </Link>
           </div>
           <p className="text-gray-500 py-3">Have you ever reieved an email or letter in the mail stating that your information was part of a security breach with a certain company? I know I have! When hackers compromise a company's access to information, its called a data breach. How can developers working for a company ensure that user information is secure? 
           Well i'm glad you asked. Let me introduce you to password hashing. Password hashing is defined as putting a password through a hashing algorithm to turn it's actual content into a unintelligible series of numbers and letters. Along with encryption, password hashing provides a way to keep sensitive data safe. There are 4 types of password hashing:
           1. Division method
           2. Mid Square method
           3. Folding method &
           4. Multiplication method.</p>
  <h1>Anelka Arnold</h1>
          </div>
          </div>
      )
}