import { CheckCheckIcon, StopCircleIcon } from "lucide-react";

interface FormProps {
  message?: string;
}

export const FormSuccess = ({message}: FormProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 mb-5">
      <CheckCheckIcon  className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export const FormError = ({message}: FormProps) => {
  if (!message) return null;
  return (
    <div className="bg-red-500 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-5">
      <StopCircleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};