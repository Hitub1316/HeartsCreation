export default function CategoryFilter() {
  return (
    <div className="flex space-x-2 my-4">
      <button className="px-4 py-2 bg-wine text-cream rounded hover:bg-wine-dark transition-colors">All</button>
      <button className="px-4 py-2 border border-earth/20 rounded hover:bg-earth/10 transition-colors">Paintings</button>
      <button className="px-4 py-2 border border-earth/20 rounded hover:bg-earth/10 transition-colors">Digital</button>
    </div>
  );
}
