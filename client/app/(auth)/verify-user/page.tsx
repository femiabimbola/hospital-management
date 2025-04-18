"use client"

import {useSearchParams} from "next/navigation";

const VerifyUser = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  console.log(token)

  return (
    <div> Verify User</div>
  )
}

export default VerifyUser