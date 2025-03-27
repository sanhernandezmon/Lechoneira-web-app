import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { FaPencilAlt } from "react-icons/fa";

type Props = {
  token: string;
};

const Rental = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingRentalId, setEditingRentalId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    bandejas: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    telefono: "",
    bandejas: "",
  });
  const [phoneFilter, setPhoneFilter] = useState("");
  const [rentals, setRentals] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Validation
    let error = "";
    let filteredValue = value;

    if (name === "nombre") {
      if (!value.trim()) {
        error = "Nombre es obligatorio";
      } else if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Nombre debe ser alfabético";
      }
    } else if (name === "telefono") {
      filteredValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      if (!/^\d{0,10}$/.test(filteredValue)) {
        error = "Telefono debe ser numerico de 10 digitos";
      }
    } else if (name === "bandejas") {
      filteredValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      if (!/^\d*$/.test(filteredValue)) {
        error = "Bandejas debe ser numerico";
      } else if (filteredValue && parseInt(filteredValue, 10) < 1) {
        error = "Bandejas debe ser mayor o igual a 1";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    setFormData((prev) => ({ ...prev, [name]: filteredValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.nombre && !errors.telefono && !errors.bandejas) {
      if (formData.telefono.length !== 10) {
        setErrors((prev) => ({
          ...prev,
          telefono: "Telefono must be exactly 10 digits.",
        }));
        return;
      }

      const payload = {
        name: formData.nombre,
        phone: formData.telefono,
        amount: parseInt(formData.bandejas, 10),
      };

      try {
        if (isEditMode && editingRentalId) {
          // Update rental
          const response = await axios.put(
            `https://project-lecho-neira.onrender.com/rental?_id=${editingRentalId}`,
            payload,
            { headers: { Authorization: `Bearer ${props.token}` } }
          );

          if (response.status === 200) {
            console.log("Rental updated successfully:", payload);
          } else {
            console.error("Failed to update rental:", response.statusText);
          }
        } else {
          // Create rental
          const response = await axios.post(
            "https://project-lecho-neira.onrender.com/rental",
            payload,
            { headers: { Authorization: `Bearer ${props.token}` } }
          );

          if (response.status === 200) {
            console.log("Rental created successfully:", payload);
          } else {
            console.error("Failed to create rental:", response.statusText);
          }
        }

        setIsModalOpen(false);
        setFormData({ nombre: "", telefono: "", bandejas: "" });
        setIsEditMode(false);
        setEditingRentalId(null);
        fetchRentals(); // Refresh the rentals list
      } catch (error) {
        console.error("Error submitting rental:", error);
      }
    }
  };

  const fetchRentals = async () => {
    try {
      const url =
        phoneFilter && phoneFilter.length === 10
          ? `https://project-lecho-neira.onrender.com/rental/${phoneFilter}`
          : "https://project-lecho-neira.onrender.com/rental";

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${props.token}` },
      });

      if (response.status === 200) {
        setRentals(response.data);
      } else {
        console.error("Failed to fetch rentals:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching rentals:", error);
    }
  };

  const handleEdit = (rental: any) => {
    setIsEditMode(true);
    setEditingRentalId(rental._id);
    setFormData({
      nombre: rental.name,
      telefono: rental.phone,
      bandejas: rental.amount.toString(),
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (rentalId: string) => {
    try {
      const response = await axios.delete(
        `https://project-lecho-neira.onrender.com/rental?_id=${rentalId}`,
        { headers: { Authorization: `Bearer ${props.token}` } }
      );

      if (response.status === 200) {
        console.log("Rental deleted successfully");
        fetchRentals(); // Refresh the rentals list
      } else {
        console.error("Failed to delete rental:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting rental:", error);
    }
  };

  useEffect(() => {
    fetchRentals();
  }, [phoneFilter]);

  return (
    <div>
      <button
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsEditMode(false);
          setEditingRentalId(null);
          setFormData({ nombre: "", telefono: "", bandejas: "" });
          setIsModalOpen(true);
        }}
      >
        Crear
      </button>
      <input
        type="text"
        placeholder="Filtrar por telefono"
        value={phoneFilter}
        onChange={(e) => setPhoneFilter(e.target.value.replace(/[^0-9]/g, ""))}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "8px",
          width: "80%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <ul>
        {rentals.map((rental: any, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span>
              {rental.name} - {rental.phone} - {rental.amount} bandejas
            </span>
            <div>
              <button
                onClick={() => handleEdit(rental)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "yellow",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(rental._id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>{isEditMode ? "Editar Rental" : "Crear Rental"}</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Telefono:</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {errors.telefono && <p style={{ color: "red" }}>{errors.telefono}</p>}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label># de Bandejas:</label>
            <input
              type="text"
              name="bandejas"
              value={formData.bandejas}
              onChange={handleInputChange}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {errors.bandejas && <p style={{ color: "red" }}>{errors.bandejas}</p>}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              style={{
                padding: "10px 20px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Rental;
