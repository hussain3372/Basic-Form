import React, { useState } from "react";

function FormComponent() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const changeForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <button onClick={changeForm}>
        {isFormOpen ? "Close Form" : "Open Form"}
      </button>
      {isFormOpen && (
        <form>
          {/* Form fields go here */}
          <label>
            Name:
            <input type="text" />
          </label>
        </form>
      )}
    </div>
  );
}

export default FormComponent;
