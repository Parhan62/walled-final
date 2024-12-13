function ActionButton({ children, disabled, onClick }) {
  return (
    <button
      className="bg-[#19918F] text-white font-bold shadow-[0_0_10px_0_rgba(25,145,143,1)] p-4 rounded-[5px] hover:scale-105 transition-all active:scale-110 disabled:opacity-50 disabled:hover:scale-100"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;
