
import NavBar from '@/components/ui/navbar.jsx';
import Squares from '../components/ui/Squares.jsx';
import Hero from "@/components/ui/Hero.jsx";
import RoleCards from '@/components/ui/roleCards.jsx';

export default function Home() {
  return (
    <>
      <Squares className="z-0"></Squares>
      <NavBar></NavBar>
      <Hero></Hero>
      <RoleCards></RoleCards>
    </>
  );
}
