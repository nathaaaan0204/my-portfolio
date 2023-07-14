import { techStack } from "../../utils/Data"


export const MyTechStackSection = () => {
  return (
    <div className="gap-12 flex flex-col w-full items-start text-blac">
    <div className="flex flex-col">
      <h3 className="2xl:text-6xl md:text-4xl text-2xl font-black text-black">Tech Stack</h3>
      <p className="text-green font-black">What I use</p>
    </div>
    <div className="flex gap-[40px] flex-wrap">
    {techStack.map((item) => (
      <div className="flex">    
          {item.icon}
      </div>
      
       ))}
       </div>
    
  </div>
  )
}
