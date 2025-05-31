// ===== CRUD Operations =====
// Insert
db.books.insertOne({
  title: "Decolonising the Mind",
  author: "Ngũgĩ wa Thiong'o",
  price: 1200,
  category: "African Literature"
});

// Find (Kenyan example)
db.books.find({ author: "Ngũgĩ wa Thiong'o" });

// Update
db.books.updateOne(
  { title: "Petals of Blood" },
  { $set: { price: 1800 } }
);

// Delete
db.books.deleteMany({ price: { $lt: 500 } });

// ===== Advanced Queries =====
// Filter & Project (Kenyan books)
db.books.find(
  { author: { $in: ["Ngũgĩ wa Thiong'o", "Grace Ogot"] } },
  { title: 1, price: 1, _id: 0 }
);

// Sorting
db.books.find().sort({ price: -1 });

// ===== Aggregation =====
// Average price by category
db.books.aggregate([
  { $group: { _id: "$category", avgPrice: { $avg: "$price" } } }
]);

// ===== Indexing =====
db.books.createIndex({ author: 1 });
db.books.find({ author: "Ngũgĩ wa Thiong'o" }).explain("executionStats");
