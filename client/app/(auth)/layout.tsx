import { AuthFooter } from "./AuthFooter";
import { AuthNavbar } from "./AuthNavbar";

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthNavbar />
      {children}
      <AuthFooter />
    </div>  
  )
};

export default authLayout;
