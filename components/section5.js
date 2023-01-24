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
                  <Image alt="" src={"/images/ReactNative.png"} width={600}height={400}/>
              </Link> <br/>
          </div>
          <div className="info flex justify-center flex-col">
           <div className="category">
              <Link href={"/posts/entry5"}></Link>
              <Link href={"/posts/entry5"}>January 21, 2023 </Link>
           </div>
           <div className="title">
           <Link href={"/posts/entry5"}>Introducing React Native </Link>
           </div>
           <p className="text-gray-500 py-3">Let's look at what React Native is and the difference between React Native and Reactjs.</p>

<p>What exactly is React Native and why are so many developers using it? Its a question every developer asks themselves at some point in time. Thankfully, there are tons of resources out there that explain what React Native is and why developers should be using it. React Native is a javascript framework. What's the difference between Reactjs and React Native? Well Reactjs is a javascript library the supports both front-end and server while React Native uses Reactjs to build websites
  and apps. When you use React Native to build an app, the framework automatically detects the platform it’s being run on. React Native creats an ease of usability for develppers.</p>
  <h1>Anelka Arnold</h1>
          </div>
          </div>
      )
}