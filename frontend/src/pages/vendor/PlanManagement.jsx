import { useState } from "react";
import DashboardLayout from "../../components/vendorDashboard/layout/VendorDashboardLayout";
import PlanTable from "../../components/vendorDashboard/plan/PlanTable";
import PlanModal from "../../components/vendorDashboard/plan/PlanModal";

const PlanManagement = () => {
  const [plans, setPlans] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editPlan, setEditPlan] = useState(null);

  const handleCreate = (data) => {
    setPlans([...plans, { ...data, id: Date.now() }]);
  };

  const handleUpdate = (updated) => {
    setPlans(plans.map(p => (p.id === updated.id ? updated : p)));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this plan?")) {
      setPlans(plans.filter(p => p.id !== id));
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Plan Management</h1>

        <button
          onClick={() => {
            setEditPlan(null);
            setIsOpen(true);
          }}
          className="btn-primary"
        >
          + Create Plan
        </button>
      </div>

      {/* Table */}
      <PlanTable
        plans={plans}
        onEdit={(plan) => {
          setEditPlan(plan);
          setIsOpen(true);
        }}
        onDelete={handleDelete}
      />

      {/* Modal */}
      {isOpen && (
        <PlanModal
          onClose={() => setIsOpen(false)}
          onSubmit={editPlan ? handleUpdate : handleCreate}
          initialData={editPlan}
        />
      )}
    </>
  );
};

export default PlanManagement;