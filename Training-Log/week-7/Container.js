// components/common/Container.js

export default function Container({ children }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[20px] sm:px-[30px] lg:px-[40px]">
      {children}
    </div>
  );
}