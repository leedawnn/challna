import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import MomentBody from "../components/layout/MomentBody";

type Props = {
  children: React.ReactNode;
}

const PrivateProvider = ({ children }: Props) => {
  return (
    <MomentBody>
      <Header />
      {children}
      <Footer />
    </MomentBody>
  );
}

export default PrivateProvider;