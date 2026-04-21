import { FiEdit, FiTrash } from "react-icons/fi";

const PlanRow = ({ plan, index, onEdit, onDelete }) => {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="p-3">{index + 1}</td>
      <td className="p-3">{plan.name}</td>
      <td className="p-3">₹{plan.price}</td>
      <td className="p-3">{plan.mealCount}</td>

      <td className="p-3 flex gap-3">
        <button
          onClick={() => onEdit(plan)}
          className="text-blue-600 hover:scale-110 transition"
        >
          <FiEdit />
        </button>

        <button
          onClick={() => onDelete(plan.id)}
          className="text-red-600 hover:scale-110 transition"
        >
          <FiTrash />
        </button>
      </td>
    </tr>
  );
};

export default PlanRow;