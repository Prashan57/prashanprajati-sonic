import { HeaderSection } from "@/components/Header/HeaderSection";

export const CustomLayout = () => {
  return (
    <div className="container-layout overflow-visible h-screen">
      {/* Header Section */}
      <div className="container bg-gray-100 top-0 left-0">
        <HeaderSection />
      </div>

      {/* Content Section */}
      <div className="container-content bg-gray-200 absolute top-20 left-0">
        <p>HELLO</p>
        <p>HELLO</p>
        <p>HELLO</p>
        <p>HELLO</p>
        <p>HELLO</p>
        <p>HELLO</p>
        <p>HELLO</p>
      </div>
    </div>
  );
};
