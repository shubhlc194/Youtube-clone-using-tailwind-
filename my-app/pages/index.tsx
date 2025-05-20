import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoGrid } from "../components/VideoGrid";
import { AppBar } from "../components/AppBar";
export default function Home() {
  return (
      <div>
        <AppBar></AppBar>
        <VideoGrid></VideoGrid>
        
      </div>
  )
}
   

 