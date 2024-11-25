import React from "react";
import { useParams } from "react-router-dom";
import { useGetInventoryByIdQuery } from "../../slices/inventorySlice";

const AdminInventoryDetails = () => {
  const { id: inventoryId } = useParams();

  // Récupérer les détails de l'inventaire
  const {
    data: inventory,
    error,
    isLoading,
  } = useGetInventoryByIdQuery(inventoryId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-lg text-mutedColor">Chargement...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-lg text-dangerColor">
          Erreur lors du chargement des détails de l'inventaire.
        </span>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-grayColor text-secondaryColor rounded-lg shadow-md">
      {inventory ? (
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">
              {inventory.nom || "Inventaire"}
            </h1>
            <span
              className={`py-1 px-3 rounded-full ${
                inventory.statut === "En cours"
                  ? "bg-warningColor text-black"
                  : "bg-successColor text-white"
              }`}
            >
              {inventory.statut}
            </span>
          </div>

          {/* Dates */}
          <div className="mb-6 text-sm">
            <p>
              Date de début :{" "}
              {new Date(inventory.dateDebut).toLocaleDateString()}
            </p>
            <p>
              Date de fin :{" "}
              {inventory.dateFin
                ? new Date(inventory.dateFin).toLocaleDateString()
                : "Non défini"}
            </p>
          </div>

          {/* Zones */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Zones</h2>
            <div className="flex flex-wrap gap-4">
              {inventory.zones.map((zone, index) => (
                <div
                  key={zone._id}
                  className="bg-highlightColor p-4 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3"
                >
                  <h3 className="text-xl font-bold mb-2">{zone.nom}</h3>
                  <p className="text-sm text-mutedColor mb-2">
                    {zone.designation} - {zone.lieu}
                  </p>
                  <ul className="space-y-1">
                    {zone.parties.map((partie, i) => (
                      <li
                        key={i}
                        className={`py-1 px-2 rounded text-sm ${
                          partie.status === "À faire"
                            ? "bg-dangerColor text-white"
                            : "bg-successColor text-black"
                        }`}
                      >
                        {partie.type}: {partie.status}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Agents */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Agents</h2>
            <ul className="space-y-2">
              {inventory.agents.map((agent) => (
                <li
                  key={agent._id}
                  className="p-3 bg-highlightColor rounded shadow-md flex justify-between items-center"
                >
                  <span>
                    {agent.nom} {agent.prenom}
                  </span>
                  <span className="text-sm text-mutedColor">
                    Créé le {new Date(agent.createdAt).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg text-mutedColor">
          Aucun détail d'inventaire trouvé.
        </div>
      )}
    </div>
  );
};

export default AdminInventoryDetails;
