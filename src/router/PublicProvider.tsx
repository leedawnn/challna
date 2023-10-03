type Props = {
  children: React.ReactNode;
}

const PublicProvider = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
}

export default PublicProvider;