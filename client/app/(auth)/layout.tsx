import { AuthNavbar } from "./AuthNavbar";

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthNavbar />
      {children}
    </div>  
  )
};

export default authLayout;
