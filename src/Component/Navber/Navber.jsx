import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className=" bg-purple-100 shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <nav className="px-8 py-4 flex justify-between items-center">
          <h1 className="md:text-xl text-black  text-sm font-bold">
            PH Banglo
          </h1>
          <div className="md:flex hidden items-center gap-6">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Faculty
            </a>
            <a href="#" className="text-gray-600">
              Students
            </a>

            <a href="#" className="text-gray-600">
              Contact
            </a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
              + New Assignment
            </button>
          </div>
          <div className="block md:hidden"></div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
