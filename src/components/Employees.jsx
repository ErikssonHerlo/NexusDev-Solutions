import { employees } from "../constants";

const Employees = () => {
  return (
    <div id="quienes-somos" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Nuestro equipo
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {employees.map((employee) => (
          <div
            key={employee.name}
            className="flex flex-col items-center my-10"
          >
            <img
              src={employee.image}
              alt={employee.name}
              className="rounded-full w-32 h-32 lg:w-48 lg:h-48 shadow-lg object-cover"
            />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center my-4">
              {employee.name}
            </h3>
            <p className="text-lg text-neutral-500 text-center">
              {employee.position}
            </p>
            <a
              href={employee.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-orange-600 hover:underline"
            >
              Ver perfil
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
