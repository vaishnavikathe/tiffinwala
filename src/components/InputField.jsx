export default function InputField({ label, type, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border p-2 rounded"
      />
    </div>
  );
}