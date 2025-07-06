import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const createEmployee = async (data) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Employee created successfully!");
        reset();
        navigate("/");
      } else {
        const errData = await response.json();
        alert(`Error: ${errData.message || "Could not create employee"}`);
      }
    } catch (err) {
      console.error("Error creating employee:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createEmployee)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label className="text-base font-medium text-gray-900 dark:text-gray-200">
              Employee Name
            </label>
            <div className="mt-2.5">
              <input
                {...register("name", { required: "Name is required" })}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900 dark:text-gray-200">
              Employee Email Id
            </label>
            <div className="mt-2.5">
              <input
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { 
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: "Invalid email address" 
                  } 
                })}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900 dark:text-gray-200">
              Employee Title
            </label>
            <div className="mt-2.5">
              <input
                {...register("title", { required: "Title is required" })}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter your employee title"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900 dark:text-gray-200">
              Employee Department
            </label>
            <div className="mt-2.5">
              <input
                {...register("department", { required: "Department is required" })}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter your employee department"
              />
              {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900 dark:text-gray-200">
              Employee Role
            </label>
            <div className="mt-2.5">
              <input
                {...register("role", { required: "Role is required" })}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter your employee role"
              />
              {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Create Employee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
