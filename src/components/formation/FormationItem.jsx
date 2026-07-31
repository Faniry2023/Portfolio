const FormationItem = ({ item }) => {
  return (
    <div className="p-4 xs:p-6 bg-white shadow-gray-200 hover:shadow-xl duration-300 rounded-lg flex gap-4 border border-gray-100">
      <div className="shrink-0 h-fit px-3 py-1.5 rounded-md bg-[#F6EBFE] text-picto-primary text-[11px] xs:text-[13px] font-semibold text-nowrap">
        {item.period}
      </div>
      <div>
        <p className="text-[15px] xs:text-[17px] font-semibold text-gray-900">
          {item.title}
        </p>
        <p className="text-[13px] xs:text-[15px] text-gray-500 mt-1">
          {item.place}
        </p>
      </div>
    </div>
  );
};

export default FormationItem;
