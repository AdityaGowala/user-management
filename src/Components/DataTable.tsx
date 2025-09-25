import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import type { User } from "../App";

interface DataTableProps {
  darkMode: boolean;
  users: User[];
  loading: boolean;
}

type SortConfig = {
  key: keyof User;
  direction: "asc" | "desc";
} | null;

export const DataTable: React.FC<DataTableProps> = ({ darkMode, users, loading }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  const handleSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = React.useMemo(() => {
    if (!sortConfig) return users;
    return [...users].sort((a, b) => {
      const valA = a[sortConfig.key];
      const valB = b[sortConfig.key];
      if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [users, sortConfig]);

  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === users.length) setSelectedRows([]);
    else setSelectedRows(users.map((u) => u.id));
  };

  return (
    <div
      className={`p-4 md:p-6 rounded-3xl shadow-2xl flex-1 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
      style={{ minHeight: "650px" }}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-blue-500">
        Users Database
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <AiOutlineLoading3Quarters className="animate-spin text-blue-500 text-5xl md:text-6xl" />
        </div>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-400 dark:text-gray-300 text-lg mt-20">
          No users registered yet!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse table-auto w-full">
            <thead
              className={`sticky top-0 z-20 ${
                darkMode ? "bg-gray-800 text-gray-100" : "bg-blue-500 text-white"
              }`}
            >
              <tr>
                {[
                  { key: "fullName", label: "Full Name" },
                  { key: "age", label: "Age" },
                  { key: "gender", label: "Gender" },
                  { key: "role", label: "Role" },
                  { key: "email", label: "Email" },
                  { key: "password", label: "Password" },
                ].map(({ key, label }, idx) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key as keyof User)}
                    className={`p-2 md:p-4 text-left font-semibold tracking-wide cursor-pointer select-none ${
                      idx === 0 ? "rounded-tl-xl" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center w-full text-sm md:text-base">
                      <span>{label}</span>
                      {sortConfig?.key === key && (
                        <span className="ml-1">{sortConfig.direction === "asc" ? "▲" : "▼"}</span>
                      )}
                    </div>
                  </th>
                ))}
                <th className="p-2 md:p-4 text-center font-semibold tracking-wide rounded-tr-xl">
                  <label className="flex items-center justify-center gap-1 md:gap-2 cursor-pointer select-none text-sm md:text-base">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === users.length && users.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer"
                    />
                    Select All
                  </label>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user, idx) => (
                <tr
                  key={user.id}
                  className={`transition-all duration-200 ${
                    selectedRows.includes(user.id)
                      ? "bg-blue-100 dark:bg-blue-600 text-gray-900 dark:text-white"
                      : idx % 2 === 0
                      ? darkMode
                        ? "bg-gray-800"
                        : "bg-gray-50"
                      : darkMode
                      ? "bg-gray-700"
                      : "bg-white"
                  } hover:bg-blue-100/30 dark:hover:bg-blue-600/30`}
                >
                  {/* Stacked cells on mobile */}
                  {Object.keys(user).map((key) =>
                    key !== "id" ? (
                      <td key={key} className="p-2 md:p-4 text-left text-sm md:text-base">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
                          <span className="md:hidden font-semibold">{key.replace(/([A-Z])/g, " $1")}:</span>
                          <span>{(user as any)[key]}</span>
                        </div>
                      </td>
                    ) : null
                  )}
                  <td className="p-2 md:p-4 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(user.id)}
                      onChange={() => toggleRow(user.id)}
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
