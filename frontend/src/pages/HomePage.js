import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [empData, setEmpData] = useState([]);
  const navigate = useNavigate();

  const deleteUser = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/deleteUser/${id}`, {
        method: "DELETE",
      });
      getAllData();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllData = async () => {
    try {
      const getPeople = await fetch(`${process.env.REACT_APP_BASE_URL}/getUsers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await getPeople.json();
      setEmpData(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);  // run on initial mount

  return (
    <>
      <section className="container px-10 w-200 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-600 dark:text-white">
              Employees
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all employees. You can add new employees, edit or delete existing ones.
            </p>
          </div>
          <Link
            to="/addemployee"
            onClick={() => {
              // optional: could clear stale data or force reload after add
            }}
          >
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500">
                Add Employee
              </button>
            </div>
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                        Employee
                      </th>
                      <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                        Title
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                        Role
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                        Edit
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {empData.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-gray-500 dark:text-gray-300">
                          No employees found.
                        </td>
                      </tr>
                    ) : (
                      empData.map((person) => (
                        <tr key={person._id}>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={person.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  {person.name}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-300">
                                  {person.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-white">
                              {person.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-300">
                              {person.department}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {person.role}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            <button
                              className="text-indigo-600 hover:text-indigo-900"
                              onClick={() => navigate(`/editemployee/${person._id}`)}
                            >
                              Edit
                            </button>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            <button
                              className="text-red-600 hover:text-red-900"
                              onClick={() => deleteUser(person._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
