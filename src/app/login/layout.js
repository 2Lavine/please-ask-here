const LoginLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white shadow-md p-4 rounded-lg w-2/5">{children}</div>
    </div>
  );
};

export default LoginLayout;
