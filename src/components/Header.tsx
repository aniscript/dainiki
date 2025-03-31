const Header = () => {
  return (
    <div className="absolute top-0 left-0">
      <div className="flex justify-between items-center w-screen py-4 px-6">
        <div className="text-indigo-900 text-3xl font-extrabold">Dainiki</div>
        <div className="h-8 w-8 bg-amber-200 rounded-full flex items-center justify-center shadow-sm">
          <span className="text-indigo-900 font-semibold text-sm">AL</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
