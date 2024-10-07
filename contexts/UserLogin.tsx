import { createContext, useState } from "react";

export const UserRegistrationContext = createContext<any>(null);

export function UserRegistrationProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [formValues, setFormValues] = useState({
    emailPhoneNumber: "",
    password: "",
    confirmationPassword: "",
    verificationCode: "",
  });

  return (
    <UserRegistrationContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </UserRegistrationContext.Provider>
  );
}
