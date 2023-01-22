import Image from "next/image"
import Link from "next/link"

export default function section1() {
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
        <Link href="/entry1">
                <Image alt="" src={"/images/Tech.jpeg"} width={600}height={400}/>
            </Link>
        </div>
        <div className="info flex justify-center flex-col">
         <div className="category">
            <Link href={"/posts/entry1"}></Link>
            <Link href={"/posts/entry1"}>January 8, 2023</Link>
         </div>
         <div className="title">
         <Link href={"/"}>Web Development Student:Technology I can’t wait to try!</Link>
         </div>
         <p className="text-gray-500 py-3">Although i've learned so much thus far, here are a list of technologies I'm excited to learn before my culmination here at Full Sail University:

Python

JQuery

PHP

Rust

Angular



I gave myself a headache just trying to imagine all that I could learn in the next year, but believe it or not: some headaches are worth having! Happy Coding!</p>
<h1>Anelka Arnold</h1>
        </div>
        </div>
    )
 }