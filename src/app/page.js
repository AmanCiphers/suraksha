import NavBar from "@/app/navbar/navbar.jsx";
import Squares from "./background/Squares.jsx";
import Hero from "@/components/Hero.jsx";
import RoleCards from "@/components/roleCards.jsx";
import CallToAction from "@/components/CallToAction.jsx";
import Footer from "@/app/footer/footer.jsx";
import FeaturesPage from "@/app/features/page.jsx";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <RoleCards></RoleCards>
      <CallToAction></CallToAction>
    </>
  );
}
