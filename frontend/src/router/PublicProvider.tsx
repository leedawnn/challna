import MomentBody from "../components/layout/MomentBody";

type Props = {
  children: React.ReactNode;
}

const PublicProvider = ({ children }: Props) => {
  return (
    <MomentBody>
      {children}
    </MomentBody>
  );
}

export default PublicProvider;