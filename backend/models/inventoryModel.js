import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema(
  {
    zones: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone', // Référence aux zones modifiées
       
      },
    ],
    agents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agent',
      },
    ],
    dateDebut: {
      type: Date,
      required: [true, "Veuillez fournir la date de début de l'inventaire"],
    },
    dateFin: {
      type: Date,
    },
    statut: {
      type: String,
      enum: ['En cours', 'Terminé'],
      default: 'En cours',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Inventory', InventorySchema);
