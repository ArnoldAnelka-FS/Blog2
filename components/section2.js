import Image from "next/image"
import Link from "next/link"

export default function section2() {
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
                  <Image alt="" src={"/images/juggling.jpeg"} width={600}height={400}/>
              </Link>
          </div>
          <div className="info flex justify-center flex-col">
           <div className="category">
              <Link href={"/posts/entry2"}></Link>
              <Link href={"/posts/entry2"}>January 1, 2023</Link>
           </div>
           <div className="title">
           <Link href={"/posts/entry2"}>Juggle is the new struggle!</Link>
           </div>
           <p className="text-gray-500 py-3">Most adults have busy lives. All adults have responsibilities. Now imagine being an adult and student. You can't right? Challenging to say the least. Here's a bit about me: I'm currently a student at Full Sail University. Outside of being a student, I'm also a wife and mother. I have a 15 year old, 6 year old, 2 year old and a baby baking in the oven! What am I thinking right?! You wouldn't begin to imagine how insane my daily life can be. Although being a wife, mom and student is challenging, It's definitely worth it. I believe that during this process of learning, I am teaching my children that anything is possible as long as you put your mind to it.</p>
  <h1>Anelka Arnold</h1>
          </div>
          </div>
      )
}